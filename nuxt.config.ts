// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['primeicons/primeicons.css'],
  
  plugins: [{ src: '@/plugins/aos', mode: 'client' }],
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt',],


})