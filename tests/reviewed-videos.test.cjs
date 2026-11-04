'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const D=require('../data.js'),M=require('../model.js'),videos=require('../reviewed-videos.js');
test('all 42 previous demonstration slots have an exact-exercise male selection',()=>{
 const old=D.exercises.filter(e=>e.legacyVideo);assert.equal(old.length,42);assert.equal(Object.keys(videos).length,66);assert(old.every(e=>videos[e.id]));
 for(const e of D.exercises.filter(e=>videos[e.id])){const v=videos[e.id];assert.equal(v.demonstrator,'male');assert.match(v.id,/^[\w-]{11}$/);assert(v.title&&v.channel&&v.reviewScope);assert.equal(v.reviewedAt,'2026-11-04');assert.match(v.channelUrl,/^https:\/\/www.youtube.com\//);assert.match(v.source,/^https:\/\//);assert.equal(M.videoIdFor(M.empty(),e.id),v.id);assert.equal(M.catalog[e.id].video,v);}
 assert.equal(old.filter(e=>videos[e.id].id!==e.legacyVideo.id).length,24);
});
test('retired female-demo IDs cannot return through historical fallback or old overrides',()=>{
 const retired=['Mgg28KTFsgk','nfX7IFK9UNI','QFbZevA7dps','hbw7hdyOpq0','tqp5XQPpTxY','llD6MImgqe8','yTnWiBECvLk'];
 const s=M.empty();for(const e of D.exercises){for(const old of retired){s.videoOverrides[e.id]=old;assert(!retired.includes(M.videoIdFor(s,e.id)));}}
 assert(Object.values(videos).every(v=>!retired.includes(v.id)));
});
test('unreviewed overrides are preserved for backup while current playback uses the curated selection',()=>{
 const s=M.empty();s.videoOverrides.goblet=M.exerciseLibrary.goblet.legacyVideo.id;s.videoOverrides.deadlift=videos.squat.id;
 const session=M.activeSession(s);session.exercises[0].sets[0]={kg:'20',reps:'8',done:true};const original=M.clone(M.validate(s).sessions);
 const restored=M.validate(M.clone(s));assert.deepEqual(restored.videoOverrides,s.videoOverrides);assert.deepEqual(restored.sessions,original);
 assert.equal(M.videoIdFor(restored,'goblet'),videos.goblet.id);assert.equal(M.videoIdFor(restored,'deadlift'),'');
});
test('written-only choice survives reload and applies only to the chosen exercise',()=>{
 const s=M.empty();s.videoOverrides.goblet='';const copy=M.validate(M.clone(s));assert.equal(M.videoIdFor(copy,'goblet'),'');assert.equal(M.videoIdFor(copy,'squat'),videos.squat.id);
 delete copy.videoOverrides.goblet;assert.equal(M.videoIdFor(copy,'goblet'),videos.goblet.id);
});
test('playback health from a retired selection does not describe a replacement video',()=>{
 const s=M.empty();s.videoOverrides.goblet=M.exerciseLibrary.goblet.legacyVideo.id;s.videoHealth.goblet={videoId:s.videoOverrides.goblet,status:'ready',code:0,checkedAt:'2026-11-04T12:00:00Z'};
 const copy=M.validate(M.clone(s));assert.equal(copy.videoHealth.goblet,undefined);assert.equal(copy.videoOverrides.goblet,s.videoOverrides.goblet);
 s.videoHealth.goblet.videoId=videos.goblet.id;assert.equal(M.validate(s).videoHealth.goblet.status,'ready');
});
test('written-only exercises never pick up a different exercise or unreviewed video',()=>{
 const s=M.empty();for(const e of D.exercises.filter(e=>!videos[e.id])){s.videoOverrides[e.id]=videos.squat.id;assert.equal(M.videoIdFor(s,e.id),'');}assert.equal(M.videoIdFor(s,'missing'),'');
});
test('published selection CSV matches the reviewed library and contains all 131 exercises',()=>{
 const csv=fs.readFileSync(path.join(__dirname,'../EXERCISE_VIDEO_SELECTION.csv'),'utf8').trim().split('\n');assert.equal(csv.length,132);
 for(const e of D.exercises){const row=csv.find(x=>x.startsWith('"'+e.id+'",'));assert(row);if(videos[e.id])assert(row.includes('"'+videos[e.id].id+'"'));}
});
test('registry loads before data and the offline shell caches the mobile release atomically',()=>{
 const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8'),sw=fs.readFileSync(path.join(__dirname,'../sw.js'),'utf8');assert(html.indexOf('./reviewed-videos.js')<html.indexOf('./data.js'));
 for(const f of ['reviewed-videos.js','mobile.css','additional-programs.js']){assert(html.includes('./'+f));assert(sw.includes("'./"+f+"'"));}assert(sw.includes('20261104-visual-catalog-r1'));
});
