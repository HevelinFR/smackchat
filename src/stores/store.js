// Pinia Store
import { defineStore } from 'pinia'

export const  useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
  actions:{
    register(){
      console.log('Olá Pinia')
    }
  },
  getters:{}
})
