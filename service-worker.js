importScripts("precache-manifest.2fd03fd728dd599a98eaa4de1e27442a.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

if (workbox) {
  console.log(`Workbox is loaded`);


self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener("message", (event) => {
  if (event.data.action == "SKIP_WAITING") self.skipWaiting();
});


self.addEventListener('notificationclick', function (event) {
  var notif = event.notification
  var action = event.action
  console.log('notifnya')
  console.log(notif)
  console.log(action)
  if (action == 'confirm') {
    console.log('Okay di jalankan')
    notif.close()
  } else {
    console.log('global di jalankan')
    console.log(event)
    event.waitUntil(
      self.clients
        .claim()
        .then(() => {
        // See https://developer.mozilla.org/en-US/docs/Web/API/Clients/matchAll
          return self.clients.matchAll({
            type: 'window'
          })
        })
        .then(clients => {
          return clients.map(client => {
            console.log(client)
            // jika browser dengan url asal sudah terbuka maka cukup navigate client ke url
            if (client.visibilityState == 'visible') {
              if ('navigate' in client) {
                return client.navigate(notif.data.url ? notif.data.url : '/')
              }
            } else {
            // jika browser dengan url asal tidak terbuka maka perlu membuka tab baru dan navigate client ke url
              return self.clients.openWindow(
                notif.data.url ? notif.data.url : '/'
              )
            }
          })
        })
    )
    // event.waitUntil(
    //   clients.matchAll().then(client => {
    //     console.log(client)
    //     var browsers = client.find(function(c) {
    //       return c.visibilityState === 'visible'
    //     })
    //     if (browsers !== undefined) {
    //       browsers.navigate('http://localhost:3000')
    //       browsers.focus()
    //       console.log('tidak di jalankan')
    //       notif.close()
    //     } else {
    //       browsers.openWindow('http://localhost:3000')
    //       console.log('tidak di jalankan')
    //       notif.close()
    //     }
    //   })
    // )
  }
})

self.addEventListener('notificationclose', function (event) {
  console.log('notification di tutup')
})

// listen push event dari server notifikasi
self.addEventListener('push', function (event) {
  if (event.data) {
    data = JSON.parse(event.data.text())
  }
  console.log('push filter id nya disini',data)
  let opt = {
    body: data.content, // adalah text dari notifikasi yang lebih jelas dari title
    icon: 'https://balangankab.go.id/icon.png', // bisa url ke luar atau local image
    // image: './static/icon.png', // memunculkan image di notifikasi
    dir: 'ltr', // left to right (ltr) atau right to left (rtl)
    lang: 'en-US', // standard
    vibrate: [100, 50, 200], // device bergetar apabila ada notifikasi
    badge: 'https://balangankab.go.id/icon.png', // icon kecil di drawer
    // sound: '../notif.mp3', // sound saat notifikasi masuk (belum semua support)
    //! advance option
    // tag: 'confirm-notification', // kita men set tag agar notifikasi tidak menstack di device
    // renotify: true, // apabila tag sama di dalam beberapa notifikasi, maka status notifikasi akan dianggap baru dan device akan bergetar, jadi apabila false maka tag sama device tidak akan bergetar
    data: {
      url: data.url.link // digunakan untuk menyimpan data env di dalam service worker
      // bisa diakses var notif = event.notification ; notif.data.url
    },
    // actions: [
    //   //! aksi saat notifikasi di pilih
    //   {
    //     action: 'confirm',
    //     title: 'Yes',
    //     icon: './static/icon.png'
    //   },
    //   {
    //     action: 'cancel',
    //     title: 'No',
    //     icon: './static/icon.png'
    //   }
    // ]
  }
  event.waitUntil(self.registration.showNotification(data.title, opt))
})
} 
else {
  console.log(`Workbox didn't load`);
}
