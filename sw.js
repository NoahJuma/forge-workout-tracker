"use strict";
const CACHE_NAME='forge-tracker-v4-20261104-visual-catalog-r1';
const APP_FILES=['./','./index.html','./theme.js','./styles.css','./catalog.css','./program-controls.css','./program-weeks.css','./mobile.css','./reviewed-videos.js','./exercise-illustrations.js','./animation-links.js','./movement-pictures.js','./data.js','./catalog.js','./exercises.js','./exercises-expanded.js','./programs.js','./programs-expanded.js','./additional-programs.js','./program-model.js','./program-ui.js','./model.js','./app.js','./assets/dumbbells.jpg','./assets/barbell.jpg','./assets/bands.jpg','./assets/kettlebell.jpg','./assets/outdoor.jpg','./assets/mobility.jpg','./manifest.webmanifest','./icon-192.png','./icon-512.png','./EXERCISE_VIDEO_SELECTION.csv'];
const OWN_CACHE_PREFIX='forge-tracker-';
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(APP_FILES)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(OWN_CACHE_PREFIX)&&key!==CACHE_NAME).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url);
  // Only cache this app's versioned shell; leave videos and other sites to the network.
  if(event.request.method!=='GET'||url.origin!==self.location.origin||url.search)return;
  const scope=new URL('./',self.location.href);
  const allowed=new Set(APP_FILES.map(file=>new URL(file,scope).href));
  if(!allowed.has(url.href))return;
  event.respondWith((async()=>{
    // Install the shell atomically so different releases' scripts never mix.
    const cache=await caches.open(CACHE_NAME);
    const cached=await cache.match(event.request);
    return cached||fetch(event.request);
  })());
});
