"use strict";

/**
 * @typedef {'strength'|'hypertrophy'|'fat-loss'|'endurance'|'mobility'|'skill'} TrainingGoal
 * @typedef {'beginner'|'intermediate'|'advanced'} TrainingLevel
 * @typedef {'gym'|'home'|'outdoor'|'any'} TrainingLocation
 * @typedef {'bodyweight'|'barbell'|'dumbbells'|'free-weights'|'resistance-bands'|'pull-up-bar'|'kettlebell'|'cable-machine'|'plate-loaded-machine'|'selectorized-machine'|'bench'|'rack'|'gym-equipment'|'park-equipment'|'running'|'dip-bars'|'ab-wheel'|'chair'} EquipmentId
 *
 * @typedef {Object} Exercise
 * @property {string} id
 * @property {string} name
 * @property {string[]} primaryMuscles
 * @property {string[]} secondaryMuscles
 * @property {EquipmentId[]} equipment
 * @property {string} equipmentLabel
 * @property {'reps'|'seconds'|'metres'} trackingUnit
 * @property {TrainingLevel} difficulty
 * @property {string[]} instructions
 * @property {string[]} commonMistakes
 * @property {string} [youtubeVideoId]
 * @property {string} youtubeSearchQuery
 * @property {string|null} homeAlternativeId
 * @property {string|null} outdoorAlternativeId
 *
 * @typedef {Object} ProgramExercise
 * @property {string} exerciseId References the central library.
 * @property {number} sets
 * @property {number|null} min Minimum repetitions; null for time/distance work.
 * @property {number|null} max Maximum repetitions; null for time/distance work.
 * @property {number|null} durationSeconds
 * @property {number|null} distanceMetres
 * @property {number} restSeconds
 * @property {number|null} rir Null when RIR is not meaningful, such as holds/cardio.
 * @property {boolean} perSide
 * @property {boolean} hardSet False for warm-ups and conditioning.
 * @property {string} [intensityNote]
 * @property {number} [eccentricSeconds] Controlled lowering duration per repetition.
 * @property {number} [loadFactor] Fraction of the latest successful heavy load.
 * @property {number[]} [loadPercentagesOfWorkingWeight] Non-fatiguing ramp-up only.
 *
 * @typedef {Object} ProgramDay
 * @property {string} id
 * @property {number} weekday ISO weekday: Monday=1 through Sunday=7.
 * @property {string} title
 * @property {'training'|'rest'} kind
 * @property {number} sessionLengthMinutes Estimated upper end of session duration.
 * @property {ProgramExercise[]} warmup
 * @property {ProgramExercise[]} rampUpSets
 * @property {ProgramExercise[]} exercises
 * @property {string} notes
 *
 * @typedef {Object} ProgramReference
 * @property {string} id
 * @property {string} title
 * @property {string} url
 *
 * @typedef {Object} IntroductoryWeeks
 * @property {number[]} weeks
 * @property {number} maxWorkingSetsPerExercise Cap applies before baseline sets.
 * @property {number} rir Applies to rep-based working exercises only.
 *
 * @typedef {Object} ExerciseProgression
 * @property {string} fromExerciseId
 * @property {string[]} toExerciseIds
 * @property {string} criteria
 *
 * @typedef {Object} SkillStage
 * @property {string} id
 * @property {string} entryCriteria Ability gate, not an automatic calendar change.
 * @property {number|null} maxWorkingSetsPerExercise
 * @property {string[]} omitExerciseIds
 * @property {{fromExerciseId:string,toPrescription:ProgramExercise}[]} prescriptionOverrides
 *
 * @typedef {Object} Program
 * @property {number} programNumber
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {TrainingGoal} goal
 * @property {TrainingLevel} level
 * @property {TrainingLocation} location
 * @property {EquipmentId[]} requiredEquipment Includes warm-up equipment.
 * @property {number} daysPerWeek
 * @property {number} sessionLengthMinutes Longest scheduled session estimate.
 * @property {number} durationWeeks
 * @property {string} method
 * @property {string[]} focusMuscles
 * @property {ProgramDay[]} schedule All seven days, including rest.
 * @property {string} progressionRule
 * @property {string} deloadRule
 * @property {number[]} deloadWeeks
 * @property {string} whyThisWorks
 * @property {string} volumeNotes
 * @property {ProgramReference[]} references
 * @property {string} [coreMessage]
 * @property {string[]} [nutritionGuidance]
 * @property {string[]} [executionNotes]
 * @property {IntroductoryWeeks} [introductoryWeeks]
 * @property {ExerciseProgression[]} [exerciseProgressions]
 * @property {string[]} [setupRequirements]
 * @property {SkillStage[]} [skillStages]
 * @property {string[]} [requiredCapabilities] Equipment setup checks.
 * @property {'general'|'pregnancy'|'postpartum'|'older-adult'} [audience]
 * @property {string[]} [muscleFocus] Catalog muscle-section identifiers.
 * @property {'recovery'|'rebuild'|null} [readiness] Postpartum ability gate.
 * @property {string} [entryCriteria] Symptoms and ability, not a fixed recovery date.
 *
 * @typedef {Object} UserProfile
 * @property {string} gender
 * @property {number|string} [weight]
 * @property {TrainingGoal|string} goal
 * @property {TrainingLevel} level
 * @property {number} days
 * @property {TrainingLocation} [location]
 * @property {EquipmentId[]} [homeEquipment]
 * @property {boolean} [longBands]
 * @property {boolean} [barSupportsFootAssistance]
 * @property {'general'|'pregnancy'|'postpartum'|'older-adult'} [lifeStage]
 * @property {boolean} [activityReady] Reviewed screening and followed applicable clinical advice.
 * @property {'recovery'|'rebuild'} [postpartumStage]
 * @property {'first'|'second'|'third'} [pregnancyStage]
 * @property {boolean} [floorTransfers] Comfortable floor transfers for older-adult options.
 * @property {string} [equipment] Legacy profile field retained for existing plans.
 *
 * @typedef {Object} Bookmark
 * @property {string} programId
 * @property {boolean} active
 * @property {string} updatedAt ISO timestamp
 *
 * All user data remains local to this browser. Keep storage access behind
 * guarded helpers so private browsing or disabled storage does not break use.
 */
(() => {
  const D=globalThis.ForgeData || require('./data.js');
  const catalog=Object.fromEntries(D.catalog.map(e=>[e.id,e]));
  const exerciseLibrary=Object.fromEntries(D.exercises.map(e=>[e.id,e]));
  const clone=value=>JSON.parse(JSON.stringify(value));
  const dateOK=value=>typeof value==='string' && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value+'T12:00:00')) && new Date(value+'T12:00:00Z').toISOString().slice(0,10)===value;
  const today=()=>{const d=new Date();d.setMinutes(d.getMinutes()-d.getTimezoneOffset());return d.toISOString().slice(0,10);};
  const cleanText=(value,max=120)=>typeof value==='string'?value.slice(0,max):'';
  const oneOf=(v,options,fallback)=>options.includes(v)?v:fallback;
  const levels=['beginner','intermediate','advanced'];
  const goals=['muscle','strength','fitness','fat-loss'];
  const locations=['gym','home','outdoor'];
  const homeEquipmentIds=['dumbbells','resistance-bands','pull-up-bar','kettlebell','chair'];
  const gymEquipmentIds=['bodyweight','gym-equipment','barbell','dumbbells','free-weights','kettlebell','resistance-bands','cable-machine','plate-loaded-machine','selectorized-machine','bench','rack','pull-up-bar','dip-bars','ab-wheel','running','chair'];
  const profileOf=p=>({
    gender:oneOf(p?.gender,['woman','man','nonbinary','prefer-not'],'prefer-not'),
    weight:p?.weight===''||p?.weight==null?'':validNumber(p.weight,20,500),
    goal:({muscle:'hypertrophy',fitness:'endurance'}[p?.goal]||oneOf(p?.goal,['hypertrophy','strength','fat-loss','endurance','mobility','skill'],'hypertrophy')),level:oneOf(p?.level,levels,'beginner'),
    days:oneOf(Number(p?.days),[2,3,4,5,6],3),
    equipment:oneOf(p?.equipment,['Gym','Dumbbells'],'Gym'),
    location:oneOf(p?.location,locations,p?.equipment==='Dumbbells'?'home':'gym'),
    homeEquipment:Array.isArray(p?.homeEquipment)?[...new Set(p.homeEquipment.filter(x=>homeEquipmentIds.includes(x)))]:p?.equipment==='Dumbbells'?['dumbbells']:[],
    longBands:p?.longBands===true,barSupportsFootAssistance:p?.barSupportsFootAssistance===true,
    lifeStage:oneOf(p?.lifeStage,['general','pregnancy','postpartum','older-adult'],'general'),
    activityReady:p?.activityReady===true,postpartumStage:oneOf(p?.postpartumStage,['recovery','rebuild'],'recovery'),
    pregnancyStage:oneOf(p?.pregnancyStage,['first','second','third'],'first'),floorTransfers:p?.floorTransfers===true
  });
  function validNumber(value,min,max,integer=false){const n=Number(value);if(!Number.isFinite(n)||n<min||n>max||(integer&&!Number.isInteger(n)))throw Error('Invalid number');return n;}
  function setOf(s){if(!s||typeof s!=='object')throw Error('Invalid set');return {kg:s.kg===''||s.kg==null?'':String(validNumber(s.kg,0,2000)),reps:s.reps===''||s.reps==null?'':String(validNumber(s.reps,0,100000,true)),done:!!s.done&&Number(s.reps)>0};}
  function targetOf(e){
    if(!catalog[e?.exerciseId])throw Error('Unknown exercise');
    const unit=e.unit||'reps';if(!['reps','seconds','metres'].includes(unit))throw Error('Invalid tracking unit');
    const limit=unit==='reps'?100:unit==='seconds'?7200:100000;
    return {exerciseId:e.exerciseId,sets:validNumber(e.sets,1,10,true),min:validNumber(e.min,1,limit,true),max:validNumber(e.max,1,limit,true),unit,rir:cleanText(String(e.rir??''),120),perLeg:!!e.perLeg,restSeconds:e.restSeconds==null?90:validNumber(e.restSeconds,0,600,true),hardSet:e.hardSet!==false,intensityNote:cleanText(e.intensityNote,600)};
  }
  function exerciseOf(e){const target=targetOf({...e,sets:Array.isArray(e.sets)?e.sets.length:e.sets});if(target.min>target.max)throw Error('Invalid target range');if(!Array.isArray(e.sets))return target;const sets=e.sets.map(setOf);for(const item of sets)if(item.reps!=='')validNumber(item.reps,0,target.unit==='seconds'?7200:target.unit==='metres'?100000:1000,true);return {...target,name:cleanText(e.name)||catalog[e.exerciseId].name,sets};}
  function empty(){return {version:4,catalogVersion:1,activePlan:'forge5',activeWorkout:'d1',selectedDate:today(),sessionId:null,profile:null,onboardingAnswers:null,bookmarks:[],activePrograms:[],programSettings:{},videoOverrides:{},videoHealth:{},onboarded:false,sessions:{},customPlans:[],restSeconds:90,timerSoundEnabled:true};}
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
  /**
   * Return only programs that fit the user's location and every required item.
   * An empty home equipment selection means bodyweight only.
   * @param {UserProfile} profile
   * @param {Program[]} programs
   * @returns {Program[]}
   */
  function eligiblePrograms(profile,programs=D.programs||[]){
    const p=profileOf(profile);
    const available=p.location==='gym'?new Set(gymEquipmentIds)
      :p.location==='outdoor'?new Set(['bodyweight','park-equipment','pull-up-bar','running'])
      :new Set(['bodyweight',...(p.location==='home'?p.homeEquipment:[])]);
    return programs.filter(program=>{
      const locationOK=program.location==='any'||program.location===p.location;
      const capabilitiesOK=(program.requiredCapabilities||[]).every(cap=>cap==='long-bands'?p.longBands:cap==='low-pull-up-bar'?p.barSupportsFootAssistance:false);
      const populationOK=!program.id||D.catalogInfo.suitability(p,program).ok;
      return locationOK&&capabilitiesOK&&populationOK&&Array.isArray(program.requiredEquipment)&&program.requiredEquipment.every(item=>available.has(item));
    });
  }
  function recommend(p){return api.recommendProgram(p);}
  function planById(state,id=state.activePlan){const native=D.programs?.find(p=>p.id===id);if(native)return api.programPlan(native,state,state.selectedDate);if(id==='forge5')return makePlan(id);const custom=state.customPlans.find(p=>p.id===id);if(custom)return custom;for(const base of D.base.filter(p=>!p.legacy))for(const level of levels)for(const goal of goals){if(`${base.id}-${level}-${goal}`===id)return makePlan(base.id,level,goal);}return makePlan('forge5');}
  const sessionKey=(plan,workout,date)=>plan.id==='forge5'?`${date}::D${workout.n}`:`${date}::${plan.id}::${workout.id}`;
  function previousExercise(state,exerciseId,date,exclude='',unit=null){
    const planId=state.sessions[exclude]?.planId||state.activePlan,program=D.programs?.find(p=>p.id===planId);
    const scoped=program?.audience&&program.audience!=='general',startedOn=state.programSettings?.[planId]?.startedOn||today();
    const sessions=Object.values(state.sessions).filter(s=>s.id!==exclude&&s.completedAt&&s.date<date&&(!scoped||(s.planId===planId&&s.date>=startedOn))).sort((a,b)=>b.date.localeCompare(a.date)||String(b.completedAt).localeCompare(String(a.completedAt)));
    for(const s of sessions){const e=s.exercises.find(e=>e.exerciseId===exerciseId&&e.name===catalog[exerciseId].name&&(!unit||(e.unit||'reps')===unit)&&e.sets.some(s=>s.done&&Number(s.reps)>0));if(e)return e;}return null;
  }
  function newEntry(state,target,date,exclude=''){
    const previous=previousExercise(state,target.exerciseId,date,exclude,target.unit||'reps');
    return {...clone(target),name:catalog[target.exerciseId].name,sets:Array.from({length:target.sets},(_,i)=>({kg:previous?.sets[i]?.kg??'',reps:'',done:false}))};
  }
  function newSession(state,plan,workout,date){return {id:sessionKey(plan,workout,date),planId:plan.id,workoutId:workout.id,title:workout.title,date,createdAt:new Date().toISOString(),completedAt:null,warmup:clone(workout.warmup||[]),rampUpSets:clone(workout.rampUpSets||[]),notes:cleanText(workout.notes,3000),week:workout.week||1,stage:workout.stage||'',exercises:workout.exercises.map(e=>newEntry(state,e,date))};}
  function activeSession(state){if(state.sessionId&&state.sessions[state.sessionId])return state.sessions[state.sessionId];const p=planById(state),w=p.workouts.find(w=>w.id===state.activeWorkout)||p.workouts[0];state.activeWorkout=w.id;const key=sessionKey(p,w,state.selectedDate);if(!state.sessions[key])state.sessions[key]=newSession(state,p,w,state.selectedDate);return state.sessions[key];}
  function totals(s){const all=s.exercises.flatMap(e=>e.sets),logged=all.filter(s=>s.done&&Number(s.reps)>0);return {total:all.length,done:logged.length,volume:s.exercises.reduce((sum,e)=>sum+((e.unit||'reps')==='reps'?e.sets.filter(x=>x.done&&Number(x.reps)>0).reduce((n,x)=>n+(Number(x.kg)||0)*Number(x.reps),0):0),0)};}
  function guidance(e){if(e.unit==='seconds')return 'Log the seconds completed in each interval or hold. Follow the effort and progression notes.';if(e.unit==='metres')return 'Log the metres completed with controlled technique. Follow the program progression.';const logged=e.sets.filter(s=>s.done&&Number(s.reps)>0);return logged.length===e.sets.length&&logged.every(s=>Number(s.reps)>=e.max)?'Target reached with controlled reps. Use your program progression rule before changing load or difficulty.':logged.length?'Keep the current difficulty until all sets are controlled within the target range.':'Start at a manageable difficulty and keep the prescribed reps in reserve.';}
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
    const s=empty();s.profile=raw.profile?profileOf(raw.profile):null;s.onboardingAnswers=raw.onboardingAnswers&&typeof raw.onboardingAnswers==='object'?profileOf(raw.onboardingAnswers):null;s.bookmarks=Array.isArray(raw.bookmarks)?raw.bookmarks.filter(b=>b&&typeof b.programId==='string').map(b=>({programId:cleanText(b.programId,100),active:!!b.active,updatedAt:cleanText(b.updatedAt,40)})):[];s.activePrograms=Array.isArray(raw.activePrograms)?[...new Set(raw.activePrograms.filter(id=>typeof id==='string').map(id=>cleanText(id,100)))]:[];s.onboarded=!!raw.onboarded;s.selectedDate=dateOK(raw.selectedDate)?raw.selectedDate:today();s.restSeconds=oneOf(raw.restSeconds,[30,45,60,75,90,120,150,180,240,300],90);s.timerSoundEnabled=raw.timerSoundEnabled!==false;
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
    s.activePlan=planById(s,raw.activePlan).id;s.activeWorkout=planById(s).workouts.some(w=>w.id===raw.activeWorkout)?raw.activeWorkout:planById(s).workouts[0].id;s.sessionId=raw.sessionId&&s.sessions[raw.sessionId]?raw.sessionId:null;return api.validateProgramState(s,raw);
  }
  const api={catalog,exerciseLibrary,levels,goals,clone,dateOK,today,validNumber,profileOf,locations,homeEquipmentIds,empty,makePlan,recommend,eligiblePrograms,planById,sessionKey,previousExercise,newEntry,newSession,activeSession,totals,guidance,migrate,validate};
  Object.assign(api,(globalThis.ForgeProgramFeatures || require('./program-model.js'))(api,D));
  globalThis.ForgeModel=api;if(typeof module!=='undefined')module.exports=api;
})();
