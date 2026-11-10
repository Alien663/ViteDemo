import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../pages/HomePage.vue')
  },
  {
    path: '/status/:status',
    name: 'HttpsStatusResponse',
    component: () => import('../components/HttpsStatusResponse.vue')
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: () => import('../pages/AboutUs.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router