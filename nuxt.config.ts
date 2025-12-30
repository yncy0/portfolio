// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxthub/core",
    "@nuxt/icon",
    "@nuxt/ui"
  ],

  app: {
    head: {
      title: "Portfolio by Yancy",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content: "Just a simple Portfolio website built using Nuxt",
        },
        {
          name: "author",
          content: "Yncy0"
        }
      ],
    },
  },

  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  icon: {
    mode: "css",
    cssLayer: "base",
  },
});
