import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'app-one-home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/about',
    name: 'app-one-about',
    component: () => import('../views/about.vue')
  }
]

export default routes
