import {
  defineConfig,
  // type DefaultTheme,
} from "vitepress";


const SIDEBAR_MAIN = [
  {
    text: "Getting Started",
    items: [
      { text: "Introduction", link: "/docs/introduction" },
      { text: "Quickstart", link: "/docs/quickstart" },
      { text: "Provider Context", link: "/docs/provider-context" },
      { text: "Dashboard Wrapper", link: "/docs/dashboard-wrapper" }
    ],
  },
  {
    text: 'Helpers',
    items: [
      { text: 'Notebook Helpers', link: '/docs/helpers/notebook-helpers' },
      { text: 'Awareness Helpers', link: '/docs/helpers/awareness-helpers' },
    ],
  },
  {
    text: 'Notebook',
    items: [
      { text: 'Notebook', link: '/docs/notebook/notebook' },
      { text: "Markdown Cell", link: "/docs/notebook/markdown-cell" },
      { text: "Code Cell", link: "/docs/notebook/code-cell" },
    ],
  },
  {
    text: 'Code Execution',
    items: [
      { text: "Code Execution", link: "/docs/code-execution/dredd" },
    ],
  },
  {
    text: 'API Documentation',
    items: [
      { text: "Web Server", link: "/docs/api/webserver" },
    ],
  },
]

export default defineConfig({
  vite: {},
  appearance: true,
  srcDir: ".",
  outDir: "build",
  cleanUrls: true,
  ignoreDeadLinks: true,
  // Metadata
  lang: "en-US",
  title: 'Pennant Notebook Documentation',
  description: 'Documentation for Pennant Notebook',
  // Theme
  themeConfig: {
    siteTitle: false,
    nav: [
      { text: 'Docs', link: '/docs/introduction' },
    ],
    sidebar: {
      "/": SIDEBAR_MAIN,
    },
    logo: {
      light: "/img/logos/pennant-logo.png",
      dark: "/img/logos/pennant-logo.dark.png",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/pennant-notebook" },
    ],
  },

});
