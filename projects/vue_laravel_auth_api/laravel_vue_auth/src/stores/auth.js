import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
  state: () => {
    return {
      user: 'Jhon'
    }
  },
  getters: {},
  actions: {}
})
