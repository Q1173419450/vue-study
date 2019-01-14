import Router from 'vue-router'

import routes from './routes'

// 服务端渲染时会内存溢出
// const router = new Router({
//   routes
// })

// export default router
export default () => {
  return new Router({
    routes,
    // 去除地址的 #
    mode: 'history',
    // base: /base/,
    // 配置样式
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link'
    // 滚动位置
    // scrollBehavior (to, from, savedPosition) {
    //   if(savedPosition) {
    //     return savedPosition
    //   } else {
    //     return { x: 0, y: 0 }
    //   }
    // }

    // parseQuery (query) {},
    // stringifyQuery (obj) {}
    // fallback: true
  })
}
