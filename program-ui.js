"use strict";
globalThis.ForgeProgramUI=ctx=>{
  const {M,D,$,esc,pretty,toast,save,openModal,closeModal,modalHead,selectPlan,setView,startSetup,videoModal}=ctx;
  const state=ctx.getState;
  const filters={level:'all',goal:'all',location:'all',days:'all',saved:'all',fits:true,search:''};
  const label=value=>String(value||'').replaceAll('-',' ').replaceAll('_',' ');
  const goalText=value=>M.goalLabels[value]||label(value);
  const names=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  const marked=id=>state().bookmarks.some(b=>b.programId===id);
  const active=id=>state().activePrograms.includes(id);
  const compatible=p=>!!state().profile&&M.eligiblePrograms(state().profile,[p]).length>0;
  function range(e){return e.durationSeconds?e.durationSeconds+' sec':e.distanceMetres?e.distanceMetres+' m':e.min===e.max?String(e.min):e.min+'–'+e.max;}
  function prescription(e){
    const c=M.exerciseLibrary[e.exerciseId];
    return '<div class="prescription"><div><strong>'+esc(c?.name||e.exerciseId)+'</strong><small>'+e.sets+' × '+esc(range(e))+(e.perSide?' per side':'')+' · rest '+e.restSeconds+'s'+(e.rir===null?'':' · '+e.rir+' RIR')+'</small>'+(e.intensityNote?'<p>'+esc(e.intensityNote)+'</p>':'')+(e.loadPercentagesOfWorkingWeight?'<p>Warm-up loads: '+e.loadPercentagesOfWorkingWeight.join(' / ')+'% of this session’s working load.</p>':'')+'</div><button class="text-button" data-action="video" data-id="'+esc(e.exerciseId)+'">Technique</button></div>';
  }
  function warningsHTML(report){
    if(state().activePrograms.length<2)return '';
    const items=[];
    if(report.consecutive.length)items.push('<li><strong>Back-to-back muscle exposure</strong><ul>'+report.consecutive.map(x=>'<li>'+names[x.from-1]+' → '+names[x.to-1]+': '+esc(x.muscles.map(label).join(', '))+'</li>').join('')+'</ul></li>');
    if(report.highVolume.length)items.push('<li><strong>Over about 25 weekly hard sets</strong><p>'+esc(report.highVolume.map(x=>label(x.muscle)+' ('+x.sets+')').join(', '))+'</p></li>');
    if(report.restDays<1)items.push('<li><strong>No full rest day</strong><p>Your combined schedule has planned training on all seven days.</p></li>');
    const labels=[];if(report.consecutive.length)labels.push('back-to-back muscle exposure');if(report.highVolume.length)labels.push('high weekly volume');if(report.restDays<1)labels.push('no rest day');
    return items.length?'<details class="notice overlap-warning"><summary>Review: '+labels.join(' · ')+'</summary><ul>'+items.join('')+'</ul><p>Weekly estimates count primary sets once and indirect sets as half. These are planning estimates. Conditioning can also create consecutive muscle exposure; gentle mobility practice is excluded.</p></details>':'<p class="notice">The combined week has '+report.restDays+' rest day'+(report.restDays===1?'':'s')+' and no overlap flags at the current settings.</p>';
  }
  function card(p){
    const fits=compatible(p);
    return '<article class="plan-card'+(active(p.id)?' selected':'')+'" data-program="'+p.id+'"><span class="pill">'+p.programNumber+' · '+esc(label(p.location))+'</span><div><h3>'+esc(p.name)+'</h3><p>'+pretty(p.level)+' · '+esc(goalText(p.goal))+'</p></div><p>'+esc(p.description)+'</p><p class="program-facts">'+p.daysPerWeek+' days/week · up to '+p.sessionLengthMinutes+' min · '+p.durationWeeks+' weeks</p>'+(!fits&&state().profile?'<small class="mismatch">Different equipment or location from your profile</small>':'')+'<div class="plan-buttons"><button class="button" data-action="preview-plan" data-id="'+p.id+'">View plan</button><button class="button subtle" data-action="bookmark" data-id="'+p.id+'" aria-pressed="'+marked(p.id)+'">'+(marked(p.id)?'★ Saved':'☆ Save')+'</button><button class="button '+(active(p.id)?'subtle':'primary')+'" data-action="toggle-active" data-id="'+p.id+'">'+(active(p.id)?'Deactivate':'Activate')+'</button></div></article>';
  }
  function renderPlans(){
    const rec=state().profile?M.recommend(state().profile):null;
    $('#viewPlans').innerHTML='<div class="section-top"><div><div class="eyebrow">30 ORIGINAL PROGRAMS</div><h2>Find your next training block.</h2><p>Save as many as you like. Activate one or more and review the combined week.</p></div><button class="button" data-action="setup">Update profile</button></div>'+
      (rec?'<div class="recommendation"><span class="pill">SUGGESTED FOR YOU</span><h3>'+esc(rec.plan?.name||'No matching program')+'</h3><p>'+esc(rec.reason)+' '+esc(rec.adjustment)+'</p>'+(rec.plan?'<button class="button primary" data-action="preview-plan" data-id="'+rec.plan.id+'">Review suggestion</button>':'')+'</div>':'')+
      '<div class="catalog-toolbar"><label>Search<input id="catalogSearch" type="search" value="'+esc(filters.search)+'" placeholder="Name or description"></label><label>Level<select id="catalogLevel"><option value="all">All levels</option>'+M.levels.map(x=>'<option value="'+x+'" '+(filters.level===x?'selected':'')+'>'+pretty(x)+'</option>').join('')+'</select></label><label>Goal<select id="catalogGoal"><option value="all">All goals</option>'+M.trainingGoals.map(x=>'<option value="'+x+'" '+(filters.goal===x?'selected':'')+'>'+esc(goalText(x))+'</option>').join('')+'</select></label><label>Location<select id="catalogLocation"><option value="all">All locations</option>'+['gym','home','outdoor','any'].map(x=>'<option value="'+x+'" '+(filters.location===x?'selected':'')+'>'+pretty(x)+'</option>').join('')+'</select></label><label>Schedule<select id="catalogDays"><option value="all">Any schedule</option>'+[2,3,4,5,6].map(n=>'<option value="'+n+'" '+(String(filters.days)===String(n)?'selected':'')+'>'+n+' days</option>').join('')+'</select></label><label>Selection<select id="catalogSaved">'+[['all','All programs'],['saved','Saved programs'],['active','Active programs']].map(([v,l])=>'<option value="'+v+'" '+(filters.saved===v?'selected':'')+'>'+l+'</option>').join('')+'</select></label></div>'+
      '<label class="filter-check"><input id="catalogFits" type="checkbox" '+(filters.fits?'checked':'')+'> Match my location and equipment</label><p id="catalogCount" role="status"></p><div class="plan-grid" id="planGrid"></div><section class="custom-plans"><h3>Your own programs</h3><button class="button" data-action="builder">Create custom plan</button><div class="plan-grid">'+state().customPlans.map(p=>'<article class="plan-card"><h3>'+esc(p.name)+'</h3><p>'+p.days+' sessions</p><button class="button" data-action="choose-custom" data-id="'+esc(p.id)+'">Open & activate</button><button class="button subtle" data-action="edit-custom" data-id="'+esc(p.id)+'">Edit</button><button class="text-button" data-action="bookmark" data-id="'+esc(p.id)+'">'+(marked(p.id)?'★ Saved':'☆ Save')+'</button>'+(active(p.id)?'<button class="text-button" data-action="toggle-active" data-id="'+esc(p.id)+'">Deactivate</button>':'')+'</article>').join('')+'</div></section>'+
      '<details class="help"><summary>Previous routines and training history</summary><p>Your previously selected routines and logged sessions are preserved. The new catalog above contains exactly 30 programs.</p>'+[...new Set(state().bookmarks.filter(b=>!M.nativeById[b.programId]&&!b.programId.startsWith('custom-')).map(b=>b.programId))].map(id=>'<button class="button" data-action="choose-plan" data-id="'+esc(id)+'">'+esc(M.planById(state(),id).name)+'</button><button class="text-button" data-action="toggle-active" data-id="'+esc(id)+'">'+(active(id)?'Deactivate':'Activate')+'</button>').join('')+'</details>';
    renderPlanGrid();
  }
  function renderPlanGrid(){
    const q=filters.search.toLowerCase().trim();
    const programs=D.programs.filter(p=>(!q||(p.name+' '+p.description).toLowerCase().includes(q))&&(filters.level==='all'||p.level===filters.level)&&(filters.goal==='all'||p.goal===filters.goal)&&(filters.location==='all'||p.location===filters.location)&&(filters.days==='all'||p.daysPerWeek===Number(filters.days))&&(filters.saved!=='saved'||marked(p.id))&&(filters.saved!=='active'||active(p.id))&&(!filters.fits||!state().profile||compatible(p)));
    $('#catalogCount').textContent=programs.length+' of 30 programs shown';
    $('#planGrid').innerHTML=programs.length?programs.map(card).join(''):'<p class="empty-state">No programs match these filters. Change a filter or update your profile.</p>';
  }
  function renderCalendar(){
    const s=state(),report=M.overlapWarnings(s,s.selectedDate),start=report.week[0].date;
    $('#viewCalendar').innerHTML='<div class="section-top"><div><div class="eyebrow">YOUR COMBINED PLAN</div><h2>My week</h2><p>'+s.activePrograms.length+' active program'+(s.activePrograms.length===1?'':'s')+' · '+report.restDays+' rest day'+(report.restDays===1?'':'s')+'</p></div><div class="calendar-controls"><button class="button subtle" data-action="calendar-prev" aria-label="Previous week">←</button><label>Week of<input id="calendarDate" type="date" value="'+start+'"></label><button class="button subtle" data-action="calendar-next" aria-label="Next week">→</button><button class="text-button" data-action="calendar-today">Today</button></div></div>'+
      warningsHTML(report)+'<div class="weekly-calendar">'+report.week.map(slot=>'<section class="calendar-day'+(slot.date===M.today()?' today':'')+'"><h3>'+names[slot.weekday-1]+'</h3><time datetime="'+slot.date+'">'+esc(slot.date.slice(5))+'</time>'+(!slot.sessions.length?'<p class="calendar-rest">Rest</p>':slot.sessions.map(x=>'<button class="calendar-session" data-action="calendar-session" data-plan="'+esc(x.programId)+'" data-id="'+esc(x.workoutId)+'" data-date="'+slot.date+'"><strong>'+esc(x.programName)+'</strong><span>'+esc(x.title)+'</span><small>Week '+x.week+'</small></button>').join(''))+'</section>').join('')+'</div>'+
      '<section class="active-list"><h3>Active programs</h3>'+(!s.activePrograms.length?'<p>Activate a saved program to build your week.</p><button class="button primary" data-view="plans">Find a program</button>':s.activePrograms.map(id=>'<div class="active-row"><strong>'+esc(M.planById(s,id).name)+'</strong><button class="text-button" data-action="preview-plan" data-id="'+esc(id)+'">Plan & schedule</button><button class="text-button" data-action="toggle-active" data-id="'+esc(id)+'">Deactivate</button></div>').join(''))+'</section>'+
      (s.activePrograms.length?'<details class="help"><summary>Estimated weekly muscle workload</summary><p>Primary sets count once; indirect sets count as half. Warm-ups and conditioning are excluded from the set totals.</p><div class="volume-grid">'+Object.entries(report.weekly).sort(([a],[b])=>a.localeCompare(b)).map(([m,n])=>'<div><span>'+esc(label(m))+'</span><strong>'+n+'</strong></div>').join('')+'</div></details>':'');
  }
  function clearEmptyDraft(id){
    const s=state();if(s.activePlan!==id||s.sessionId)return;
    const plan=M.planById(s,id),w=plan.workouts.find(w=>w.id===s.activeWorkout)||plan.workouts[0];
    const key=M.sessionKey(plan,w,s.selectedDate),old=s.sessions[key];
    if(old&&!old.completedAt&&!old.exercises.some(e=>e.sets.some(x=>x.reps!==''||x.kg!=='')))delete s.sessions[key];
  }
  function previewPlan(id){
    const p=M.nativeById[id];if(!p)return ctx.legacyPreview(id);
    const s=state(),settings=M.settingsFor(s,id),week=M.weekFor(s,id,s.selectedDate),stage=p.skillStages?.find(x=>x.id===settings.stage);
    openModal(modalHead(p.name,pretty(p.level)+' · '+goalText(p.goal)+' · '+p.daysPerWeek+' days/week')+'<div class="modal-body program-preview"><p>'+esc(p.description)+'</p><p>'+p.durationWeeks+' weeks · sessions up to '+p.sessionLengthMinutes+' minutes · '+esc(label(p.location))+'</p><p><strong>Equipment:</strong> '+esc(p.requiredEquipment.map(label).join(', '))+'</p>'+
      (p.setupRequirements?'<div class="notice"><strong>Required setup</strong><ul>'+p.setupRequirements.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul></div>':'')+
      (p.coreMessage?'<div class="notice">'+esc(p.coreMessage)+'</div>':'')+
      '<div class="program-controls"><label>Block start<input type="date" class="program-start" data-id="'+id+'" value="'+settings.startedOn+'"></label><label>Shift weekly schedule<select class="program-shift" data-id="'+id+'">'+names.map((x,i)=>'<option value="'+i+'" '+(i===settings.dayShift?'selected':'')+'>'+x+' as day 1</option>').join('')+'</select></label>'+(p.skillStages?'<label>Ability stage<select class="program-stage" data-id="'+id+'">'+p.skillStages.map(x=>'<option value="'+x.id+'" '+(x.id===settings.stage?'selected':'')+'>'+esc(label(x.id))+'</option>').join('')+'</select></label>':'')+'</div>'+
      (stage?'<p class="notice"><strong>Stage criteria:</strong> '+esc(stage.entryCriteria)+'</p>':'')+
      (p.exerciseProgressions||[]).map(path=>'<label class="form-label">Current variation<select class="program-choice" data-id="'+id+'" data-source="'+path.fromExerciseId+'">'+[path.fromExerciseId,...path.toExerciseIds].map(eid=>'<option value="'+eid+'" '+((settings.exerciseChoices[path.fromExerciseId]||path.fromExerciseId)===eid?'selected':'')+'>'+esc(M.exerciseLibrary[eid].name)+'</option>').join('')+'</select><small>'+esc(path.criteria)+'</small></label>').join('')+
      '<p>Previewing week '+week+' of '+p.durationWeeks+'. Settings apply to the next unlogged session; recorded sessions keep their original targets.</p>'+
      '<details open><summary>Weekly schedule</summary>'+p.schedule.map(original=>{const d=M.resolveDay(p,original,week,settings);return '<section class="preview-day"><h3>'+names[(d.weekday-1+settings.dayShift)%7]+' · '+esc(d.title)+'</h3>'+(d.kind==='rest'?'<p>Rest from planned training.</p>':'<details><summary>Warm-up & practice sets</summary>'+[...d.warmup,...d.rampUpSets].map(prescription).join('')+'</details>'+d.exercises.map(prescription).join('')+'<p>'+esc(d.notes)+'</p>')+'</section>';}).join('')+'</details>'+
      '<details open><summary>Progression and deloads</summary><h4>Progression</h4><p>'+esc(p.progressionRule)+'</p><h4>Deload</h4><p>'+esc(p.deloadRule)+'</p><p>'+esc(p.volumeNotes)+'</p></details>'+
      '<details><summary>Why this works & references</summary><p>'+esc(p.whyThisWorks)+'</p><ul>'+p.references.map(r=>'<li><a href="'+esc(r.url)+'" target="_blank" rel="noopener noreferrer">'+esc(r.title)+'</a></li>').join('')+'</ul></details>'+
      (p.nutritionGuidance?'<details><summary>Nutrition guidance</summary><ul>'+p.nutritionGuidance.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul></details>':'')+
      (p.executionNotes?'<details><summary>Execution notes</summary><ul>'+p.executionNotes.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul></details>':'')+
      '<button class="text-button" data-action="restart-block" data-id="'+id+'">Restart block from this week</button></div><div class="modal-footer"><button class="button" data-action="bookmark" data-id="'+id+'">'+(marked(id)?'★ Saved':'☆ Save program')+'</button><button class="button primary" data-action="toggle-active" data-id="'+id+'">'+(active(id)?'Deactivate':'Activate program')+'</button></div>');
  }
  function workoutIntro(p,s){
    return (state().activePrograms.length>1?'<div class="notice">'+state().activePrograms.length+' programs are active. <button class="text-button" data-view="calendar">Review combined week & warnings</button></div>':'')+
      '<div class="workout-program-picker"><label>Program<select id="currentProgram">'+[...new Set([p.id,...state().activePrograms])].map(id=>'<option value="'+esc(id)+'" '+(id===p.id?'selected':'')+'>'+esc(M.planById(state(),id).name)+'</option>').join('')+'</select></label>'+(p.native?'<button class="text-button" data-action="preview-plan" data-id="'+p.id+'">Progression & plan details</button>':'')+'</div>'+
      (p.native?'<p class="pill">Week '+(s.week||p.week)+(s.stage?' · '+esc(label(s.stage)):'')+'</p>':'')+
      (s.notes?'<p class="notice">'+esc(s.notes)+'</p>':'');
  }
  function setupMismatch(id){
    const p=M.nativeById[id];
    if(!state().profile){toast('Set your training profile first.');startSetup();return true;}
    if(p&&!compatible(p)){
      openModal(modalHead('Check your training setup','This program requires a different setup from your saved profile.')+'<div class="modal-body"><p>'+esc(p.name)+'</p><p>Required equipment: '+esc(p.requiredEquipment.map(label).join(', '))+'</p>'+(p.setupRequirements?'<ul>'+p.setupRequirements.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul>':'')+'<p>Update your location, equipment and setup checks before activating this program.</p></div><div class="modal-footer"><button class="button primary" data-action="setup">Update profile</button></div>');return true;
    }
    return false;
  }
  function change(input){
    const mappings={catalogLevel:'level',catalogGoal:'goal',catalogLocation:'location',catalogDays:'days',catalogSaved:'saved'};
    if(mappings[input.id]){filters[mappings[input.id]]=input.value;renderPlanGrid();return true;}
    if(input.id==='catalogFits'){filters.fits=input.checked;renderPlanGrid();return true;}
    if(input.id==='calendarDate'&&M.dateOK(input.value)){state().selectedDate=input.value;save();renderCalendar();return true;}
    if(input.id==='currentProgram'){state().activePlan=input.value;state().activeWorkout=M.planById(state()).workouts[0].id;state().sessionId=null;save();setView('workout');return true;}
    if(input.matches('.program-start,.program-shift,.program-stage,.program-choice')){
      const id=input.dataset.id,p=M.nativeById[id];if(!p)return true;
      const value=M.settingsFor(state(),id);
      if(input.matches('.program-start')){if(!M.dateOK(input.value))return true;value.startedOn=input.value;}
      if(input.matches('.program-shift'))value.dayShift=Number(input.value);
      if(input.matches('.program-stage')){
        const next=p.skillStages.find(x=>x.id===input.value);
        if(!next||!confirm('Choose this stage only if its criteria are met:\n\n'+next.entryCriteria)){input.value=value.stage;return true;}
        value.stage=next.id;
      }
      if(input.matches('.program-choice'))value.exerciseChoices={...value.exerciseChoices,[input.dataset.source]:input.value};
      if(!active(id)&&!state().programSettings[id]?.startedOn&&!input.matches('.program-start'))value.startedOn=null;
      M.bookmark(state(),id,true);state().programSettings[id]=value;clearEmptyDraft(id);save();previewPlan(id);return true;
    }
    return false;
  }
  function inputEvent(input){if(input.id==='catalogSearch'){filters.search=input.value;renderPlanGrid();return true;}return false;}
  let apiPromise=null,player=null,videoToken=0,videoTimer=null,shownExercise='';
  function youtubeAPI(){
    if(globalThis.YT?.Player)return Promise.resolve(globalThis.YT);
    if(apiPromise)return apiPromise;
    apiPromise=new Promise((resolve,reject)=>{
      const old=globalThis.onYouTubeIframeAPIReady;
      const tag=document.createElement('script');tag.src='https://www.youtube.com/iframe_api';tag.async=true;
      const timeout=setTimeout(()=>{tag.remove();apiPromise=null;reject(Error('Player did not load'));},12000);
      globalThis.onYouTubeIframeAPIReady=()=>{clearTimeout(timeout);if(typeof old==='function')old();resolve(globalThis.YT);};
      tag.onerror=()=>{clearTimeout(timeout);tag.remove();apiPromise=null;reject(Error('Player unavailable'));};
      document.head.appendChild(tag);
    });
    return apiPromise;
  }
  function cleanupVideo(){videoToken++;clearTimeout(videoTimer);try{player?.destroy();}catch{}player=null;shownExercise='';}
  videoModal.addEventListener('close',()=>{cleanupVideo();videoModal.innerHTML='';});
  function recordHealth(id,videoId,status,code=0){state().videoHealth[id]={videoId,status,code,checkedAt:new Date().toISOString()};save();}
  function videoStatus(message,hide=false){const box=$('#videoStatus');if(box)box.textContent=message;const frame=$('#techniqueFrame');if(frame)frame.hidden=hide;}
  async function showVideo(id){
    const e=M.exerciseLibrary[id];if(!e)return;
    cleanupVideo();shownExercise=id;const token=videoToken,videoId=M.videoIdFor(state(),id);
    videoModal.innerHTML='<div class="modal-header"><div><div class="eyebrow">EXERCISE LIBRARY</div><h2 id="videoTitle">'+esc(e.name)+'</h2><p>'+esc(e.equipmentLabel)+'</p></div><button class="button small subtle" id="closeVideo" aria-label="Close technique">✕</button></div><div class="modal-body exercise-details"><p><strong>Primary muscles:</strong> '+esc(e.primaryMuscles.map(label).join(', '))+'</p><p><strong>Secondary muscles:</strong> '+esc(e.secondaryMuscles.map(label).join(', ')||'None listed')+'</p><p id="videoStatus" role="status">'+(videoId?'Loading the technique player…':'No video is selected yet. Follow the written instructions below.')+'</p>'+(videoId?'<div id="techniqueFrame" class="video-frame"><iframe id="forgeYT" title="'+esc(e.name)+' technique" src="https://www.youtube-nocookie.com/embed/'+videoId+'?enablejsapi=1&playsinline=1&rel=0'+(location.origin!=='null'?'&origin='+encodeURIComponent(location.origin):'')+'" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><p><a href="https://www.youtube.com/watch?v='+videoId+'" target="_blank" rel="noopener noreferrer">Open selected video on YouTube</a></p>':'')+
      '<h3>How to do it</h3><ol>'+e.instructions.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ol><h3>Common mistakes</h3><ul>'+e.commonMistakes.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul>'+
      '<h3>Alternatives</h3>'+[e.homeAlternativeId,e.outdoorAlternativeId].filter((v,i,a)=>v&&a.indexOf(v)===i).map(alt=>'<button class="button subtle" data-action="video" data-id="'+alt+'">'+esc(M.exerciseLibrary[alt].name)+'</button>').join('')+
      '<details class="video-selection"><summary>Select or update the video</summary><p><a href="https://www.youtube.com/results?search_query='+encodeURIComponent(e.youtubeSearchQuery)+'" target="_blank" rel="noopener noreferrer">Search: '+esc(e.youtubeSearchQuery)+'</a></p><p>Choose a clear demonstration from a qualified coach or an established fitness channel.</p><label class="form-label">YouTube video ID or link<input id="exerciseVideoId" value="'+esc(videoId)+'" autocomplete="off"></label><p id="videoInputError" role="alert"></p><button class="button" data-action="save-video" data-id="'+id+'">Save video for this device</button><button class="text-button" data-action="reset-video" data-id="'+id+'">Use original selection</button><p>Leave the field empty to use written instructions. Videos play through YouTube and are never downloaded.</p></details></div>';
    if(!videoModal.open)videoModal.showModal();$('#closeVideo').onclick=()=>videoModal.close();
    if(!videoId)return;
    let knownFailure=false;
    const fail=(status,code=0)=>{if(token!==videoToken||!videoModal.open)return;if(status==='blocked'||status==='unavailable')knownFailure=true;clearTimeout(videoTimer);recordHealth(id,videoId,status,code);videoStatus(status==='blocked'?'This video cannot play here. Use the written steps or open it on YouTube.':status==='unavailable'?'This video is unavailable. Follow the written steps below.':'The player could not be checked. Written instructions remain available.',true);};
    videoTimer=setTimeout(()=>fail('unconfirmed'),15000);
    try{
      const YT=await youtubeAPI();if(token!==videoToken||!videoModal.open)return;
      player=new YT.Player('forgeYT',{events:{
        onReady:()=>{if(token!==videoToken||knownFailure)return;clearTimeout(videoTimer);recordHealth(id,videoId,'ready');videoStatus('Player loaded. Written instructions are available below.');},
        onError:event=>fail(event.data===100||event.data===2?'unavailable':[101,150].includes(event.data)?'blocked':'unconfirmed',Number(event.data)||0)
      }});
    }catch{fail('unconfirmed');}
  }
  function exportVideoList(){
    const quote=v=>'"'+String(v??'').replaceAll('"','""')+'"';
    const rows=[['id','name','youtubeSearchQuery','youtubeVideoId','existingDemoId'],...D.exercises.map(e=>[e.id,e.name,e.youtubeSearchQuery,Object.prototype.hasOwnProperty.call(state().videoOverrides,e.id)?state().videoOverrides[e.id]:e.youtubeVideoId,e.legacyVideo?.id||''])];
    ctx.download(rows.map(r=>r.map(quote).join(',')).join('\r\n'),'forge-exercise-video-selection.csv','text/csv;charset=utf-8');
  }
  function videoChecks(){
    const flagged=D.exercises.filter(e=>{const h=state().videoHealth[e.id];return !M.videoIdFor(state(),e.id)||h&&h.status!=='ready';});
    openModal(modalHead('Exercise video checks','Missing selections and checks that need attention.')+'<div class="modal-body"><p>A video is checked when you open its player. Browser or creator restrictions can prevent playback; written instructions remain available.</p><button class="button" data-action="export-video-list">Download all exercises & search queries</button>'+flagged.map(e=>'<div class="active-row"><div><strong>'+esc(e.name)+'</strong><small>'+(!M.videoIdFor(state(),e.id)?'No video selected':esc(label(state().videoHealth[e.id]?.status||'Not checked')))+'</small></div><button class="button subtle" data-action="video" data-id="'+e.id+'">'+(M.videoIdFor(state(),e.id)?'Check again':'Instructions & selection')+'</button></div>').join('')+'</div>');
  }
  function action(action,b){
    const id=b.dataset.id,s=state();
    if(action==='bookmark'){M.bookmark(s,id,!marked(id));save();if(videoModal.open)return true;if($('#modal').open)previewPlan(id);else setView(ctx.getView());return true;}
    if(action==='toggle-active'){
      if(!active(id)){if(setupMismatch(id))return true;selectPlan(M.planById(s,id));}
      else{M.setActive(s,id,false);if(s.activePlan===id){s.sessionId=null;if(s.activePrograms.length){s.activePlan=s.activePrograms[0];s.activeWorkout=M.planById(s).workouts[0].id;}}save();closeModal();setView(ctx.getView()==='workout'?'calendar':ctx.getView());}
      return true;
    }
    if(action==='calendar-prev'||action==='calendar-next'||action==='calendar-today'){s.selectedDate=action==='calendar-today'?M.today():M.addDays(s.selectedDate,action==='calendar-prev'?-7:7);save();renderCalendar();return true;}
    if(action==='calendar-session'){s.activePlan=b.dataset.plan;s.activeWorkout=id;s.selectedDate=b.dataset.date;s.sessionId=null;save();setView('workout');return true;}
    if(action==='restart-block'){M.bookmark(s,id,true);s.programSettings[id]={...M.settingsFor(s,id),startedOn:M.monday(M.today())};clearEmptyDraft(id);save();if(ctx.getView()==='workout')setView('workout');previewPlan(id);return true;}
    if(action==='workout-today'){s.selectedDate=M.today();s.sessionId=null;save();setView('workout');return true;}
    if(action==='video-checks'){videoChecks();return true;}
    if(action==='export-video-list'){exportVideoList();return true;}
    if(action==='save-video'){
      const parsed=M.parseVideoId($('#exerciseVideoId').value);
      if(parsed===null){$('#videoInputError').textContent='Enter a valid 11-character YouTube ID or a YouTube link.';return true;}
      s.videoOverrides[id]=parsed;delete s.videoHealth[id];save();showVideo(id);return true;
    }
    if(action==='reset-video'){delete s.videoOverrides[id];delete s.videoHealth[id];save();showVideo(id);return true;}
    if(action==='exercise-rest'){ctx.startRest(Number(b.dataset.seconds));return true;}
    return false;
  }
  return {renderPlans,renderPlanGrid,renderCalendar,previewPlan,workoutIntro,showVideo,action,change,inputEvent,setupMismatch,warningsHTML};
};
