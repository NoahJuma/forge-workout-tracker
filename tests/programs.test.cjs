"use strict";
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const D=require('../data.js');
const M=require('../model.js');
const batchOne=JSON.parse(fs.readFileSync(path.join(__dirname,'../programs-01-10.json'),'utf8'));
const batchTwo=JSON.parse(fs.readFileSync(path.join(__dirname,'../programs-11-20.json'),'utf8'));
const programs=[...batchOne,...batchTwo];
const names=['Shortcut to Strength','Shortcut to Six-Pack','Shoulder Killer','Abs Killer','Chest Builder','Arm Blaster','Quad Crusher','Glute Builder','V-Taper Back','Push / Pull / Legs'];
const referenceUrls=new Set([
'https://acsm.org/resistance-training-guidelines-update-2026/',
'https://pubmed.ncbi.nlm.nih.gov/19204579/',
'https://pubmed.ncbi.nlm.nih.gov/27433992/',
'https://pubmed.ncbi.nlm.nih.gov/30558493/',
'https://pubmed.ncbi.nlm.nih.gov/21804427/',
'https://pubmed.ncbi.nlm.nih.gov/28642676/',
'https://pubmed.ncbi.nlm.nih.gov/28630601/',
'https://pubmed.ncbi.nlm.nih.gov/30815258/',
'https://pmc.ncbi.nlm.nih.gov/articles/PMC4213388/'
]);
function prescriptions(p){return p.schedule.flatMap(d=>[...d.warmup,...d.rampUpSets,...d.exercises]);}
function volume(p){
 const sets={},days={};
 for(const d of p.schedule){
  const touched=new Set();
  for(const e of d.exercises)if(e.hardSet)for(const muscle of M.exerciseLibrary[e.exerciseId].primaryMuscles){sets[muscle]=(sets[muscle]||0)+e.sets;touched.add(muscle);}
  for(const muscle of touched)days[muscle]=(days[muscle]||0)+1;
 }
 return {sets,days};
}
test('first batch contains exactly requested programs 1–10 with distinct schedules',()=>{
 assert.equal(batchOne.length,10);
 assert.deepEqual(batchOne.map(p=>p.programNumber),[1,2,3,4,5,6,7,8,9,10]);
 assert.deepEqual(batchOne.map(p=>p.name),names);
 assert.equal(new Set(batchOne.map(p=>p.id)).size,10);
 assert.equal(new Set(batchOne.map(p=>JSON.stringify(p.schedule.map(d=>d.exercises)))).size,10);
 for(const p of batchOne)assert.equal(p.id,D.programExerciseCoverage[p.programNumber-1].programId);
});
test('metadata, weekly schedules, warm-ups, and planned recovery are complete',()=>{
 for(const p of programs){
  assert(['strength','hypertrophy','fat-loss','endurance','mobility','skill'].includes(p.goal));
  assert(M.levels.includes(p.level));assert.equal(p.location,p.programNumber<=15?'gym':'home');
  assert(p.description.length>20);assert(p.description.split(/[.!?](?:\s|$)/).filter(Boolean).length<=2);
  assert.equal(p.schedule.length,7);
  assert.deepEqual(p.schedule.map(d=>d.weekday),[1,2,3,4,5,6,7]);
  assert.equal(new Set(p.schedule.map(d=>d.id)).size,7);
  const active=p.schedule.filter(d=>d.kind==='training');
  assert.equal(active.length,p.daysPerWeek);assert(active.length<=6);
  assert.equal(p.sessionLengthMinutes,Math.max(...active.map(d=>d.sessionLengthMinutes)));
  assert(p.durationWeeks>=8&&p.durationWeeks<=12);
  for(const day of p.schedule){
   assert(day.notes.length>10);
   if(day.kind==='rest'){assert.equal(day.exercises.length,0);assert.equal(day.warmup.length,0);assert.equal(day.rampUpSets.length,0);assert.equal(day.sessionLengthMinutes,0);}
   else{assert(day.warmup.length>=3);assert(day.exercises.length>=2);assert(day.warmup.every(e=>!e.hardSet));assert(day.rampUpSets.every(e=>!e.hardSet));}
  }
 }
});
test('every prescription resolves centrally and defines sets, effort, rest, and reps or duration',()=>{
 for(const p of programs)for(const e of prescriptions(p)){
  const source=M.exerciseLibrary[e.exerciseId];assert(source,p.id+': '+e.exerciseId);
  for(const key of ['name','instructions','primaryMuscles','secondaryMuscles','youtubeVideoId','equipment'])assert(!(key in e),'Exercise data duplicated inside program: '+key);
  assert(Number.isInteger(e.sets)&&e.sets>=1&&e.sets<=6);
  assert(Number.isInteger(e.restSeconds)&&e.restSeconds>=0&&e.restSeconds<=300);
  assert.equal(typeof e.perSide,'boolean');assert.equal(typeof e.hardSet,'boolean');
  const modes=[Number.isInteger(e.min)&&Number.isInteger(e.max),Number.isInteger(e.durationSeconds),Number.isInteger(e.distanceMetres)];
  assert.equal(modes.filter(Boolean).length,1);
  if(modes[0]){assert(e.min>=1&&e.max>=e.min);assert(Number.isInteger(e.rir)&&e.rir>=1&&e.rir<=6);}
  else{assert.equal(e.min,null);assert.equal(e.max,null);assert.equal(e.rir,null);assert(e.intensityNote&&e.intensityNote.length>15);assert((e.durationSeconds||e.distanceMetres)>0);}
  if(e.loadPercentagesOfWorkingWeight){assert.equal(e.loadPercentagesOfWorkingWeight.length,e.sets);assert(e.loadPercentagesOfWorkingWeight.every(n=>n>0&&n<100));assert(!e.hardSet);}
 }
});
test('equipment requirements include every scheduled exercise and match the selected location',()=>{
 for(const p of programs){
  const actual=[...new Set(prescriptions(p).flatMap(e=>M.exerciseLibrary[e.exerciseId].equipment))].sort();
  assert.deepEqual(p.requiredEquipment,actual,p.id);
  if(p.location==='gym'){
   assert.equal(M.eligiblePrograms({location:'gym'},[p]).length,1);
   assert.equal(M.eligiblePrograms({location:'home',homeEquipment:[]},[p]).length,0);
  }else{
   assert.equal(M.eligiblePrograms({location:'home',homeEquipment:p.requiredEquipment.filter(item=>item!=='bodyweight')},[p]).length,1);
   assert.equal(M.eligiblePrograms({location:'outdoor'},[p]).length,0);
  }
 }
});
test('hypertrophy focus muscles have 10–20 primary sets across at least two sessions',()=>{
 for(const p of programs.filter(p=>p.goal==='hypertrophy')){
  const {sets,days}=volume(p);
  for(const muscle of p.focusMuscles){
   assert(sets[muscle]>=10&&sets[muscle]<=20,p.id+': '+muscle+' '+sets[muscle]);
   assert(days[muscle]>=2,p.id+': frequency '+muscle);
  }
  assert(Object.values(sets).every(n=>n<=25),'More than 25 primary sets in '+p.id);
 }
});
test('strength main lifts use heavier rep ranges, long rests, and two weekly exposures',()=>{
 const p=programs[0],main=['squat','barbell-bench','deadlift','ohp'];
 for(const id of main){
  const work=p.schedule.flatMap(d=>d.exercises.filter(e=>e.exerciseId===id));
  assert.equal(work.length,2);
  assert(work.every(e=>e.min>=1&&e.max<=6&&e.restSeconds>=120&&e.restSeconds<=300&&e.rir>=2));
 }
 assert.equal(p.schedule.flatMap(d=>d.exercises).find(e=>e.exerciseId==='squat').sets,5);
 assert.equal(p.durationWeeks,12);
});
test('progression, deloads, and verified references are attached to every program',()=>{
 for(const p of programs){
  assert(p.progressionRule.length>100);assert(p.deloadRule.length>100);
  assert(p.deloadWeeks.length>=2&&p.deloadWeeks.every(w=>Number.isInteger(w)&&w>0&&w<=p.durationWeeks));
  assert.equal(new Set(p.deloadWeeks).size,p.deloadWeeks.length);
  assert(p.whyThisWorks.split(/[.!?](?:\s|$)/).filter(Boolean).length>=2);
  assert(p.whyThisWorks.split(/[.!?](?:\s|$)/).filter(Boolean).length<=4);
  assert(p.volumeNotes.length>50);
  assert(p.references.length>=2);
  for(const r of p.references){assert(r.title.length>20);assert(referenceUrls.has(r.url));}
 }
});
test('ab programs explicitly reject spot reduction and distinguish nutrition from ab growth',()=>{
 for(const n of [2,4]){
  const p=programs[n-1];
  assert.match(p.coreMessage,/Spot reduction is a myth/);
  assert.match(p.coreMessage,/diet/);assert.match(p.coreMessage,/Ab training builds the muscle/);
  assert(p.references.some(r=>r.url==='https://pubmed.ncbi.nlm.nih.gov/21804427/'));
 }
 assert(programs[1].nutritionGuidance.length>=3);
});
test('session estimates allow prescribed upper-range reps, rests, warm-ups, and transitions',()=>{
 for(const p of programs)for(const d of p.schedule.filter(d=>d.kind==='training')){
  const all=[...d.warmup,...d.rampUpSets,...d.exercises];
  const seconds=all.reduce((sum,e)=>sum+(e.durationSeconds?e.durationSeconds*e.sets*(e.perSide?2:1):(e.max||0)*(e.eccentricSeconds?e.eccentricSeconds+2:4)*e.sets*(e.perSide?2:1))+Math.max(0,e.sets-1)*e.restSeconds,0)+Math.max(0,all.length-1)*60;
  assert(seconds<=d.sessionLengthMinutes*60,p.id+' '+d.title+' needs at least '+Math.ceil(seconds/60)+' minutes');
 }
});
test('Push/Pull/Legs has six ordered training days and an explicit Sunday rest',()=>{
 const p=programs[9];
 assert.equal(p.daysPerWeek,6);
 assert.deepEqual(p.schedule.slice(0,6).map(d=>d.title.split(' ')[0]),['Push','Pull','Legs','Push','Pull','Legs']);
 assert.equal(p.schedule[6].kind,'rest');
});

test('second batch contains exactly requested programs 11–20 and all twenty schedules are distinct',()=>{
 assert.equal(batchTwo.length,10);
 assert.deepEqual(batchTwo.map(p=>p.programNumber),[11,12,13,14,15,16,17,18,19,20]);
 assert.deepEqual(batchTwo.map(p=>p.name),['Upper / Lower','Powerbuilding','Deadlift Specialist','30-Minute Express','Beginner Foundations','Home Bodyweight Basics','Home Dumbbell Builder','Resistance Band Total Body','Home HIIT Fat Burner','Pull-Up Mastery']);
 assert.equal(new Set(programs.map(p=>p.id)).size,20);
 assert.equal(new Set(programs.map(p=>JSON.stringify(p.schedule.map(d=>d.exercises)))).size,20);
 for(const p of batchTwo)assert.equal(p.id,D.programExerciseCoverage[p.programNumber-1].programId);
});
test('home plans require only the equipment selected, including every warm-up',()=>{
 const limits={16:['bodyweight'],17:['bodyweight','dumbbells'],18:['bodyweight','resistance-bands'],19:['bodyweight'],20:['bodyweight','pull-up-bar']};
 for(const p of batchTwo.filter(p=>p.location==='home')){
  assert.deepEqual([...p.requiredEquipment].sort(),[...limits[p.programNumber]].sort());
  for(const e of prescriptions(p))assert(M.exerciseLibrary[e.exerciseId].equipment.every(item=>limits[p.programNumber].includes(item)));
 }
 const compatible=(homeEquipment)=>M.eligiblePrograms({location:'home',homeEquipment},batchTwo).map(p=>p.programNumber);
 assert.deepEqual(compatible([]),[16,19]);
 assert.deepEqual(compatible(['dumbbells']),[16,17,19]);
 assert.deepEqual(compatible(['resistance-bands']),[16,18,19]);
 assert.deepEqual(compatible(['pull-up-bar']),[16,19,20]);
 for(const p of batchTwo.filter(p=>p.programNumber===17||p.programNumber===18)){
  assert(prescriptions(p).filter(e=>!e.hardSet).every(e=>!e.loadPercentagesOfWorkingWeight));
 }
});
test('express sessions include a compact warm-up and stay within 30 minutes at maximum reps',()=>{
 const p=batchTwo.find(p=>p.programNumber===14);
 assert.equal(p.sessionLengthMinutes,30);assert.equal(p.daysPerWeek,3);
 for(const d of p.schedule.filter(d=>d.kind==='training')){
  assert.equal(d.sessionLengthMinutes,30);assert(d.warmup.length>=3);
  assert.equal(d.exercises.reduce((n,e)=>n+e.sets,0),12);
  assert(d.exercises.every(e=>e.restSeconds===60&&e.max===10));
  assert(d.rampUpSets.every(e=>e.sets===1));
 }
});
test('introductory set caps are explicit and keep initial beginner effort manageable',()=>{
 for(const n of [15,16]){
  const p=programs.find(p=>p.programNumber===n),intro=p.introductoryWeeks;
  assert(intro.weeks.includes(1));
  assert(intro.weeks.every(w=>Number.isInteger(w)&&w>0&&w<p.durationWeeks));
  assert.equal(intro.maxWorkingSetsPerExercise,2);assert.equal(intro.rir,4);
  assert.match(p.progressionRule,/week/i);
 }
 assert.equal(programs.find(p=>p.programNumber===15).level,'beginner');
});
test('pull-up stages omit early negatives, gate strict reps, and require a low bar rather than hidden equipment',()=>{
 const p=programs.find(p=>p.programNumber===20);
 assert.equal(p.goal,'skill');assert.equal(p.level,'beginner');
 assert.deepEqual(p.skillStages.map(s=>s.id),['foundation','assisted-eccentric','strict-reps']);
 assert(p.skillStages[0].omitExerciseIds.includes('negative-pullup'));
 assert.equal(p.skillStages[0].maxWorkingSetsPerExercise,2);
 assert.match(p.skillStages[1].entryCriteria,/controlled/);
 assert.match(p.skillStages[2].entryCriteria,/three controlled strict pull-ups/);
 assert(p.skillStages[2].omitExerciseIds.includes('negative-pullup'));
 const swap=p.skillStages[2].prescriptionOverrides[0];
 assert.equal(swap.fromExerciseId,'foot-assisted-pullup');
 assert.equal(swap.toPrescription.exerciseId,'strict-pullup');
 assert.equal(swap.toPrescription.rir,1);
 for(const stage of p.skillStages)for(const id of stage.omitExerciseIds)assert(M.exerciseLibrary[id]);
 assert(p.setupRequirements.some(s=>s.includes('feet on the floor')));
 assert(p.setupRequirements.some(s=>s.includes('high doorway bar')));
 for(const d of p.schedule)for(const e of d.exercises.filter(e=>e.exerciseId==='negative-pullup'))assert.equal(e.eccentricSeconds,5);
});
test('HIIT uses timed intervals with recovery and stays within its budget at the progression cap',()=>{
 const p=programs.find(p=>p.programNumber===19);
 assert.equal(p.goal,'fat-loss');assert.equal(p.daysPerWeek,3);
 for(const d of p.schedule.filter(d=>d.kind==='training')){
  assert(d.exercises.every(e=>e.rir===null&&!e.hardSet&&!e.perSide));
  const intervals=d.exercises.filter(e=>e.sets>1);
  assert.equal(intervals.reduce((n,e)=>n+e.sets,0),12);
  assert(intervals.every(e=>e.restSeconds>=e.durationSeconds));
  const all=[...d.warmup,...d.exercises];
  const seconds=all.reduce((n,e)=>n+(e.durationSeconds?(e.sets>1?30:e.durationSeconds)*e.sets:(e.max||0)*4*e.sets*(e.perSide?2:1))+Math.max(0,e.sets-1)*e.restSeconds,0)+Math.max(0,all.length-1)*60;
  assert(seconds<=d.sessionLengthMinutes*60);
 }
 assert(p.nutritionGuidance.some(s=>s.includes('energy deficit')));
 assert(p.references.some(r=>r.url==='https://pmc.ncbi.nlm.nih.gov/articles/PMC4213388/'));
});
test('new progression references and substitutions resolve without adding unselected equipment',()=>{
 for(const p of batchTwo){
  for(const progression of p.exerciseProgressions||[]){
   assert(M.exerciseLibrary[progression.fromExerciseId]);
   assert(progression.criteria.length>30);
   for(const id of progression.toExerciseIds){
    assert(M.exerciseLibrary[id]);
    assert(M.exerciseLibrary[id].equipment.every(item=>p.requiredEquipment.includes(item)));
   }
  }
  for(const stage of p.skillStages||[])for(const override of stage.prescriptionOverrides){
   const e=override.toPrescription;assert(M.exerciseLibrary[e.exerciseId]);
   assert(e.min>=1&&e.max>=e.min&&e.rir>=1);
   assert(M.exerciseLibrary[e.exerciseId].equipment.every(item=>p.requiredEquipment.includes(item)));
  }
 }
});
