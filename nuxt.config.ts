// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/icon"],
  
  // Image optimization
  image: {
    inject: true,
    provider: "storyblok",
    storyblok: {
      baseURL: "https://a-ap.storyblok.com/"
    }
  },
  
  // CSS
  css: [
    '@/assets/css/tailwind.css',
  ],
  
  // Build optimization
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  
  // App config
  app: {
    head: {
      title: 'Bagas Catur Santoso - Web Developer Portfolio',
      htmlAttrs: {
        'data-theme': 'dark-portfolio',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio of Bagas Catur Santoso, Full-Stack Web Developer specializing in Vue.js and Nuxt.js' },
        { name: 'theme-color', content: '#0F172A' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap' },
      ],
    },
  },
  
})