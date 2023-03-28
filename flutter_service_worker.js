'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b946540607f0041f69ba41d59a119182",
"index.html": "95f7becbd83fbf23e8dead97832f41d2",
"/": "95f7becbd83fbf23e8dead97832f41d2",
"main.dart.js": "3691981abaa73725e8685291473ecd6e",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8a4fec0964c2b2d46631179f65bede7a",
"assets/AssetManifest.json": "7bf1c9b4c7a0db2cea1a2b2ff43fdca0",
"assets/NOTICES": "4d61fd25d11ebb6de4c9cceee86d271e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/icon_edit.png": "9f6b189b30a2a5efdcf005b0bed4c4f0",
"assets/assets/images/icon_line.png": "7694ab9c1fb06b35670086878e5550de",
"assets/assets/images/icon_close.png": "b19f05570222a93fbd266618bcfc19fa",
"assets/assets/images/icon_first.png": "69cb0b005f04b1a813f2bee69f6b7c47",
"assets/assets/images/image_physics.png": "d1844c04db061fae66b12bbfc052572b",
"assets/assets/images/icon_arrow_left.png": "4d1edc8eed2fa5cd5435c42697c72223",
"assets/assets/images/icon_calender.png": "5cfe5549365bb728bb1019b4e58de7bb",
"assets/assets/images/icon_toggle_selected.svg": "7f580c862aac2c48f5d04c2d6ad1144a",
"assets/assets/images/icon_date.svg": "e8c17f9571c606ab6708565c4994e8e0",
"assets/assets/images/icon_arrow_down_red.png": "87006281fc4679c058a06a451b3b046d",
"assets/assets/images/image_login_model.png": "00d5d2a7380f29930a60a13c1aac216c",
"assets/assets/images/image_calculus.png": "c73eabcf204d63056a166d3cd4d659c7",
"assets/assets/images/image_algebra.png": "cfb5b470b1416b7d2c1b4fe5143066b3",
"assets/assets/images/icon_arrow_up_green.png": "b2ec5d552a4eea560aabceb99e053386",
"assets/assets/images/icon_checkbox_unchecked.svg": "34e11879991a2d6c2eb495b984ba3f88",
"assets/assets/images/icon_help.png": "1802ceae4b043724678f76ee3fc3a5d7",
"assets/assets/images/icon_star_yellow.png": "6fb0fb46fc8b13b778bbcc8ba68fc6c3",
"assets/assets/images/icon_arrow_select.png": "d14cf6b7523520d1cf8377beab92e808",
"assets/assets/images/icon_cat.png": "db5a2219c38aae03440a9935dd66de98",
"assets/assets/images/icon_eye_close.png": "868fe2a6cc460f75d8de8ea9dc2614ae",
"assets/assets/images/icon_range.svg": "475ae8fa72b9a7d155cee1022048ee85",
"assets/assets/images/icon_star_yellow_hd.png": "f49278ed3a0da513c41ab4cb71cec937",
"assets/assets/images/icon_category.svg": "b0adab635cedb373f4a3c2b0f186ffdc",
"assets/assets/images/icon_eye_open_grey.png": "8a4e90e08f4d7daa2d36820d96e25a29",
"assets/assets/images/icon_text_field_close.png": "bbbeddc89abdfde9493659a1f927ca13",
"assets/assets/images/icon_default_avatar.png": "324486a74eb5ae7ab6aaa6f6ec0b1cc3",
"assets/assets/images/icon_2nd.png": "ca71e1dbdb4ad0b484881979ed0ceefb",
"assets/assets/images/image_statistics.png": "d1ab063c5d866f20050d901accd5c8eb",
"assets/assets/images/icon_slide.svg": "2e28a066247459b78c4d903026b35f5b",
"assets/assets/images/icon_toggle_unselected.svg": "85b19a9bfd0c9b82145116157432a1ca",
"assets/assets/images/zink_logo.png": "ff0f69d5091821f5b137f28f8fe6ba1e",
"assets/assets/images/icon_filter.svg": "cb91033e74f062104ebcc427af78f6e8",
"assets/assets/images/icon_doler.png": "f0f061880b0841e51b73e66e4bd45440",
"assets/assets/images/background_login.png": "383c2dfb13d127a69abcdf595bfa72a0",
"assets/assets/images/icon_3rd.png": "06ffce62e2a03a11d8a20052c21f422e",
"assets/assets/images/icon_question_outline.png": "39e373a392a1842f79bd656c03a9c2af",
"assets/assets/images/icon_user.png": "ce4ed2520a43280ccd9d91734d856529",
"assets/assets/images/icon_oblique_line.png": "6d1ce64262a1d1c1b273d79311bfbfe5",
"assets/assets/images/icon_home_outline.png": "8b0c2a7eadc02fe99b60d7d5fa2ead66",
"assets/assets/images/icon_wallet_select.png": "312fad3cf8ccadacbd8c4755850fdb05",
"assets/assets/images/icon_camera.png": "22d5e6869b2534cdeead69da932aeabb",
"assets/assets/images/icon_profile_outline.png": "5138e93aea60bf6d8377aa7d974f90d2",
"assets/assets/images/icon_home_select.png": "d402e67b89303ed68d01e354acd5b2b6",
"assets/assets/images/icon_contact_outline.png": "29532c09b6cf4fc5381d602b7b8aac70",
"assets/assets/images/icon_check.png": "5b6779c0cdbe8456aefef555d0d0550b",
"assets/assets/images/icon_backspace.png": "33646421da082da038ad15a00c2dcf4f",
"assets/assets/images/icon_time.png": "1689ad7d846084da78d972667314e274",
"assets/assets/images/image_add.png": "2105f61e467150b47961e98369369e16",
"assets/assets/images/icon_wallet_outline.png": "5a09202cb1ddc78a0d16e9a4855ea2fb",
"assets/assets/images/icon_checkbox_checked.svg": "5b0bd6905ab508b990144b69a85d709d",
"assets/assets/images/icon_filter.png": "bdd03656b3682f190097427290d31268",
"assets/assets/images/icon_eye_open.png": "95616218fbb79547f5892042f99e5dff",
"assets/assets/images/icon_time_white.png": "345994dd6f4f55d60bb372599856f136",
"assets/assets/images/icon_answer_outline.png": "6283a8eaa6544d089e22bb9a52ed7788",
"assets/assets/images/icon_notify.png": "7732007a7c248b24410eca0a7ec07d49",
"assets/assets/images/icon_key.png": "dd67bbd642c4fa6b03e91527f4ce04bf",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
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
