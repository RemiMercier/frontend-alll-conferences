if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let l={};const o=e=>i(e,d),c={module:{uri:d},exports:l,require:o};s[d]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/style.css",revision:null},{url:"assets/index-_SI25XDl.js",revision:null},{url:"assets/index-ByYcY6Dy.css",revision:null},{url:"assets/index-DBpGR6xe.js",revision:null},{url:"assets/index-DOc1Qnl6.css",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"favicon.ico",revision:"95fefe948cdc978cd992d04ebb676d56"},{url:"favicon.svg",revision:"4847eef782a86d0be9b0e311adddce8b"},{url:"index.html",revision:"0ced4fc3b669758852a3b6964464727f"},{url:"pwa-192x192.png",revision:"d1af2eb54c32bd228881b1f05bea059b"},{url:"pwa-512x512.png",revision:"deb94a3d485bbc7123bdc8b49c201ad0"},{url:"pwa-192x192.png",revision:"d1af2eb54c32bd228881b1f05bea059b"},{url:"pwa-512x512.png",revision:"deb94a3d485bbc7123bdc8b49c201ad0"},{url:"manifest.webmanifest",revision:"36a97d5d4725c92fb71c404c09f6dee2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
