"use strict";
/** Small schematic movement guides; written instructions give full setup and safety details. */
globalThis.ForgeMovementPictures=(()=>{
 const ids=['foot-assisted-pullup','negative-pullup','active-hang','eccentric-pushup','hamstring-walkout','band-row','band-chest-press','band-triceps-extension','sprint','hill-run','stair-climb','broad-jump','wall-slide','supported-squat','supported-hip-abduction','supported-hip-extension','supported-weight-shift','supported-tandem','rib-breathing','pelvic-floor-awareness','standing-w-squeeze','band-wide-row','supported-single-calf','prone-w-raise','park-stepup','march','easy-run','tempo-run','step-jack','stepback-thrust','open-book','scapular-pushup','ankle-rock','supported-calf','seated-march','seated-heel-raise'];
 const line=(a,b,color='#31442c',w=5)=>`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>`;
 const bone=(p)=>{let [head,neck,hip,el,er,hl,hr,kl,kr,fl,fr]=p;const torso=line(neck,hip,'#426b62',12),arms=[[neck,el],[el,hl],[neck,er],[er,hr]].map(([a,b])=>line(a,b,'#bd8766',6)).join(''),legs=[[hip,kl],[kl,fl],[hip,kr],[kr,fr]].map(([a,b])=>line(a,b,'#293846',7)).join('');return torso+arms+legs+`<circle cx="${hip[0]}" cy="${hip[1]}" r="7" fill="#293846"/><circle cx="${head[0]}" cy="${head[1]}" r="7.5" fill="#bd8766"/><path d="M${head[0]-7} ${head[1]-2} Q${head[0]-7} ${head[1]-10} ${head[0]} ${head[1]-10} Q${head[0]+7} ${head[1]-10} ${head[0]+7} ${head[1]-2} Q${head[0]} ${head[1]-5} ${head[0]-7} ${head[1]-2}Z" fill="#293846"/>`;};
 const upright=[[54,17],[54,27],[54,62],[43,42],[65,42],[37,55],[71,55],[46,81],[62,81],[43,103],[65,103]];
 const body=(changes={})=>upright.map((v,i)=>changes[i]||v);
 const wall=`<path d="M94 13V106M14 106H105" fill="none" stroke="#879785" stroke-width="3"/>`;
 const bar=`<path d="M20 32H88 M20 32V105 M88 32V105 M12 106H105" fill="none" stroke="#879785" stroke-width="3"/>`;
 const chair=`<path d="M22 68H58 M22 68V105 M58 68V105 M22 68V42" fill="none" stroke="#879785" stroke-width="4"/>`;
 const arrow=(a,b)=>`<path d="M${a[0]} ${a[1]} L${b[0]} ${b[1]}" fill="none" stroke="#76952e" stroke-width="3" marker-end="url(#arrow)"/>`;
 /** @param {string} id @param {boolean|string} moved */
 function frame(id,moved){
  let p=body(),props='',movement='';
  if(['foot-assisted-pullup','negative-pullup','active-hang'].includes(id)){
   const upper=id==='active-hang'?false:id==='negative-pullup'?!moved:moved;
   p=body({0:[54,upper?18:36],1:[54,upper?28:46],2:[54,upper?62:70],3:[39,upper?40:39],4:[69,upper?40:39],5:[34,32],6:[74,32],7:[45,87],8:[63,87],9:[44,id==='negative-pullup'&&moved?98:105],10:[64,id==='negative-pullup'&&moved?98:105]});props=bar;
   if(id==='negative-pullup')movement=arrow([82,45],[82,70]);else if(id==='foot-assisted-pullup')movement=arrow([82,70],[82,45]);
  }else if(id==='eccentric-pushup'){
   p=moved?[[91,78],[82,80],[55,84],[74,91],[74,91],[70,103],[70,103],[36,90],[36,90],[18,103],[18,103]]:[[91,52],[82,56],[55,68],[78,79],[78,79],[75,103],[75,103],[35,81],[35,81],[17,103],[17,103]];props=`<path d="M7 106H110" stroke="#879785" stroke-width="3"/>`;movement=arrow([104,60],[104,86]);
  }else if(id==='hamstring-walkout'){
   p=[[17,96],[26,94],[52,75],[31,101],[31,101],[43,103],[43,103],moved?[80,86]:[75,75],moved?[84,88]:[78,77],moved?[104,103]:[84,103],moved?[106,103]:[87,103]];props=`<path d="M7 106H110" stroke="#879785" stroke-width="3"/>`;movement=arrow([80,96],[101,96]);
  }else if(['band-row','band-wide-row'].includes(id)){
   p=[[24,40],[24,50],[27,78],[moved?18:41,63],[moved?18:41,63],[moved?30:54,69],[moved?30:54,69],[59,90],[59,90],[94,103],[94,103]];props=`<path d="M10 106H110" stroke="#879785" stroke-width="3"/><path d="M94 103 Q70 73 ${moved?30:54} 69" fill="none" stroke="#8da82e" stroke-width="3"/>`;movement=arrow([62,60],[42,60]);
  }else if(id==='band-chest-press'){
   p=body({3:[42,43],4:[66,43],5:moved?[18,40]:[42,48],6:moved?[90,40]:[66,48]});props=`<path d="M${moved?18:42} 40 Q54 58 ${moved?90:66} 40" fill="none" stroke="#8da82e" stroke-width="3"/>`;movement=arrow([67,36],[90,36]);
  }else if(id==='band-triceps-extension'){
   p=body({3:[48,25],4:[60,25],5:moved?[49,6]:[45,36],6:moved?[59,6]:[63,36]});props=`<path d="M48 105 Q22 69 ${moved?49:45} ${moved?6:36}" fill="none" stroke="#8da82e" stroke-width="3"/>`;movement=arrow([76,38],[76,11]);
  }else if(['sprint','hill-run','easy-run','tempo-run'].includes(id)){
   p=[[66,23],[60,32],[48,63],[48,39],[69,43],[37,33],[78,31],moved?[31,76]:[38,88],moved?[65,77]:[62,68],moved?[20,98]:[24,103],moved?[82,87]:[70,92]];props=id==='hill-run'?`<path d="M8 108L109 85" stroke="#879785" stroke-width="3"/>`:`<path d="M8 106H110" stroke="#879785" stroke-width="3"/>`;movement=arrow([80,48],[105,48]);
  }else if(id==='prone-w-raise'){
   p=[[17,93],[27,94],[57,96],[36,moved?76:89],[36,moved?76:89],[27,moved?66:79],[27,moved?66:79],[81,98],[81,98],[105,102],[105,102]];props=`<path d="M7 106H110" stroke="#879785" stroke-width="3"/>`;movement=arrow([44,83],[44,71]);
  }else if(id==='park-stepup'){
   p=body(moved?{0:[54,4],1:[54,14],2:[54,49],7:[46,69],8:[62,69],9:[46,82],10:[64,82]}:{8:[68,72],10:[77,83]});props=`<path d="M8 106H58V84H108V106" fill="none" stroke="#879785" stroke-width="4"/>`;movement=arrow([89,78],[89,62]);
  }else if(id==='march'){
   p=body(moved==='left'?{3:[43,47],4:[65,39],5:[37,58],6:[72,28],7:[37,70],9:[33,84]}:moved?{3:[43,39],4:[65,47],5:[36,28],6:[71,58],8:[71,70],10:[75,84]}:{});props=`<path d="M8 106H110" stroke="#879785" stroke-width="3"/>`;movement=arrow([82,90],[82,68]);
  }else if(id==='step-jack'){
   p=body(moved==='left'?{3:[35,30],4:[73,30],5:[25,15],6:[83,15],7:[31,80],9:[15,103]}:moved?{3:[35,30],4:[73,30],5:[25,15],6:[83,15],8:[77,80],10:[93,103]}:{});props=`<path d="M8 106H110" stroke="#879785" stroke-width="3"/>`;movement=moved==='left'?arrow([36,97],[15,97]):arrow([71,97],[93,97]);
  }else if(id==='stepback-thrust'){
   const crouch=[[75,50],[70,59],[53,74],[76,80],[76,80],[77,103],[77,103],[43,88],[61,90],[38,103],[59,103]];
   const step=[[90,53],[82,59],[55,72],[78,79],[78,79],[75,103],[75,103],[34,86],[62,89],[17,103],[59,103]];
   const plank=[[91,52],[82,56],[55,68],[78,79],[78,79],[75,103],[75,103],[35,81],[35,81],[17,103],[17,103]];
   p=moved==='crouch'?crouch:moved==='step'?step:moved?plank:upright;props=`<path d="M7 106H110" stroke="#879785" stroke-width="3"/>`;movement=arrow([54,83],[26,83]);
  }else if(id==='open-book'){
   p=[[18,60],[28,60],[60,60],[36,48],[36,48],[48,48],moved?[25,24]:[48,48],[70,80],[70,80],[90,80],[90,80]];props=`<path d="M7 107H110" stroke="#879785" stroke-width="3"/>`;movement=arrow([52,35],[30,20]);
  }else if(id==='scapular-pushup'){
   p=[[91,moved?47:52],[82,moved?51:56],[55,68],[78,79],[78,79],[75,103],[75,103],[35,81],[35,81],[17,103],[17,103]];props=`<path d="M7 106H110" stroke="#879785" stroke-width="3"/>`;movement=arrow([100,64],[100,50]);
  }else if(id==='ankle-rock'){
   p=body({3:[70,42],4:[72,47],5:[93,39],6:[93,45],8:[moved?79:65,82],10:[72,103]});props=wall;movement=arrow([65,78],[80,78]);
  }else if(id==='supported-calf'){
   p=body({3:[72,39],4:[74,45],5:[93,39],6:[93,45],9:moved?[44,96]:[43,103],10:moved?[61,96]:[65,103]});props=wall+line(moved?[44,96]:[43,103],[50,103],'#31442c',4)+line(moved?[61,96]:[65,103],[68,103],'#31442c',4);movement=arrow([28,98],[28,86]);
  }else if(['seated-march','seated-heel-raise'].includes(id)){
   const marching=id==='seated-march',left=moved==='left';
   p=[[37,27],[37,37],[38,68],[28,50],[48,50],[31,63],[52,63],marching&&moved&&!left?[65,63]:[61,80],marching&&left?[65,63]:[61,80],marching&&moved&&!left?[75,81]:!marching&&moved?[64,96]:[65,103],marching&&left?[75,81]:[65,103]];props=chair+line(!marching&&moved?[64,96]:[65,103],[73,103],'#31442c',4);movement=arrow([80,93],[80,75]);
  }else if(id==='stair-climb'){
   p=body(moved?{2:[54,55],7:[48,73],8:[63,72],9:[46,85],10:[66,84]}:{7:[47,81],8:[67,68],9:[44,103],10:[76,83]});props=`<path d="M7 106H55V87H79V68H108" fill="none" stroke="#879785" stroke-width="4"/>`;movement=arrow([85,80],[101,62]);
  }else if(id==='broad-jump'){
   p=body(moved==='land'?{0:[69,30],1:[67,39],2:[67,65],3:[58,53],4:[79,53],5:[48,61],6:[87,61],7:[56,79],8:[80,79],9:[58,103],10:[80,103]}:moved?{0:[62,16],1:[59,26],2:[49,53],3:[49,29],4:[68,28],5:[40,19],6:[80,18],7:[39,72],8:[64,68],9:[33,92],10:[76,86]}:{0:[50,30],1:[48,39],2:[48,65],3:[39,53],4:[60,53],5:[29,61],6:[68,61],7:[37,79],8:[61,79],9:[39,103],10:[61,103]});props=`<path d="M8 106H110" stroke="#879785" stroke-width="3"/>`;movement=arrow([65,16],[98,16]);
  }else if(id==='wall-slide'){
   p=body({3:[44,39],4:[76,38],5:moved?[47,14]:[44,25],6:moved?[87,14]:[85,27]});props=wall;movement=arrow([85,38],[85,16]);
  }else if(id==='supported-squat'){
   p=moved?body({0:[54,28],1:[54,38],2:[54,73],3:[70,46],5:[92,47],7:[43,86],8:[67,86]}):body({3:[70,41],5:[92,47]});props=wall;movement=arrow([31,55],[31,72]);
  }else if(id==='supported-hip-abduction'){
   p=body({4:[75,40],6:[93,40],8:moved?[76,77]:[62,81],10:moved?[90,92]:[65,103]});props=wall;movement=arrow([67,91],[86,91]);
  }else if(id==='supported-hip-extension'){
   p=body({3:[70,42],5:[93,40],7:moved?[35,80]:[46,81],9:moved?[22,98]:[43,103]});props=wall;movement=arrow([45,94],[22,94]);
  }else if(id==='supported-weight-shift'){
   p=body({0:[moved?63:45,17],1:[moved?63:45,27],2:[moved?62:46,62],4:[76,42],6:[93,40]});props=wall;movement=arrow([36,70],[70,70]);
  }else if(id==='supported-tandem'){
   p=body({4:[76,42],6:[93,40],7:[49,82],8:[62,78],9:[45,103],10:[moved?60:67,103]});props=wall+line([16,78],[16,90],'#879785',5)+line([27,moved?70:78],[27,moved?82:90],'#879785',5);movement=arrow([36,91],[36,72]);
  }else if(id==='rib-breathing'){
   p=body({3:[43,41],4:[65,41],5:[46,48],6:[62,48]});props=`<path d="M42 43 Q54 ${moved?51:37} 66 43" fill="none" stroke="#8da82e" stroke-width="3"/>`;movement=moved?arrow([78,49],[68,49]):arrow([68,49],[78,49]);
  }else if(id==='pelvic-floor-awareness'){
   p=body({3:[43,41],4:[65,41],5:[46,48],6:[62,48]});movement=moved?arrow([79,85],[79,70]):arrow([79,70],[79,85]);
  }else if(id==='standing-w-squeeze'){
   p=body({3:[43,47],4:[65,47],5:moved?[34,27]:[43,29],6:moved?[74,27]:[65,29]});movement=arrow([36,31],[27,31]);
  }else if(id==='supported-single-calf'){
   p=body({3:[73,38],4:[75,44],5:[93,38],6:[93,44],7:[52,82],8:[67,77],9:moved?[51,96]:[50,103],10:[70,88]});props=wall+line(moved?[51,96]:[50,103],[58,103],'#31442c',4);movement=arrow([38,96],[38,84]);
  }else return '';
  return `<svg viewBox="0 0 120 120" role="img" aria-label="${moved?'Movement position':'Starting position'}"><defs><linearGradient id="motionBackground" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f7f9f1"/><stop offset="1" stop-color="#dce8d3"/></linearGradient><marker id="arrow" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0 0L5 2.5L0 5Z" fill="#76952e"/></marker></defs><rect width="120" height="120" rx="12" fill="url(#motionBackground)"/><circle cx="60" cy="56" r="44" fill="#ffffff" opacity=".32"/>${props}${bone(p)}${movement}</svg>`;
 }
 /** Build a smooth, self-contained SVG by animating corresponding figure coordinates. */
 function animation(id,name=id){
  if(!ids.includes(id)||typeof DOMParser==='undefined')return '';
  const stages=id==='stepback-thrust'?[false,'crouch','step',true,'step','crouch',false]:id==='broad-jump'?[false,true,'land','land',false]:['march','seated-march','step-jack'].includes(id)?[false,true,false,'left',false]:[false,true,false];
  const documents=stages.map(stage=>new DOMParser().parseFromString(frame(id,stage),'image/svg+xml'));
  const first=documents[0],svg=first.documentElement,lists=documents.map(doc=>[...doc.documentElement.querySelectorAll('line,circle,path')]),a=lists[0];let animated=0;
  const signature=v=>v.replace(/-?\d+(?:\.\d+)?/g,'#');
  for(let i=0;i<a.length;i++){
   if(lists.some(list=>!list[i]||list[i].tagName!==a[i].tagName))continue;
   for(const attr of ['x1','y1','x2','y2','cx','cy','d']){
    const values=lists.map(list=>list[i].getAttribute(attr));if(values.some(v=>v===null)||values.every(v=>v===values[0])||attr==='d'&&values.some(v=>signature(v)!==signature(values[0])))continue;
    const anim=first.createElementNS('http://www.w3.org/2000/svg','animate');anim.setAttribute('attributeName',attr);anim.setAttribute('values',values.join(';'));anim.setAttribute('dur',stages.length>3?'8s':'4s');anim.setAttribute('repeatCount','indefinite');anim.setAttribute('calcMode','spline');anim.setAttribute('keyTimes',stages.map((_,n)=>n/(stages.length-1)).join(';'));anim.setAttribute('keySplines',stages.slice(1).map(()=>'.42 0 .58 1').join(';'));a[i].appendChild(anim);animated++;
   }
  }
  if(!animated){const pulse=first.createElementNS('http://www.w3.org/2000/svg','animate');pulse.setAttribute('attributeName','opacity');pulse.setAttribute('values','1;.8;1');pulse.setAttribute('dur','4s');pulse.setAttribute('repeatCount','indefinite');svg.appendChild(pulse);}
  svg.setAttribute('aria-label','Animated movement guide for '+name);return new XMLSerializer().serializeToString(svg);
 }
 return {has:id=>ids.includes(id),frames:id=>ids.includes(id)?[frame(id,false),frame(id,true)]:[],animation};
})();
if(typeof module!=="undefined")module.exports=globalThis.ForgeMovementPictures;
