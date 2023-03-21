import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _618ac95e = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _b88ff88e = () => interopDefault(import('..\\pages\\activites\\index.vue' /* webpackChunkName: "pages/activites/index" */))
const _d9a69dfe = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _6a49e6d4 = () => interopDefault(import('..\\pages\\candidatures\\index.vue' /* webpackChunkName: "pages/candidatures/index" */))
const _888cfe42 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _7080e485 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _1176ec76 = () => interopDefault(import('..\\pages\\compare.vue' /* webpackChunkName: "pages/compare" */))
const _2c7abe31 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _9c91e6ec = () => interopDefault(import('..\\pages\\contenus\\index.vue' /* webpackChunkName: "pages/contenus/index" */))
const _1e09e449 = () => interopDefault(import('..\\pages\\gestion-rh\\index.vue' /* webpackChunkName: "pages/gestion-rh/index" */))
const _20577615 = () => interopDefault(import('..\\pages\\home-cosmetics.vue' /* webpackChunkName: "pages/home-cosmetics" */))
const _53139426 = () => interopDefault(import('..\\pages\\home-fashion-five.vue' /* webpackChunkName: "pages/home-fashion-five" */))
const _e1095ecc = () => interopDefault(import('..\\pages\\home-fashion-four.vue' /* webpackChunkName: "pages/home-fashion-four" */))
const _0a8de86e = () => interopDefault(import('..\\pages\\home-fashion-seven.vue' /* webpackChunkName: "pages/home-fashion-seven" */))
const _3820a1c4 = () => interopDefault(import('..\\pages\\home-fashion-six.vue' /* webpackChunkName: "pages/home-fashion-six" */))
const _1aed7e4c = () => interopDefault(import('..\\pages\\home-fashion-three.vue' /* webpackChunkName: "pages/home-fashion-three" */))
const _303aef88 = () => interopDefault(import('..\\pages\\home-fashion-two.vue' /* webpackChunkName: "pages/home-fashion-two" */))
const _74cd03f4 = () => interopDefault(import('..\\pages\\login-register.vue' /* webpackChunkName: "pages/login-register" */))
const _f37d5bfa = () => interopDefault(import('..\\pages\\marches-publics\\index.vue' /* webpackChunkName: "pages/marches-publics/index" */))
const _d72d62c8 = () => interopDefault(import('..\\pages\\missions\\index.vue' /* webpackChunkName: "pages/missions/index" */))
const _7cabf4ea = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _464c322e = () => interopDefault(import('..\\pages\\postes-peages\\index.vue' /* webpackChunkName: "pages/postes-peages/index" */))
const _ef11ded4 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _c27a2092 = () => interopDefault(import('..\\pages\\qui-sommes-nous\\index.vue' /* webpackChunkName: "pages/qui-sommes-nous/index" */))
const _b27df496 = () => interopDefault(import('..\\pages\\shop.vue' /* webpackChunkName: "pages/shop" */))
const _448480d7 = () => interopDefault(import('..\\pages\\shop-grid-full-width.vue' /* webpackChunkName: "pages/shop-grid-full-width" */))
const _00dbcb1f = () => interopDefault(import('..\\pages\\shop-grid-no-sidebar.vue' /* webpackChunkName: "pages/shop-grid-no-sidebar" */))
const _060a852c = () => interopDefault(import('..\\pages\\shop-grid-right-sidebar.vue' /* webpackChunkName: "pages/shop-grid-right-sidebar" */))
const _f9b9fb74 = () => interopDefault(import('..\\pages\\shop-grid-two-column.vue' /* webpackChunkName: "pages/shop-grid-two-column" */))
const _c10fff02 = () => interopDefault(import('..\\pages\\shop-list-full-width.vue' /* webpackChunkName: "pages/shop-list-full-width" */))
const _5caeeb74 = () => interopDefault(import('..\\pages\\shop-list-standard.vue' /* webpackChunkName: "pages/shop-list-standard" */))
const _5bc172fd = () => interopDefault(import('..\\pages\\terms-conditions.vue' /* webpackChunkName: "pages/terms-conditions" */))
const _07b2f584 = () => interopDefault(import('..\\pages\\wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _69a76321 = () => interopDefault(import('..\\pages\\blog\\blog-right-sidebar.vue' /* webpackChunkName: "pages/blog/blog-right-sidebar" */))
const _09a7bf66 = () => interopDefault(import('..\\pages\\blog\\blog-without-sidebar.vue' /* webpackChunkName: "pages/blog/blog-without-sidebar" */))
const _71b9ce38 = () => interopDefault(import('..\\pages\\contenus\\blog-right-sidebar.vue' /* webpackChunkName: "pages/contenus/blog-right-sidebar" */))
const _485021a4 = () => interopDefault(import('..\\pages\\contenus\\blog-without-sidebar.vue' /* webpackChunkName: "pages/contenus/blog-without-sidebar" */))
const _8f925dd0 = () => interopDefault(import('..\\pages\\gestion-rh\\decret-statut.vue' /* webpackChunkName: "pages/gestion-rh/decret-statut" */))
const _04755443 = () => interopDefault(import('..\\pages\\gestion-rh\\mission.vue' /* webpackChunkName: "pages/gestion-rh/mission" */))
const _08ea34b2 = () => interopDefault(import('..\\pages\\gestion-rh\\organnigramme.vue' /* webpackChunkName: "pages/gestion-rh/organnigramme" */))
const _532c365c = () => interopDefault(import('..\\pages\\marches-publics\\decret-statut.vue' /* webpackChunkName: "pages/marches-publics/decret-statut" */))
const _3c883b7d = () => interopDefault(import('..\\pages\\marches-publics\\mission.vue' /* webpackChunkName: "pages/marches-publics/mission" */))
const _271d486c = () => interopDefault(import('..\\pages\\marches-publics\\organnigramme.vue' /* webpackChunkName: "pages/marches-publics/organnigramme" */))
const _0fdaf966 = () => interopDefault(import('..\\pages\\missions\\blog-right-sidebar.vue' /* webpackChunkName: "pages/missions/blog-right-sidebar" */))
const _3a598d5c = () => interopDefault(import('..\\pages\\missions\\blog-without-sidebar.vue' /* webpackChunkName: "pages/missions/blog-without-sidebar" */))
const _4aab9890 = () => interopDefault(import('..\\pages\\postes-peages\\decret-statut.vue' /* webpackChunkName: "pages/postes-peages/decret-statut" */))
const _4f4f2ee3 = () => interopDefault(import('..\\pages\\postes-peages\\mission.vue' /* webpackChunkName: "pages/postes-peages/mission" */))
const _2b5d9752 = () => interopDefault(import('..\\pages\\postes-peages\\organnigramme.vue' /* webpackChunkName: "pages/postes-peages/organnigramme" */))
const _d73720c2 = () => interopDefault(import('..\\pages\\product\\product-affiliate.vue' /* webpackChunkName: "pages/product/product-affiliate" */))
const _161c8e86 = () => interopDefault(import('..\\pages\\qui-sommes-nous\\decret-statut.vue' /* webpackChunkName: "pages/qui-sommes-nous/decret-statut" */))
const _3b193c31 = () => interopDefault(import('..\\pages\\qui-sommes-nous\\mission.vue' /* webpackChunkName: "pages/qui-sommes-nous/mission" */))
const _66cff220 = () => interopDefault(import('..\\pages\\qui-sommes-nous\\organnigramme.vue' /* webpackChunkName: "pages/qui-sommes-nous/organnigramme" */))
const _bbfd3b1e = () => interopDefault(import('..\\pages\\activites\\_slug.vue' /* webpackChunkName: "pages/activites/_slug" */))
const _dd13e08e = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _9fff297c = () => interopDefault(import('..\\pages\\contenus\\_slug.vue' /* webpackChunkName: "pages/contenus/_slug" */))
const _1c534301 = () => interopDefault(import('..\\pages\\gestion-rh\\_slug.vue' /* webpackChunkName: "pages/gestion-rh/_slug" */))
const _f6ea9e8a = () => interopDefault(import('..\\pages\\marches-publics\\_slug.vue' /* webpackChunkName: "pages/marches-publics/_slug" */))
const _da9aa558 = () => interopDefault(import('..\\pages\\missions\\_slug.vue' /* webpackChunkName: "pages/missions/_slug" */))
const _49b974be = () => interopDefault(import('..\\pages\\postes-peages\\_slug.vue' /* webpackChunkName: "pages/postes-peages/_slug" */))
const _e244488c = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _c5e76322 = () => interopDefault(import('..\\pages\\qui-sommes-nous\\_slug.vue' /* webpackChunkName: "pages/qui-sommes-nous/_slug" */))
const _fd7ab7ba = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _618ac95e,
    name: "about"
  }, {
    path: "/activites",
    component: _b88ff88e,
    name: "activites"
  }, {
    path: "/blog",
    component: _d9a69dfe,
    name: "blog"
  }, {
    path: "/candidatures",
    component: _6a49e6d4,
    name: "candidatures"
  }, {
    path: "/cart",
    component: _888cfe42,
    name: "cart"
  }, {
    path: "/checkout",
    component: _7080e485,
    name: "checkout"
  }, {
    path: "/compare",
    component: _1176ec76,
    name: "compare"
  }, {
    path: "/contact",
    component: _2c7abe31,
    name: "contact"
  }, {
    path: "/contenus",
    component: _9c91e6ec,
    name: "contenus"
  }, {
    path: "/gestion-rh",
    component: _1e09e449,
    name: "gestion-rh"
  }, {
    path: "/home-cosmetics",
    component: _20577615,
    name: "home-cosmetics"
  }, {
    path: "/home-fashion-five",
    component: _53139426,
    name: "home-fashion-five"
  }, {
    path: "/home-fashion-four",
    component: _e1095ecc,
    name: "home-fashion-four"
  }, {
    path: "/home-fashion-seven",
    component: _0a8de86e,
    name: "home-fashion-seven"
  }, {
    path: "/home-fashion-six",
    component: _3820a1c4,
    name: "home-fashion-six"
  }, {
    path: "/home-fashion-three",
    component: _1aed7e4c,
    name: "home-fashion-three"
  }, {
    path: "/home-fashion-two",
    component: _303aef88,
    name: "home-fashion-two"
  }, {
    path: "/login-register",
    component: _74cd03f4,
    name: "login-register"
  }, {
    path: "/marches-publics",
    component: _f37d5bfa,
    name: "marches-publics"
  }, {
    path: "/missions",
    component: _d72d62c8,
    name: "missions"
  }, {
    path: "/my-account",
    component: _7cabf4ea,
    name: "my-account"
  }, {
    path: "/postes-peages",
    component: _464c322e,
    name: "postes-peages"
  }, {
    path: "/privacy-policy",
    component: _ef11ded4,
    name: "privacy-policy"
  }, {
    path: "/qui-sommes-nous",
    component: _c27a2092,
    name: "qui-sommes-nous"
  }, {
    path: "/shop",
    component: _b27df496,
    name: "shop"
  }, {
    path: "/shop-grid-full-width",
    component: _448480d7,
    name: "shop-grid-full-width"
  }, {
    path: "/shop-grid-no-sidebar",
    component: _00dbcb1f,
    name: "shop-grid-no-sidebar"
  }, {
    path: "/shop-grid-right-sidebar",
    component: _060a852c,
    name: "shop-grid-right-sidebar"
  }, {
    path: "/shop-grid-two-column",
    component: _f9b9fb74,
    name: "shop-grid-two-column"
  }, {
    path: "/shop-list-full-width",
    component: _c10fff02,
    name: "shop-list-full-width"
  }, {
    path: "/shop-list-standard",
    component: _5caeeb74,
    name: "shop-list-standard"
  }, {
    path: "/terms-conditions",
    component: _5bc172fd,
    name: "terms-conditions"
  }, {
    path: "/wishlist",
    component: _07b2f584,
    name: "wishlist"
  }, {
    path: "/blog/blog-right-sidebar",
    component: _69a76321,
    name: "blog-blog-right-sidebar"
  }, {
    path: "/blog/blog-without-sidebar",
    component: _09a7bf66,
    name: "blog-blog-without-sidebar"
  }, {
    path: "/contenus/blog-right-sidebar",
    component: _71b9ce38,
    name: "contenus-blog-right-sidebar"
  }, {
    path: "/contenus/blog-without-sidebar",
    component: _485021a4,
    name: "contenus-blog-without-sidebar"
  }, {
    path: "/gestion-rh/decret-statut",
    component: _8f925dd0,
    name: "gestion-rh-decret-statut"
  }, {
    path: "/gestion-rh/mission",
    component: _04755443,
    name: "gestion-rh-mission"
  }, {
    path: "/gestion-rh/organnigramme",
    component: _08ea34b2,
    name: "gestion-rh-organnigramme"
  }, {
    path: "/marches-publics/decret-statut",
    component: _532c365c,
    name: "marches-publics-decret-statut"
  }, {
    path: "/marches-publics/mission",
    component: _3c883b7d,
    name: "marches-publics-mission"
  }, {
    path: "/marches-publics/organnigramme",
    component: _271d486c,
    name: "marches-publics-organnigramme"
  }, {
    path: "/missions/blog-right-sidebar",
    component: _0fdaf966,
    name: "missions-blog-right-sidebar"
  }, {
    path: "/missions/blog-without-sidebar",
    component: _3a598d5c,
    name: "missions-blog-without-sidebar"
  }, {
    path: "/postes-peages/decret-statut",
    component: _4aab9890,
    name: "postes-peages-decret-statut"
  }, {
    path: "/postes-peages/mission",
    component: _4f4f2ee3,
    name: "postes-peages-mission"
  }, {
    path: "/postes-peages/organnigramme",
    component: _2b5d9752,
    name: "postes-peages-organnigramme"
  }, {
    path: "/product/product-affiliate",
    component: _d73720c2,
    name: "product-product-affiliate"
  }, {
    path: "/qui-sommes-nous/decret-statut",
    component: _161c8e86,
    name: "qui-sommes-nous-decret-statut"
  }, {
    path: "/qui-sommes-nous/mission",
    component: _3b193c31,
    name: "qui-sommes-nous-mission"
  }, {
    path: "/qui-sommes-nous/organnigramme",
    component: _66cff220,
    name: "qui-sommes-nous-organnigramme"
  }, {
    path: "/activites/:slug",
    component: _bbfd3b1e,
    name: "activites-slug"
  }, {
    path: "/blog/:slug",
    component: _dd13e08e,
    name: "blog-slug"
  }, {
    path: "/contenus/:slug",
    component: _9fff297c,
    name: "contenus-slug"
  }, {
    path: "/gestion-rh/:slug?",
    component: _1c534301,
    name: "gestion-rh-slug"
  }, {
    path: "/marches-publics/:slug?",
    component: _f6ea9e8a,
    name: "marches-publics-slug"
  }, {
    path: "/missions/:slug",
    component: _da9aa558,
    name: "missions-slug"
  }, {
    path: "/postes-peages/:slug?",
    component: _49b974be,
    name: "postes-peages-slug"
  }, {
    path: "/product/:slug?",
    component: _e244488c,
    name: "product-slug"
  }, {
    path: "/qui-sommes-nous/:slug?",
    component: _c5e76322,
    name: "qui-sommes-nous-slug"
  }, {
    path: "/",
    component: _fd7ab7ba,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
