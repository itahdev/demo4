export interface LoginParamI {
  email: string
  password: string
}

export class LoginParam implements LoginParamI {
  email = ''
  password = ''
}
