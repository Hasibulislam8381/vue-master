import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import RequestPassword from '../views/RequestPassword.vue'
import ResetPassword from '../views/ResetPassword.vue'
import AppLayout from '@/components/AppLayout.vue'
import store from '@/store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/app',
      name: 'app',
      component: AppLayout,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard
        }
        // {
        //   path: 'products',
        //   name: 'app.products',
        //   component: products
        // }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/request-password',
      name: 'RequestPassword',
      component: RequestPassword
    },
    {
      path: '/reset-password',
      name: 'ResetPassword',
      component: ResetPassword
    }
  ]
})

router.beforeEach((to,from,next){
  if(to.meta.requireAuth && !store.state.user.token){
    next({name:'login'})
  }
  else if(to.meta.requiresGuest && store.state.user.token){
    next({name:'app.dashboard'})
  }
  else{
    next()
  }
})

export default router
