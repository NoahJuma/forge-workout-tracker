"use strict";
const CACHE_NAME='forge-tracker-v4-20261031-r3';
const APP_FILES=['./','./index.html','./theme.js','./styles.css','./data.js','./model.js','./app.js','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
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
