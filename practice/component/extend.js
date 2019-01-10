import Vue from 'vue'

const component = {
  props: {
    active: Boolean,
    propOne: String
    // onChange: Function
  },
  // props: ['active', 'propOne'],
  template:
  `<div>
    <input type='text' v-model='text'>
    <span @click='handleChange'>{{propOne}}</span>
    <span v-show='active'>see me if</span>
  </div>`,
  // 组件不能随便修改传递的值
  // mounted () {
  //   this.propOne = 'inner-content'
  // },
  // 为了使组件互不影响，将data使用函数形式
  data () {
    return {
      text: 123
    }
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

// 继承
const comp2 = {
  extends: component,
  data () {
    return {
      text: 1
    }
  }
}

// const CompVue = Vue.extend(component)

// const app = new CompVue({
//   propsData: {
//     propOne: 'xxx'
//   },
//   data: {
//     text: '321'
//   }
// })

const app = new Vue({
  components: {
    comp: comp2
  },
  template: `
    <div>
      <comp></comp>
    </div>
  `
})

app.$mount('#root')
