import api from '../axios-instance'
import type { LoginParamI } from '@/api/params/login.param'
import type { AxiosResponse } from 'axios'

export function login(params: LoginParamI): Promise<AxiosResponse> {
  return api.post('admin-api/login', params)
}

export function logout(): Promise<AxiosResponse> {
  return api.post('admin-api/logout')
}

export function me(): Promise<AxiosResponse> {
  return api.get('admin-api/profile')
}
