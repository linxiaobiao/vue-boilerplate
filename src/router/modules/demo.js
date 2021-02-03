import Home from '@/views/Home.vue' // 同步引入
const About = () => import(/* webpackChunkName: "about" */ '@/views/About.vue') // 异步引入

export default [
  { path: '/', component: Home, meta: { title: '首页' } },
  { path: '/about', name: 'About', component: About, meta: { title: '关于我们' } }
]
