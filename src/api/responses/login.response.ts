import type { MetaResource } from '@/models/resources/meta.resource'

export interface AuthResource {
  token: string
  role: string
}

export interface LoginResponse {
  data: AuthResource
  meta: MetaResource
}
