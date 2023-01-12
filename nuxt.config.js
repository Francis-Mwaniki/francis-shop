export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss",'nuxt-icon','@nuxt/image-edge',],
  buildModules: [
    // ...
    // https://github.com/whardier/nuxt-hero-icons
    "@nuxt-hero-icons/outline/nuxt",
    "@nuxt-hero-icons/solid/nuxt",
  ],
  // custom tailwindcss path
  tailwindcss: {
    cssPath: "~/assets/main.css",
  },
  // server config variable

  // register nitro plugin

  /// transpile  afew packages
  build: {},
});
