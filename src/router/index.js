import Vue from 'vue'
import VueRouter from 'vue-router'
import Demo from './modules/demo'

Vue.use(VueRouter)

const routes = [...Demo]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

// 导航守卫，后置钩子
router.afterEach(route => {
  const title = route.meta.title

  if (title) {
    document.title = title
  }
})

export default router
