import { createRouter, createWebHistory } from 'vue-router'
import BaseMain from '../components/BaseMain.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: BaseMain
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../components/BaseAbout.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
