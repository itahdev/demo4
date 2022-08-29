import type { Roles } from '@/config/role.config'

export interface AdminInterface {
  id: number | null
  name: string
  email: string
  role?: Roles
}

export class AdminModel implements AdminInterface {
  id: number | null = null
  name = ''
  email = ''

  constructor(data: AdminInterface | null) {
    if (data) {
      this.id = data.id ?? null
      this.name = data.name ?? ''
      this.email = data.email ?? ''
    }
  }
}
