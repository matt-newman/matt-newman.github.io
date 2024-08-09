// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/normalize.css',
    '~/assets/css/base.css',
    '~/assets/css/layout.css',
    '~/assets/css/styles.css',
    '~/assets/css/sidebar.css',
    '~/assets/css/utils.css',
    '~/assets/css/accordion.css',
    '~/assets/css/print.css',
  ],
  devtools: {
    enabled: true
  },
  modules: ['@nuxt/content', "@nuxt/image", "@vite-pwa/nuxt"],
  routeRules: {
    '/': { prerender: true },
    '/jobs/': { prerender: false, ssr: false },
  },
  content: {
    markdown: {
      anchorLinks: false,
    }
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Matt Newman CV',
      short_name: 'Matt Newman CV',
      lang: 'en',
      display: 'standalone',
    },
    worker: {
      format: 'es', // as in ecma script
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{json,js,css,html,png,svg,ico}'],
    },
    client: {
    },
    devOptions: {
      enabled: false,
      suppressWarnings: false,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  }
})