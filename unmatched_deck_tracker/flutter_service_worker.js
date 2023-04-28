'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"main.dart.js": "7a7c8746b3bf4c149af5df06c26c3d6f",
"version.json": "aeeaa60e146cbe689c9e99ca5ac7305d",
"assets/unmatched_deck_tracker_assets/characters/Achilles.json": "586014dd1353b798d3940afdbb550971",
"assets/unmatched_deck_tracker_assets/characters/Alice.json": "2ec25240716b56bf1a4f1d5639892c2d",
"assets/unmatched_deck_tracker_assets/characters/Angel.json": "fa17f2222ab85f34519cdcacaa862676",
"assets/unmatched_deck_tracker_assets/characters/Beowulf.json": "f23c8636652e2524dcf0c358e7de7279",
"assets/unmatched_deck_tracker_assets/characters/Bigfoot.json": "b752d2d81f5932c1785f75c422b0883c",
"assets/unmatched_deck_tracker_assets/characters/Bloody%2520Mary.json": "730fd8f220135b6e012824788e8cd9f5",
"assets/unmatched_deck_tracker_assets/characters/Bruce%2520Lee.json": "fe209ad6a2180b1c1d7e8a1060df867b",
"assets/unmatched_deck_tracker_assets/characters/Buffy.json": "1878415854db0af48bce68ddb7ac756b",
"assets/unmatched_deck_tracker_assets/characters/Bullseye.json": "8edc16be5cf5af20a7705e7d55c07f87",
"assets/unmatched_deck_tracker_assets/characters/Daredevil.json": "df8f86635b632c8f554dd7321881a877",
"assets/unmatched_deck_tracker_assets/characters/Deadpool.json": "32ff34817998e6273e88e6770e04540a",
"assets/unmatched_deck_tracker_assets/characters/Dr.%2520Sattler.json": "e324c9020b686f261c2c8b4437cd3ad3",
"assets/unmatched_deck_tracker_assets/characters/Dracula.json": "d8acb9e452ddee21dfa74ae71abfeb7f",
"assets/unmatched_deck_tracker_assets/characters/Elektra.json": "1c9dca425d425f89aac5910e9196ebd3",
"assets/unmatched_deck_tracker_assets/characters/Ghost%2520Rider.json": "66b5f742f9063d64d7214db083714126",
"assets/unmatched_deck_tracker_assets/characters/InGen.json": "59c00143f1c1a43b863ae46fa698f711",
"assets/unmatched_deck_tracker_assets/characters/Invisible%2520Man.json": "8304d8ec2185cf96d83c801aeb2e409d",
"assets/unmatched_deck_tracker_assets/characters/Jekyll%2520&%2520Hyde.json": "f7684108406ab75a4990fb781ba06c40",
"assets/unmatched_deck_tracker_assets/characters/King%2520Arthur.json": "db925a9bb16f3abec876143641a92394",
"assets/unmatched_deck_tracker_assets/characters/Little%2520Red.json": "eec4549b2e877ebb45b4ec7e676b5ff9",
"assets/unmatched_deck_tracker_assets/characters/Luke%2520Cage.json": "475d776ddf54241bf602db175314f003",
"assets/unmatched_deck_tracker_assets/characters/Medusa.json": "aaca707c31200987b6b9340afd45c2ec",
"assets/unmatched_deck_tracker_assets/characters/Moon%2520Knight.json": "0671d54edb3df3d1c9ffccec3c845858",
"assets/unmatched_deck_tracker_assets/characters/Raptors.json": "5faa0f1ad50d03ae1c1e9f49c28804f9",
"assets/unmatched_deck_tracker_assets/characters/Robin%2520Hood.json": "c80daf0571a802d18c19188aa036e837",
"assets/unmatched_deck_tracker_assets/characters/Sherlock%2520Holmes.json": "34322ab65d14c6cd6a1bbb80fec7bf35",
"assets/unmatched_deck_tracker_assets/characters/Sinbad.json": "36a9e1872158c02564d2e70aed75c6c6",
"assets/unmatched_deck_tracker_assets/characters/Spike.json": "b9457168cc7960ce3e55b168c02acd82",
"assets/unmatched_deck_tracker_assets/characters/Sun%2520Wukong.json": "c887a744b32f38ae04050711f87f0f69",
"assets/unmatched_deck_tracker_assets/characters/TRex.json": "db1bd98571ec0ce18e042f77cb5fa11f",
"assets/unmatched_deck_tracker_assets/characters/Willow.json": "fe2259122375b5736cefcd6cab5e33fe",
"assets/unmatched_deck_tracker_assets/characters/Yennenga.json": "d0ba6931138da73a585f1900409dbcb6",
"assets/unmatched_deck_tracker_assets/characters/Houdini.json": "65cfeee4ca45ceeef28b5c081a2fe3e9",
"assets/unmatched_deck_tracker_assets/characters/The%2520Genie.json": "291d38c31d1e724d61e5406aa000a406",
"assets/unmatched_deck_tracker_assets/characters/Ms.%2520Marvel.json": "75e9556a5c2083ecb29c771ef1fff05f",
"assets/unmatched_deck_tracker_assets/characters/Squirrel%2520Girl.json": "85067f3042363db35b508acc7fbd7821",
"assets/unmatched_deck_tracker_assets/characters/Cloak.json": "9ba35516832d8d96a5265f7ed55d9896",
"assets/unmatched_deck_tracker_assets/images/type_markers/scheme.svg": "9b22b426784a3fcec6827d3cdb64410b",
"assets/unmatched_deck_tracker_assets/images/type_markers/attack.svg": "3856f1fe9fbc496940ea8fc6b406a966",
"assets/unmatched_deck_tracker_assets/images/type_markers/defence.svg": "e13b40d05156e09c32c37e2d23be2af1",
"assets/unmatched_deck_tracker_assets/images/type_markers/versatile.svg": "25641eb08a50d3a7ed561e3aebb1c296",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Houdini.jpg": "05a14c3505fbcd73e1e538a2a1dd93be",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Robin%2520Hood.jpg": "dd9e09948ee699450ada6b08522f596d",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Medusa.jpg": "d97b68083d2bed4047dc5736169080f9",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Beowulf.jpg": "f656b1b96ca59104ac1dae0dce0ee692",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Jekyll%2520&%2520Hyde.jpg": "b2b36d1b4d1da3df8f0eb3da66a40b2b",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Little%2520Red.jpg": "c1de0d8ea4f6d1d79cdc48fb4c019a55",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Bruce%2520Lee.jpg": "fa816ed9c22f91b3f118e018a2185bf9",
"assets/unmatched_deck_tracker_assets/images/cardbacks/King%2520Arthur.jpg": "2f78c2160418ee290f9f7b09febad6dc",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Alice.jpg": "058a5caf4ccc24b118bb7988baf9b3fb",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Bloody%2520Mary.jpg": "311384b34e24df267627325f87baced6",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Achilles.jpg": "b857b88d04b84092ffe7d23a15c95254",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Angel.jpg": "7a8ad647ad89e283c62fd6aa2273221f",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Dr.%2520Sattler.jpg": "0b774e9c0927294ebbc5429d26e1e999",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Dracula.jpg": "19a6e2caad99c30e4e923c5b1c8bc6c0",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Elektra.jpg": "e6d4c5aa04311ed03b6b7efdc630cbb9",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Ghost%2520Rider.jpg": "98a9cbc4d559dd22ad37914b9739d1ef",
"assets/unmatched_deck_tracker_assets/images/cardbacks/InGen.jpg": "e10753d9996c44c29ee3d01f44a978e5",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Invisible%2520Man.jpg": "1d6ec93a6751bb9389180e465acfecd7",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Sherlock%2520Holmes.jpg": "a5087ea3519b7fccdf1864bc12dbfb38",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Moon%2520Knight.jpg": "3354bd705f32cffa17d01d0e27a6a1da",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Luke%2520Cage.jpg": "835b2d1deb0be38bdf14b135add183a2",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Raptors.jpg": "ad49d0cfd80fab9d8fb5641f8d25f38b",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Sinbad.jpg": "5f93c374fa2c6f4f30aeb5124ad23388",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Bigfoot.jpg": "eca52c28e4458b0f816c7dd584e3059f",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Bullseye.jpg": "2277ebcf36b72efab46c5f45192db707",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Daredevil.jpg": "3aa24009b8be2be66d499f307f1d45ca",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Buffy.jpg": "a578319ffa513605b3a97c2a58f75319",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Deadpool.jpg": "512a6a27bf1f7c125de49adf2c5b7e38",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Yennenga.jpg": "bb5382c575a4be16f7ae5dbdfcd83743",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Willow.jpg": "dd6b682d3c335e918263c2c553b65704",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Spike.jpg": "52cfe29567c12d1623767013ed9ff8c1",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Sun%2520Wukong.jpg": "835f2117de62c0c3c6933e42d69e4833",
"assets/unmatched_deck_tracker_assets/images/cardbacks/The%2520Genie.jpg": "c21d1a8083a6b4adeacfb62abb5ce28a",
"assets/unmatched_deck_tracker_assets/images/cardbacks/T.%2520Rex.jpg": "4ad21d7026efdf8c64dd12484e4b055c",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Ms.%2520Marvel.jpg": "022a57a617d7c802d18e1d171bea9d9a",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Squirrel%2520Girl.jpg": "2990840f39271756db60acd18d66b9a9",
"assets/unmatched_deck_tracker_assets/images/cardbacks/Cloak.jpg": "f15be73207b34410147f7d29bab20612",
"assets/unmatched_deck_tracker_assets/images/logo.jpg": "7acccb585d3abbe17521c131d9f4e57d",
"assets/unmatched_deck_tracker_assets/other/sets.json": "5fe11be70457dcb46012da8a93c28401",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "0c883a7fa9667d8d5064d147f499c1d4",
"assets/AssetManifest.json": "7ae0039f780f42d67d361df76d9f8f97",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"favicon.png": "2c1d0ef737df8ee9354db982b1875ed1",
"icons/Icon-192.png": "53c36de707e510851e7f2836f398bafd",
"icons/Icon-512.png": "06ebdb547026c689e2a56cfae9512071",
"icons/Icon-maskable-192.png": "53c36de707e510851e7f2836f398bafd",
"icons/Icon-maskable-512.png": "06ebdb547026c689e2a56cfae9512071",
"index.html": "99606e3f79bd9484b17c58f7ba59747d",
"/": "99606e3f79bd9484b17c58f7ba59747d",
"manifest.json": "657bb06600f0b534c3d6373672eb7834"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
