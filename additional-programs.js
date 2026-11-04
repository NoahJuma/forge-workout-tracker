"use strict";
/** Additional independently identified templates, derived from an existing authored schedule. */
globalThis.ForgeAdditionalPrograms=(programs)=>{
  const base=programs.find(p=>p.id==='shortcut-to-strength');
  if(!base)throw Error('The advanced strength template is missing.');
  const plan=JSON.parse(JSON.stringify(base));
  Object.assign(plan,{
    programNumber:196,id:'advanced-strength-cardio-cut',name:'Advanced Strength & Cardio',
    goal:'fat-loss',level:'advanced',audience:'general',muscleFocus:[],sessionLengthMinutes:105,
    description:'Four upper/lower strength sessions with a short brisk walk after each workout. Designed for experienced lifters seeking to maintain strength while managing body weight.',
    method:'Strength maintenance and moderate aerobic activity',
    progressionRule:'Use established, controlled working loads and keep at least 2 repetitions in reserve. Maintain the same load while recovery is limited; add the smallest available increment only after all sets are completed with consistent technique. Increase walking time gradually if recovery allows. Body-weight change depends on overall energy balance; no workout guarantees fat loss.',
    whyThisWorks:'Resistance work helps retain strength while aerobic activity increases weekly movement. Sustainable nutrition, recovery and total energy balance also matter for body-weight change. This template is an example informed by general guidance, not a clinically validated weight-loss protocol.',
    volumeNotes:'Experienced lifters can adjust the load to keep repetitions controlled. Avoid training to failure, retain the scheduled rest days and reduce workload if recovery declines. The four 15-minute walks provide 60 minutes; gradually add moderate activity outside these sessions toward 150 minutes per week if appropriate.',
  });
  for(const day of plan.schedule){
    day.id=plan.id+'-'+day.id;
    if(day.kind!=='training')continue;
    day.sessionLengthMinutes=105;
    for(const exercise of day.exercises){if(exercise.hardSet&&exercise.sets>3)exercise.sets=3;}
    day.exercises.push({exerciseId:'walk',sets:1,min:null,max:null,durationSeconds:900,distanceMetres:null,restSeconds:0,rir:null,perSide:false,hardSet:false,intensityNote:'Walk briskly at a pace where conversation remains possible; slow down if needed.'});
    day.notes+=' Finish with the planned walk. Keep the strength work controlled and adjust to your recovery.';
  }
  plan.references.push({id:'who-physical-activity',title:'WHO: Physical activity recommendations for adults',url:'https://www.who.int/news-room/fact-sheets/detail/physical-activity'});
  return [plan];
};
if(typeof module!=='undefined')module.exports=globalThis.ForgeAdditionalPrograms;
