import type { LoginParamI } from '@/api/params/login.param'
import { login as loginApi } from '@/api/requests/auth.api'
import type { LoginResponse } from '@/api/responses/login.response'
import type { Ref } from 'vue'
import type { ErrorResponse } from '@/api/responses/error.response'
import { AxiosError } from 'axios'
import { authStore } from '@/stores/auth'
import { COOKIE_KEYS } from '@/config/cookie.config'
import { HOME } from '@/config/router-name.config'

export const useLogin = () => {
  const data: Ref<LoginResponse | null> = ref(null)
  const error: Ref<ErrorResponse | null> = ref(null)
  const loading = ref(false)
  const router = useRouter()

  const handleLogin = async (params: LoginParamI) => {
    loading.value = true
    try {
      const response = await loginApi(params)
      const auth = authStore()
      const cookies = useCookies()
      data.value = response.data
      if (data.value) {
        auth.setToken(data.value?.data.token)
        cookies.set(COOKIE_KEYS.TOKEN, data.value?.data.token)
      }
      error.value = null
      await router.push({ name: HOME })
    } catch (err) {
      data.value = null
      if (err instanceof AxiosError) {
        error.value = err.response?.data
        throw error.value
      }
    } finally {
      loading.value = false
    }
  }

  return { data, error, loading, handleLogin }
}
