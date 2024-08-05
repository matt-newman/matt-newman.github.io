// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/normalize.css',
    '~/assets/css/base.css',
    '~/assets/css/layout.css',
    '~/assets/css/styles.css',
    '~/assets/css/utils.css',
  ],
  devtools: {
    enabled: true
  },
  modules: ['@nuxt/content', "@nuxt/image"],
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
  }
})