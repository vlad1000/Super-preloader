/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ac99abc535bf900ed526f95079b83974"
  },
  {
    "url": "assets/css/0.styles.20b4f909.css",
    "revision": "18451d07b845d6190d6aaf807f1abbc6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a058a3cb.js",
    "revision": "3e0a73c6b54eaa847cc64eb998cc5ce1"
  },
  {
    "url": "assets/js/11.ae5d2b94.js",
    "revision": "de7bf88f944ee6babd677a85c7a6cc32"
  },
  {
    "url": "assets/js/12.42f36e67.js",
    "revision": "01ebc37b6d6213b99f86ae955351fec2"
  },
  {
    "url": "assets/js/13.925ee8a8.js",
    "revision": "96abf5468d24c21e46a2d3654457a4c1"
  },
  {
    "url": "assets/js/14.f06b4079.js",
    "revision": "46f04ffe57210ffa6abeff22ae485580"
  },
  {
    "url": "assets/js/15.418e6c4e.js",
    "revision": "b00fbfaa05ac19fa15582ea576fad787"
  },
  {
    "url": "assets/js/16.db6c2deb.js",
    "revision": "a95966dacbd4312399f37558613552ea"
  },
  {
    "url": "assets/js/17.f748c2ff.js",
    "revision": "8e9bd704bb439ca56135393a97c056df"
  },
  {
    "url": "assets/js/18.d8dce9c3.js",
    "revision": "54cacd75d13e776f25581a7960553ac8"
  },
  {
    "url": "assets/js/19.6fbdf4e4.js",
    "revision": "bfd74de4a8ca913ac5c28443add6f5c2"
  },
  {
    "url": "assets/js/2.64642363.js",
    "revision": "c732ae8697d3c1d27d6ae65b931ab3ea"
  },
  {
    "url": "assets/js/20.f53307fb.js",
    "revision": "ae529e4d6c333ae4e8ca48f21471ab21"
  },
  {
    "url": "assets/js/3.8d70f66c.js",
    "revision": "0b4ff0749fae9dda736f354fb20935cf"
  },
  {
    "url": "assets/js/4.95314fa8.js",
    "revision": "4757d8e8d1621b9626e4589edf8bf178"
  },
  {
    "url": "assets/js/5.88f54ffa.js",
    "revision": "01cce5482ca0316812b8f5e53e5fe0e4"
  },
  {
    "url": "assets/js/6.52049387.js",
    "revision": "cef6e763d2558a5e073197a73e53182c"
  },
  {
    "url": "assets/js/7.68295263.js",
    "revision": "ca1f2869364971d993fb1f16fa30da48"
  },
  {
    "url": "assets/js/8.2355e388.js",
    "revision": "78ed18218a7a7608dd5a6f5598408572"
  },
  {
    "url": "assets/js/9.ff926846.js",
    "revision": "0c6d48663d45a9e057213426be0e0818"
  },
  {
    "url": "assets/js/app.4c52ec6e.js",
    "revision": "0f2e76a8243e739485b691534d6ef3bb"
  },
  {
    "url": "compatibility.html",
    "revision": "63d58b41a532fcce3d7e2ae8f6eb1921"
  },
  {
    "url": "database.html",
    "revision": "d819dbe15ec25eee82691c6569144448"
  },
  {
    "url": "develop.html",
    "revision": "7612399b9895fc22e58c7f7058ee3c43"
  },
  {
    "url": "en/compatibility.html",
    "revision": "eb48fcdab6a2698d9e99ccc3e9913de2"
  },
  {
    "url": "en/database.html",
    "revision": "e134b1ce638dfd8658ec7c8e10c859d3"
  },
  {
    "url": "en/example.html",
    "revision": "14736f7de31644ff9bdcb79a22428a8f"
  },
  {
    "url": "en/faq.html",
    "revision": "e63b9f96283fb2bcbea88f27750eaafe"
  },
  {
    "url": "en/index.html",
    "revision": "b609a400c7f2a5d82c87cf504ee6f0fb"
  },
  {
    "url": "en/siterule.html",
    "revision": "38c635403b2b13509fdd88bd5ea9386e"
  },
  {
    "url": "example.html",
    "revision": "2e60bec85a7ffa58a0a0579394ccc8c4"
  },
  {
    "url": "faq.html",
    "revision": "ee16d764fd308da419245a34e0e29738"
  },
  {
    "url": "image/example/baidu.png",
    "revision": "4402e5935ca77f66e70f6c2f315af694"
  },
  {
    "url": "image/example/google.png",
    "revision": "11613e2fec311e270ac9003dbd1da54e"
  },
  {
    "url": "image/example/hhmm.png",
    "revision": "e4bda310ad173720a7088fba64e22549"
  },
  {
    "url": "image/example/xkcd.png",
    "revision": "603585728294aa3713aa8c088ed0996d"
  },
  {
    "url": "index.html",
    "revision": "7d4472670cae2c5075c12c0933a2779a"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "5c4fe16ef7ead4ad7852c24159f213cb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
