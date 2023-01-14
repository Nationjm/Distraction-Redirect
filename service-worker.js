self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        new Promise((resolve) => {
            if (event.request.url.endsWith('/favicon.ico')) {
                resolve(new Response());
            } else {
                resolve(Response.redirect("https://www.youtube.com/watch?v=cVc8v4iALW4"));
            }
        })
    );
});
