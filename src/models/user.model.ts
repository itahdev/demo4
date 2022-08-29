export interface UserInterface {
  id: number | null
  name: string
  email: string
  birthday?: string
}

export class UserModel implements UserInterface {
  id: number | null = null
  name = ''
  email = ''

  constructor(data?: UserInterface | null) {
    if (data) {
      this.id = data.id ?? null
      this.name = data.name ?? ''
      this.email = data.email ?? ''
    }
  }
}
