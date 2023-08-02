import { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  // https://github.com/nuxt-themes/docus
  extends: "@nuxt-themes/docus",

  modules: [
    // https://github.com/nuxt-modules/plausible
    "@nuxtjs/plausible",
    // https://github.com/nuxt/devtools
    "@nuxt/devtools",
  ],

  router: {
    base: "/docs/",
  },
};

export default config;