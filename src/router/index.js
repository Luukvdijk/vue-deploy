import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/about',
      name: 'aboutMe',
      component: () => import('../views/AboutMe.vue')
    },
    {
      path: '/conact',
      name: 'conact',
      component: () => import('../views/ContactMe.vue')
    }
  ]
})

export default router
