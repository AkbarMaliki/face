(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~d0ae3f07"],{0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4795");var o=n("a026"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view")],1)},i=[],s=(n("5c0b"),n("2877")),r={},c=Object(s["a"])(r,a,i,!1,null,null,null),u=c.exports,l=n("9483");Object(l["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(e){if(window.confirm("Ada Versi Aplikasi Terbaru, Update sekarang?")){var t=e.waiting;t.postMessage({action:"SKIP_WAITING"}),window.alert("Update Berhasil Silahkan Reload/Refresh!"),window.location.reload()}},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var d=n("8c4f"),f=n("db39"),g=n("58ca"),h=n("aecd");o["a"].use(g["a"]),o["a"].use(d["a"]);var p=Object(h["a"])((function(e){return n("a449")("./"+e+".vue")})),b=new d["a"]({mode:"hash",base:"",routes:[{path:"/",component:p,children:f["a"]}]}),m=(n("b64b"),n("4160"),n("159b"),n("a434"),n("0d03"),n("9911"),n("2f62")),v=n("bc3a"),w=n.n(v);o["a"].use(m["a"]);var k=function(){return new m["a"].Store({modules:{},state:{data:{listfavorites:[],menu:0},name:"",keranjang:0,mediaQ:"XL",users:null,nossr:!1,busy:!1,isAuth:!1},mutations:{goAuth:function(e){e.auth.isAuth=!0},vuex:function(e){localStorage.setItem("vuex",JSON.stringify(e))},xeuv:function(e){for(var t in e)"user"!=t&&(e[t]=JSON.parse(localStorage.getItem("vuex"))[t])},changeUser:function(e,t){e.user=t},changeUsers:function(e,t){e.users=t},busy:function(e,t){e.busy=t},mediaQueries:function(e,t){e.mediaQ=t},nossr:function(e,t){e.nossr=t},editData:function(e,t){var n=t.index;delete t.index;var o=Object.keys(t);o.forEach((function(o){e.users[n][o]=t[o]})),console.log(e.users)},saveData:function(e,t){var n={},o=Object.keys(e.users[0]);o.forEach((function(e){n[e]=t[e]?t[e]:"null"})),e.users.push(n)},deleteData:function(e,t){e.users.splice(t,1)},refreshData:function(e,t){e.auth.user=t.users,e.auth.user.picture=t.users.picture,e.user=t.users,e.kategori=t.kategoris},logout:function(e){e.user=!1,e.users=!1,e.data={listfavorites:[]},window.location.reload()},refreshUser:function(e,t){e.user=t}},actions:{getData:function(e,t){localStorage.getItem("data-persist")&&(e.state.data=JSON.parse(localStorage.getItem("data-persist")))},updateData:function(e){localStorage.setItem("data-persist",JSON.stringify(e.state.data))},auth:function(){"false"==localStorage.getItem("auth._token.local")&&"false"==localStorage.getItem("auth.local")&&b.push("/")},notifikasi:function(e,t){console.log("datas",t),t.createdAt=new Date,t.dibaca=!1,sdb.collection("tbuser",!1).doc().select("select id,fcm from tbuser where id='".concat(t.to.id,"'")).then((function(e){console.log("cekfcm",e);var n=e[0].fcm,o={data:{title:t.title,body:t.body,surveyID:"ewtawgreg-gragrag-rgarhthgbad",sound:!0,ledColor:[255,255,128,16],vibrationPattern:[250,1e3,250,500],link:t.link,android_channel_id:"test-channel"},to:t.to?n:"-",priority:"high",content_available:!0};console.log("data",o),t.id_user=t.to.id,o=JSON.stringify(o),t.to=t.to?t.to:"",sdb.collection("notifikasi").doc().set({title:t.title,body:t.body,link:t.link,createdAt:t.createdAt,dibaca:!1,id_user:t.id_user}).then((function(e){})),firebase.database().ref("/notif/sintal").set({id:t.id_user,tanggal:(new Date).getTime()}),w.a.post("https://onesignal.com/api/v1/notifications",{app_id:"7d2f0b7a-c95b-47ef-be05-6215a554d49c",include_player_ids:[t.to?n:"-"],contents:{en:t.body},android_channel_id:"9db143e1-f1a7-4909-86e9-26da7dd34813",headings:{en:t.title},data:{"custom-data":"data1"},chrome_web_image:"https://balangankab.go.id/icon.png"},{headers:{Authorization:"Basic NzA0NDU4ZGItMTBlMC00NTZlLWEyYTMtMTAxNjJkMjg2N2Fm","Content-Type":"application/json"}}).then((function(e){}))}))},ceklogin:function(e,t){var n=e.commit;return n("changebusy",!0),new Promise((function(e,o){firebase.auth().onAuthStateChanged((function(o){o?(console.log(o.uid),firebase.firestore().collection("users").doc(o.uid).get().then((function(o){console.log(o.data()),n("changeUsers",o.data()),localStorage.setItem("users",JSON.stringify(o.data())),t&&(1==t["true"]?n("changebusy",!1):(n("changebusy",!1),b.push(t["true"]))),e()}))):(console.log("user tidak ada"),t["false"]?(n("changebusy",!1),b.push(t["false"])):n("changebusy",!1))}))}))},logout:function(e){e.commit("changegps",!1),firebase.auth().signOut().then((function(){localStorage.setItem("expireDate",null),localStorage.setItem("auth._token.local",!1),localStorage.setItem("auth.local",!1),navigator.geolocation.clearWatch(e.state.watchgps),e.state.isAuth=!1,e.commit("logout",!1),b.push("/login")})),"dekstop"!=e.state.device&&this.$auth.logout()},refreshUser:function(e){this.$axios.get("/api/auth/user").then((function(t){console.log(t.data),e.commit("refreshUser",t.data.user)}))},userRefresh:function(e){e.commit("refreshUser",this.$auth.user)}}})},y=k;o["a"].config.productionTip=!1,o["a"].config.productionTip=!1,new o["a"]({store:y,router:b,render:function(e){return e(u)},created:function(){var e=this;if(sessionStorage.redirect){var t=sessionStorage.redirect;delete sessionStorage.redirect,setTimeout((function(){e.$router.push(t)}),500)}}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},a449:function(e,t,n){var o={"./default.vue":["7b3d","chunk-2d0e17d2"]};function a(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(o)},a.id="a449",e.exports=a}}]);
//# sourceMappingURL=app~d0ae3f07.3b424dee.js.map