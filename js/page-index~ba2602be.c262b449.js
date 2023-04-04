(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-index~ba2602be"],{9261:function(e,t,a){"use strict";a.r(t);var n,i,r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"p-3"},[a("div",{staticClass:"p-2 shadow  rounded shadow",staticStyle:{background:"#15388B",color:"white",padding:"20px","box-shadow":"1px 1px 2px 1px grey","border-radius":"10px"}},[e.recognition?a("div",[a("p",{staticClass:"p-2 font-semibold text-lg animate__animated animate__bounce animate__infinite"},[e._v("Recognition ...")])]):a("div",[e.dbFace?a("div",{staticClass:"m-0 p-0"},[e._v("DB "),a("span",{staticStyle:{"font-weight":"bold"}},[e._v("Ready ")]),e._v(" ("+e._s(e.dbTime.substring(0,15))+") "),a("button",{staticClass:"btn btn-sm btn-style10 ml-5",staticStyle:{background:"#008E43","padding-left":"20px","padding-right":"20px","margin-left":"20px","border-radius":"10px",border:"1.5px solid grey",padding:"3px",position:"absolute",right:"10px",color:"white"},attrs:{type:"button"},on:{click:e.saveDatabase}},[e._v("Update DB")]),a("br"),e._v("Cache : "+e._s((e.cache/1e3).toFixed(2))+" KB "),a("div",{staticClass:"loading-bar-container"},[a("div",{ref:"loadingBar",staticClass:"loading-bar",style:{width:e.progressPercent}})])]):a("div",[e._v("Loading Getting Database ... ")]),a("p",{staticClass:"text-lg m-0 p-0"},[e._v("Face Recognition : "),e.loading?a("span",[e._v("Loading ...")]):a("span",{staticClass:"font-semibold"},[e._v("Ready")])])])])])])},s=[],c=a("1da1"),o=(a("96cf"),a("4795"),a("d3b7"),a("ddb0"),a("4160"),a("159b"),a("466d"),a("ac1f"),a("0d03"),a("cfc3"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("ace4"),a("3ca3"),a("d81d"),a("07ac"),a("75bf")),d=a("bc3a"),u=a.n(d),l={data:function(){return{img:null,recognition:!1,loading:!0,cache:0,dbFace:null,value:0,max:82e5,dbTime:""}},methods:{test:function(){n.postMessage("test")},getCache:function(){var e=this;i=setInterval((function(){e.cache=0,caches.keys().then((function(t){t.length>0&&caches.open(t[0]).then((function(t){return t.keys().then((function(a){a.forEach((function(a){t.match(a).then((function(t){t.blob().then((function(t){e.cache+=t.size}))}))}))}))}))}))}),1e3)},saveDatabase:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.dbFace=!1,e.dbTime=!1,t.next=4,u.a.get("https://hitfaceapi.my.id/contact");case 4:a=t.sent,n=a.data.datas,localStorage.setItem("db-face",JSON.stringify(n)),localStorage.setItem("db-time",new Date),e.loadDatabase();case 9:case"end":return t.stop()}}),t)})))()},loadDatabase:function(){localStorage.getItem("db-face")&&(this.dbFace=localStorage.getItem("db-face")),localStorage.getItem("db-time")&&(this.dbTime=localStorage.getItem("db-time"),console.log(this.dbTime)),this.$forceUpdate()},startScan:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a,i,r,s,d,u,l,g,b,f,p,h,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t,a.recognition=!1,i=.6,r=new Image,r.src=t.img,e.next=7,o["e"](r,new o["d"]({inputSize:320})).withFaceLandmarks(!0).withFaceDescriptor();case 7:if(s=e.sent,s){e.next=12;break}u=!1,e.next=18;break;case 12:return l=[new o["c"](s.detection.box.x,s.detection.box.y,s.detection.box.width,s.detection.box.height)],e.next=15,o["f"](r,l);case 15:g=e.sent,0==g.length?u=!1:g.forEach((function(e){u=e.toDataURL()})),d=[new Float32Array(s.descriptor)];case 18:if(!u){e.next=47;break}if(b=JSON.parse(localStorage.getItem("db-face")),!(b.length>0)){e.next=41;break}return e.next=23,Promise.all(b.map(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=JSON.parse(t.tensor),!a){e.next=6;break}if(!(a.length>0)){e.next=6;break}return n=[],a.forEach((function(e){n.push(new Float32Array(Object.values(e)))})),e.abrupt("return",new o["b"](JSON.stringify({id_user:t.id_user}),n));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 23:if(f=e.sent,p=new o["a"](f,i),!s){e.next=39;break}if(h=p.findBestMatch(s.descriptor),"unknown"!=h._label){e.next=34;break}if(!d[0]){e.next=32;break}return a.recognition=!1,n.postMessage(JSON.stringify({message:"wajah tidak dikenali",status:!1,confidence:100-100*h._distance})),e.abrupt("return");case 32:e.next=39;break;case 34:return m=JSON.parse(h.label),a.recognition=!1,n.postMessage(JSON.stringify({message:"Wajah Mirip dengan id user = "+m.id_user,status:!0,duplicate:!0,confidence:100-100*h._distance,id_user:m.id_user})),console.log(JSON.stringify({message:"Wajah Mirip dengan id user = "+m.id_user,status:!0,duplicate:!0,confidence:100-100*h._distance,id_user:m.id_user})),e.abrupt("return");case 39:e.next=45;break;case 41:return n.postMessage("false"),a.recognition=!1,n.postMessage(JSON.stringify({message:"Tidak ada wajah di Database ",status:!1})),e.abrupt("return");case 45:e.next=51;break;case 47:return a.recognition=!1,n.postMessage("false"),n.postMessage(JSON.stringify({message:"Wajah tidak ditemukan",status:!1})),e.abrupt("return");case 51:case"end":return e.stop()}}),e)})))()},loadModel:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a="./model",t.prev=1,t.next=4,o["i"](a);case 4:return t.next=6,o["h"](a);case 6:return t.next=8,o["g"](a);case 8:n.postMessage("loading"),e.loading=!1,t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](1),alert("Gagal load Model face recognition"),e.loading=!1;case 16:console.log("loading model berhasil ..."),setTimeout((function(){clearInterval(i)}),3e3);case 18:case"end":return t.stop()}}),t,null,[[1,12]])})))()}},computed:{progressPercent:function(){return"".concat(Math.floor(this.cache/this.max*100),"%")}},watch:{cache:function(e){var t=this;e>=this.max&&this.$nextTick((function(){t.$refs.loadingBar.style.width="100%"}))}},mounted:function(){var e=this;localStorage.getItem("db-face")||this.saveDatabase(),this.loadDatabase(),window.addEventListener("message",(function(t){"capturePort"==t.data&&null!=t.ports[0]&&(n=t.ports[0],n.onmessage=function(t){console.log(t.data),e.img=t.data,e.startScan()})}),!1),this.getCache(),this.loadModel()}},g=l,b=(a("c9c1"),a("2877")),f=Object(b["a"])(g,r,s,!1,null,null,null);t["default"]=f.exports},"956c":function(e,t,a){},c9c1:function(e,t,a){"use strict";a("956c")}}]);
//# sourceMappingURL=page-index~ba2602be.c262b449.js.map