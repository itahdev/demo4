import { authStore } from '@/stores/auth'

export default {
  install: () => {
    const auth = authStore()
    const cookies = useCookies(['token'])
    const token = cookies.get('token')
    if (token) {
      auth.setToken(token)
    }
  }
}
