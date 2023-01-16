export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss",'nuxt-icon','@nuxt/image-edge','@nuxtjs/color-mode','@nuxtjs/supabase'],
  buildModules: [
    // ...
    // https://github.com/whardier/nuxt-hero-icons
    "@nuxt-hero-icons/outline/nuxt",
    "@nuxt-hero-icons/solid/nuxt",
  ],

  tailwindcss: {
    cssPath: "~/assets/main.css",
  },
  // server config variable

  // register nitro plugin

  /// transpile  afew packages
  build: {},
});
