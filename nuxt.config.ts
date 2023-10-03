// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["assets/css/style.css"],
  app: {
    head: {
      title: "Nuxt 3 basic",
      meta: [
        {
          name: "discription",
          content: "content",
          link: [{ rel: "burger", type: "image/x-icon", href: "/burger.ico" }],
        },
      ],
    },
  },
  routeRules: {
    "/posts/**": { ssr: false },
  },
});
