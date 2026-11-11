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
    
    socialLinks: [
      { icon: "github", link: "https://github.com" },
    ],

    footer: {
      message: "MIT Lisansı ile korunmaktadır.",
      copyright: `Telif Hakkı © ${new Date().getFullYear()} SaaS Rehberi`,
    },

    outline: { label: "Bu Sayfada" },
    docFooter: { prev: "Önceki Sayfa", next: "Sonraki Sayfa" },
    lastUpdated: { text: "Son Güncelleme" },
    returnToTopLabel: "Başa Dön",
    sidebarMenuLabel: "Menü",
    darkModeSwitchLabel: "Görünüm",
    lightModeSwitchTitle: "Açık Mod",
    darkModeSwitchTitle: "Karanlık Mod",

    search: {
      provider: "local",
      options: {
        translations: {
          button: { buttonText: "Ara", buttonAriaLabel: "Arama yap" },
          modal: {
            noResultsText: "Sonuç bulunamadı",
            resetButtonTitle: "Aramayı temizle",
            footer: {
              selectText: "Seçmek için",
              navigateText: "Gezinmek için",
              closeText: "Kapatmak için",
            },
          },
        },
      },
    },
    
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
