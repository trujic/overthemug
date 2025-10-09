// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxtjs/tailwindcss', '@nuxt/image', '@nuxt/fonts'],
  css: ['~/assets/css/main.css', '~/assets/css/fonts.css'],
  fonts: {
    families: [
      {
        name: 'Noto Serif Display',
        provider: 'fontsource',
        weights: [400, 700],
      },
      {
        name: 'Cormorant Garamond',
        provider: 'fontsource',
        weights: [400, 700],
      },
      {
        name: 'Open Sauce Sans',
        provider: 'fontsource',
        weights: [300, 400, 500, 600, 700, 800, 900],
      },
    ],
  },
  runtimeConfig: {
    public: {
      brevoApiKey: process.env.BREVO_API_KEY 
    }
  },
})