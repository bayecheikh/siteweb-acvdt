import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _102410fc = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _10006d5b = () => interopDefault(import('..\\pages\\activites\\index.vue' /* webpackChunkName: "pages/activites/index" */))
const _a8e56bc2 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _09ac64fe = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _a053dfb2 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _7edcc494 = () => interopDefault(import('..\\pages\\compare.vue' /* webpackChunkName: "pages/compare" */))
const _cc3ed362 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _1cdc3f92 = () => interopDefault(import('..\\pages\\home-cosmetics.vue' /* webpackChunkName: "pages/home-cosmetics" */))
const _6fd85ec4 = () => interopDefault(import('..\\pages\\home-fashion-five.vue' /* webpackChunkName: "pages/home-fashion-five" */))
const _a77fc990 = () => interopDefault(import('..\\pages\\home-fashion-four.vue' /* webpackChunkName: "pages/home-fashion-four" */))
const _768d94eb = () => interopDefault(import('..\\pages\\home-fashion-seven.vue' /* webpackChunkName: "pages/home-fashion-seven" */))
const _503818c0 = () => interopDefault(import('..\\pages\\home-fashion-six.vue' /* webpackChunkName: "pages/home-fashion-six" */))
const _6e5dc9fc = () => interopDefault(import('..\\pages\\home-fashion-three.vue' /* webpackChunkName: "pages/home-fashion-three" */))
const _c6f94dac = () => interopDefault(import('..\\pages\\home-fashion-two.vue' /* webpackChunkName: "pages/home-fashion-two" */))
const _d2582fb0 = () => interopDefault(import('..\\pages\\login-register.vue' /* webpackChunkName: "pages/login-register" */))
const _f6ef0bb6 = () => interopDefault(import('..\\pages\\marches-publics\\index.vue' /* webpackChunkName: "pages/marches-publics/index" */))
const _2b07ae8c = () => interopDefault(import('..\\pages\\missions\\index.vue' /* webpackChunkName: "pages/missions/index" */))
const _ff3a5ea6 = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _59b17ab8 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _c5ebd04e = () => interopDefault(import('..\\pages\\qui-sommes-nous\\index.vue' /* webpackChunkName: "pages/qui-sommes-nous/index" */))
const _339d5b52 = () => interopDefault(import('..\\pages\\shop.vue' /* webpackChunkName: "pages/shop" */))
const _1d5b4979 = () => interopDefault(import('..\\pages\\shop-grid-full-width.vue' /* webpackChunkName: "pages/shop-grid-full-width" */))
const _4c9ad87e = () => interopDefault(import('..\\pages\\shop-grid-no-sidebar.vue' /* webpackChunkName: "pages/shop-grid-no-sidebar" */))
const _5eaf3d6c = () => interopDefault(import('..\\pages\\shop-grid-right-sidebar.vue' /* webpackChunkName: "pages/shop-grid-right-sidebar" */))
const _5bf9cae8 = () => interopDefault(import('..\\pages\\shop-grid-two-column.vue' /* webpackChunkName: "pages/shop-grid-two-column" */))
const _784ec921 = () => interopDefault(import('..\\pages\\shop-list-full-width.vue' /* webpackChunkName: "pages/shop-list-full-width" */))
const _4ef916d4 = () => interopDefault(import('..\\pages\\shop-list-standard.vue' /* webpackChunkName: "pages/shop-list-standard" */))
const _6fec46c2 = () => interopDefault(import('..\\pages\\terms-conditions.vue' /* webpackChunkName: "pages/terms-conditions" */))
const _47082126 = () => interopDefault(import('..\\pages\\wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _1a75ea7a = () => interopDefault(import('..\\pages\\blog\\blog-right-sidebar.vue' /* webpackChunkName: "pages/blog/blog-right-sidebar" */))
const _99033122 = () => interopDefault(import('..\\pages\\blog\\blog-without-sidebar.vue' /* webpackChunkName: "pages/blog/blog-without-sidebar" */))
const _001fcaf4 = () => interopDefault(import('..\\pages\\marches-publics\\decret-statut.vue' /* webpackChunkName: "pages/marches-publics/decret-statut" */))
const _74b439c2 = () => interopDefault(import('..\\pages\\marches-publics\\mission.vue' /* webpackChunkName: "pages/marches-publics/mission" */))
const _50d32e8e = () => interopDefault(import('..\\pages\\marches-publics\\organnigramme.vue' /* webpackChunkName: "pages/marches-publics/organnigramme" */))
const _068ffff0 = () => interopDefault(import('..\\pages\\missions\\blog-right-sidebar.vue' /* webpackChunkName: "pages/missions/blog-right-sidebar" */))
const _0c891f74 = () => interopDefault(import('..\\pages\\missions\\blog-without-sidebar.vue' /* webpackChunkName: "pages/missions/blog-without-sidebar" */))
const _4cb6b6c1 = () => interopDefault(import('..\\pages\\product\\product-affiliate.vue' /* webpackChunkName: "pages/product/product-affiliate" */))
const _3fd274a8 = () => interopDefault(import('..\\pages\\qui-sommes-nous\\decret-statut.vue' /* webpackChunkName: "pages/qui-sommes-nous/decret-statut" */))
const _7792385a = () => interopDefault(import('..\\pages\\qui-sommes-nous\\mission.vue' /* webpackChunkName: "pages/qui-sommes-nous/mission" */))
const _def44f7c = () => interopDefault(import('..\\pages\\qui-sommes-nous\\organnigramme.vue' /* webpackChunkName: "pages/qui-sommes-nous/organnigramme" */))
const _0e49cc13 = () => interopDefault(import('..\\pages\\activites\\_slug.vue' /* webpackChunkName: "pages/activites/_slug" */))
const _ac52ae52 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _fa5c4e46 = () => interopDefault(import('..\\pages\\marches-publics\\_slug.vue' /* webpackChunkName: "pages/marches-publics/_slug" */))
const _2e74f11c = () => interopDefault(import('..\\pages\\missions\\_slug.vue' /* webpackChunkName: "pages/missions/_slug" */))
const _601845dc = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _c95912de = () => interopDefault(import('..\\pages\\qui-sommes-nous\\_slug.vue' /* webpackChunkName: "pages/qui-sommes-nous/_slug" */))
const _2fdbebc1 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _102410fc,
    name: "about"
  }, {
    path: "/activites",
    component: _10006d5b,
    name: "activites"
  }, {
    path: "/blog",
    component: _a8e56bc2,
    name: "blog"
  }, {
    path: "/cart",
    component: _09ac64fe,
    name: "cart"
  }, {
    path: "/checkout",
    component: _a053dfb2,
    name: "checkout"
  }, {
    path: "/compare",
    component: _7edcc494,
    name: "compare"
  }, {
    path: "/contact",
    component: _cc3ed362,
    name: "contact"
  }, {
    path: "/home-cosmetics",
    component: _1cdc3f92,
    name: "home-cosmetics"
  }, {
    path: "/home-fashion-five",
    component: _6fd85ec4,
    name: "home-fashion-five"
  }, {
    path: "/home-fashion-four",
    component: _a77fc990,
    name: "home-fashion-four"
  }, {
    path: "/home-fashion-seven",
    component: _768d94eb,
    name: "home-fashion-seven"
  }, {
    path: "/home-fashion-six",
    component: _503818c0,
    name: "home-fashion-six"
  }, {
    path: "/home-fashion-three",
    component: _6e5dc9fc,
    name: "home-fashion-three"
  }, {
    path: "/home-fashion-two",
    component: _c6f94dac,
    name: "home-fashion-two"
  }, {
    path: "/login-register",
    component: _d2582fb0,
    name: "login-register"
  }, {
    path: "/marches-publics",
    component: _f6ef0bb6,
    name: "marches-publics"
  }, {
    path: "/missions",
    component: _2b07ae8c,
    name: "missions"
  }, {
    path: "/my-account",
    component: _ff3a5ea6,
    name: "my-account"
  }, {
    path: "/privacy-policy",
    component: _59b17ab8,
    name: "privacy-policy"
  }, {
    path: "/qui-sommes-nous",
    component: _c5ebd04e,
    name: "qui-sommes-nous"
  }, {
    path: "/shop",
    component: _339d5b52,
    name: "shop"
  }, {
    path: "/shop-grid-full-width",
    component: _1d5b4979,
    name: "shop-grid-full-width"
  }, {
    path: "/shop-grid-no-sidebar",
    component: _4c9ad87e,
    name: "shop-grid-no-sidebar"
  }, {
    path: "/shop-grid-right-sidebar",
    component: _5eaf3d6c,
    name: "shop-grid-right-sidebar"
  }, {
    path: "/shop-grid-two-column",
    component: _5bf9cae8,
    name: "shop-grid-two-column"
  }, {
    path: "/shop-list-full-width",
    component: _784ec921,
    name: "shop-list-full-width"
  }, {
    path: "/shop-list-standard",
    component: _4ef916d4,
    name: "shop-list-standard"
  }, {
    path: "/terms-conditions",
    component: _6fec46c2,
    name: "terms-conditions"
  }, {
    path: "/wishlist",
    component: _47082126,
    name: "wishlist"
  }, {
    path: "/blog/blog-right-sidebar",
    component: _1a75ea7a,
    name: "blog-blog-right-sidebar"
  }, {
    path: "/blog/blog-without-sidebar",
    component: _99033122,
    name: "blog-blog-without-sidebar"
  }, {
    path: "/marches-publics/decret-statut",
    component: _001fcaf4,
    name: "marches-publics-decret-statut"
  }, {
    path: "/marches-publics/mission",
    component: _74b439c2,
    name: "marches-publics-mission"
  }, {
    path: "/marches-publics/organnigramme",
    component: _50d32e8e,
    name: "marches-publics-organnigramme"
  }, {
    path: "/missions/blog-right-sidebar",
    component: _068ffff0,
    name: "missions-blog-right-sidebar"
  }, {
    path: "/missions/blog-without-sidebar",
    component: _0c891f74,
    name: "missions-blog-without-sidebar"
  }, {
    path: "/product/product-affiliate",
    component: _4cb6b6c1,
    name: "product-product-affiliate"
  }, {
    path: "/qui-sommes-nous/decret-statut",
    component: _3fd274a8,
    name: "qui-sommes-nous-decret-statut"
  }, {
    path: "/qui-sommes-nous/mission",
    component: _7792385a,
    name: "qui-sommes-nous-mission"
  }, {
    path: "/qui-sommes-nous/organnigramme",
    component: _def44f7c,
    name: "qui-sommes-nous-organnigramme"
  }, {
    path: "/activites/:slug",
    component: _0e49cc13,
    name: "activites-slug"
  }, {
    path: "/blog/:slug",
    component: _ac52ae52,
    name: "blog-slug"
  }, {
    path: "/marches-publics/:slug?",
    component: _fa5c4e46,
    name: "marches-publics-slug"
  }, {
    path: "/missions/:slug",
    component: _2e74f11c,
    name: "missions-slug"
  }, {
    path: "/product/:slug?",
    component: _601845dc,
    name: "product-slug"
  }, {
    path: "/qui-sommes-nous/:slug?",
    component: _c95912de,
    name: "qui-sommes-nous-slug"
  }, {
    path: "/",
    component: _2fdbebc1,
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
