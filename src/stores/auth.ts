import { defineStore } from 'pinia'

export const authStore = defineStore({
  id: 'auth',
  state: () => ({
    token: '',
    loggedIn: false
  }),

  actions: {
    /**
     * Set auth token.
     * @param {string} token
     */
    setToken(token: string) {
      this.token = token
      this.loggedIn = true
    },

    /**
     * Reset state logged in.
     */
    reset() {
      this.token = ''
      this.loggedIn = false
    }
  }
})
