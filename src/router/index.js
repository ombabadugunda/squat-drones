import { createRouter, createWebHistory } from 'vue-router'
import BaseMain from '../components/BaseMain.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: BaseMain
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
