import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['vuetify/lib/styles/main.sass', '@/assets/css/main.css'],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/google-fonts',
    '@nuxt/test-utils/module',
    '@nuxtjs/color-mode',
    ['@nuxtjs/i18n', {
      locales: [
        { code: 'en', iso: 'en-US', file: 'en-us.json' },
        { code: 'pt', iso: 'pt-BR', file: 'pt-br.json' }
      ],
      langDir: 'locales/',
      defaultLocale: 'en',
    }]
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  googleFonts: {
    families: {
      Questrial: true
    }
  },
  colorMode: {
    classSuffix: ''
  },
  i18n: {
    vueI18n: 'i18n.config.ts',
    compilation: {
      strictMessage: false
    },
  }
})
