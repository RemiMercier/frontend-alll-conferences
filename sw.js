if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let d={};const c=e=>n(e,o),f={module:{uri:o},exports:d,require:c};i[o]=Promise.all(s.map((e=>f[e]||c(e)))).then((e=>(r(...e),d)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BUHVlrFm.js",revision:null},{url:"assets/index-NwwUmJ8n.css",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"favicon.ico",revision:"95fefe948cdc978cd992d04ebb676d56"},{url:"favicon.svg",revision:"fcfcf46339b179919786a334f65ffe6c"},{url:"index.html",revision:"aca27ff40b66baa384430266a6509c63"},{url:"pwa-192x192.png",revision:"d1af2eb54c32bd228881b1f05bea059b"},{url:"pwa-512x512.png",revision:"deb94a3d485bbc7123bdc8b49c201ad0"},{url:"pwa-192x192.png",revision:"d1af2eb54c32bd228881b1f05bea059b"},{url:"pwa-512x512.png",revision:"deb94a3d485bbc7123bdc8b49c201ad0"},{url:"manifest.webmanifest",revision:"46485ad2d958f4d33c1e35dce6a97dbc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
