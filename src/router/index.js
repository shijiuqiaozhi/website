import { createRouter, createWebHistory } from 'vue-router'
import mainPage from '@/components/mainPage'

const routerHistory = createWebHistory()

const Router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage
    }
  ]
})

export default Router