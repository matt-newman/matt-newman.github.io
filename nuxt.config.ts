// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  mode: 'spa',
  css: [
    '~/assets/css/normalize.css',
    '~/assets/css/base.css',
    '~/assets/css/layout.css',
    '~/assets/css/styles.css',
    '~/assets/css/utils.css',
    '~/assets/css/print.css',
  ],
  devtools: {
    enabled: true
  },
  buildModules: [
    '@nuxtjs/pwa',
  ],
  modules: [
    '@nuxt/content',
    "@nuxt/image",
  ],
  routeRules: {
    '/': { prerender: true }
  },
  content: {
    markdown: {
      tags: {
        // deactivates auto anchor links for header
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6'
      }
    }
  },
  pwa: {
    manifest: {
      name: 'Matt Newman CV',
      short_name: 'Matt Newman CV',
      lang: 'en',
      display: 'standalone',
    },
    workbox: {},
  }
})