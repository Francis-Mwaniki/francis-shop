export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss",'nuxt-icon','@nuxt/image-edge','@nuxtjs/color-mode',  '@huntersofbook/chatwoot-nuxt','@nuxtjs/supabase'],
  buildModules: [
    // ...
    // https://github.com/whardier/nuxt-hero-icons
    "@nuxt-hero-icons/outline/nuxt",
    "@nuxt-hero-icons/solid/nuxt",
  ],
  chatwoot: {
    init: {
      websiteToken: 'b6BejyTTuxF4yPt61ZTZHjdB'
    },
    settings: {
      locale: 'en',
      position: 'right',
      launcherTitle: 'Hello Chat',
      // ... and more settings
    }
  },

  tailwindcss: {
    cssPath: "~/assets/main.css",
  },
  // server config variable

  // register nitro plugin

  /// transpile  afew packages
  build: {},
});
