import type {
  AxiosRequestHeaders,
  AxiosInstance,
  AxiosRequestConfig
} from 'axios'
import { authStore } from '@/stores/auth'
import { userStore } from '@/stores/user'

const headers: AxiosRequestHeaders = {
  ContentType: 'application/json',
  Accept: 'application/json'
}
const auth = authStore()
const user = userStore()
const router = useRouter()
const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers
})

apiClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (auth.token && config.headers) {
      config.headers['Authorization'] = `Bearer ${auth.token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

apiClient.interceptors.response.use(undefined, (error) => {
  const status = error.response.status
  if (status === 401) {
    auth.reset()
    user.reset()

    return router.push({ name: 'login' })
  }
  // if ([403, 500, 503].includes(status)) {
  // }
  // if (status === 404) {
  // }

  return Promise.reject(error)
})

export default apiClient
