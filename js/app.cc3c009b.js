(function(){var e={6741:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=6741,e.exports=t},7617:function(e,t,n){"use strict";var o=n(9242),a=n(3396);function i(e,t,n,o,i,r){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}var r={mounted(){setTimeout((()=>{console.log("window",window),setInterval((()=>{caches.keys().then((function(e){console.log("Cache storage names:",e),caches.open(e[0]).then((function(e){return e.keys().then((function(t){var n=0;t.forEach((function(t){e.match(t).then((function(e){console.log("response",e),e.blob().then((function(e){console.log("blob",e),n+=e.size}))}))})),console.log("Total cache size: "+n+" bytes")}))}))}))}),2e3)}),2e3)}},s=n(89);const c=(0,s.Z)(r,[["render",i]]);var d=c,l=n(5431);(0,l.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var u=n(2483),f=n(7139);const g={class:"p-3"},p={class:"p-2 shadow rounded shadow",style:{background:"#5495ff",padding:"20px","box-shadow":"1px 1px 2px 1px grey","border-radius":"20px"}},b={key:0},h=(0,a._)("p",{class:"p-2 font-semibold text-lg animate__animated animate__bounce animate__infinite"},"Recognition ...",-1),m=[h],v={key:1},w={key:0},y=(0,a._)("span",{style:{"font-weight":"bold"}},"Ready ",-1),k={key:1},_={class:"text-lg"},O={key:0},S={key:1,class:"font-semibold"};function x(e,t,n,o,i,r){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",g,[(0,a._)("div",p,[i.recognition?((0,a.wg)(),(0,a.iD)("div",b,m)):((0,a.wg)(),(0,a.iD)("div",v,[i.dbFace?((0,a.wg)(),(0,a.iD)("div",w,[(0,a.Uk)("DB "),y,(0,a.Uk)(" ("+(0,f.zw)(i.dbTime.substring(0,15))+") ",1),(0,a._)("button",{type:"button",onClick:t[0]||(t[0]=(...e)=>r.saveDatabase&&r.saveDatabase(...e)),style:{background:"#ffc107","margin-left":"20px","border-radius":"10px",border:"1.5px solid grey",padding:"3px",position:"absolute",right:"10px"}},"Update DB")])):((0,a.wg)(),(0,a.iD)("div",k,"Loading Getting Database ... ")),(0,a._)("p",_,[(0,a.Uk)("Face Recognition : "),i.loading?((0,a.wg)(),(0,a.iD)("span",O,"Loading ...")):((0,a.wg)(),(0,a.iD)("span",S,"Ready"))])]))])])])}n(3767),n(8585),n(8696),n(7658);var D,j=n(1999),N=n(4161),M={data(){return{img:null,recognition:!1,loading:!0,dbFace:null,dbTime:""}},methods:{test(){D.postMessage("test")},async saveDatabase(){this.dbFace=!1,this.dbTime=!1;let e=await N.Z.get("https://hitfaceapi.my.id/contact"),t=e.data.datas;localStorage.setItem("db-face",JSON.stringify(t)),localStorage.setItem("db-time",new Date),this.loadDatabase()},loadDatabase(){localStorage.getItem("db-face")&&(this.dbFace=localStorage.getItem("db-face")),localStorage.getItem("db-time")&&(this.dbTime=localStorage.getItem("db-time"),console.log(this.dbTime)),this.$forceUpdate()},async startScan(e){let t=this;t.recognition=!1;var n=.6,o=new Image;o.src=this.img;let a,i,r=await j.bd(o,new j.aK({inputSize:320})).withFaceLandmarks(!0).withFaceDescriptor();if(r){const e=[new j.UL(r.detection.box.x,r.detection.box.y,r.detection.box.width,r.detection.box.height)];let t=await j.sE(o,e);0==t.length?i=!1:t.forEach((e=>{i=e.toDataURL()})),a=[new Float32Array(r.descriptor)]}else i=!1;if(!i)return t.recognition=!1,D.postMessage("false"),void D.postMessage(JSON.stringify({message:"Wajah tidak ditemukan",status:!1}));{let e=JSON.parse(localStorage.getItem("db-face"));if(!(e.length>0))return D.postMessage("false"),t.recognition=!1,void D.postMessage(JSON.stringify({message:"Tidak ada wajah di Database ",status:!1}));{const o=await Promise.all(e.map((async e=>{let t=JSON.parse(e.tensor);if(t&&t.length>0){const n=[];return t.forEach((e=>{n.push(new Float32Array(Object.values(e)))})),new j.oE(JSON.stringify({id_user:e.id_user}),n)}}))),i=new j.zi(o,n);if(r){const e=i.findBestMatch(r.descriptor);if("unknown"!=e._label){let n=JSON.parse(e.label);return t.recognition=!1,D.postMessage(JSON.stringify({message:"Wajah Mirip dengan id user = "+n.id_user,status:!0,duplicate:!0,confidence:100-100*e._distance,id_user:n.id_user})),void console.log(JSON.stringify({message:"Wajah Mirip dengan id user = "+n.id_user,status:!0,duplicate:!0,confidence:100-100*e._distance,id_user:n.id_user}))}if(a[0])return t.recognition=!1,void D.postMessage(JSON.stringify({message:"wajah tidak dikenali",status:!1,confidence:100-100*e._distance}))}}}},async loadModel(){var e="./model";await j.z2(e),await j.Qk(e),await j.vd(e),console.log("loading model berhasil ...");try{D.postMessage("loading"),this.loading=!1}catch(t){this.loading=!1}}},mounted(){let e=this;localStorage.getItem("db-face")||this.saveDatabase(),this.loadDatabase(),window.addEventListener("message",(function(t){"capturePort"==t.data&&null!=t.ports[0]&&(D=t.ports[0],D.onmessage=function(t){console.log(t.data),e.img=t.data,e.startScan()})}),!1),this.loadModel()}};const T=(0,s.Z)(M,[["render",x]]);var E=T;const F=[{path:"/",name:"home",component:E},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,7381))}],C=(0,u.p7)({history:(0,u.r5)(),routes:F});var I=C;(0,o.ri)(d).use(I).mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,o,a,i){if(!o){var r=1/0;for(l=0;l<e.length;l++){o=e[l][0],a=e[l][1],i=e[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||r>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,i<r&&(r=i));if(s){e.splice(l--,1);var d=a();void 0!==d&&(t=d)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.8a9766f5.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="backend_faceapi:";n.l=function(o,a,i,r){if(e[o])e[o].push(a);else{var s,c;if(void 0!==i)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+i){s=u;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[a];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(g);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},g=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var i=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=i);var r=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var i=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",s.name="ChunkLoadError",s.type=i,s.request=r,a[1](s)}};n.l(r,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,i,r=o[0],s=o[1],c=o[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var l=c(n)}for(t&&t(o);d<r.length;d++)i=r[d],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},o=self["webpackChunkbackend_faceapi"]=self["webpackChunkbackend_faceapi"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7617)}));o=n.O(o)})();
//# sourceMappingURL=app.cc3c009b.js.map