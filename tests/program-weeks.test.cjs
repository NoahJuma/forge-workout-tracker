"use strict";
const {test}=require('node:test'),assert=require('node:assert/strict');
const M=require('../model.js');
test('week previews cover every week of four-, six- and twelve-week programs',()=>{
 for(const durationWeeks of [4,6,12]){
  const program=M.clone(M.nativeById['home-bodyweight-basics']);program.durationWeeks=durationWeeks;program.deloadWeeks=[durationWeeks];program.introductoryWeeks={weeks:[1],maxWorkingSetsPerExercise:1,rir:4};const original=M.clone(program);
  for(let week=1;week<=durationWeeks;week++){const report=M.previewWeek(program,String(week));assert.equal(report.week,week);assert.equal(report.totalWeeks,durationWeeks);assert.equal(report.days.length,7);assert.deepEqual(report.days,program.schedule.map(d=>M.resolveDay(program,d,week,{})));}
  assert.deepEqual(program,original);
 }
});
test('week previews show introductory and deload doses rather than duplicating week one',()=>{
 const p=M.nativeById['home-bodyweight-basics'];const introductory=M.previewWeek(p,1),normal=M.previewWeek(p,3),deload=M.previewWeek(p,p.deloadWeeks[0]);
 const first=r=>r.days.find(d=>d.kind==='training').exercises[0];
 assert.match(introductory.phase,/Introductory/);assert(first(introductory).sets<first(normal).sets);assert.match(deload.phase,/deload/);assert(first(deload).sets<first(normal).sets);assert(first(deload).rir>=4);
});
test('browsing weeks does not change program settings, selected date, ability stage or logged sets',()=>{
 const state=M.empty();M.setActive(state,'push-up-progression',true);state.activePlan='push-up-progression';state.activeWorkout=M.planById(state).workouts[0].id;const session=M.activeSession(state);session.exercises[0].sets[0]={kg:'0',reps:'8',done:true};const before=M.clone(state),p=M.nativeById[state.activePlan];
 for(let week=1;week<=p.durationWeeks;week++)M.previewWeek(p,week,M.settingsFor(state,p.id));
 assert.deepEqual(state,before);
});
test('invalid preview values cannot access weeks outside the plan',()=>{
 const p=M.nativeById['home-bodyweight-basics'];for(const week of [0,-1,1.5,99,NaN,Infinity,'bad'])assert.equal(M.previewWeek(p,week).week,1);
});
test('pregnancy and postpartum week browsing keeps readiness-led programming and does not invent deloads',()=>{
 for(const p of Object.values(M.nativeById).filter(p=>['pregnancy','postpartum'].includes(p.audience))){const first=M.previewWeek(p,1),last=M.previewWeek(p,p.durationWeeks);assert.equal(last.phase,'Training week');assert.deepEqual(first.days.map(d=>d.exercises),last.days.map(d=>d.exercises));}
});
