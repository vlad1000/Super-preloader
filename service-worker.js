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
    "revision": "0970c3baf2728346cb7f91512dc5923a"
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
    "url": "assets/js/10.d26bf9f0.js",
    "revision": "093eedeb69737e1fa45b27d7db7c0ca3"
  },
  {
    "url": "assets/js/11.62c48c76.js",
    "revision": "15b230a780cfee86ae8027d05692928e"
  },
  {
    "url": "assets/js/12.1071c2b1.js",
    "revision": "ad6704f3dd6396c22160384de864a0f2"
  },
  {
    "url": "assets/js/13.2ef04a1c.js",
    "revision": "9b2c0862c5e96594eec8948bd314c1a9"
  },
  {
    "url": "assets/js/14.750363d8.js",
    "revision": "6cae60e1371f89fbc1232de40cc484e0"
  },
  {
    "url": "assets/js/15.03182645.js",
    "revision": "04da3fa6d6cd9703535153b28e1d4e25"
  },
  {
    "url": "assets/js/16.1aba4c59.js",
    "revision": "aa0f0503ccece6ba8636f873fd4b6938"
  },
  {
    "url": "assets/js/17.c4a61d14.js",
    "revision": "9ce1900962be94dde2d54119234619d2"
  },
  {
    "url": "assets/js/18.fc868e3b.js",
    "revision": "a31fc85200443cf2faf9caa0b5ce31aa"
  },
  {
    "url": "assets/js/19.d703cde4.js",
    "revision": "613a005614f6df43ac7f7cdf5d78828c"
  },
  {
    "url": "assets/js/2.b54ce1c6.js",
    "revision": "e5c33ad5637829be01fc2580b886ceb8"
  },
  {
    "url": "assets/js/20.a16aea1c.js",
    "revision": "55dc247961f93b76ab3d76f7255b5806"
  },
  {
    "url": "assets/js/3.4801cd5f.js",
    "revision": "16240fa4969a41682ae2d20f5b793a31"
  },
  {
    "url": "assets/js/4.7116040e.js",
    "revision": "a8dabba7705b71a60d1d88474014c8ca"
  },
  {
    "url": "assets/js/5.55e81e27.js",
    "revision": "a844d2119bf41742609998dd4f030a06"
  },
  {
    "url": "assets/js/6.d13030d7.js",
    "revision": "2e7d508f22519c37983fb25bec649775"
  },
  {
    "url": "assets/js/7.a8efc374.js",
    "revision": "9e7352b2a5f20677cfeccc3bc6684263"
  },
  {
    "url": "assets/js/8.750628de.js",
    "revision": "3f5c0c5e0d6209f78d6390c379935838"
  },
  {
    "url": "assets/js/9.a96b14ee.js",
    "revision": "79dc77df0c6a97b9df5d5f2ebb8ab272"
  },
  {
    "url": "assets/js/app.044f2f01.js",
    "revision": "2f9e226a37d9046b2efe36662aa098da"
  },
  {
    "url": "compatibility.html",
    "revision": "b982cd27d26eb5b18c546c463d70372e"
  },
  {
    "url": "database.html",
    "revision": "104c0b024bc5c4fe42c8b88670ef38f8"
  },
  {
    "url": "develop.html",
    "revision": "4e046b48989933d78aa58abd7424a21f"
  },
  {
    "url": "en/compatibility.html",
    "revision": "f615e92c4c8b4e9776d584f6d596b870"
  },
  {
    "url": "en/database.html",
    "revision": "9f9de967f234dd359e69de2dedb37c6c"
  },
  {
    "url": "en/example.html",
    "revision": "83669fe0935949a531582f7bad5f2d91"
  },
  {
    "url": "en/faq.html",
    "revision": "e237085dec1ee28fdb52fb7bacf41d0a"
  },
  {
    "url": "en/index.html",
    "revision": "d729f3ec97d22262b53b86bdcf363530"
  },
  {
    "url": "en/siterule.html",
    "revision": "0805775d0265b12a089bea24a0161a13"
  },
  {
    "url": "example.html",
    "revision": "98e6b5f5122746c298afdcd3142015e8"
  },
  {
    "url": "faq.html",
    "revision": "423943fee707f14ae37c5997c49701c8"
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
    "revision": "918c5716f73dba7cccdd23ee3ac3e924"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "e3e04a5dcd0bca0f58aacaac93e1f6d6"
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
