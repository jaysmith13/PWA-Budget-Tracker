const app_prefix = "budgetTracker-";
const version = "version_01";
const Cache_Name = app_prefix + version;
const files_to_cache = [
    "./index.html",
    './css/styles.css',
    './js/index.js',
    './js/idb.js',
    './icons/icon-512x512.png',
    './icons/icon-384x384.png',
    './icons/icon-192x192.png',
    './icons/icon-152x152.png',
    './icons/icon-144x144.png',
    './icons/icon-128x128.png',
    './icons/icon-96x96.png',
    './icons/icon-72x72.png'
];

// fetch 
self.addEventListener("fetch", function (e) {
    e.respondWith(
      caches.match(e.request).then(function (request) {
        if (request) {
          return request;
        } else {
          return fetch(e.request);
        }
      })
    );
  });
// cache 
self.addEventListener("install", function (e) {
    e.waitUntil(
        caches.open(Cache_Name).then(function (cache){
            return cache.addAll(files_to_cache);
        })
    );
});