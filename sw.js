self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('jerovia-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/jeropoints.html',
        '/jerostore.html',
        '/deudas.html',
        '/estrellas.html',
        '/manifest.json',
        '/icon-192.png',
        '/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
