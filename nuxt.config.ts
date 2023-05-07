// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/styles.css"],
  build: {
    transpile: ["@atproto/api"]
  },
  modules: ["@unocss/nuxt"]
});
