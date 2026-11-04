"use strict";
const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const M=require('../model.js'),D=require('../data.js');
const batches=['01-10','11-20','21-30'].flatMap(part=>JSON.parse(fs.readFileSync(path.join(__dirname,'../programs-'+part+'.json'),'utf8')));
function setup(ids,date='2026-11-16'){
 const s=M.empty();s.profile=M.profileOf({location:'home',days:6,level:'advanced',homeEquipment:[],goal:'hypertrophy'});s.selectedDate=date;
 for(const id of ids){M.setActive(s,id,true);s.programSettings[id].startedOn='2026-11-02';}
 return s;
}
test('runtime catalog equals original and expanded JSON without changing the original 30 plans',()=>{
 const extra=JSON.parse(fs.readFileSync(path.join(__dirname,'../programs-expanded.json'),'utf8'));
 assert.deepEqual(D.programs,[...batches,...extra]);assert.equal(D.programs.length,195);
 assert.deepEqual(D.programs.map(p=>p.programNumber),Array.from({length:195},(_,i)=>i+1));
 assert.equal(new Set(D.programs.map(p=>p.id)).size,195);
 assert.equal(new Set(D.programs.map(p=>JSON.stringify(p.schedule.map(d=>d.exercises)))).size,195);
 assert.deepEqual(D.programs.slice(20,30).map(p=>p.name),['Push-Up Progression','Kettlebell Conditioning','Core Stability & Back Health','Mobility & Posture Fix','Outdoor Calisthenics','Run + Strength Hybrid','Athletic Power','Stair & Hill Conditioning','Low-Impact Strength','Summer Shred']);
 assert.deepEqual(['gym','home','outdoor','any'].map(location=>batches.filter(p=>p.location===location).length),[15,9,4,2]);
});
test('every native program resolves to trackable sessions for every block week and stage',()=>{
 for(const p of D.programs)for(let week=1;week<=p.durationWeeks;week++)for(const stage of p.skillStages||[{id:''}]){
  const s=M.empty();s.programSettings[p.id]={startedOn:'2026-11-02',stage:stage.id,dayShift:0,exerciseChoices:{}};
  s.selectedDate=M.addDays('2026-11-02',(week-1)*7);
  const plan=M.planById(s,p.id);assert.equal(plan.week,week);
  for(const w of plan.workouts){
   assert(w.exercises.length>0);const session=M.newSession(s,plan,w,s.selectedDate);
   const candidate=M.clone(s);candidate.sessions[session.id]=session;
   assert(M.validate(candidate).sessions[session.id]);
   assert(session.warmup.length>=3);
   for(const e of session.exercises){assert(M.catalog[e.exerciseId]);assert(e.min>0&&e.max>=e.min);assert(['reps','seconds','metres'].includes(e.unit));}
  }
 }
});
test('bodyweight recommendations never invent equipment or exceed experience and available days',()=>{
 for(const location of ['gym','home','outdoor'])for(const level of M.levels)for(const days of [2,3,4,5,6])for(const goal of M.trainingGoals){
  const profile={location,level,days,goal,homeEquipment:[]},result=M.recommend(profile);
  if(!result.program)continue;
  assert(M.eligiblePrograms(profile,[result.program]).length);
  assert(result.program.daysPerWeek<=days);
  assert(M.levels.indexOf(result.program.level)<=M.levels.indexOf(level));
 }
 assert.equal(M.recommend({location:'home',goal:'hypertrophy',level:'beginner',days:3,homeEquipment:[]}).program.id,'home-bodyweight-basics');
 assert.equal(M.recommend({location:'gym',goal:'hypertrophy',level:'intermediate',days:4}).program.id,'upper-lower');
 assert.equal(M.recommend({location:'outdoor',goal:'skill',level:'advanced',days:3}).program.id,'athletic-power');
});
test('setup capabilities prevent a short band or high doorway bar from being assumed suitable',()=>{
 const p18=M.nativeById['resistance-band-total-body'],p20=M.nativeById['pull-up-mastery'];
 assert.equal(M.eligiblePrograms({location:'home',homeEquipment:['resistance-bands']},[p18]).length,0);
 assert.equal(M.eligiblePrograms({location:'home',homeEquipment:['resistance-bands'],longBands:true},[p18]).length,1);
 assert.equal(M.eligiblePrograms({location:'home',homeEquipment:['pull-up-bar']},[p20]).length,0);
 assert.equal(M.eligiblePrograms({location:'home',homeEquipment:['pull-up-bar'],barSupportsFootAssistance:true},[p20]).length,1);
});
test('all available programs can be bookmarked without activation and activation has no single-program limit',()=>{
 const s=M.empty();for(const p of D.programs)M.bookmark(s,p.id);
 assert.equal(s.bookmarks.length,D.programs.length);assert.equal(s.activePrograms.length,0);
 for(const p of D.programs)M.setActive(s,p.id,true);
 assert.equal(s.activePrograms.length,D.programs.length);assert(s.bookmarks.every(b=>b.active));
 M.setActive(s,D.programs[0].id,false);assert.equal(s.activePrograms.length,D.programs.length-1);assert.equal(s.bookmarks.length,D.programs.length);
 M.bookmark(s,D.programs[1].id,false);assert.equal(s.activePrograms.length,D.programs.length-2);assert.equal(s.bookmarks.length,D.programs.length-1);
 assert.throws(()=>M.bookmark(s,'missing-program'));
});
test('saving an inactive program does not start its block clock',()=>{
 let s=M.empty();M.bookmark(s,'upper-lower');
 s=M.validate(JSON.parse(JSON.stringify(s)));
 assert.equal(s.programSettings['upper-lower'].startedOn,null);
 M.setActive(s,'upper-lower',true);
 assert.equal(s.programSettings['upper-lower'].startedOn,M.monday(M.today()));
});
test('bookmarks, active programs, schedule preferences, setup checks and video choices round-trip',()=>{
 const s=setup(['home-bodyweight-basics','push-up-progression']);
 s.restSeconds=300;s.profile.longBands=true;s.profile.barSupportsFootAssistance=true;s.onboardingAnswers=M.clone(s.profile);
 s.programSettings['push-up-progression'].dayShift=1;s.programSettings['push-up-progression'].stage='full';
 s.programSettings['home-bodyweight-basics'].exerciseChoices={'wall-pushup':'knee-pushup'};
 const video=D.reviewedVideos.squat.id;
 s.videoOverrides.squat=video;s.videoHealth.squat={videoId:video,status:'unavailable',code:100,checkedAt:'2026-11-16T12:00:00Z'};
 const restored=M.validate(JSON.parse(JSON.stringify(s)));
 for(const key of ['bookmarks','activePrograms','programSettings','profile','onboardingAnswers','videoOverrides','videoHealth','restSeconds'])assert.deepEqual(restored[key],s[key]);
});
test('malformed selections are deduplicated and cannot activate unbookmarked or unknown programs',()=>{
 const s=M.empty(),raw=M.clone(s);
 raw.bookmarks=[{programId:'upper-lower',active:true},{programId:'upper-lower',active:true},{programId:'not-real',active:true}];
 raw.activePrograms=['not-real','home-bodyweight-basics','upper-lower'];
 raw.programSettings={'upper-lower':{startedOn:'invalid',dayShift:99,stage:'invalid'}};
 raw.videoOverrides={'squat':'<script>','barbell-bench':''};
 const restored=M.validate(raw);
 assert.deepEqual(restored.activePrograms,['upper-lower']);assert.equal(restored.bookmarks.length,1);
 assert.equal(restored.programSettings['upper-lower'].dayShift,0);
 assert.equal(restored.videoOverrides.squat,undefined);assert.equal(restored.videoOverrides['barbell-bench'],'');
});
test('old v4 profile and selected plan migrate without dropping logs or the chosen routine',()=>{
 const old=M.empty();delete old.catalogVersion;old.onboarded=true;old.activePlan='full2-beginner-muscle';old.profile={goal:'muscle',level:'beginner',days:2,equipment:'Gym'};
 const p=M.makePlan('full2'),w=p.workouts[0],session=M.newSession(old,p,w,'2026-10-20');session.exercises[0].sets[0]={kg:'12',reps:'8',done:true};old.sessions[session.id]=session;
 const migrated=M.validate(JSON.parse(JSON.stringify(old)));
 assert.equal(migrated.profile.goal,'hypertrophy');assert(migrated.activePrograms.includes(old.activePlan));
 assert.equal(migrated.sessions[session.id].exercises[0].sets[0].kg,'12');
});
test('combined calendar retains every active program and honors weekday shifts',()=>{
 const s=setup(['home-bodyweight-basics','push-up-progression']);
 s.programSettings['push-up-progression'].dayShift=1;
 const week=M.calendar(s,s.selectedDate);
 assert.equal(week.length,7);assert.equal(week.reduce((n,d)=>n+d.sessions.length,0),6);
 assert(week[0].sessions.some(x=>x.programId==='home-bodyweight-basics'));
 assert(week[1].sessions.some(x=>x.programId==='push-up-progression'));
 assert.equal(week[6].sessions.length,0);
});
test('combined workload detects consecutive exposure, over-25 volume and absence of a rest day',()=>{
 const s=setup(['home-bodyweight-basics','push-up-progression','summer-shred']);
 s.programSettings['push-up-progression'].dayShift=1;
 let report=M.overlapWarnings(s,s.selectedDate);
 assert(report.consecutive.some(x=>x.from===1&&x.to===2&&x.muscles.includes('pectorals')));
 assert.equal(report.highVolume.find(x=>x.muscle==='pectorals').sets,28);
 M.setActive(s,'mobility-posture-fix',true);s.programSettings['mobility-posture-fix']={startedOn:'2026-11-02',dayShift:2,stage:'',exerciseChoices:{}};
 report=M.overlapWarnings(s,s.selectedDate);assert.equal(report.restDays,0);
});
test('consecutive-day checks include Sunday into the following Monday',()=>{
 const s=setup(['home-bodyweight-basics','push-up-progression']);
 s.programSettings['home-bodyweight-basics'].dayShift=6;
 assert(M.overlapWarnings(s,s.selectedDate).consecutive.some(x=>x.from===7&&x.to===1&&x.muscles.includes('pectorals')));
});
test('conditioning and gentle mobility do not inflate hypertrophy set totals',()=>{
 const s=setup(['home-hiit-fat-burner','mobility-posture-fix']);
 assert.equal(Object.keys(M.overlapWarnings(s,s.selectedDate).weekly).length,0);
});
test('intro weeks, ability stages and deloads change targets without mutating the source',()=>{
 const p=M.nativeById['pull-up-mastery'],source=JSON.stringify(p),day=p.schedule[2];
 const foundation=M.resolveDay(p,day,1,{stage:'foundation'});
 assert(!foundation.exercises.some(e=>e.exerciseId==='negative-pullup'));
 assert(foundation.exercises.filter(e=>e.hardSet).every(e=>e.sets<=2));
 const strict=M.resolveDay(p,day,3,{stage:'strict-reps'});
 assert(strict.exercises.some(e=>e.exerciseId==='strict-pullup'));
 assert(!strict.exercises.some(e=>e.exerciseId==='negative-pullup'));
 const deload=M.resolveDay(p,day,4,{stage:'strict-reps'});
 assert(!deload.exercises.some(e=>e.exerciseId==='strict-pullup'||e.exerciseId==='negative-pullup'));
 assert(deload.exercises.filter(e=>e.rir!==null&&e.hardSet).every(e=>e.rir>=4));
 const novice=M.nativeById['beginner-foundations'];
 assert(M.resolveDay(novice,novice.schedule[0],1,{}).exercises.every(e=>e.sets<=2));
 assert.equal(JSON.stringify(p),source);
});
test('seconds and metres log and validate while tonnage only uses repetition-based work',()=>{
 const s=M.empty(),p=M.planById(s,'kettlebell-conditioning'),w=p.workouts[0],session=M.newSession(s,p,w,'2026-11-03');
 const carry=session.exercises.find(e=>e.unit==='metres');assert(carry);
 carry.sets[0]={kg:'20',reps:'20',done:true};s.sessions[session.id]=session;
 assert.equal(M.totals(session).volume,0);
 const copy=M.validate(JSON.parse(JSON.stringify(s)));assert.equal(copy.sessions[session.id].exercises.find(e=>e.unit==='metres').sets[0].reps,'20');
 const target=M.defaultTarget('march');assert.equal(target.unit,'seconds');
 const entry=M.newEntry(s,target,'2026-11-04');entry.sets[0]={kg:'',reps:'1500',done:true};
 const custom={id:'custom-time',name:'Timed',workouts:[{id:'a',title:'Timed',short:'Timed',exercises:[target]}]};s.customPlans.push(custom);
 const timed=M.newSession(s,custom,custom.workouts[0],'2026-11-04');timed.exercises=[entry];s.sessions[timed.id]=timed;
 assert(M.validate(s).sessions[timed.id]);timed.exercises[0].sets[0].reps='9000';assert.throws(()=>M.validate(s));
});
test('recorded target snapshots are retained when later stage or week preferences change',()=>{
 const s=setup(['push-up-progression']);s.activePlan='push-up-progression';s.activeWorkout='day-1';
 const old=M.activeSession(s);old.exercises[0].sets[0].reps='10';old.exercises[0].sets[0].done=true;
 s.programSettings['push-up-progression'].stage='advanced';
 assert.equal(M.activeSession(s).exercises[0].exerciseId,'wall-pushup');
 assert.equal(M.validate(s).sessions[old.id].exercises[0].exerciseId,'wall-pushup');
});
test('completed blocks stop populating the calendar and can be reactivated as a new block',()=>{
 const s=setup(['home-bodyweight-basics'],'2027-01-04');
 assert(M.blockComplete(s,'home-bodyweight-basics',s.selectedDate));
 assert(M.calendar(s,s.selectedDate).every(d=>!d.sessions.length));
 M.setActive(s,'home-bodyweight-basics',false);M.setActive(s,'home-bodyweight-basics',true);
 assert.equal(s.programSettings['home-bodyweight-basics'].startedOn,M.monday(M.today()));
});
test('video ID parsing accepts actual existing selections and rejects arbitrary origins or malformed text',()=>{
 const id=M.exerciseLibrary.squat.legacyVideo.id;
 for(const value of [id,'https://youtu.be/'+id,'https://www.youtube.com/watch?v='+id,'https://www.youtube.com/embed/'+id,'https://youtube.com/shorts/'+id])assert.equal(M.parseVideoId(value),id);
 for(const value of ['!invalid!','https://example.com/watch?v='+id,'javascript:alert(1)'])assert.equal(M.parseVideoId(value),null);
 assert.equal(M.parseVideoId(''),'');
 const s=M.empty();assert.equal(M.videoIdFor(s,'squat'),D.reviewedVideos.squat.id);s.videoOverrides.squat='';assert.equal(M.videoIdFor(s,'squat'),'');
});
test('offline shell includes every shipped runtime file and the video-selection list',()=>{
 const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8'),sw=fs.readFileSync(path.join(__dirname,'../sw.js'),'utf8');
 for(const file of ['exercises.js','exercises-expanded.js','programs.js','programs-expanded.js','catalog.js','data.js','program-model.js','model.js','program-ui.js','app.js']){
  assert(html.includes('src="./'+file+'"'));assert(sw.includes("'./"+file+"'"));assert(fs.existsSync(path.join(__dirname,'..',file)));
 }
 assert(html.indexOf('src="./programs.js"')<html.indexOf('src="./data.js"'));
 assert(html.indexOf('src="./program-model.js"')<html.indexOf('src="./model.js"'));
 const csv=fs.readFileSync(path.join(__dirname,'../EXERCISE_VIDEO_SELECTION.csv'),'utf8').trim().split(/\r?\n/);
 assert.equal(csv.length,D.exercises.length+1);assert(sw.includes("'./EXERCISE_VIDEO_SELECTION.csv'"));
 for(const line of csv.slice(1))assert(line.includes('tutorial'));
});
