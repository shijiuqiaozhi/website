import { createRouter, createWebHistory } from 'vue-router';
import mainPage from '@/components/mainPage';
import authorizeForm from '@/components/tables/authorize';
import authorizeTable from '@/components/tables/authorizeTable';
import loginForm from '@/components/loginForm';
import complaint from '@/components/tables/complaint';
import complaintTable from '@/components/tables/complaintTable';

const routerHistory = createWebHistory();

const Router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage,
    },
    {
      path: '/authorizeForm',
      name: 'authroizeForm',
      component: authorizeForm,
    },
    {
      path: '/authorizeTable',
      name: 'authorizeTable',
      component: authorizeTable,
    },
    {
      path: '/complaintForm',
      name: 'complaintForm',
      component: complaint,
    },
    {
      path: '/complaintTable',
      name: 'complaintTable',
      component: complaintTable,
    },
    {
      path: '/loginForm',
      name: 'loginForm',
      component: loginForm,
    },
  ],
});

/* Router.beforeEach((to, from, next) => {
  if (to.path === '/loginForm') {
    next()
  } else {
    if (to.path === '/loginForm' || to.path === '/') {
      next()
    } else {
      next('/loginForm')
    }
  }
}) */

export default Router;
