const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const M=require('../model.js'),D=require('../data.js');
const profile={gender:'prefer-not',weight:'',goal:'muscle',level:'beginner',days:3,equipment:'Gym'};
function historical(state,id,weight=20){const p=M.makePlan('full2','intermediate','muscle'),w={id:'a',title:'Example',exercises:[{exerciseId:id,sets:2,min:8,max:12}]};const s=M.newSession(state,p,w,'2026-10-01');s.completedAt='2026-10-01T12:00:00Z';s.exercises[0].sets=[{kg:String(weight),reps:'12',done:true},{kg:String(weight),reps:'10',done:true}];state.sessions[s.id]=s;return s;}
test('all selectable exercises have instructions and existing demonstrations keep their original metadata',()=>{assert.equal(D.catalog.length,113);assert.equal(new Set(D.catalog.map(c=>c.id)).size,D.catalog.length);const old=D.catalog.filter(c=>c.video);assert.equal(old.length,42);for(const c of old){assert.match(c.video.id,/^[a-zA-Z0-9_-]{11}$/);assert.match(c.video.source,/^https:\/\//);assert.equal(c.video.verifiedAt,'2026-10-31');}for(const c of D.catalog)assert(c.instructions.length>=3);});
test('every starter variation has valid exercises and workable targets',()=>{for(const base of D.base.filter(p=>!p.legacy))for(const level of M.levels)for(const goal of M.goals){const p=M.makePlan(base.id,level,goal);assert.equal(p.workouts.length,base.days);for(const w of p.workouts)for(const e of w.exercises){assert(M.catalog[e.exerciseId]);assert(e.sets>=2&&e.sets<=4);assert(e.min<=e.max);if(level==='beginner')assert.notEqual(e.exerciseId,'dips');}}});
test('recommendation respects equipment, experience and maximum available days',()=>{for(const days of [2,3,4,5,6]){const r=M.recommend({...profile,days});assert(r.plan.days<=days);assert.equal(r.plan.level,'beginner');}assert.equal(M.recommend({...profile,level:'intermediate',days:4,goal:'hypertrophy'}).plan.id,'upper-lower');assert.equal(M.recommend({...profile,level:'intermediate',days:4,location:'home',homeEquipment:['dumbbells'],goal:'strength'}).plan.id,'home-dumbbell-builder');assert.equal(M.recommend({...profile,goal:'strength',level:'advanced',days:4}).plan.id,'shortcut-to-strength');});
test('gender and body weight do not invent sex-based programs or starting loads',()=>{assert.deepEqual(M.recommend({...profile,gender:'woman',weight:55}).plan,M.recommend({...profile,gender:'man',weight:95}).plan);const s=M.newSession(M.empty(),M.recommend(profile).plan,M.recommend(profile).plan.workouts[0],'2026-10-31');assert(s.exercises.every(e=>e.sets.every(s=>s.kg==='')));});
test('previous loads match the exact exercise and do not copy repetitions',()=>{const state=M.empty();historical(state,'bench',25);const entry=M.newEntry(state,{exerciseId:'bench',sets:3,min:8,max:12},'2026-10-31');assert.deepEqual(entry.sets.map(s=>s.kg),['25','25','']);assert(entry.sets.every(s=>s.reps===''&&!s.done));assert.equal(M.previousExercise(state,'incline','2026-10-31'),null);});
test('ambiguous legacy barbell/dumbbell entries do not carry loads into a specific variation',()=>{const s=M.empty(),h=historical(s,'incline',80);h.exercises[0].name='Incline BB / DB Press';assert.equal(M.previousExercise(s,'incline','2026-10-31'),null);});
test('bodyweight results count even with no added weight',()=>{const s={exercises:[{sets:[{kg:'',reps:'10',done:true},{kg:'0',reps:'8',done:true},{kg:'20',reps:'',done:false}]}]};assert.deepEqual(M.totals(s),{total:3,done:2,volume:0});});
test('old five-day sessions migrate without losing weights, reps or history',()=>{const sessions={};for(const w of D.legacy){const id=`2026-10-01::D${w.n}`;sessions[id]={id,day:w.n,date:'2026-10-01',completedAt:'2026-10-01T12:00:00Z',exercises:w.exercises.map(e=>({name:e.name,sets:Array.from({length:e.sets},()=>({kg:'42.5',reps:'8',done:true}))}))};}const old={version:3,activeDay:4,selectedDate:'2026-10-31',sessions},original=JSON.stringify(old),migrated=M.migrate(old);assert.equal(JSON.stringify(old),original);assert.equal(migrated.activeWorkout,'d4');assert.equal(Object.keys(migrated.sessions).length,5);for(const s of Object.values(migrated.sessions)){assert(s.completedAt);assert(s.exercises.every(e=>M.catalog[e.exerciseId]&&e.sets.every(s=>s.kg==='42.5'&&s.reps==='8')));}assert.deepEqual(M.validate(migrated),migrated);});
test('malformed backup, invalid values, prototype keys and invalid dates are rejected',()=>{assert.throws(()=>M.validate({version:4,sessions:{},customPlans:'bad'}));const state=M.empty();historical(state,'bench');const bad=M.clone(state);Object.values(bad.sessions)[0].exercises[0].sets[0].kg='-10';assert.throws(()=>M.validate(bad));const wrongDate=M.clone(state);Object.values(wrongDate.sessions)[0].date='2026-02-31';assert.throws(()=>M.validate(wrongDate));assert.throws(()=>M.validate(JSON.parse('{"version":4,"customPlans":[],"sessions":{"__proto__":{}}}')));assert.throws(()=>M.profileOf({...profile,weight:-10}));});
test('custom program edits cannot change logged session snapshots',()=>{const state=M.empty();state.customPlans=[{id:'custom-example',name:'My plan',workouts:[{id:'a',title:'My day',short:'My day',exercises:[{exerciseId:'goblet',sets:2,min:8,max:12}]}]}];state.activePlan='custom-example';state.activeWorkout='a';const active=M.activeSession(state);state.customPlans[0].workouts[0].exercises[0].exerciseId='squat';assert.equal(active.exercises[0].exerciseId,'goblet');assert.equal(M.validate(state).sessions[active.id].exercises[0].exerciseId,'goblet');});
test('custom program targets validate across every day',()=>{const state=M.empty();state.customPlans=[{id:'custom-example',name:'My plan',workouts:[{id:'a',title:'Day A',exercises:[{exerciseId:'goblet',sets:2,min:12,max:8}]}]}];assert.throws(()=>M.validate(state));state.customPlans[0].workouts[0].exercises[0].min=8;assert.equal(M.validate(state).customPlans.length,1);});
test('selection keys keep old and new workouts separate on the same date',()=>{const state=M.empty();const original=M.activeSession(state);const plan=M.makePlan('full2');state.activePlan=plan.id;state.activeWorkout='a';const next=M.activeSession(state);assert.notEqual(original.id,next.id);assert.equal(Object.keys(state.sessions).length,2);assert.equal(M.validate(state).activePlan,plan.id);});
test('offline worker caches the complete shell and leaves unrelated caches and requests alone',async()=>{const handlers={},removed=[],cacheNames=[],cachedFiles=[],responses=[];const cache={addAll:async files=>cachedFiles.push(...files),match:async()=>({cached:true})};const context={URL,self:{location:new URL('https://example.com/forge/sw.js'),addEventListener:(name,fn)=>handlers[name]=fn,skipWaiting:async()=>{},clients:{claim:async()=>{}}},caches:{open:async name=>{cacheNames.push(name);return cache;},keys:async()=>['forge-tracker-v1','unrelated-app-cache'],delete:async name=>removed.push(name)},fetch:async()=>{throw Error('offline');}};vm.runInNewContext(fs.readFileSync(require.resolve('../sw.js'),'utf8'),context);let pending;handlers.install({waitUntil:p=>pending=p});await pending;for(const file of ['app.js','model.js','data.js','exercises.js','styles.css','theme.js'])assert(cachedFiles.includes('./'+file));handlers.activate({waitUntil:p=>pending=p});await pending;assert.deepEqual(removed,['forge-tracker-v1']);for(const url of ['https://www.youtube-nocookie.com/embed/example','https://example.com/other.js'])handlers.fetch({request:{method:'GET',url},respondWith:p=>responses.push(p)});assert.equal(responses.length,0);handlers.fetch({request:{method:'GET',url:'https://example.com/forge/app.js'},respondWith:p=>responses.push(p)});assert.equal((await responses[0]).cached,true);});

test('all home equipment combinations exclude unselected items and other locations',()=>{
 const equipment=M.homeEquipmentIds;
 const fixtures=[
  {id:'bodyweight',location:'home',requiredEquipment:[]},
  ...equipment.map(id=>({id,location:'home',requiredEquipment:[id]})),
  {id:'bench-needed',location:'home',requiredEquipment:['dumbbells','bench']},
  {id:'gym',location:'gym',requiredEquipment:[]},
  {id:'park',location:'outdoor',requiredEquipment:['park-equipment']},
  {id:'any',location:'any',requiredEquipment:['bodyweight']},
  {id:'unknown',location:'any',requiredEquipment:['unknown-item']}
 ];
 for(let mask=0;mask<16;mask++){
  const selected=equipment.filter((_,i)=>mask&(1<<i));
  const actual=M.eligiblePrograms({...profile,location:'home',homeEquipment:selected},fixtures).map(p=>p.id).sort();
  assert.deepEqual(actual,['bodyweight','any',...selected].sort());
 }
});
test('gym includes free weights, machines, benches, racks, and bars; outdoor uses park equipment',()=>{
 const fixtures=['barbell','dumbbells','kettlebell','cable-machine','plate-loaded-machine','selectorized-machine','bench','rack','pull-up-bar'].map(item=>({id:item,location:'gym',requiredEquipment:[item]}));
 assert.equal(M.eligiblePrograms({...profile,location:'gym'},fixtures).length,fixtures.length);
 assert.deepEqual(M.eligiblePrograms({...profile,location:'outdoor'},fixtures),[]);
 assert.equal(M.eligiblePrograms({...profile,location:'outdoor'},[{location:'outdoor',requiredEquipment:['park-equipment','bodyweight','running']}]).length,1);
});
test('profile migration and saved onboarding choices survive validation without injecting gym equipment into home',()=>{
 assert.equal(M.profileOf({...profile,equipment:'Dumbbells'}).location,'home');
 assert.deepEqual(M.profileOf({...profile,location:'home',homeEquipment:['gym-equipment','bench','dumbbells','dumbbells']}).homeEquipment,['dumbbells']);
 const state=M.empty();state.profile=M.profileOf({...profile,location:'home',homeEquipment:[]});
 state.onboardingAnswers=M.profileOf({...profile,location:'home',homeEquipment:['resistance-bands','pull-up-bar']});
 const restored=M.validate(JSON.parse(JSON.stringify(state)));
 assert.deepEqual(restored.onboardingAnswers,state.onboardingAnswers);
 assert.deepEqual(restored.profile.homeEquipment,[]);
 assert.equal(M.recommend(restored.profile).plan.id,'home-bodyweight-basics');
 assert(M.eligiblePrograms({...profile,location:'outdoor'},[M.recommend({...profile,location:'outdoor'}).program]).length);
});
test('a defined program catalog never falls back to an incompatible gym plan',()=>{
 const previous=D.programs;
 try{
  D.programs=[M.nativeById['shortcut-to-strength']];
  assert.equal(M.recommend({...profile,location:'home',homeEquipment:[]}).plan,null);
  assert.equal(M.recommend({...profile,location:'gym',goal:'strength',level:'intermediate',days:4}).plan.id,'shortcut-to-strength');
  D.programs=[];
  assert.equal(M.recommend({...profile,location:'gym'}).plan,null);
 }finally{if(previous===undefined)delete D.programs;else D.programs=previous;}
});

test('central exercise records are complete and video IDs await user selection',()=>{
 const exercises=D.exercises;
 assert.equal(exercises.length,113);
 assert.equal(new Set(exercises.map(e=>e.id)).size,exercises.length);
 assert.equal(new Set(exercises.map(e=>e.name.toLowerCase())).size,exercises.length);
 const equipment=new Set(['bodyweight','barbell','rack','bench','dumbbells','free-weights','resistance-bands','pull-up-bar','kettlebell','cable-machine','plate-loaded-machine','selectorized-machine','park-equipment','running','dip-bars','ab-wheel']);
 for(const e of exercises){
  assert.match(e.id,/^[a-z0-9-]+$/);
  assert(e.primaryMuscles.length>0);assert(Array.isArray(e.secondaryMuscles));
  assert(e.equipment.length>0);assert(e.equipment.every(item=>equipment.has(item)));
  assert(M.levels.includes(e.difficulty));
  assert(e.instructions.length>=3&&e.instructions.every(step=>typeof step==='string'&&step.length>15));
  assert(e.commonMistakes.length>=2&&e.commonMistakes.every(step=>typeof step==='string'&&step.length>10));
  assert.equal(e.youtubeVideoId,'');
  assert(e.youtubeSearchQuery.includes(e.name));assert(e.youtubeSearchQuery.includes('tutorial'));
  assert(['reps','seconds','metres'].includes(e.trackingUnit));
  for(const alt of [e.homeAlternativeId,e.outdoorAlternativeId]){
   assert(alt===null||(M.exerciseLibrary[alt]&&alt!==e.id),'Invalid alternative for '+e.id);
  }
  assert.equal(M.exerciseLibrary[e.id],e);
 }
});
test('logger catalog is derived from the central library and preserves all existing routine references',()=>{
 assert.equal(D.catalog.length,113);
 for(const e of D.catalog){
  const source=M.exerciseLibrary[e.id];assert(source);
  assert.equal(e.name,source.name);assert.equal(e.video,source.legacyVideo);
  assert.equal(e.instructions,source.instructions);
  assert.equal(e.equipment,source.equipmentLabel);
 }
 for(const plan of D.base)for(const day of plan.workouts)for(const target of day.exercises){
  assert(M.exerciseLibrary[target.exerciseId]);assert(M.catalog[target.exerciseId]);
 }
});
test('all 30 planned programs and warm-ups resolve to complete central exercise records',()=>{
 const coverage=D.programExerciseCoverage;
 assert.deepEqual(coverage.map(p=>p.programNumber),Array.from({length:30},(_,i)=>i+1));
 assert.equal(new Set(coverage.map(p=>p.programId)).size,30);
 const used=new Set();
 for(const p of coverage){
  assert(p.exerciseIds.length>0);assert(p.warmupExerciseIds.length>0);
  assert.equal(new Set(p.exerciseIds).size,p.exerciseIds.length);
  for(const id of [...p.exerciseIds,...p.warmupExerciseIds]){assert(M.exerciseLibrary[id]);used.add(id);}
 }
 assert.equal(used.size,D.exercises.length);
});
test('planned home equipment inventories contain no hidden bench, rack, or anchor requirements',()=>{
 const limits={
  16:['bodyweight'],17:['bodyweight','dumbbells'],18:['bodyweight','resistance-bands'],
  19:['bodyweight'],20:['bodyweight','pull-up-bar'],21:['bodyweight'],
  22:['bodyweight','kettlebell'],23:['bodyweight'],24:['bodyweight'],29:['bodyweight'],30:['bodyweight']
 };
 for(const [number,equipment] of Object.entries(limits)){
  const p=D.programExerciseCoverage.find(p=>p.programNumber===Number(number));
  for(const id of [...p.exerciseIds,...p.warmupExerciseIds]){
   assert(M.exerciseLibrary[id].equipment.every(item=>equipment.includes(item)),p.programId+' needs unexpected equipment for '+id);
  }
 }
});
test('gym and outdoor availability support the equipment in their planned inventories',()=>{
 for(const p of D.programExerciseCoverage.filter(p=>p.programNumber<=15||p.programNumber>=25&&p.programNumber<=28)){
  const location=p.programNumber<=15?'gym':'outdoor';
  const requiredEquipment=[...new Set([...p.exerciseIds,...p.warmupExerciseIds].flatMap(id=>M.exerciseLibrary[id].equipment))];
  assert.equal(M.eligiblePrograms({...profile,location},[{id:p.programId,location,requiredEquipment}]).length,1,p.programId);
 }
});
