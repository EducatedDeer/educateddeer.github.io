'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/.git/COMMIT_EDITMSG": "b0a52ce88b5f28c4c4e29b2cd7d18d81",
"/.git/config": "044f26c42adb6e8d44e004e66f255c57",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/index": "e157b8a52181f58d83244b0e4675d732",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/logs/HEAD": "a998d49deb4a4b085a3d4fb806a10593",
"/.git/logs/refs/heads/master": "a998d49deb4a4b085a3d4fb806a10593",
"/.git/logs/refs/remotes/origin/master": "846e70f9fe1bb7800e2289a20ed4b2b1",
"/.git/objects/03/171fac19f097e06519180d62d48b56f0441afc": "e6138300a05503e01203cad15ca5a2b8",
"/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
"/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"/.git/objects/25/94ffce65e4f16f64bb9a75b1bccdf1b7457e6d": "c06938218f5d1ac089880e383a1076fc",
"/.git/objects/29/3e195d7e6853a9e63e172b9f10d391fb57e4ab": "88cc4afc54a521e6dc1a85a2851a0601",
"/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"/.git/objects/92/e6628e02bf8047deb7e7459cb44950bb4b4029": "8b1529b1850da314b7388d356730b0c1",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/9d/9dc43cb81dd034cb684639c480d17f0ec7751f": "719b9627e40f4da8976ca624c7ee2306",
"/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"/.git/objects/bc/dbcff83c67ab6198d462bbea6dff4c8c0e873e": "e7ec7783c38b8a5a680cce1574502bea",
"/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git/objects/e9/9e061707baf902f2cd152a898e9ba9954304b0": "b2e5640855379bee9f12be7c85c174b1",
"/.git/objects/f2/0ff04d838ee4a0660259dcaa844492e20092d3": "eb3aa3b2337a557d6be09716bd02e13f",
"/.git/objects/f2/c1c2a9c52aa62a1a6f47b688c7c586add55be6": "374485221134602a51bc730b44393283",
"/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"/.git/refs/heads/master": "2e5ec350698e4c53406b961a0d6a42c8",
"/.git/refs/remotes/origin/master": "2e5ec350698e4c53406b961a0d6a42c8",
"/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "d33ef91063d303a9847c2c8169ebaad8",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "bd6346bbd5fbf7847e5599918b94dfb2",
"/main.dart.js": "1cbe0d2bb87e841d46695fcffb9888b6",
"/manifest.json": "e65f3b917da64ad743480ccfed75f9bd"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
