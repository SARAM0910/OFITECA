import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),tailwindcss(),
    sitemap({
      hostname: 'https://ofiteca.com',
      routes: [
        { url: '/', changefreq: 'daily', priority: 1.0 },
        { url: '/productos', changefreq: 'weekly', priority: 0.8 },
        { url: '/contacto', changefreq: 'monthly', priority: 0.6 },
      ]
    })
  ],
});