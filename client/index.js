import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import './assets/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/store'

// const root = document.createElement('div')
// document.body.appendChild(root)

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

// 全局注册module
store.registerModule('c', {
  state: {
    text: 3
  }
})

// 解除绑定module
// store.unregisterModule('c')

// store.watch((state) => {
//   state.count + 1
// }, (newCount) => {
//   console.log('new count wathched', newCount)
// })

// 订阅 mutation
// store.subscribe((mutation, state) => {
//   // 是哪个mutation
//   // console.log(mutation.type)
//   // 被调用的值是哪个对象，这也是为什么 mutations 第二个参数可以一个对象，而不是多参数
//   // console.log(mutation.payload)
// })

// 订阅 action
// store.subscribeAction((action, state) => {
//   console.log(action.type)
//   console.log(action.payload.num)
// })

// 路由守卫
// 验证某些页面是需要用户登录才需要去展示的
router.beforeEach((to, from, next) => {
  // 跳转到哪个路由
  console.log(to)
  // 原始路由
  console.log(from)
  console.log('before each invoked')
  next()
  // if (to.fullPath === '/app') {
  //   // 当没有登录时，跳转到login
  //   next({ path: '/login' })
  // } else {
  //   next()
  // }
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})

router.afterEach((to, from) => {
  console.log('after each invoked')
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
