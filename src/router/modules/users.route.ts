import { USERS } from '@/config/router-name.config'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: 'users',
    name: USERS.INDEX,
    component: () => import('@/views/users/UserListView.vue')
  }
]

export default routes
