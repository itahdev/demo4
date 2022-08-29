import { GUEST } from '@/config/router-name.config'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: GUEST.LOGIN,
    component: () => import('@/views/auth/LoginView.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: "/translate",
    name: GUEST.TRANSLATE,
    component: () => import("@/views/demo/TranslateView.vue"),
    meta: { requiresAuth: false },
  },
]

export default routes;
