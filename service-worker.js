if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let d={};const c=e=>n(e,r),l={module:{uri:r},exports:d,require:c};i[r]=Promise.all(s.map((e=>l[e]||c(e)))).then((e=>(o(...e),d)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"backend_faceapi"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.36e0b753.css",revision:null},{url:"/index.html",revision:"9b4c22c8cfc25dbdfbc0cc09b597843d"},{url:"/js/about.8a9766f5.js",revision:null},{url:"/js/app.664758cb.js",revision:null},{url:"/js/chunk-vendors.a196a3a4.js",revision:null},{url:"/manifest.json",revision:"a364d7850b6fa57b3e614f7b149d6da5"},{url:"/model/face_landmark_68_tiny_model-weights_manifest.json",revision:"ae8a09f24ac26b863bc9b1d025e71d14"},{url:"/model/face_landmark_68_tiny_model.bin",revision:"47047fee26557b55d985952bdfc6cba1"},{url:"/model/face_recognition_model-weights_manifest.json",revision:"1b056fd5dd4ddc1b83edc726a32c973e"},{url:"/model/tiny_face_detector_model-weights_manifest.json",revision:"862f9faaeb421d87a569666df52b84d2"},{url:"/model/tiny_face_detector_model.bin",revision:"2e48b20953b0c59df47459d0319843a0"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
