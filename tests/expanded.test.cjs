"use strict";
const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const D=require('../data.js'),M=require('../model.js'),C=D.catalogInfo;
const additions=D.programs.filter(p=>p.programNumber>30);
test('every muscle, goal, location and training context contains at least ten distinct choices',()=>{
 for(const section of C.muscles)assert(D.programs.filter(p=>C.focus(p).includes(section.id)).length>=10,section.name);
 for(const goal of M.trainingGoals)assert(D.programs.filter(p=>p.goal===goal&&C.audience(p)==='general').length>=10,goal);
 for(const location of ['gym','home','outdoor','any'])assert(D.programs.filter(p=>p.location===location).length>=10,location);
 for(const section of C.audiences)assert(D.programs.filter(p=>C.audience(p)===section.id).length>=10,section.name);
});
test('added plans have complete schedules, warmups, prescriptions, progression and actual sources',()=>{
 for(const p of additions){
  assert(p.description.length>20&&p.description.split(/[.!?](?:\s|$)/).filter(Boolean).length<=2,p.id);
  assert.equal(p.schedule.length,7);assert.equal(p.schedule.filter(d=>d.kind==='training').length,p.daysPerWeek);
  assert(p.schedule.some(d=>d.kind==='rest'));assert(p.progressionRule?.length>50);assert(p.deloadRule.length>50);assert(p.whyThisWorks.length>80);
  assert(p.references.length&&p.references.every(r=>r.title&&/^https:\/\//.test(r.url)));
  for(const d of p.schedule){assert.equal(d.id.startsWith(p.id),true);if(d.kind==='rest')continue;assert(d.warmup.length>=3);assert(d.exercises.length);
   for(const e of [...d.warmup,...d.rampUpSets,...d.exercises]){assert(M.exerciseLibrary[e.exerciseId]);assert(e.sets>=1&&e.sets<=10);assert(e.restSeconds>=0&&e.restSeconds<=300);assert([e.durationSeconds!==null,e.distanceMetres!==null,e.min!==null&&e.max!==null].filter(Boolean).length===1,p.id+' '+e.exerciseId);assert(e.rir===null||e.rir>=0);}
  }
  for(const e of p.schedule.flatMap(d=>[...d.warmup,...d.rampUpSets,...d.exercises]))if(e.durationSeconds!==null||e.distanceMetres!==null){assert.equal(e.rir,null,p.id+' '+e.exerciseId);assert(!/reps in reserve/i.test(e.intensityNote),p.id+' '+e.exerciseId);}
 }
});
test('every plan declares exactly the equipment used by its working sets and warmups',()=>{
 for(const p of additions){const equipment=[...new Set(p.schedule.flatMap(d=>[...d.exercises,...d.warmup,...d.rampUpSets]).flatMap(e=>M.exerciseLibrary[e.exerciseId].equipment))].sort();assert.deepEqual([...p.requiredEquipment].sort(),equipment,p.id);
  const profile=M.profileOf({lifeStage:C.audience(p),activityReady:true,postpartumStage:'rebuild',floorTransfers:true,location:p.location==='any'?'home':p.location,homeEquipment:p.requiredEquipment,longBands:true,days:6,level:'advanced'});
  assert(M.eligiblePrograms(profile,[p]).length,p.id);
  if(p.location==='home')assert(p.requiredEquipment.every(e=>['bodyweight',...M.homeEquipmentIds].includes(e)),p.id);
 }
});
test('specialization plans train their actual focus on at least two days with 10–20 primary sets',()=>{
 for(const p of additions.filter(p=>p.muscleFocus.length)){
  const section=C.muscles.find(g=>g.id===p.muscleFocus[0]),matches=e=>e.hardSet&&M.exerciseLibrary[e.exerciseId].primaryMuscles.some(m=>section.muscles.includes(m));
  const days=p.schedule.filter(d=>d.exercises.some(matches));const sets=days.flatMap(d=>d.exercises.filter(matches)).reduce((n,e)=>n+e.sets,0);
  assert(days.length>=2,p.id);assert(sets>=10&&sets<=20,p.id+' '+sets);
 }
});
test('life-stage recommendations never cross into general or another population',()=>{
 for(const stage of ['pregnancy','postpartum','older-adult'])for(const goal of M.trainingGoals)for(const location of M.locations){
  const profile={lifeStage:stage,activityReady:true,postpartumStage:'recovery',floorTransfers:false,goal,location,days:4,level:'advanced',homeEquipment:[]};
  const r=M.recommend(profile);assert(r.program,stage+' '+location);assert.equal(C.audience(r.program),stage);if(stage==='postpartum')assert.equal(r.program.readiness,'recovery');assert(M.eligiblePrograms(profile,[r.program]).length);
 }
 for(const p of M.eligiblePrograms({lifeStage:'general',location:'gym'}))assert.equal(C.audience(p),'general');
});
test('maternal plans require screening acknowledgement, and rebuild requires readiness rather than a date',()=>{
 for(const lifeStage of ['pregnancy','postpartum'])assert.equal(M.recommend({lifeStage,location:'home',days:4}).plan,null);
 const rebuild=D.programs.find(p=>p.readiness==='rebuild'&&p.location==='any');
 assert(!C.suitability({lifeStage:'postpartum',activityReady:true,postpartumStage:'recovery',weeksSinceBirth:52},rebuild).ok);
 assert(C.suitability({lifeStage:'postpartum',activityReady:true,postpartumStage:'rebuild'},rebuild).ok);
});
test('pregnancy prescriptions avoid flat-on-back, high-impact and failure work',()=>{
 const banned=new Set(['bridge','deadbug','body-crunch','weighted-crunch','reverse-crunch','db-floor-press','hip-thrust','sprint','squat-jump','broad-jump','mountain-climber','kb-swing','prone-w-raise','open-book']);
 for(const p of D.programs.filter(p=>p.audience==='pregnancy')){assert.equal(p.deloadWeeks.length,0);assert(p.entryCriteria);for(const e of p.schedule.flatMap(d=>[...d.exercises,...d.warmup,...d.rampUpSets])){assert(!banned.has(e.exerciseId),e.exerciseId);assert(e.rir===null||e.rir>=3);}}
});
test('early postpartum recovery stays light without an automatic week-based load increase',()=>{
 for(const p of D.programs.filter(p=>p.readiness==='recovery')){assert.equal(p.deloadWeeks.length,0);assert.match(p.progressionRule,/symptoms/);for(const e of p.schedule.flatMap(d=>d.exercises)){assert(!e.hardSet);assert(e.sets<=1);assert(e.rir===null||e.rir>=4);assert(!M.exerciseLibrary[e.exerciseId].equipment.some(x=>['barbell','dumbbells','kettlebell'].includes(x)));}}
});
test('older-adult floor transfers are explicit and supported balance remains available without them',()=>{
 const older=D.programs.filter(p=>p.audience==='older-adult');
 const profile={lifeStage:'older-adult',location:'home',days:6,homeEquipment:['chair','dumbbells'],floorTransfers:false};
 const options=M.eligiblePrograms(profile,older);assert(options.length>=3);assert(options.every(p=>!p.schedule.some(d=>d.exercises.some(e=>['db-floor-press','prone-w-raise','bird-dog'].includes(e.exerciseId)))));
 assert(options.some(p=>p.schedule.some(d=>d.exercises.some(e=>M.exerciseLibrary[e.exerciseId].pattern==='balance'))));
});
test('new health-context fields persist through backup validation and old profiles migrate to general training',()=>{
 const s=M.empty();s.profile=M.profileOf({lifeStage:'postpartum',activityReady:true,postpartumStage:'rebuild',pregnancyStage:'third',floorTransfers:true,homeEquipment:['chair']});s.onboardingAnswers=M.clone(s.profile);
 const restored=M.validate(JSON.parse(JSON.stringify(s)));assert.deepEqual(restored.profile,s.profile);assert.deepEqual(restored.onboardingAnswers,s.onboardingAnswers);assert.equal(M.profileOf({goal:'muscle'}).lifeStage,'general');
 assert.equal(M.profileOf({lifeStage:'bogus',activityReady:'yes',floorTransfers:'yes'}).activityReady,false);
});
test('equipment artwork and expansion modules are shipped and cached locally',()=>{
 const sw=fs.readFileSync(path.join(__dirname,'../sw.js'),'utf8');for(const id of Object.keys(C.images)){const file='assets/'+id+'.jpg';assert(fs.statSync(path.join(__dirname,'..',file)).size>10000);assert(sw.includes("'./"+file+"'"));}
 for(const file of ['catalog.js','catalog.css','exercises-expanded.js','programs-expanded.js'])assert(sw.includes("'./"+file+"'"));
});
test('life-stage plans start loads fresh and only reuse the same plan within the current block',()=>{
 const s=M.empty(),target={exerciseId:'goblet',sets:2,min:8,max:12,unit:'reps'},workout={id:'sample',title:'Sample',exercises:[target]};
 const general=M.planById(s,'home-dumbbell-builder');const old=M.newSession(s,general,workout,'2026-10-01');old.completedAt='2026-10-01T12:00:00Z';old.exercises[0].sets.forEach(set=>{set.kg='80';set.reps='12';set.done=true;});s.sessions[old.id]=old;
 const p=D.programs.find(p=>p.audience==='pregnancy'&&p.name.includes('Dumbbell Upright'));s.activePlan=p.id;s.programSettings[p.id]={startedOn:'2026-11-02'};
 assert(M.newEntry(s,target,'2026-11-03').sets.every(set=>set.kg===''));
 const own=M.newSession(s,M.planById(s,p.id),workout,'2026-11-03');own.completedAt='2026-11-03T12:00:00Z';own.exercises[0].sets.forEach(set=>{set.kg='10';set.reps='10';set.done=true;});s.sessions[own.id]=own;
 assert(M.newEntry(s,target,'2026-11-05').sets.every(set=>set.kg==='10'));
 s.programSettings[p.id].startedOn='2026-11-16';assert(M.newEntry(s,target,'2026-11-17').sets.every(set=>set.kg===''));
 assert.equal(old.exercises[0].sets[0].kg,'80');
});
