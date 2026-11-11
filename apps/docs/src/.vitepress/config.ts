import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/",
  lang: "tr-TR",
  title: "SaaS-VPS Rehberi",
  description: "SaaS Rehberi VitePress Sitesi",

  head: [
    [
      "meta",
      {
        name: "keywords",
        content:
          "vitepress, dökümantasyon, markdown, seo, vue, nodejs, docker, monorepo, nestjs, turborepo, typescript",
      },
    ],
  ],

  themeConfig: {
    logo: {
      light: "/logo.svg",
      dark: "/logod.svg",
      alt: "Proje Logosu",
    },

    siteTitle: "Dökümantasyon",
    nav: [
      { text: "Ana Sayfa", link: "/" },
      { text: "Plan", link: "/plan" },
    ],
    sidebar: [
      {
        text: "Giriş",
        items: [
          { text: "Başlangıç", link: "/" },
          { text: "Plan", link: "/plan" },
        ],
      },
    ],
  },
})
