import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div>{{text}} {{obj.a}}</div>',
  data: {
    text: 0,
    // 当对象的子类为空时，数据自身非响应式，需要
    obj: {}
  }
  // 自动注销
  // watch: {
  //   text (newText, oldText) {
  //     // console.log(`${newText} : ${oldText}`)
  //   }
  // }
})

app.$mount('#root')

// app.text = 'text1'

let i = 0
setInterval(() => {
  i++
  // 异步渲染
  app.text += 1
  app.obj.a = i
  // app.$set(app.obj, 'a', i)
  // app.$delete()
  // app.$forceUpdate()
  // app.$data.text += 1
  // 无变化
  // app.$options.data.text += 1
}, 1000)

// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)

// console.log(app.$options)
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }

// console.log(app.$root === app)

// <item><div></div></item>
// console.log(app.$children)

// 引用
// console.log(app.$slots)
// console.log(app.$scopedSlots)

// 模板的引用 （查）
// console.log(app.$refs)

// 判断服务端渲染
// console.log(app.$isServer)

// $watch 通过unWatch注销
// const unWatch = app.$watch('text', (newText, oldText) => {
//   console.log(`${newText} : ${oldText}`)
// })

// setTimeout(() => {
//   unWatch()
// }, 2000)

// $on 只能监听当前对象
// $once只触发一次
// app.$on('text', (a, b) => {
//   console.log(`text click ${a} ${b}`)
// })

// app.$emit('text', 1, 2)

// app.$forceUpdate()
// app.$set()
// app.delete()
