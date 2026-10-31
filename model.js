"use strict";
(() => {
  const D=globalThis.ForgeData || require('./data.js');
  const catalog=Object.fromEntries(D.catalog.map(e=>[e.id,e]));
  const clone=value=>JSON.parse(JSON.stringify(value));
  const dateOK=value=>typeof value==='string' && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value+'T12:00:00')) && new Date(value+'T12:00:00Z').toISOString().slice(0,10)===value;
  const today=()=>{const d=new Date();d.setMinutes(d.getMinutes()-d.getTimezoneOffset());return d.toISOString().slice(0,10);};
  const cleanText=(value,max=120)=>typeof value==='string'?value.slice(0,max):'';
  const oneOf=(v,options,fallback)=>options.includes(v)?v:fallback;
  const levels=['beginner','intermediate','advanced'];
  const goals=['muscle','strength','fitness','fat-loss'];
  const profileOf=p=>({gender:oneOf(p?.gender,['woman','man','nonbinary','prefer-not'],'prefer-not'),weight:p?.weight===''||p?.weight==null?'':validNumber(p.weight,20,500),goal:oneOf(p?.goal,goals,'muscle'),level:oneOf(p?.level,levels,'beginner'),days:oneOf(Number(p?.days),[2,3,4,5],3),equipment:oneOf(p?.equipment,['Gym','Dumbbells'],'Gym')});
  function validNumber(value,min,max,integer=false){const n=Number(value);if(!Number.isFinite(n)||n<min||n>max||(integer&&!Number.isInteger(n)))throw Error('Invalid number');return n;}
  function setOf(s){if(!s||typeof s!=='object')throw Error('Invalid set');return {kg:s.kg===''||s.kg==null?'':String(validNumber(s.kg,0,2000)),reps:s.reps===''||s.reps==null?'':String(validNumber(s.reps,0,1000,true)),done:!!s.done&&Number(s.reps)>0};}
  function targetOf(e){if(!catalog[e?.exerciseId])throw Error('Unknown exercise');return {exerciseId:e.exerciseId,sets:validNumber(e.sets,1,10,true),min:validNumber(e.min,1,100,true),max:validNumber(e.max,1,100,true),rir:cleanText(e.rir,60),perLeg:!!e.perLeg};}
  function exerciseOf(e){const target=targetOf({...e,sets:Array.isArray(e.sets)?e.sets.length:e.sets});if(target.min>target.max)throw Error('Invalid rep range');if(!Array.isArray(e.sets))return target;return {...target,name:cleanText(e.name)||catalog[e.exerciseId].name,sets:e.sets.map(setOf)};}
  function empty(){return {version:4,activePlan:'forge5',activeWorkout:'d1',selectedDate:today(),sessionId:null,profile:null,onboarded:false,sessions:{},customPlans:[],restSeconds:90};}
  function makePlan(baseId,level='beginner',goal='muscle'){
    const base=D.base.find(p=>p.id===baseId);if(!base)throw Error('Unknown plan');
    const p=clone(base);p.baseId=baseId;p.level=oneOf(level,levels,'beginner');p.goal=oneOf(goal,goals,'muscle');
    if(base.legacy){p.id=base.id;return p;}
    p.id=`${baseId}-${p.level}-${p.goal}`;
    p.workouts.forEach(w=>w.exercises.forEach((e,i)=>{
      if(p.level==='beginner'&&e.exerciseId==='dips')e.exerciseId='pushdown';
      e.sets=p.level==='beginner'?2:p.level==='advanced'&&p.goal==='muscle'&&i<4?4:3;
      e.perLeg=['lunge','split-squat','reverse-lunge','db-row','deadbug','db-curl'].includes(e.exerciseId);
      const main=['squat','hinge','chest','row','press','pull'].includes(catalog[e.exerciseId].pattern);
      if(p.goal==='strength'&&main){e.min=p.level==='beginner'?6:4;e.max=p.level==='beginner'?10:6;}
      else if(['delts','rear','calves','quads','hamstrings','core'].includes(catalog[e.exerciseId].pattern)){e.min=10;e.max=15;}
      else{e.min=8;e.max=12;}
      e.rir=p.level==='beginner'?'Leave 2–3 reps in reserve':'Leave 1–3 reps in reserve';
    }));return p;
  }
  function recommend(p){
    p=profileOf(p);const days=p.equipment==='Dumbbells'?Math.min(p.days,3):p.days;
    const id=p.equipment==='Dumbbells'?`home${days}`:days===2?'full2':days===3?'full3':`split${days}`;
    return {plan:makePlan(id,p.level,p.goal),reason:`${p.equipment==='Dumbbells'?'Dumbbells and a bench':'Gym equipment'}, ${days} sessions per week, with ${p.level==='beginner'?'two working sets per exercise to start':p.level==='advanced'&&p.goal==='muscle'?'extra sets on the main movements':'a moderate starting workload'}. ${p.goal==='strength'?'Main lifts use a lower rep range to emphasize strength.':p.goal==='fat-loss'?'Resistance training supports strength and muscle retention; this routine does not predict weight loss.':'Build gradually as your technique and recovery allow.'}`,adjustment:p.equipment==='Dumbbells'&&p.days>3?'The dumbbell plan uses three sessions. Use the extra days for recovery or activities you enjoy.':''};
  }
  function planById(state,id=state.activePlan){if(id==='forge5')return makePlan(id);const custom=state.customPlans.find(p=>p.id===id);if(custom)return custom;for(const base of D.base.filter(p=>!p.legacy))for(const level of levels)for(const goal of goals){if(`${base.id}-${level}-${goal}`===id)return makePlan(base.id,level,goal);}return makePlan('forge5');}
  const sessionKey=(plan,workout,date)=>plan.id==='forge5'?`${date}::D${workout.n}`:`${date}::${plan.id}::${workout.id}`;
  function previousExercise(state,exerciseId,date,exclude=''){
    const sessions=Object.values(state.sessions).filter(s=>s.id!==exclude&&s.completedAt&&s.date<date).sort((a,b)=>b.date.localeCompare(a.date)||String(b.completedAt).localeCompare(String(a.completedAt)));
    for(const s of sessions){const e=s.exercises.find(e=>e.exerciseId===exerciseId&&e.name===catalog[exerciseId].name&&e.sets.some(s=>s.done&&Number(s.reps)>0));if(e)return e;}return null;
  }
  function newEntry(state,target,date,exclude=''){
    const previous=previousExercise(state,target.exerciseId,date,exclude);
    return {...clone(target),name:catalog[target.exerciseId].name,sets:Array.from({length:target.sets},(_,i)=>({kg:previous?.sets[i]?.kg??'',reps:'',done:false}))};
  }
  function newSession(state,plan,workout,date){return {id:sessionKey(plan,workout,date),planId:plan.id,workoutId:workout.id,title:workout.title,date,createdAt:new Date().toISOString(),completedAt:null,exercises:workout.exercises.map(e=>newEntry(state,e,date))};}
  function activeSession(state){if(state.sessionId&&state.sessions[state.sessionId])return state.sessions[state.sessionId];const p=planById(state),w=p.workouts.find(w=>w.id===state.activeWorkout)||p.workouts[0];state.activeWorkout=w.id;const key=sessionKey(p,w,state.selectedDate);if(!state.sessions[key])state.sessions[key]=newSession(state,p,w,state.selectedDate);return state.sessions[key];}
  function totals(s){const all=s.exercises.flatMap(e=>e.sets),logged=all.filter(s=>s.done&&Number(s.reps)>0);return {total:all.length,done:logged.length,volume:logged.reduce((sum,s)=>sum+(Number(s.kg)||0)*Number(s.reps),0)};}
  function guidance(e){const logged=e.sets.filter(s=>s.done&&Number(s.reps)>0);if(logged.length===e.sets.length&&logged.every(s=>Number(s.reps)>=e.max))return 'Top of your range reached. If form felt controlled and you had reps in reserve, try the smallest available increase next time.';return logged.length?'Keep the load until all sets reach the top of the range with controlled form.':'Start with a manageable load. Keep your reps controlled.';}
  function migrate(v3){
    if(v3?.version!==3||!v3.sessions||typeof v3.sessions!=='object'||Array.isArray(v3.sessions))throw Error('Unsupported backup');
    const result=empty();result.selectedDate=dateOK(v3.selectedDate)?v3.selectedDate:today();result.activeWorkout=`d${D.legacy.some(w=>w.n===v3.activeDay)?v3.activeDay:1}`;
    for(const [key,s]of Object.entries(v3.sessions)){
      const legacy=D.legacy.find(w=>w.n===s.day);const w=D.base.find(p=>p.id==='forge5').workouts.find(w=>w.n===s.day);
      if(!w||!dateOK(s.date)||!Array.isArray(s.exercises)||s.exercises.length!==w.exercises.length||key!==`${s.date}::D${s.day}`)throw Error('Invalid legacy session');
      const out={id:key,planId:'forge5',workoutId:w.id,title:w.title,date:s.date,createdAt:cleanText(s.createdAt),completedAt:s.completedAt?cleanText(s.completedAt):null,exercises:s.exercises.map((e,i)=>{if(e.name!==legacy.exercises[i].name)throw Error('Invalid legacy exercise');return exerciseOf({...w.exercises[i],name:e.name,sets:e.sets});})};
      result.sessions[key]=out;
    }return result;
  }
  function validate(raw){
    if(raw?.version===3)return migrate(raw);
    if(raw?.version!==4||!raw.sessions||typeof raw.sessions!=='object'||Array.isArray(raw.sessions)||!Array.isArray(raw.customPlans))throw Error('Unsupported backup');
    const s=empty();s.profile=raw.profile?profileOf(raw.profile):null;s.onboarded=!!raw.onboarded;s.selectedDate=dateOK(raw.selectedDate)?raw.selectedDate:today();s.restSeconds=oneOf(raw.restSeconds,[60,90,120,180],90);
    if(raw.customPlans.length>100)throw Error('Too many custom plans');
    s.customPlans=raw.customPlans.map(p=>{
      if(!/^custom-[a-zA-Z0-9-]+$/.test(p.id)||!Array.isArray(p.workouts)||p.workouts.length<1||p.workouts.length>7||!cleanText(p.name))throw Error('Invalid custom plan');
      const workouts=p.workouts.map(w=>{if(!/^[a-zA-Z0-9-]+$/.test(w.id)||!Array.isArray(w.exercises)||w.exercises.length<1||w.exercises.length>30)throw Error('Invalid custom workout');return {id:w.id,title:cleanText(w.title)||'Workout',short:cleanText(w.short,30)||'Workout',exercises:w.exercises.map(e=>{const t=targetOf(e);if(t.min>t.max)throw Error('Invalid target');return t;})};});
      if(new Set(workouts.map(w=>w.id)).size!==workouts.length)throw Error('Duplicate workout');return {id:p.id,name:cleanText(p.name),days:workouts.length,equipment:'Custom',level:'custom',description:'Your own program, your own choices.',schedule:'Choose the days that work for you and allow recovery.',workouts};
    });if(new Set(s.customPlans.map(p=>p.id)).size!==s.customPlans.length)throw Error('Duplicate plan');
    for(const [key,session]of Object.entries(raw.sessions)){
      if(['__proto__','constructor','prototype'].includes(key)||session.id!==key||!dateOK(session.date)||typeof session.planId!=='string'||typeof session.workoutId!=='string'||!Array.isArray(session.exercises)||session.exercises.length<1||session.exercises.length>30)throw Error('Invalid session');
      s.sessions[key]={id:key,planId:cleanText(session.planId),workoutId:cleanText(session.workoutId),title:cleanText(session.title)||'Workout',date:session.date,createdAt:cleanText(session.createdAt),completedAt:session.completedAt?cleanText(session.completedAt):null,exercises:session.exercises.map(exerciseOf)};
    }
    s.activePlan=planById(s,raw.activePlan).id;s.activeWorkout=planById(s).workouts.some(w=>w.id===raw.activeWorkout)?raw.activeWorkout:planById(s).workouts[0].id;s.sessionId=raw.sessionId&&s.sessions[raw.sessionId]?raw.sessionId:null;return s;
  }
  const api={catalog,levels,goals,clone,dateOK,today,validNumber,profileOf,empty,makePlan,recommend,planById,sessionKey,previousExercise,newEntry,newSession,activeSession,totals,guidance,migrate,validate};
  globalThis.ForgeModel=api;if(typeof module!=='undefined')module.exports=api;
})();
