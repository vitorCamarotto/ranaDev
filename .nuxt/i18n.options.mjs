
// @ts-nocheck
import locale__home_vitor_Documents_ranaDev_locales_en_us_json from "../locales/en-us.json";
import locale__home_vitor_Documents_ranaDev_locales_pt_br_json from "../locales/pt-br.json";


export const localeCodes =  [
  "en",
  "pt"
]

export const localeLoaders = {
  "en": [{ key: "../locales/en-us.json", load: () => Promise.resolve(locale__home_vitor_Documents_ranaDev_locales_en_us_json), cache: true }],
  "pt": [{ key: "../locales/pt-br.json", load: () => Promise.resolve(locale__home_vitor_Documents_ranaDev_locales_pt_br_json), cache: true }]
}

export const vueI18nConfigs = [
  () => import("../i18n.config.ts?hash=bffaebcb&config=1" /* webpackChunkName: "i18n_config_ts_bffaebcb" */)
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "i18n.config.ts",
  "locales": [
    {
      "code": "en",
      "iso": "en-US",
      "files": [
        "locales/en-us.json"
      ]
    },
    {
      "code": "pt",
      "iso": "pt-BR",
      "files": [
        "locales/pt-br.json"
      ]
    }
  ],
  "defaultLocale": "en",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_except_default",
  "lazy": false,
  "langDir": "locales/",
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "en",
    "iso": "en-US",
    "files": [
      {
        "path": "locales/en-us.json"
      }
    ]
  },
  {
    "code": "pt",
    "iso": "pt-BR",
    "files": [
      {
        "path": "locales/pt-br.json"
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
