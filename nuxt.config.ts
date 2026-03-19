// nuxt.config.ts
export default defineNuxtConfig({
  // 1. Activa las funciones de Nuxt 4
  future: {
    compatibilityVersion: 4,
  },
    app: {
    head: {
      htmlAttrs: {
        lang: 'es', // o 'en'
      }
    }
  },

  // 2. Define que tu carpeta de desarrollo es "app"
  srcDir: 'app/',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en' 
      }
    }
  }
})