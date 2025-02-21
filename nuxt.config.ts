// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/icon"],
  image:{
    inject: true,
    provider: "storyblok",
    storyblok:{
      baseURL:"https://a-ap.storyblok.com/"
    }
    
  },
  css: [
    '@/assets/css/tailwind.css',
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
})