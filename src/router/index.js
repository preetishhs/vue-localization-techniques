import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import App from '@/App.vue'
import { languages } from '@/plugins/i18n'
import store from '@/store'
import About from '@/views/About.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    beforeEnter(to, from, next) {
      next(store.state.locale)
    }
  },
  {
    path: '/:lang',
    component: App,
    beforeEnter(to, from, next) {
      let lang = to.params.lang
      if (languages.includes(lang)) {
        if (store.state.locale !== lang) {
          store.dispatch('changeLocale', lang)
        }
        return next()
      }
      return next({ path: store.state.locale })
    },
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: 'about',
        name: 'about',
        component: About
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'home' && to.params.lang !== store.state.locale) {
//     let newPathIndex = to.path.indexOf('/', to.path.indexOf('/') + 1)

//     console.log(
//       'in before each',
//       to,
//       newPathIndex,
//       to.path.substring(newPathIndex)
//     )
//     next({
//       path: `/${store.state.locale}${to.path.substring(newPathIndex)}`,
//       params: { lang: store.state.locale }
//     })
//   }
//   next()
// })

export default router
