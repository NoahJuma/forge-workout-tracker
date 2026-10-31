"use strict";
// Apply before the stylesheet paints so a saved preference does not flash the other theme.
(() => {
  const KEY='forge-appearance';
  const choices=['light','dark','system'];
  const system=window.matchMedia('(prefers-color-scheme: dark)');
  const valid=value=>choices.includes(value)?value:'system';
  let preference='system';
  try{preference=valid(localStorage.getItem(KEY));}catch(error){/* The theme still works for this visit when storage is blocked. */}
  const resolved=()=>preference==='system'?(system.matches?'dark':'light'):preference;
  function apply(){
    const theme=resolved();
    document.documentElement.dataset.theme=theme;
    document.documentElement.dataset.themePreference=preference;
    const meta=document.querySelector('meta[name="theme-color"]');
    if(meta)meta.content=theme==='dark'?'#111310':'#f6f8f2';
    document.dispatchEvent(new CustomEvent('forge-theme-change'));
  }
  function setPreference(value){
    preference=valid(value);
    let saved=true;
    try{localStorage.setItem(KEY,preference);}catch(error){saved=false;}
    apply();
    return saved;
  }
  const onSystemChange=()=>{if(preference==='system')apply();};
  if(system.addEventListener)system.addEventListener('change',onSystemChange);
  else if(system.addListener)system.addListener(onSystemChange);
  window.addEventListener('storage',event=>{
    if(event.key===KEY||event.key===null){preference=valid(event.newValue);apply();}
  });
  globalThis.ForgeTheme=Object.freeze({getPreference:()=>preference,getResolved:resolved,setPreference});
  apply();
})();
