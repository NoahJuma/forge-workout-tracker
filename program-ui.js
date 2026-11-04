"use strict";
globalThis.ForgeProgramUI=ctx=>{
  const {M,D,$,esc,pretty,toast,save,openModal,closeModal,modalHead,selectPlan,setView,startSetup,videoModal}=ctx;
  const state=ctx.getState;
  let replacementId='';
  const C=D.catalogInfo;
  const filters={level:'all',goal:'all',location:'all',days:'all',saved:'all',audience:'all',muscle:'all',fits:true,search:''};
  const label=value=>String(value||'').replaceAll('-',' ').replaceAll('_',' ');
  const goalText=value=>M.goalLabels[value]||label(value);
  const names=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  const marked=id=>state().bookmarks.some(b=>b.programId===id);
  const active=id=>state().activePrograms.includes(id);
  const compatible=p=>!!state().profile&&M.eligiblePrograms(state().profile,[p]).length>0;
  const activationLabel=p=>replacementId?(replacementId===p.id?'Keep current':'Use instead'):active(p.id)?'Deactivate':'Activate';
  function programActions(p){
    if(!active(p.id))return '';
    return '<div class="program-actions"><button class="button small" data-action="change-plan" data-id="'+esc(p.id)+'" aria-label="Change '+esc(p.name)+'">Change program</button><button class="text-button danger" data-action="remove-program" data-id="'+esc(p.id)+'" aria-label="Remove '+esc(p.name)+' from my programs">Remove program</button></div>';
  }
  function range(e){return e.durationSeconds?e.durationSeconds+' sec':e.distanceMetres?e.distanceMetres+' m':e.min===e.max?String(e.min):e.min+'–'+e.max;}
  function prescription(e){
    const c=M.exerciseLibrary[e.exerciseId];
    return '<div class="prescription"><div><strong>'+esc(c?.name||e.exerciseId)+'</strong><small>'+e.sets+' × '+esc(range(e))+(e.perSide?' per side':'')+' · rest '+e.restSeconds+'s'+(e.rir===null?'':' · '+e.rir+' RIR')+'</small>'+(e.intensityNote?'<p>'+esc(e.intensityNote)+'</p>':'')+(e.loadPercentagesOfWorkingWeight?'<p>Warm-up loads: '+e.loadPercentagesOfWorkingWeight.join(' / ')+'% of this session’s working load.</p>':'')+'</div><button class="text-button" data-action="video" data-id="'+esc(e.exerciseId)+'">Technique</button></div>';
  }
  function weekOptions(p,selected){return Array.from({length:p.durationWeeks},(_,i)=>'<option value="'+(i+1)+'" '+(i+1===selected?'selected':'')+'>Week '+(i+1)+(p.deloadWeeks.includes(i+1)?' · lighter week':p.introductoryWeeks?.weeks.includes(i+1)?' · introduction':'')+'</option>').join('');}
  function weekContent(p,requestedWeek,scope){
    const settings=M.settingsFor(state(),p.id),report=M.previewWeek(p,requestedWeek,settings),week=report.week;
    const guidance=['pregnancy','postpartum'].includes(p.audience)?'Weeks organize your plan. Progress according to symptoms, recovery and the plan’s readiness guidance.':p.skillStages?'These exercises use your selected ability stage. Move to another stage only when its criteria are met.':'The weekly split can repeat. Build load, repetitions or difficulty using this plan’s progression rule.';
    return '<div class="week-overview"><div><span class="eyebrow">'+p.durationWeeks+'-WEEK PROGRAM</span><h3 class="week-heading">Week '+week+' of '+p.durationWeeks+'</h3><span class="pill">'+esc(report.phase)+'</span></div><div class="week-navigation"><button class="button subtle" data-action="preview-week-step" data-id="'+p.id+'" data-week="'+(week-1)+'" data-week-scope="'+scope+'" aria-label="Previous program week" '+(week===1?'disabled':'')+'>←</button><label for="'+scope+'-week-select">Choose a week<select class="program-week-select" id="'+scope+'-week-select" data-id="'+p.id+'" data-week-scope="'+scope+'">'+weekOptions(p,week)+'</select></label><button class="button subtle" data-action="preview-week-step" data-id="'+p.id+'" data-week="'+(week+1)+'" data-week-scope="'+scope+'" aria-label="Next program week" '+(week===p.durationWeeks?'disabled':'')+'>→</button></div></div><p class="week-guidance">'+esc(guidance)+'</p><p class="week-preview-note">Browsing weeks keeps your current workout date and recorded sets unchanged.</p><div class="week-days">'+report.days.map(d=>'<section class="preview-day"><h4>'+names[(d.weekday-1+settings.dayShift)%7]+' · '+esc(d.title)+'</h4>'+(d.kind==='rest'?'<p>Rest from planned training.</p>':'<details><summary>Warm-up & practice sets</summary>'+[...d.warmup,...d.rampUpSets].map(prescription).join('')+'</details>'+'<div class="week-working-exercises">'+d.exercises.map(prescription).join('')+'</div><p>'+esc(d.notes)+'</p>')+'</section>').join('')+'</div>';
  }
  function weekBrowser(p,week=1,scope='preview'){return '<section class="program-week-browser" data-id="'+p.id+'" data-week-scope="'+scope+'">'+weekContent(p,week,scope)+'</section>';}
  function recommendationWeeks(p,scope='recommendation'){return '<div class="program-duration"><strong>'+p.durationWeeks+'-week program</strong><span>'+p.daysPerWeek+' training days per week · up to '+p.sessionLengthMinutes+' minutes per session</span></div><details class="recommendation-weeks"><summary>Explore all '+p.durationWeeks+' weeks</summary>'+weekBrowser(p,1,scope)+'<details><summary>How to progress through the weeks</summary><p>'+esc(p.progressionRule)+'</p><p>'+esc(p.deloadRule)+'</p></details></details>';}
  function updateWeek(id,week,scope){
    const p=M.nativeById[id],pane=document.querySelector('.program-week-browser[data-week-scope="'+scope+'"]');
    if(!p||!pane||pane.dataset.id!==id)return;
    pane.innerHTML=weekContent(p,week,scope);pane.querySelector('select')?.focus({preventScroll:true});
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
    const art=C.image(p),aud=C.audiences.find(x=>x.id===C.audience(p));
    return '<article class="plan-card visual-plan'+(active(p.id)?' selected':'')+'" data-program="'+p.id+'"><div class="plan-photo"><img src="./assets/'+art+'.jpg" alt="'+esc(C.images[art])+'" width="960" height="640" loading="lazy" decoding="async"><span class="photo-label">'+esc(label(p.location))+'</span>'+(active(p.id)?'<span class="photo-active">Active</span>':'')+'</div><div class="plan-card-body"><div class="plan-kicker">'+esc(aud.name)+' · '+esc(goalText(p.goal))+'</div><h3>'+esc(p.name)+'</h3><p class="plan-description">'+esc(p.description)+'</p><div class="plan-metrics"><span><strong>'+p.daysPerWeek+'</strong>days / week</span><span><strong>'+p.sessionLengthMinutes+'</strong>min / session</span><span><strong>'+p.durationWeeks+'</strong>week block</span></div><div class="plan-tags"><span>'+pretty(p.level)+'</span>'+C.focus(p).map(id=>'<span>'+esc(C.muscles.find(x=>x.id===id)?.name||id)+'</span>').join('')+(p.readiness?'<span>'+esc(p.readiness==='recovery'?'Gentle recovery':'Strength rebuild')+'</span>':'')+'</div>'+(!fits&&state().profile?'<small class="mismatch">Review profile, readiness or equipment before activation</small>':'')+'<div class="plan-buttons"><button class="button" data-action="preview-plan" data-id="'+p.id+'">View plan</button><button class="button subtle" data-action="bookmark" data-id="'+p.id+'" aria-pressed="'+marked(p.id)+'" aria-label="'+(marked(p.id)?'Unsave ':'Save ')+esc(p.name)+'">'+(marked(p.id)?'★ Saved':'☆ Save')+'</button><button class="button '+(active(p.id)?'subtle':'primary')+'" data-action="toggle-active" data-id="'+p.id+'">'+activationLabel(p)+'</button></div></div></article>';
  }
  function guideHTML(id){
    const g=C.guides[id];if(!g)return '';
    return '<details class="population-guide"><summary>'+esc(g.heading)+' · suitability & research</summary><p>'+esc(g.intro)+'</p><p><strong>Build toward:</strong> '+esc(g.target)+'</p><ul>'+g.adaptations.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul><p class="notice">'+esc(g.stop)+'</p>'+(g.screen?'<p><a href="'+g.screenUrl+'" target="_blank" rel="noopener noreferrer">'+esc(g.screen)+'</a></p>':'')+'<div class="source-links">'+g.references.map(r=>'<a href="'+r.url+'" target="_blank" rel="noopener noreferrer">'+esc(r.title)+'</a>').join('')+'</div></details>';
  }
  function setupContext(profile){
    const stage=profile.lifeStage;
    return '<label class="form-label">Which training context fits you?<select id="profileLifeStage">'+C.audiences.map(a=>'<option value="'+a.id+'" '+(stage===a.id?'selected':'')+'>'+esc(a.name)+'</option>').join('')+'</select></label><p class="privacy-note">Optional health context, stored only in this browser. Choose the context you want guidance for; gender does not set it automatically.</p>'+guideHTML(stage)+
      (stage==='pregnancy'?'<label class="form-label">Pregnancy stage<select id="pregnancyStage">'+[['first','First trimester'],['second','Second trimester'],['third','Third trimester']].map(([id,name])=>'<option value="'+id+'" '+(profile.pregnancyStage===id?'selected':'')+'>'+name+'</option>').join('')+'</select></label><p class="privacy-note">Stage helps you review changing needs; it never triggers automatic load increases. Activating a pregnancy plan makes it your single active plan.</p>':'')+
      (stage==='postpartum'?'<label class="form-label">Current recovery readiness<select id="postpartumStage"><option value="recovery" '+(profile.postpartumStage==='recovery'?'selected':'')+'>Gentle recovery · brief comfortable movement</option><option value="rebuild" '+(profile.postpartumStage==='rebuild'?'selected':'')+'>Rebuilding · sufficient healing and daily movement tolerated</option></select></label><p class="privacy-note">Readiness follows healing, symptoms and clinical advice, rather than a fixed week after birth. Activating a postpartum plan makes it your single active plan.</p>':'')+
      (['pregnancy','postpartum'].includes(stage)?'<label class="choice context-consent"><input type="checkbox" id="activityReady" '+(profile.activityReady?'checked':'')+'><span>I reviewed the suitability guidance and screening link, have no current stop symptoms, and have followed clinical advice for any restrictions or concerns.</span></label>':'')+
      (stage==='older-adult'?'<label class="choice"><input type="checkbox" id="floorTransfers" '+(profile.floorTransfers?'checked':'')+'><span>I can safely and comfortably get down to the floor and back up. Leave unchecked for chair and standing options.</span></label>':'');
  }
  function browseSections(){
    const count=predicate=>D.programs.filter(predicate).length;
    const button=(kind,id,name,n)=>'<button class="browse-chip" data-action="browse-section" data-kind="'+kind+'" data-id="'+id+'" aria-pressed="'+(filters[kind]===id)+'"><span>'+esc(name)+'</span><strong>'+n+'</strong></button>';
    return '<section class="browse-sections" aria-label="Browse training sections"><div class="section-caption"><h3>Choose your training context</h3><span>Every life stage has its own starting point.</span></div><div class="audience-grid">'+C.audiences.map(a=>'<button class="audience-tile" data-action="browse-section" data-kind="audience" data-id="'+a.id+'" aria-pressed="'+(filters.audience===a.id)+'"><small>'+a.eyebrow+'</small><strong>'+a.name+'</strong><span>'+a.description+'</span><em>'+count(p=>C.audience(p)===a.id)+' plans →</em></button>').join('')+'</div><div class="section-caption"><h3>Train toward a goal</h3><span>Choose a focus, then refine your options.</span></div><div class="browse-chips">'+M.trainingGoals.map(id=>button('goal',id,goalText(id),count(p=>p.goal===id))).join('')+'</div><details class="muscle-browser" open><summary>Explore by muscle group</summary><div class="browse-chips muscle-chips">'+C.muscles.map(g=>button('muscle',g.id,g.name,count(p=>C.focus(p).includes(g.id)))).join('')+'</div></details></section>';
  }
  function renderPlans(){
    const rec=state().profile?M.recommend(state().profile):null;
    $('#viewPlans').innerHTML='<section class="catalog-hero"><div><div class="eyebrow">THE FORGE · PROGRAM LIBRARY</div><h1>Your life.<br>Your next strong chapter.</h1><p>Find training that fits your equipment, your focus and where you are today.</p><div class="hero-facts"><span><strong>'+D.programs.length+'</strong> structured plans</span><span><strong>10+</strong> per muscle group</span><span>Guidance with sources</span></div></div><div class="hero-art"><img src="./assets/dumbbells.jpg" alt="'+esc(C.images.dumbbells)+'" width="960" height="640" fetchpriority="high"><div class="hero-art-caption">EQUIPPED FOR YOUR EVERYDAY</div></div></section>'+browseSections()+'<div class="section-top catalog-results-head" id="catalogResults"><div><div class="eyebrow">MAKE IT YOURS</div><h2>Find your next training block.</h2><p>Save favorites, review a plan and activate your next block.</p></div><button class="button" data-action="setup">Update profile</button></div>'+
      (rec?'<div class="recommendation"><span class="pill">SUGGESTED FOR YOU</span><h3>'+esc(rec.plan?.name||'No matching program')+'</h3><p>'+esc(rec.reason)+' '+esc(rec.adjustment)+'</p>'+(rec.program?recommendationWeeks(rec.program,'suggestion'):'')+(rec.plan?'<button class="button primary" data-action="preview-plan" data-id="'+rec.plan.id+'">Review suggestion</button>':'')+'</div>':'')+
      '<div class="catalog-toolbar"><label>Search<input id="catalogSearch" type="search" value="'+esc(filters.search)+'" placeholder="Name or description"></label><label>Level<select id="catalogLevel"><option value="all">All levels</option>'+M.levels.map(x=>'<option value="'+x+'" '+(filters.level===x?'selected':'')+'>'+pretty(x)+'</option>').join('')+'</select></label><label>Goal<select id="catalogGoal"><option value="all">All goals</option>'+M.trainingGoals.map(x=>'<option value="'+x+'" '+(filters.goal===x?'selected':'')+'>'+esc(goalText(x))+'</option>').join('')+'</select></label><label>Location<select id="catalogLocation"><option value="all">All locations</option>'+['gym','home','outdoor','any'].map(x=>'<option value="'+x+'" '+(filters.location===x?'selected':'')+'>'+pretty(x)+'</option>').join('')+'</select></label><label>Training context<select id="catalogAudience"><option value="all">All contexts</option>'+C.audiences.map(a=>'<option value="'+a.id+'" '+(filters.audience===a.id?'selected':'')+'>'+esc(a.name)+'</option>').join('')+'</select></label><label>Muscle focus<select id="catalogMuscle"><option value="all">All muscles</option>'+C.muscles.map(a=>'<option value="'+a.id+'" '+(filters.muscle===a.id?'selected':'')+'>'+esc(a.name)+'</option>').join('')+'</select></label><label>Schedule<select id="catalogDays"><option value="all">Any schedule</option>'+[2,3,4,5,6].map(n=>'<option value="'+n+'" '+(String(filters.days)===String(n)?'selected':'')+'>'+n+' days</option>').join('')+'</select></label><label>Selection<select id="catalogSaved">'+[['all','All programs'],['saved','Saved programs'],['active','Active programs']].map(([v,l])=>'<option value="'+v+'" '+(filters.saved===v?'selected':'')+'>'+l+'</option>').join('')+'</select></label></div>'+
      '<div class="catalog-filter-footer"><label class="filter-check"><input id="catalogFits" type="checkbox" '+(filters.fits?'checked':'')+'> Match my training context, readiness and equipment</label><button class="text-button" data-action="reset-catalog">Browse all plans</button></div><div id="catalogGuide"></div><p id="catalogCount" role="status"></p><div class="plan-grid" id="planGrid"></div><section class="custom-plans"><h3>Your own programs</h3><button class="button" data-action="builder">Create custom plan</button><div class="plan-grid">'+state().customPlans.map(p=>'<article class="plan-card"><h3>'+esc(p.name)+'</h3><p>'+p.days+' sessions</p><button class="button" data-action="choose-custom" data-id="'+esc(p.id)+'">'+(replacementId?'Use instead':'Open & activate')+'</button><button class="button subtle" data-action="edit-custom" data-id="'+esc(p.id)+'">Edit</button><button class="text-button" data-action="bookmark" data-id="'+esc(p.id)+'">'+(marked(p.id)?'★ Saved':'☆ Save')+'</button>'+(active(p.id)?'<button class="text-button" data-action="toggle-active" data-id="'+esc(p.id)+'">Deactivate</button>':'')+'</article>').join('')+'</div></section>'+
      '<details class="help"><summary>Previous routines and training history</summary><p>Your previously selected routines and logged sessions are preserved.</p>'+[...new Set(state().bookmarks.filter(b=>!M.nativeById[b.programId]&&!b.programId.startsWith('custom-')).map(b=>b.programId))].map(id=>'<button class="button" data-action="choose-plan" data-id="'+esc(id)+'">'+esc(M.planById(state(),id).name)+'</button><button class="text-button" data-action="toggle-active" data-id="'+esc(id)+'">'+(active(id)?'Deactivate':'Activate')+'</button>').join('')+'</details>';
    renderPlanGrid();
    if(replacementId){
      const banner=document.createElement('section');banner.className='notice replacement-banner';banner.setAttribute('aria-label','Choose a replacement program');
      banner.innerHTML='<div><strong>Choose a replacement for '+esc(M.planById(state(),replacementId).name)+'</strong><p>Your current program stays active until you choose its replacement. Earlier workouts and saved programs are kept.</p></div><button class="button subtle" data-action="cancel-program-change">Cancel change</button>';
      $('#viewPlans').prepend(banner);
    }
  }
  function renderPlanGrid(){
    const q=filters.search.toLowerCase().trim();
    const matches=(p,except='')=>(!q||(p.name+' '+p.description).toLowerCase().includes(q))&&(filters.audience==='all'||C.audience(p)===filters.audience)&&(filters.muscle==='all'||C.focus(p).includes(filters.muscle))&&(except==='level'||filters.level==='all'||p.level===filters.level)&&(except==='goal'||filters.goal==='all'||p.goal===filters.goal)&&(except==='location'||filters.location==='all'||p.location===filters.location)&&(except==='days'||filters.days==='all'||p.daysPerWeek===Number(filters.days))&&(filters.saved!=='saved'||marked(p.id))&&(filters.saved!=='active'||active(p.id))&&(!filters.fits||!state().profile||compatible(p));
    const programs=D.programs.filter(p=>matches(p));
    $('#catalogCount').textContent=programs.length+' of '+D.programs.length+' plans shown · section totals count the full library; filters can narrow them';
    $('#catalogGuide').innerHTML=guideHTML(filters.audience);
    document.querySelectorAll('[data-action="browse-section"]').forEach(b=>b.setAttribute('aria-pressed',String(filters[b.dataset.kind]===b.dataset.id)));
    const suggestions=['level','goal','location','days'].filter(key=>filters[key]!=='all').map(key=>({key,count:D.programs.filter(p=>matches(p,key)).length})).filter(x=>x.count>0);
    const nearby=programs.length?[]:D.programs.filter(p=>(!q||(p.name+' '+p.description).toLowerCase().includes(q))&&(filters.audience==='all'||C.audience(p)===filters.audience)&&(filters.goal==='all'||p.goal===filters.goal)&&(filters.saved!=='saved'||marked(p.id))&&(filters.saved!=='active'||active(p.id))&&(!filters.fits||!state().profile||compatible(p))).map(p=>({p,differences:[filters.level!=='all'&&p.level!==filters.level?'level':null,filters.location!=='all'&&p.location!==filters.location?'location':null,filters.days!=='all'&&p.daysPerWeek!==Number(filters.days)?'schedule':null,filters.muscle!=='all'&&!C.focus(p).includes(filters.muscle)?'muscle focus':null].filter(Boolean)})).filter(x=>x.differences.length).sort((a,b)=>a.differences.length-b.differences.length).slice(0,4);
    $('#planGrid').innerHTML=programs.length?programs.map(card).join(''):'<div class="empty-state"><h3>No exact matches</h3><p>Try a wider choice while keeping your other filters and profile checks.</p>'+suggestions.map(x=>'<button class="button" data-action="widen-filter" data-id="'+x.key+'">Show '+x.count+' with any '+(x.key==='days'?'schedule':x.key)+'</button>').join('')+'</div>'+(nearby.length?'<div class="nearby-heading"><h3>Similar programs</h3><p>These keep your selected goal and profile checks but differ in the filters shown.</p></div>'+nearby.map(x=>'<div class="nearby-plan"><p>Different '+esc(x.differences.join(', '))+'</p>'+card(x.p)+'</div>').join(''):'');
  }
  function renderCalendar(){
    const s=state(),report=M.overlapWarnings(s,s.selectedDate),start=report.week[0].date;
    $('#viewCalendar').innerHTML='<div class="section-top"><div><div class="eyebrow">YOUR COMBINED PLAN</div><h2>My week</h2><p>'+s.activePrograms.length+' active program'+(s.activePrograms.length===1?'':'s')+' · '+report.restDays+' rest day'+(report.restDays===1?'':'s')+'</p></div><div class="calendar-controls"><button class="button subtle" data-action="calendar-prev" aria-label="Previous week">←</button><label>Week of<input id="calendarDate" type="date" value="'+start+'"></label><button class="button subtle" data-action="calendar-next" aria-label="Next week">→</button><button class="text-button" data-action="calendar-today">Today</button></div></div>'+
      (s.activePrograms.some(id=>M.nativeById[id]&&s.profile&&!C.suitability(s.profile,M.nativeById[id]).ok)?'<p class="notice">An active plan does not match your current training context or readiness. Review its suitability before training. Your earlier logs are preserved.</p>':'')+warningsHTML(report)+'<div class="weekly-calendar">'+report.week.map(slot=>'<section class="calendar-day'+(slot.date===M.today()?' today':'')+'"><h3>'+names[slot.weekday-1]+'</h3><time datetime="'+slot.date+'">'+esc(slot.date.slice(5))+'</time>'+(!slot.sessions.length?'<p class="calendar-rest">Rest</p>':slot.sessions.map(x=>'<button class="calendar-session" data-action="calendar-session" data-plan="'+esc(x.programId)+'" data-id="'+esc(x.workoutId)+'" data-date="'+slot.date+'"><strong>'+esc(x.programName)+'</strong><span>'+esc(x.title)+'</span><small>Week '+x.week+'</small></button>').join(''))+'</section>').join('')+'</div>'+
      '<section class="active-list"><h3>Active programs</h3>'+(!s.activePrograms.length?'<p>Activate a saved program to build your week.</p><button class="button primary" data-view="plans">Find a program</button>':s.activePrograms.map(id=>'<div class="active-row"><strong>'+esc(M.planById(s,id).name)+'</strong><button class="text-button" data-action="preview-plan" data-id="'+esc(id)+'">Plan & schedule</button><button class="text-button" data-action="change-plan" data-id="'+esc(id)+'">Change</button><button class="text-button danger" data-action="remove-program" data-id="'+esc(id)+'" aria-label="Remove '+esc(M.planById(s,id).name)+' from my programs">Remove</button></div>').join(''))+'</section>'+
      (s.activePrograms.length?'<details class="help"><summary>Estimated weekly muscle workload</summary><p>Primary sets count once; indirect sets count as half. Warm-ups and conditioning are excluded from the set totals.</p><div class="volume-grid">'+Object.entries(report.weekly).sort(([a],[b])=>a.localeCompare(b)).map(([m,n])=>'<div><span>'+esc(label(m))+'</span><strong>'+n+'</strong></div>').join('')+'</div></details>':'');
  }
  function clearEmptyDraft(id){
    const s=state();if(s.activePlan!==id||s.sessionId)return;
    const plan=M.planById(s,id),w=plan.workouts.find(w=>w.id===s.activeWorkout)||plan.workouts[0];
    const key=M.sessionKey(plan,w,s.selectedDate),old=s.sessions[key];
    if(old&&!old.completedAt&&!old.exercises.some(e=>e.sets.some(x=>x.reps!==''||x.kg!=='')))delete s.sessions[key];
  }
  function previewPlan(id,requestedWeek){
    const p=M.nativeById[id];if(!p)return ctx.legacyPreview(id);
    const s=state(),settings=M.settingsFor(s,id),existing=document.querySelector('.program-preview .program-week-select'),retained=existing?.dataset.id===id?existing.value:null,week=M.previewWeek(p,requestedWeek??retained??M.weekFor(s,id,s.selectedDate),settings).week,stage=p.skillStages?.find(x=>x.id===settings.stage);
    const art=C.image(p);
    openModal(modalHead(p.name,pretty(p.level)+' · '+goalText(p.goal)+' · '+p.daysPerWeek+' days/week · '+p.durationWeeks+'-week program')+'<div class="modal-body program-preview"><img class="preview-equipment" src="./assets/'+art+'.jpg" alt="'+esc(C.images[art])+'" width="960" height="640"><p>'+esc(p.description)+'</p><p>'+p.durationWeeks+' weeks · sessions up to '+p.sessionLengthMinutes+' minutes · '+esc(label(p.location))+'</p><p><strong>Equipment:</strong> '+esc(p.requiredEquipment.map(label).join(', '))+'</p>'+guideHTML(C.audience(p))+(p.entryCriteria?'<p class="notice"><strong>Starting criteria:</strong> '+esc(p.entryCriteria)+'</p>':'')+
      (p.setupRequirements?'<div class="notice"><strong>Required setup</strong><ul>'+p.setupRequirements.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul></div>':'')+
      (p.coreMessage?'<div class="notice">'+esc(p.coreMessage)+'</div>':'')+
      '<details class="week-settings"><summary>Schedule & ability settings</summary><div class="program-controls"><label>Block start<input type="date" class="program-start" data-id="'+id+'" value="'+settings.startedOn+'"></label><label>Shift weekly schedule<select class="program-shift" data-id="'+id+'">'+names.map((x,i)=>'<option value="'+i+'" '+(i===settings.dayShift?'selected':'')+'>'+x+' as day 1</option>').join('')+'</select></label>'+(p.skillStages?'<label>Ability stage<select class="program-stage" data-id="'+id+'">'+p.skillStages.map(x=>'<option value="'+x.id+'" '+(x.id===settings.stage?'selected':'')+'>'+esc(label(x.id))+'</option>').join('')+'</select></label>':'')+'</div>'+
      (stage?'<p class="notice"><strong>Stage criteria:</strong> '+esc(stage.entryCriteria)+'</p>':'')+
      (p.exerciseProgressions||[]).map(path=>'<label class="form-label">Current variation<select class="program-choice" data-id="'+id+'" data-source="'+path.fromExerciseId+'">'+[path.fromExerciseId,...path.toExerciseIds].map(eid=>'<option value="'+eid+'" '+((settings.exerciseChoices[path.fromExerciseId]||path.fromExerciseId)===eid?'selected':'')+'>'+esc(M.exerciseLibrary[eid].name)+'</option>').join('')+'</select><small>'+esc(path.criteria)+'</small></label>').join('')+
      '</details>'+weekBrowser(p,week)+'<p>Schedule and ability settings apply to the next unlogged session; recorded sessions keep their original targets.</p>'+
      '<details open><summary>Progression and deloads</summary><h4>Progression</h4><p>'+esc(p.progressionRule)+'</p><h4>Deload</h4><p>'+esc(p.deloadRule)+'</p><p>'+esc(p.volumeNotes)+'</p></details>'+
      '<details><summary>Why this works & references</summary><p>'+esc(p.whyThisWorks)+'</p><ul>'+p.references.map(r=>'<li><a href="'+esc(r.url)+'" target="_blank" rel="noopener noreferrer">'+esc(r.title)+'</a></li>').join('')+'</ul></details>'+
      (p.nutritionGuidance?'<details><summary>Nutrition guidance</summary><ul>'+p.nutritionGuidance.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul></details>':'')+
      (p.executionNotes?'<details><summary>Execution notes</summary><ul>'+p.executionNotes.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul></details>':'')+
      '<button class="text-button" data-action="restart-block" data-id="'+id+'">Restart block from this week</button></div><div class="modal-footer"><button class="button" data-action="bookmark" data-id="'+id+'">'+(marked(id)?'★ Saved':'☆ Save program')+'</button><button class="button primary" data-action="toggle-active" data-id="'+id+'">'+(replacementId?(replacementId===id?'Keep this program':'Use this program instead'):active(id)?'Deactivate':'Activate program')+'</button></div>');
    if(requestedWeek!==undefined){
      const dialog=$('#modal'),pane=dialog.querySelector('.program-week-browser'),header=dialog.querySelector('.modal-header');
      dialog.scrollTop+=pane.getBoundingClientRect().top-header.getBoundingClientRect().bottom-16;
      $('#preview-week-select')?.focus({preventScroll:true});
    }
  }
  function workoutIntro(p,s){
    return (state().activePrograms.length>1?'<div class="notice">'+state().activePrograms.length+' programs are active. <button class="text-button" data-view="calendar">Review combined week & warnings</button></div>':'')+
      '<div class="workout-program-picker"><label>Program<select id="currentProgram">'+[...new Set([p.id,...state().activePrograms])].map(id=>'<option value="'+esc(id)+'" '+(id===p.id?'selected':'')+'>'+esc(M.planById(state(),id).name)+'</option>').join('')+'</select></label>'+(p.native?'<button class="text-button" data-action="preview-plan" data-id="'+p.id+'">Progression & plan details</button>':'')+'</div>'+
      programActions(p)+(p.native?'<section class="workout-week-overview"><div><span class="eyebrow">'+p.program.durationWeeks+'-WEEK PROGRAM</span><strong>Week '+(s.week||p.week)+' of '+p.program.durationWeeks+'</strong>'+(s.stage?'<small>'+esc(label(s.stage))+' stage</small>':'')+'</div><label>Preview another week<select id="workoutWeekPreview" data-id="'+p.id+'"><option value="">Choose a week…</option>'+weekOptions(p.program,0)+'</select></label></section>':'<p class="pill">No fixed program end date</p>')+
      (s.notes?'<p class="notice">'+esc(s.notes)+'</p>':'');
  }
  function setupMismatch(id){
    const p=M.nativeById[id];
    if(!state().profile){toast('Set your training profile first.');startSetup();return true;}
    if(p&&!C.suitability(state().profile,p).ok){openModal(modalHead('Choose a suitable starting point','Review your training context and readiness.')+'<div class="modal-body"><p>'+esc(C.suitability(state().profile,p).reason)+'</p>'+guideHTML(C.audience(p))+'</div><div class="modal-footer"><button class="button primary" data-action="setup">Update profile</button><button class="button subtle" data-action="close-modal">Keep browsing</button></div>');return true;}
    if(p&&!compatible(p)){
      openModal(modalHead('Check your training setup','This program requires a different setup from your saved profile.')+'<div class="modal-body"><p>'+esc(p.name)+'</p><p>Required equipment: '+esc(p.requiredEquipment.map(label).join(', '))+'</p>'+(p.setupRequirements?'<ul>'+p.setupRequirements.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul>':'')+'<p>Update your location, equipment and setup checks before activating this program.</p></div><div class="modal-footer"><button class="button primary" data-action="setup">Update profile</button></div>');return true;
    }
    return false;
  }
  function change(input){
    if(input.matches('.program-week-select')){updateWeek(input.dataset.id,input.value,input.dataset.weekScope);return true;}
    if(input.id==='workoutWeekPreview'){const week=Number(input.value);input.value='';if(week)previewPlan(input.dataset.id,week);return true;}
    const mappings={catalogLevel:'level',catalogGoal:'goal',catalogLocation:'location',catalogDays:'days',catalogSaved:'saved',catalogAudience:'audience',catalogMuscle:'muscle'};
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
  videoModal.addEventListener('close',()=>{if(videoModal.open)return;cleanupVideo();videoModal.innerHTML='';});
  function recordHealth(id,videoId,status,code=0){state().videoHealth[id]={videoId,status,code,checkedAt:new Date().toISOString()};save();}
  function videoStatus(message,hide=false){const box=$('#videoStatus');if(box)box.textContent=message;const frame=$('#techniqueFrame');if(frame)frame.hidden=hide;}
  function visualSteps(e){
    const guide=D.exerciseIllustrations[e.id],images=guide?.images||{};
    const views=images.main?[['Position',images.main]]:[['Start',images.start],['End position',images.peak]].filter(x=>x[1]);
    const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
    const diagram=!views.length&&D.movementPictures.has(e.id)?'<div class="motion-guide"><div class="motion-stage">'+D.movementPictures.animation(e.id,e.name)+'</div><div class="motion-caption"><span>Movement guide</span><button class="button subtle" data-action="motion-toggle" data-playing="'+!reduced+'">'+(reduced?'Play animation':'Pause animation')+'</button></div></div><p class="image-credit">Follow the steps below for setup and control.</p>':'';
    const figure=views.length?'<div class="exercise-poses">'+views.map(([label,path])=>'<figure><img src="https://exercise-dataset.com/'+esc(path)+'" alt="'+esc(e.name)+' — '+esc(label)+'" loading="lazy"><figcaption>'+esc(label)+'</figcaption></figure>').join('')+'</div><p class="image-credit">Exercise data by <a href="https://repdb.co" target="_blank" rel="noopener noreferrer">RepDB (repdb.co)</a></p>':diagram;
    return figure+'<ol class="visual-steps">'+e.instructions.map((step,i)=>'<li><span class="step-number" aria-hidden="true">'+(i+1)+'</span><span>'+esc(step)+'</span></li>').join('')+'</ol>';
  }
  async function showVideo(id){
    const e=M.exerciseLibrary[id];if(!e)return;
    cleanupVideo();shownExercise=id;const token=videoToken,videoId=M.videoIdFor(state(),id),demo=D.reviewedVideos[id];
    videoModal.classList.add('exercise-dialog');
    videoModal.innerHTML='<div class="modal-header"><div><div class="eyebrow">TECHNIQUE GUIDE</div><h2 id="videoTitle">'+esc(e.name)+'</h2><p>'+esc(e.equipmentLabel)+'</p></div><button class="button subtle" id="closeVideo" aria-label="Close technique">✕</button></div><div class="modal-body exercise-details">'+(videoId?'<div id="techniqueFrame" class="video-frame"><iframe id="forgeYT" title="'+esc(e.name)+' technique — '+esc(demo.channel)+'" src="https://www.youtube-nocookie.com/embed/'+videoId+'?enablejsapi=1&playsinline=1&rel=0'+(location.origin!=='null'?'&origin='+encodeURIComponent(location.origin):'')+'" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><div class="demo-caption"><span>Male demonstration · '+esc(demo.channel)+'</span><a href="https://www.youtube.com/watch?v='+videoId+'" target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a></div>':'')+'<p id="videoStatus" role="status">'+(videoId?'Loading the technique player…':demo?'Written instructions selected. You can turn the demonstration back on below.':D.movementPictures.has(e.id)?'Watch the movement and follow the steps below.':'Follow the illustrated guide and steps below.')+'</p>'+(demo?.variantNote&&videoId?'<p class="video-note">'+esc(demo.variantNote)+'</p>':'')+
      '<h3>How to do it</h3>'+visualSteps(e)+'<h3>Common mistakes</h3><ul>'+e.commonMistakes.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul><p class="technique-muscles"><strong>Primary muscles:</strong> '+esc(e.primaryMuscles.map(label).join(', '))+'<br><strong>Secondary muscles:</strong> '+esc(e.secondaryMuscles.map(label).join(', ')||'None listed')+'</p>'+
      '<h3>Alternatives</h3>'+[e.homeAlternativeId,e.outdoorAlternativeId].filter((v,i,a)=>v&&a.indexOf(v)===i).map(alt=>'<button class="button subtle" data-action="video" data-id="'+alt+'">'+esc(M.exerciseLibrary[alt].name)+'</button>').join('')+
      (demo?'<details class="video-selection"><summary>Video preference</summary><p>Demonstrations feature male instructors. Choose how to view this exercise on this device.</p><div class="video-preferences"><button class="button'+(videoId?' primary':'')+'" data-action="reset-video" data-id="'+id+'" aria-pressed="'+!!videoId+'">Use demonstration</button><button class="button'+(!videoId?' primary':'')+'" data-action="written-video" data-id="'+id+'" aria-pressed="'+!videoId+'">Written steps only</button></div><p>Videos stream through YouTube when this guide is open. Written steps work offline.</p></details>':'')+'</div>';
    if(!videoModal.open)videoModal.showModal();if(matchMedia('(prefers-reduced-motion: reduce)').matches)videoModal.querySelector('.motion-stage svg')?.pauseAnimations?.();videoModal.scrollTop=0;$('#closeVideo').focus({preventScroll:true});$('#closeVideo').onclick=()=>videoModal.close();
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
    const rows=[['id','name','youtubeSearchQuery','reviewedVideoId','playbackVideoId','channel'],...D.exercises.map(e=>[e.id,e.name,e.youtubeSearchQuery,D.reviewedVideos[e.id]?.id||'',M.videoIdFor(state(),e.id),D.reviewedVideos[e.id]?.channel||''])];
    ctx.download(rows.map(r=>r.map(quote).join(',')).join('\r\n'),'forge-exercise-video-selection.csv','text/csv;charset=utf-8');
  }
  function videoChecks(){
    const flagged=D.exercises.filter(e=>{const h=state().videoHealth[e.id];return !M.videoIdFor(state(),e.id)||h&&h.status!=='ready';});
    openModal(modalHead('Exercise video checks','Missing selections and checks that need attention.')+'<div class="modal-body"><p>A video is checked when you open its player. Browser or creator restrictions can prevent playback; written instructions remain available.</p><button class="button" data-action="export-video-list">Download all exercises & search queries</button>'+flagged.map(e=>'<div class="active-row"><div><strong>'+esc(e.name)+'</strong><small>'+(!M.videoIdFor(state(),e.id)?'No video selected':esc(label(state().videoHealth[e.id]?.status||'Not checked')))+'</small></div><button class="button subtle" data-action="video" data-id="'+e.id+'">'+(M.videoIdFor(state(),e.id)?'Check again':'Instructions & selection')+'</button></div>').join('')+'</div>');
  }
  function action(action,b){
    const id=b.dataset.id,s=state();
    if(action==='motion-toggle'){const svg=videoModal.querySelector('.motion-stage svg');if(!svg)return true;const playing=b.dataset.playing==='true';if(playing)svg.pauseAnimations?.();else svg.unpauseAnimations?.();b.dataset.playing=String(!playing);b.textContent=playing?'Play animation':'Pause animation';return true;}
    if(action==='widen-filter'&&['level','goal','location','days'].includes(id)){filters[id]='all';renderPlans();document.querySelector('#catalogCount')?.scrollIntoView({block:'center'});return true;}
    if(action==='preview-week-step'){updateWeek(id,b.dataset.week,b.dataset.weekScope);return true;}
    if(action==='change-plan'){
      replacementId=id||s.activePlan;
      Object.assign(filters,{level:'all',goal:'all',location:'all',days:'all',saved:'all',audience:'all',muscle:'all',fits:true,search:''});
      closeModal();setView('plans');window.scrollTo({top:0,behavior:'auto'});return true;
    }
    if(action==='cancel-program-change'){replacementId='';closeModal();setView('workout');return true;}
    if(action==='remove-program'){
      if(!active(id))return true;
      const p=M.planById(s,id);
      openModal(modalHead('Remove this program?',p.name)+'<div class="modal-body"><p>Remove this program from your active and saved programs. Your logged workouts stay saved, and you can choose this program again later.</p><p>You can browse for another program or continue without this one.</p></div><div class="modal-footer program-removal-footer"><button class="button" data-action="confirm-remove-program" data-id="'+esc(id)+'" data-next="workout">Remove for now</button><button class="button primary" data-action="confirm-remove-program" data-id="'+esc(id)+'" data-next="plans">Remove & choose another</button></div>');return true;
    }
    if(action==='confirm-remove-program'){
      M.removeProgram(s,id);replacementId='';s.onboarded=true;save();closeModal();
      Object.assign(filters,{level:'all',goal:'all',location:'all',days:'all',saved:'all',audience:'all',muscle:'all',fits:true,search:''});setView(b.dataset.next==='plans'?'plans':'workout');toast('Program removed. Your logged workouts are kept.');return true;
    }
    if(action==='browse-section'||action==='reset-catalog'){
      Object.assign(filters,{level:'all',goal:'all',location:'all',days:'all',saved:'all',audience:'all',muscle:'all',fits:false,search:''});
      if(action==='browse-section'&&['goal','muscle','audience'].includes(b.dataset.kind))filters[b.dataset.kind]=id;
      renderPlans();$('#catalogResults').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});return true;
    }
    if(action==='bookmark'){M.bookmark(s,id,!marked(id));save();if(videoModal.open)return true;if($('#modal').open)previewPlan(id);else setView(ctx.getView());return true;}
    if(action==='toggle-active'){
      if(replacementId===id){replacementId='';closeModal();setView('workout');return true;}
      if(replacementId&&replacementId!==id){if(setupMismatch(id))return true;selectPlan(M.planById(s,id));}
      else if(!active(id)){if(setupMismatch(id))return true;selectPlan(M.planById(s,id));}
      else{M.setActive(s,id,false);if(s.activePlan===id){s.sessionId=null;if(s.activePrograms.length){s.activePlan=s.activePrograms[0];s.activeWorkout=M.planById(s).workouts[0].id;}}save();closeModal();setView(ctx.getView()==='workout'?'calendar':ctx.getView());}
      return true;
    }
    if(action==='calendar-prev'||action==='calendar-next'||action==='calendar-today'){s.selectedDate=action==='calendar-today'?M.today():M.addDays(s.selectedDate,action==='calendar-prev'?-7:7);save();renderCalendar();return true;}
    if(action==='calendar-session'){s.activePlan=b.dataset.plan;s.activeWorkout=id;s.selectedDate=b.dataset.date;s.sessionId=null;save();setView('workout');return true;}
    if(action==='restart-block'){M.bookmark(s,id,true);s.programSettings[id]={...M.settingsFor(s,id),startedOn:M.monday(M.today())};clearEmptyDraft(id);save();if(ctx.getView()==='workout')setView('workout');previewPlan(id);return true;}
    if(action==='workout-today'){s.selectedDate=M.today();s.sessionId=null;save();setView('workout');return true;}
    if(action==='video-checks'){videoChecks();return true;}
    if(action==='export-video-list'){exportVideoList();return true;}
    if(action==='written-video'&&M.exerciseLibrary[id]){s.videoOverrides[id]='';delete s.videoHealth[id];save();showVideo(id);const details=videoModal.querySelector('.video-selection');if(details)details.open=true;videoModal.querySelector('[data-action=written-video]')?.focus();return true;}
    if(action==='reset-video'){delete s.videoOverrides[id];delete s.videoHealth[id];save();showVideo(id);const details=videoModal.querySelector('.video-selection');if(details)details.open=true;videoModal.querySelector('[data-action=reset-video]')?.focus();return true;}
    if(action==='exercise-rest'){ctx.startRest(Number(b.dataset.seconds));return true;}
    return false;
  }
  return {renderPlans,renderPlanGrid,renderCalendar,previewPlan,workoutIntro,programActions,recommendationWeeks,showVideo,action,change,inputEvent,setupMismatch,warningsHTML,guideHTML,setupContext,replacementFor:()=>replacementId,clearReplacement:()=>{replacementId='';}};
};
