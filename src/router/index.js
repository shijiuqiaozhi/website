import { createRouter, createWebHistory } from 'vue-router'
import mainPage from '@/components/mainPage'
import authorizeForm from '@/components/tables/authorize'
import authorizeTable from '@/components/tables/authorizeTable'

const routerHistory = createWebHistory()

const Router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage
    }, 
    {
      path: '/authorizeForm',
      name: 'authroizeForm',
      component: authorizeForm
    },
    {
      path: '/authorizeTable',
      name: 'authorizeTable',
      component: authorizeTable
    }
  ]
})

export default Router