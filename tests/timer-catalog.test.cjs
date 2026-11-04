'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const D=require('../data.js'),M=require('../model.js');
test('advanced fat-loss plan provides four complete strength and walking sessions',()=>{
 const p=D.programs.find(p=>p.id==='advanced-strength-cardio-cut');assert(p);assert.equal(p.goal,'fat-loss');assert.equal(p.level,'advanced');assert.equal(p.durationWeeks,12);
 const days=p.schedule.filter(d=>d.kind==='training');assert.equal(days.length,4);assert(days.every(d=>d.warmup.length&&d.exercises.some(e=>e.hardSet)&&d.exercises.some(e=>e.exerciseId==='walk'&&e.durationSeconds===900)));assert(p.references.some(r=>r.url.includes('who.int')));assert.match(p.whyThisWorks,/energy balance/i);
 const advanced=M.profileOf({lifeStage:'general',level:'advanced',location:'gym',days:4});assert(M.eligiblePrograms(advanced,[p]).length);
});
test('previously external movement guides are included locally',()=>{
 for(const id of ['prone-w-raise','park-stepup','march','easy-run','tempo-run','step-jack','stepback-thrust','open-book','ankle-rock','scapular-pushup','supported-calf','seated-march','seated-heel-raise'])assert(D.movementPictures.has(id),'Missing local animation: '+id);
 for(const file of ['index.html','program-ui.js','data.js','sw.js'])assert.doesNotMatch(fs.readFileSync(path.join(__dirname,'..',file),'utf8'),/trainaiapp\.com|animation-links\.js/i);
});
test('timer sound defaults on and survives guarded state validation',()=>{
 const state=M.empty();assert.equal(state.timerSoundEnabled,true);state.timerSoundEnabled=false;assert.equal(M.validate(M.clone(state)).timerSoundEnabled,false);delete state.timerSoundEnabled;assert.equal(M.validate(state).timerSoundEnabled,true);
});
test('all exercise records have ordered written steps and matched illustrations resolve to supported source paths',()=>{
 for(const e of D.exercises)assert(e.instructions.length>=3&&e.instructions.every(s=>typeof s==='string'&&s.length));
 for(const [id,guide]of Object.entries(D.exerciseIllustrations)){assert(M.exerciseLibrary[id]);const paths=Object.values(guide.images);assert(paths.length>=1&&paths.every(p=>/^images\/flat\/[a-z0-9-]+\.webp$/.test(p)));}
 for(const e of D.exercises){assert(D.reviewedVideos[e.id]||D.exerciseIllustrations[e.id]||D.movementPictures.has(e.id),'Missing visual guide for '+e.id);if(D.movementPictures.has(e.id))assert.equal(D.movementPictures.frames(e.id).length,2);}
 const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8'),sw=fs.readFileSync(path.join(__dirname,'../sw.js'),'utf8');for(const f of ['exercise-illustrations.js','movement-pictures.js']){assert(html.indexOf('./'+f)<html.indexOf('./data.js'));assert(sw.includes("'./"+f+"'"));}assert(!html.includes('animation-links.js')&&!sw.includes('animation-links.js'));
});
