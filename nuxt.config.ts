// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/normalize.css',
    '~/assets/css/base.css',
  ],
  devtools: {
    enabled: true
  },
  modules: ['@nuxt/content', "@nuxt/image"],
  routeRules: {
    '/': { prerender: true }
  }
})