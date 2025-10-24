self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("connectpro-cache-v1").then(cache => {
      return cache.addAll(["/", "/index.html", "/connect_pro.png"]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
