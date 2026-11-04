"use strict";
const {test}=require('node:test'),assert=require('node:assert/strict');
const M=require('../model.js');
const first='home-bodyweight-basics',second='push-up-progression',third='core-stability-back-health';
function sample(ids=[first]){const s=M.empty();s.onboarded=true;for(const id of ids)M.setActive(s,id,true);s.activePlan=first;s.activeWorkout=M.planById(s,first).workouts[0].id;const old=M.activeSession(s);old.exercises[0].sets[0]={kg:'10',reps:'12',done:true};old.completedAt='2026-11-04T12:00:00Z';return {s,old,snapshot:M.clone(s.sessions)};}
test('removing the last program clears its selection and settings without erasing workouts',()=>{
 const {s,old,snapshot}=sample();s.sessionId=old.id;const expectedRestored=M.validate(M.clone(s)).sessions;M.removeProgram(s,first);
 assert.deepEqual(s.activePrograms,[]);assert(!s.bookmarks.some(b=>b.programId===first));assert(!s.programSettings[first]);assert.equal(s.sessionId,null);assert.deepEqual(s.sessions,snapshot);
 const restored=M.validate(JSON.parse(JSON.stringify(s)));assert.deepEqual(restored.activePrograms,[]);assert.deepEqual(restored.sessions,expectedRestored);assert(restored.onboarded);assert(M.calendar(restored).every(d=>!d.sessions.length));
});
test('removing one of several programs selects a remaining plan and keeps the other programs',()=>{
 const {s,snapshot}=sample([first,second,third]);M.removeProgram(s,first);
 assert.deepEqual(s.activePrograms,[second,third]);assert.equal(s.activePlan,second);assert.equal(s.activeWorkout,M.planById(s,second).workouts[0].id);assert.deepEqual(s.sessions,snapshot);
});
test('replacing a program changes only that selection and retains its bookmark and recorded sets',()=>{
 const {s,snapshot}=sample([first,third]);M.replaceProgram(s,first,second);
 assert.deepEqual(s.activePrograms,[third,second]);assert.equal(s.activePlan,second);assert(s.bookmarks.some(b=>b.programId===first&&!b.active));assert.deepEqual(s.sessions,snapshot);
 const restored=M.validate(JSON.parse(JSON.stringify(s)));assert.equal(restored.activePlan,second);assert.deepEqual(restored.activePrograms,s.activePrograms);
});
test('replacement can select an already active plan or keep the current one without duplicates',()=>{
 const {s}=sample([first,second]);M.replaceProgram(s,first,second);assert.deepEqual(s.activePrograms,[second]);M.replaceProgram(s,second,second);assert.deepEqual(s.activePrograms,[second]);
});
test('removing a custom selection keeps its editable program and invalid replacements leave state intact',()=>{
 const {s}=sample();s.customPlans.push({id:'custom-example',name:'My routine',days:1,level:'custom',goal:'custom',workouts:[{id:'a',title:'A',short:'A',exercises:[{exerciseId:'body-squat',sets:2,min:8,max:12}]}]});M.setActive(s,'custom-example',true);M.removeProgram(s,'custom-example');assert(s.customPlans.some(p=>p.id==='custom-example'));const before=M.clone(s);assert.throws(()=>M.replaceProgram(s,first,'missing'));assert.deepEqual(s,before);
});
