/**
 * 生命周期
 */
import Vue from 'vue'

const app = new Vue({
  // template: '<div>{{text}}</div>',
  data: {
    text: 0
  },
  beforeCreate () {
    // this.$el undefined
    console.log(this, 'beforeCreate')
  },
  /**
   * ajax请求
   */
  created () {
    // this.$el undefined
    console.log(this, 'created')
  },
  // 挂在到html，显示的内容
  beforeMount () {
    console.log(this, 'beforeMount')
  },
  mounted () {
    console.log(this, 'mounted')
  },
  /* ---- 以上只调用一次 ----- */
  // 数据更新时
  beforeUpdate () {
    console.log(this, 'beforeUpdate')
  },
  updated () {
    console.log(this, 'updated')
  },
  activated () {
    console.log(this, 'activated')
  },
  deactivated () {
    console.log(this, 'deactivated')
  },
  // 销毁
  beforeDestroy () {
    console.log(this, 'beforeDestroy')
  },
  destroyed () {
    console.log(this, 'destroyed')
  },
  // 在.vue文件下是不会调用这个的，
  // .vue文件会经过vue-laoder ，然后解析为render-function（效率更高）
  render (h) {
    console.log('render function invoked')
    return h('div', {}, this.text)
  }
  // render (h) {
  //   throw new TypeError('render error')
  // },
  // 对自身有用而已
  // renderError (h, err) {
  //   return h('div', {}, err.stack)
  // },
  // 会向上冒泡，正式环境可以使用
  // errorCaptured () { }
})

app.$mount('#root')

// setInterval(() => {
//   app.text += 1
// }, 1000)

// setTimeout(() => {
//   // 销毁事件，watch
//   app.$destroy()
// }, 1000)
