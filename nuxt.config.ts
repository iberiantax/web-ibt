// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxtjs/tailwindcss'],
  css: ['@/assets/css/main.css'],
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
  site: {
    url: 'https://www.iberiantax.com',
    name: 'IberianTax',
  },
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
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    customRoutes: 'config',
    pages: {
      about: {
        en: '/about-us',
        es: '/sobre-nosotros',
      },
      blog: {
        en: '/blog',
        es: '/blog',
      },
    },
  },
});
