import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    user: null,
    errors: {}
  }),
  actions: {
    async authenticate(apiRoute, formData) {
      try {
        const res = await axios.post(`/api/${apiRoute}`, formData)
        this.errors = {}
        if (res.status === 200 || res.status === 201) {
          this.user = res.data.data.name
          localStorage.setItem('token', res.data.token)
          // this.router.push({ name: 'home' })
          console.log(res.data.)
        }
      } catch (error) {
        if (error.response && error.response.status === 422) {
          this.errors = error.response.data.errors
        } else {
          console.error('Error during authentication:', error)
        }
      }
    }
  }
})
