import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    Layout: 'default',
    isLogin: true,
  }),
  actions: {
    setLayout(layout : string) {
      this.Layout = layout;
    },
    setIsLogin(isLogin : boolean) {
      this.isLogin = isLogin;
    }
  }
})