var CACHE_NAME = 'my-web-app-cache';
var urlsToCache = [
    '/',
    '/css/style.css',
    '/js/index.bundle.js',
];

self.addEventListener('install', function(event) {
    // event.waitUntil принимает промис для того, чтобы узнать,
    // сколько времени займёт установка, и успешно
    // или нет она завершилась.
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});