(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-about~85871c94"],{"7dd8":function(e,t,a){"use strict";a.r(t);var n,r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{attrs:{id:"app"}},[e.img?a("img",{attrs:{src:e.img,id:"image1",alt:""}}):e._e(),a("button",{attrs:{id:"button"},on:{click:e.test}},[e._v("Send")])])])},s=[],i=a("1da1"),c=(a("96cf"),a("4160"),a("159b"),a("cfc3"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("d3b7"),a("ace4"),a("3ca3"),a("ddb0"),a("d81d"),a("07ac"),a("75bf")),o=a("2c3c"),u=a("bc3a"),d=a.n(u),l=new o["a"],f={data:function(){return{message:"Hello Vue!",img:null}},methods:{test:function(){n.postMessage("test")},startScan:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r,s,o,u,l,f,g,b,p,m,h,w,x;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t,a=.6,r=document.getElementById("image1"),s=r,e.next=6,c["f"](s,new c["d"]({inputSize:320})).withFaceLandmarks(!0).withFaceDescriptor();case 6:if(o=e.sent,o){e.next=11;break}l=!1,e.next=17;break;case 11:return f=[new c["c"](o.detection.box.x,o.detection.box.y,o.detection.box.width,o.detection.box.height)],e.next=14,c["g"](s,f);case 14:g=e.sent,0==g.length?l=!1:g.forEach((function(e){l=e.toDataURL()})),u=[new Float32Array(o.descriptor)];case 17:if(!l){e.next=47;break}return e.next=20,d.a.get("./data-wajah.json");case 20:if(b=e.sent,p=b.data,!(p.length>0)){e.next=42;break}return e.next=25,Promise.all(p.map(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=JSON.parse(t.tensor),!a){e.next=6;break}if(!(a.length>0)){e.next=6;break}return n=[],a.forEach((function(e){n.push(new Float32Array(Object.values(e)))})),e.abrupt("return",new c["b"](JSON.stringify({id_user:t.id_user}),n));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 25:if(m=e.sent,h=new c["a"](m,a),!o){e.next=40;break}if(w=h.findBestMatch(o.descriptor),"unknown"!=w._label){e.next=36;break}if(!u[0]){e.next=34;break}return n.postMessage("false"),console.log(JSON.stringify({message:"wajah tidak dikenali",status:!1,confidence:100-100*w._distance})),e.abrupt("return");case 34:e.next=40;break;case 36:return x=JSON.parse(w.label),n.postMessage(JSON.stringify({message:"Wajah Mirip dengan id user = "+x.id_user,status:!0,duplicate:!0,confidence:100-100*w._distance,id_user:x.id_user})),console.log(JSON.stringify({message:"Wajah Mirip dengan id user = "+x.id_user,status:!0,duplicate:!0,confidence:100-100*w._distance,id_user:x.id_user})),e.abrupt("return");case 40:e.next=45;break;case 42:return n.postMessage("false"),console.log(JSON.stringify({message:"Tidak ada wajah di Database ",status:!1})),e.abrupt("return");case 45:e.next=50;break;case 47:return n.postMessage("false"),console.log(JSON.stringify({message:"Wajah tidak ditemukan",status:!1})),e.abrupt("return");case 50:case"end":return e.stop()}}),e)})))()},loadModel:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="./model",e.next=3,c["j"](t);case 3:return e.next=5,c["i"](t);case 5:return e.next=7,c["h"](t);case 7:console.log("loading model berhasil ..."),l.loadingOff(),l.alert("loading model berhasil ...","bg-blue-500");case 10:case"end":return e.stop()}}),e)})))()}},mounted:function(){var e=this;window.addEventListener("message",(function(t){"capturePort"==t.data&&null!=t.ports[0]&&(n=t.ports[0],n.onmessage=function(t){console.log(t.data),e.img=t.data,e.startScan()})}),!1),l.loadingOn(),this.loadModel()}},g=f,b=a("2877"),p=Object(b["a"])(g,r,s,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=page-about~85871c94.4a48e4eb.js.map