import fs from 'fs'
import path from 'path'

const server = {}

if (process.env.NODE_ENV == 'development') {
  server.https = {
    key: fs.readFileSync(path.join(__dirname, 'localhost-key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'localhost.pem'))
  }
}

export default {
  server,
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "my-neo-portfolio",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        src:
          "https://cdn.jsdelivr.net/gh/ivandiazwm/coinwidget@0.1.1/builds/full.js",
        src: "https://www.aaa.com/qrcode.min.js"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    
  ],

  

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/markdownit'
  ],
    markdownit: {
    injected: true,
    breaks: true,
    html: true,
    linkify: true,
    typography: true,
    use: [
      'markdown-it-div',
      'markdown-it-attrs'
    ]

  },

  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
