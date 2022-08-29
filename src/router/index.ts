import { createRouter, createWebHistory } from 'vue-router'
import { authStore } from '@/stores/auth'
import users from './modules/users.route'
import guest from './guest.route'
import { GUEST, HOME } from '@/config/router-name.config'

declare module 'vue-router' {
  interface RouteMeta {
    // is optional
    isAdmin?: boolean
    // must be declared by every route
    requiresAuth: boolean
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('../layouts/AdminLayout.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        ...users
      ]
    },
    ...guest,
    {
      path: '/not-found',
      name: 'not-found',
      component: () => import('@/views/aborts/404.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/aborts/404.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const auth = authStore()
  if (to.meta.requiresAuth && !auth.loggedIn) {
    return next({ name: GUEST.LOGIN })
  }

  if (to.name === GUEST.LOGIN && auth.loggedIn) {
    return next({ name: HOME })
  }

  next()
})

export default router
