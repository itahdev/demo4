import { defineStore } from 'pinia'
import { UserModel } from '@/models/user.model'

export const userStore = defineStore({
  id: 'user',
  state: () => ({
    user: new UserModel(),
    role: '',
    permissions: []
  }),
  actions: {
    setUser(user: UserModel) {
      this.user = user
    },

    /**
     * Set role name.
     * @param role
     */
    setRole(role: string) {
      this.role = role
    },

    /**
     * Set permissions.
     * @param {string[]} permissions
     */
    setPermissions(permissions: []) {
      this.permissions = permissions
    },

    reset() {
      this.user = new UserModel()
      this.role = ''
      this.permissions = []
    }
  }
})
