"use strict";
// Pure program, calendar and persistence logic shared by browser and tests.
globalThis.ForgeProgramFeatures=(M,D)=>{
  const nativeById=Object.fromEntries(D.programs.map(p=>[p.id,p]));
  const text=(v,max=3000)=>typeof v==='string'?v.slice(0,max):'';
  const own=(o,k)=>Object.prototype.hasOwnProperty.call(o||{},k);
  const goalLabels={hypertrophy:'Muscle growth',strength:'Strength','fat-loss':'Fat loss',endurance:'Endurance',mobility:'Mobility',skill:'Movement skills'};
  const integer=(v,min,max,fallback)=>Number.isInteger(v)&&v>=min&&v<=max?v:fallback;
  const addDays=(date,n)=>new Date(Date.parse(date+'T12:00:00Z')+n*86400000).toISOString().slice(0,10);
  const monday=date=>addDays(date,-((new Date(date+'T12:00:00Z').getUTCDay()+6)%7));
  const stageFor=(p,settings)=>p.skillStages?.find(s=>s.id===settings?.stage)||p.skillStages?.[0]||null;
  function settingsFor(state,id){
    const p=nativeById[id],raw=state.programSettings?.[id]||{};
    return {startedOn:M.dateOK(raw.startedOn)?raw.startedOn:monday(M.today()),dayShift:integer(raw.dayShift,0,6,0),stage:stageFor(p||{},raw)?.id||'',exerciseChoices:raw.exerciseChoices||{}};
  }
  function weekFor(state,id,date=M.today()){
    const p=nativeById[id],settings=settingsFor(state,id);
    return Math.max(1,Math.min(p?.durationWeeks||52,Math.floor((Date.parse(date+'T12:00:00Z')-Date.parse(settings.startedOn+'T12:00:00Z'))/604800000)+1));
  }
  function blockComplete(state,id,date=M.today()){const p=nativeById[id];return !!p&&date>=addDays(settingsFor(state,id).startedOn,p.durationWeeks*7);}
  function resolveDay(p,day,week,settings={}){
    const d=M.clone(day);if(d.kind!=='training')return d;
    const stage=stageFor(p,settings),intro=p.introductoryWeeks?.weeks.includes(week)?p.introductoryWeeks:null;
    d.exercises=d.exercises.filter(e=>!stage?.omitExerciseIds.includes(e.exerciseId)).map(original=>{
      const override=stage?.prescriptionOverrides.find(o=>o.fromExerciseId===original.exerciseId);
      const e=M.clone(override?.toPrescription||original);
      const choice=settings.exerciseChoices?.[original.exerciseId];
      if(p.exerciseProgressions?.some(path=>path.fromExerciseId===original.exerciseId&&path.toExerciseIds.includes(choice))){
        e.exerciseId=choice;e.min=choice==='pushup'?6:8;e.max=12;
      }
      if(intro&&e.hardSet){e.sets=Math.min(e.sets,intro.maxWorkingSetsPerExercise);if(e.rir!==null)e.rir=Math.max(e.rir,intro.rir);}
      if(stage?.maxWorkingSetsPerExercise&&e.hardSet)e.sets=Math.min(e.sets,stage.maxWorkingSetsPerExercise);
      if(week===1&&p.goal==='hypertrophy'&&e.rir!==null)e.rir=Math.max(e.rir,3);
      return e;
    });
    const deload=p.deloadWeeks.includes(week);
    if(deload){
      d.exercises=d.exercises.filter(e=>!['negative-pullup','eccentric-pushup'].includes(e.exerciseId)).map(e=>{
        e.sets=Math.max(1,Math.ceil(e.sets/2));
        if(e.rir!==null)e.rir=Math.max(e.rir,4);
        if(p.id==='pull-up-mastery'&&e.exerciseId==='strict-pullup'){e.exerciseId='foot-assisted-pullup';e.min=5;e.max=8;}
        if(p.id==='push-up-progression'&&['pushup','archer-pushup','knee-pushup'].includes(e.exerciseId)){e.exerciseId='wall-pushup';e.min=6;e.max=10;e.perSide=false;}
        if(e.durationSeconds){
          if(p.goal==='mobility')e.durationSeconds=15;
          else if(e.exerciseId==='walk')e.durationSeconds=e.durationSeconds>=1200?900:e.durationSeconds>=480?300:e.durationSeconds;
          else if(e.exerciseId==='easy-run')e.durationSeconds=Math.min(e.durationSeconds,30);
          else if(p.id!=='stair-hill-conditioning')e.durationSeconds=Math.max(5,Math.floor(e.durationSeconds/2));
        }
        if(p.id==='home-hiit-fat-burner'&&e.sets>1){e.durationSeconds=Math.min(e.durationSeconds,20);e.restSeconds=60;e.intensityNote='Deload: easy-to-moderate effort around 5–6/10; recover fully.';}
        else e.intensityNote=('Deload: use an easier version or lighter load when available. '+(e.intensityNote||'')).trim();
        return e;
      });
    }
    d.week=week;d.stage=stage?.id||'';d.deload=deload;
    d.notes=(intro?'Introductory week: reduced sets and easier effort. ':'')+(deload?'Deload week: follow the program deload rule. ':'')+(stage?'Stage: '+stage.id+'. ':'')+d.notes;
    return d;
  }
  function adapt(e){
    const unit=e.durationSeconds!==null&&e.durationSeconds!==undefined?'seconds':e.distanceMetres!==null&&e.distanceMetres!==undefined?'metres':'reps';
    const value=unit==='seconds'?e.durationSeconds:unit==='metres'?e.distanceMetres:null;
    return {exerciseId:e.exerciseId,sets:e.sets,min:value??e.min,max:value??e.max,unit,rir:e.rir===null?(e.intensityNote||'Keep controlled effort.'):'Leave '+e.rir+' reps in reserve',perLeg:!!e.perSide,restSeconds:e.restSeconds,hardSet:e.hardSet!==false,intensityNote:(e.intensityNote||'')+(e.eccentricSeconds?' Lower each rep over '+e.eccentricSeconds+' seconds.':'')};
  }
  function programPlan(p,state,date=M.today()){
    const settings=settingsFor(state,p.id),week=weekFor(state,p.id,date);
    return {id:p.id,name:p.name,days:p.daysPerWeek,equipment:p.location==='any'?'Any location':p.location[0].toUpperCase()+p.location.slice(1),level:p.level,goal:p.goal,description:p.description,schedule:p.method,native:true,complete:blockComplete(state,p.id,date),program:p,week,stage:stageFor(p,settings)?.id||'',workouts:p.schedule.filter(d=>d.kind==='training').map(original=>{
      const d=resolveDay(p,original,week,settings);
      return {id:d.id,title:d.title,short:d.title,weekday:(d.weekday-1+settings.dayShift)%7+1,week,stage:d.stage,deload:d.deload,notes:d.notes,warmup:d.warmup,rampUpSets:d.rampUpSets,exercises:d.exercises.map(adapt)};
    })};
  }
  function recommendProgram(profile){
    const p=M.profileOf(profile),equipment=M.eligiblePrograms(p);
    const candidates=equipment.filter(program=>M.levels.indexOf(program.level)<=M.levels.indexOf(p.level)&&program.daysPerWeek<=p.days);
    if(!candidates.length)return {plan:null,program:null,reason:'No complete program matches your equipment, experience and available days. Update your profile or create a custom plan.',adjustment:''};
    const general=new Set([1,2,10,11,12,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]);
    const pool=candidates.some(x=>general.has(x.programNumber)&&x.goal===p.goal)?candidates.filter(x=>general.has(x.programNumber)):candidates;
    const score=program=>(program.goal===p.goal?55:0)+(program.level===p.level?20:0)+(program.location===p.location?3:0)-Math.abs(program.daysPerWeek-p.days)*10-(M.levels.indexOf(p.level)-M.levels.indexOf(program.level))*25;
    const best=[...pool].sort((a,b)=>score(b)-score(a)||a.programNumber-b.programNumber)[0];
    const adjustment=(best.goal===p.goal?'':"This is the closest compatible starting point for your setup; its main goal is "+goalLabels[best.goal].toLowerCase()+'. ')+(best.level===p.level?'':'A simpler difficulty level is shown; use the listed progression options.');
    return {program:best,plan:programPlan(best,{programSettings:{}},M.today()),reason:'Fits your '+p.location+' equipment and weekly availability: a '+best.level+' plan with '+best.daysPerWeek+' training days per week.',adjustment:adjustment.trim()};
  }
  function exists(state,id){return typeof id==='string'&&M.planById(state,id).id===id;}
  function bookmark(state,id,enabled=true){
    if(!exists(state,id))throw Error('Unknown program');
    if(enabled&&!state.bookmarks.some(b=>b.programId===id))state.bookmarks.push({programId:id,active:false,updatedAt:new Date().toISOString()});
    if(!enabled){state.bookmarks=state.bookmarks.filter(b=>b.programId!==id);state.activePrograms=state.activePrograms.filter(x=>x!==id);}
    sync(state);
  }
  function sync(state){for(const b of state.bookmarks)b.active=state.activePrograms.includes(b.programId);}
  function setActive(state,id,enabled){
    bookmark(state,id,true);
    if(enabled&&!state.activePrograms.includes(id))state.activePrograms.push(id);
    if(!enabled)state.activePrograms=state.activePrograms.filter(x=>x!==id);
    const settings=settingsFor(state,id);
    if(enabled&&(!state.programSettings[id]?.startedOn||blockComplete(state,id)))settings.startedOn=monday(M.today());
    state.programSettings[id]=settings;sync(state);
  }
  function calendar(state,date=M.today()){
    const start=monday(date),result=Array.from({length:7},(_,i)=>({date:addDays(start,i),weekday:i+1,sessions:[]}));
    for(const id of state.activePrograms){
      if(!exists(state,id))continue;
      for(const slot of result){
        const p=M.planById({...state,selectedDate:slot.date},id),settings=settingsFor(state,id);
        const fallback=[[],[1],[1,4],[1,3,5],[1,2,4,5],[1,2,3,5,6],[1,2,3,4,5,6],[1,2,3,4,5,6,7]][p.workouts.length]||[];
        for(const [i,w] of p.workouts.entries()){
          const weekday=p.native?w.weekday:((fallback[i]||i+1)-1+settings.dayShift)%7+1;
          if(weekday===slot.weekday&&slot.date>=settings.startedOn&&!p.complete)slot.sessions.push({programId:id,programName:p.name,workoutId:w.id,title:w.title,week:p.week||1,workout:w});
        }
      }
    }
    return result;
  }
  function overlapWarnings(state,date=M.today()){
    const week=calendar(state,date),weekly={},exposures=week.map(()=>new Set());
    for(const [index,slot] of week.entries())for(const session of slot.sessions)for(const target of session.workout.exercises){
      const e=M.exerciseLibrary[target.exerciseId];if(!e)continue;
      if(e.pattern!=='mobility'&&e.group!=='Mobility')for(const muscle of [...e.primaryMuscles,...e.secondaryMuscles])exposures[index].add(muscle);
      if(target.hardSet!==false){
        for(const muscle of e.primaryMuscles)weekly[muscle]=(weekly[muscle]||0)+target.sets;
        for(const muscle of e.secondaryMuscles)if(!e.primaryMuscles.includes(muscle))weekly[muscle]=(weekly[muscle]||0)+target.sets*0.5;
      }
    }
    const normalizeExposure=set=>{if(set.has('shoulders'))for(const m of ['anterior-deltoids','lateral-deltoids','posterior-deltoids'])set.add(m);if(set.has('upper-back'))for(const m of ['middle-trapezius','rhomboids','posterior-deltoids'])set.add(m);};
    for(const set of exposures)normalizeExposure(set);
    const consecutive=[];
    const nextMonday=new Set();
    for(const session of calendar(state,addDays(week[0].date,7))[0].sessions)for(const target of session.workout.exercises){const e=M.exerciseLibrary[target.exerciseId];if(e&&e.pattern!=='mobility'&&e.group!=='Mobility')for(const m of [...e.primaryMuscles,...e.secondaryMuscles])nextMonday.add(m);}
    normalizeExposure(nextMonday);
    for(let i=0;i<7;i++){const next=i===6?nextMonday:exposures[i+1];const shared=[...exposures[i]].filter(m=>next.has(m));if(shared.length)consecutive.push({from:week[i].weekday,to:i===6?1:week[i+1].weekday,muscles:shared.sort()});}
    const highVolume=Object.entries(weekly).filter(([,sets])=>sets>25).map(([muscle,sets])=>({muscle,sets})).sort((a,b)=>b.sets-a.sets);
    return {week,consecutive,highVolume,restDays:week.filter(d=>!d.sessions.length).length,weekly};
  }
  function readPrescription(raw){
    if(!raw||!M.exerciseLibrary[raw.exerciseId])return null;
    const e={exerciseId:raw.exerciseId,sets:integer(raw.sets,1,10,1),min:null,max:null,durationSeconds:null,distanceMetres:null,restSeconds:integer(raw.restSeconds,0,600,60),rir:null,perSide:!!raw.perSide,hardSet:!!raw.hardSet};
    if(Number.isInteger(raw.durationSeconds)&&raw.durationSeconds>0&&raw.durationSeconds<=7200)e.durationSeconds=raw.durationSeconds;
    else if(Number.isInteger(raw.distanceMetres)&&raw.distanceMetres>0&&raw.distanceMetres<=100000)e.distanceMetres=raw.distanceMetres;
    else {e.min=integer(raw.min,1,100,5);e.max=integer(raw.max,e.min,100,e.min);e.rir=integer(raw.rir,0,10,5);}
    e.intensityNote=text(raw.intensityNote,600);
    if(Array.isArray(raw.loadPercentagesOfWorkingWeight))e.loadPercentagesOfWorkingWeight=raw.loadPercentagesOfWorkingWeight.filter(n=>Number.isFinite(n)&&n>0&&n<=100).slice(0,10);
    return e;
  }
  function videoIdFor(state,id){
    const e=M.exerciseLibrary[id];if(!e)return '';
    const idValue=own(state.videoOverrides,id)?state.videoOverrides[id]:e.youtubeVideoId||e.legacyVideo?.id||'';
    return /^[A-Za-z0-9_-]{11}$/.test(idValue)?idValue:'';
  }
  function parseVideoId(value){
    value=String(value||'').trim();if(!value)return '';
    if(/^[A-Za-z0-9_-]{11}$/.test(value))return value;
    try{const url=new URL(value);if(!['https:','http:'].includes(url.protocol))return null;const host=url.hostname.replace(/^www\./,'');let id='';if(host==='youtu.be')id=url.pathname.slice(1).split('/')[0];else if(['youtube.com','m.youtube.com','youtube-nocookie.com'].includes(host))id=url.searchParams.get('v')||url.pathname.split('/').filter(Boolean).at(-1);return /^[A-Za-z0-9_-]{11}$/.test(id)?id:null;}catch{return null;}
  }
  function validateProgramState(s,raw){
    s.catalogVersion=1;s.bookmarks=[];s.activePrograms=[];s.programSettings={};s.videoOverrides={};s.videoHealth={};
    const requested=new Set(Array.isArray(raw.activePrograms)?raw.activePrograms:[]);
    for(const b of Array.isArray(raw.bookmarks)?raw.bookmarks:[]){
      if(!b||!exists(s,b.programId)||s.bookmarks.some(x=>x.programId===b.programId))continue;
      s.bookmarks.push({programId:b.programId,active:false,updatedAt:text(b.updatedAt,40)});
      if(b.active)requested.add(b.programId);
    }
    if(!raw.catalogVersion&&raw.onboarded&&exists(s,raw.activePlan)&&!s.bookmarks.length){
      s.bookmarks.push({programId:raw.activePlan,active:false,updatedAt:new Date().toISOString()});requested.add(raw.activePlan);
    }
    s.activePrograms=s.bookmarks.map(b=>b.programId).filter(id=>requested.has(id));sync(s);
    for(const b of s.bookmarks){
      const p=nativeById[b.programId],value=raw.programSettings?.[b.programId]||{},choices={};
      for(const path of p?.exerciseProgressions||[])if(path.toExerciseIds.includes(value.exerciseChoices?.[path.fromExerciseId]))choices[path.fromExerciseId]=value.exerciseChoices[path.fromExerciseId];
      s.programSettings[b.programId]={startedOn:M.dateOK(value.startedOn)?value.startedOn:s.activePrograms.includes(b.programId)?monday(M.today()):null,dayShift:integer(value.dayShift,0,6,0),stage:stageFor(p||{},value)?.id||'',exerciseChoices:choices};
    }
    for(const id of Object.keys(M.exerciseLibrary)){
      const override=raw.videoOverrides?.[id];
      if(typeof override==='string'&&(override===''||/^[A-Za-z0-9_-]{11}$/.test(override)))s.videoOverrides[id]=override;
      const h=raw.videoHealth?.[id];
      if(h&&['ready','unavailable','blocked','unconfirmed'].includes(h.status)&&typeof h.videoId==='string'&&/^[A-Za-z0-9_-]{11}$/.test(h.videoId)&&h.videoId===videoIdFor(s,id)){
        s.videoHealth[id]={status:h.status,videoId:h.videoId,checkedAt:text(h.checkedAt,40),code:integer(h.code,0,1000,0)};
      }
    }
    for(const [id,session] of Object.entries(s.sessions)){
      const old=raw.sessions?.[id];if(!old)continue;
      for(const key of ['warmup','rampUpSets'])if(Array.isArray(old[key]))session[key]=old[key].slice(0,30).map(readPrescription).filter(Boolean);
      if(typeof old.notes==='string')session.notes=text(old.notes,3000);
      if(old.week!==undefined)session.week=integer(old.week,1,104,1);
      if(old.stage!==undefined)session.stage=text(old.stage,80);
    }
    return s;
  }
  function defaultTarget(id){
    const e=M.exerciseLibrary[id];if(!e)throw Error('Unknown exercise');
    const unit=e.trackingUnit||'reps',amount=unit==='seconds'?30:20;
    const sides=['db-row','db-curl','lunge','split-squat','reverse-lunge','cable-lateral','pallof-press','side-plank','deadbug','bird-dog','db-split-squat','body-split-squat','park-stepup','kb-reverse-lunge','kb-suitcase-carry','hip-flexor-stretch','open-book','ankle-rock'];
    return {exerciseId:id,sets:3,min:unit==='reps'?8:amount,max:unit==='reps'?12:amount,unit,rir:unit==='reps'?'Leave 2–3 controlled reps in reserve':'Keep controlled effort and follow the technique cues.',perLeg:sides.includes(id),restSeconds:90,hardSet:!['conditioning','mobility','power'].includes(e.pattern),intensityNote:''};
  }
  return {trainingGoals:['hypertrophy','strength','fat-loss','endurance','mobility','skill'],goalLabels,nativeById,programPlan,resolveDay,adaptPrescription:adapt,defaultTarget,recommendProgram,bookmark,setActive,calendar,overlapWarnings,settingsFor,weekFor,blockComplete,addDays,monday,videoIdFor,parseVideoId,validateProgramState};
};
if(typeof module!=='undefined')module.exports=globalThis.ForgeProgramFeatures;
