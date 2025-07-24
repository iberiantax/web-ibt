// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
    i18n: {
        locales: [
            {
                code: 'en',
                iso: 'en-US',
                name: 'English',
                file: 'en.json',
            },
            {
                code: 'es',
                iso: 'es-ES',
                name: 'Español',
                file: 'es.json',
            },
        ],
        defaultLocale: 'en',
    },
})