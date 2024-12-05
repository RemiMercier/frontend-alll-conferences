import { defineConfig } from "vite";
import { VitePWA } from 'vite-plugin-pwa'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  plugins: [
    mkcert(),
    VitePWA({
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,ico,png,jpg}'],
      },
      registerType: 'autoUpdate',
      manifest: {
        name: 'ALLL conferences of the woooorld !!',
        short_name: 'Alll conf',
        description: "En fait, pas seulement des conférences. Uniquement sur Paris. Qui concernent l'art et la culture. Trouvés sur quinze sites internet.",
        theme_color: '#000000',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),
  ],
  server: { https: true },
  // base: "/frontend-alll-conferences/",

})