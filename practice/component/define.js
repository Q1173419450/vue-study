import Vue from 'vue'

// const data = {
//   text: 0
// }

const component = {
  props: {
    active: {
      type: Boolean,
      // 参数必须要传
      require: true,
      // 默认值
      // default:
      // 自定义验证props
      validator (value) {
        return typeof value === 'boolean'
      }
    },
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
  mounted () {
    // this.propOne = 'inner-content'
    // this.$parent.text = 'hello'
  },
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

// 当做类来命名
// Vue.component('Comp', component)

const app = new Vue({
  components: {
    Comp: component
  },
  mounted () {
    console.log(this.$refs.propOne)
    console.log(this.$refs.active)
  },
  template:
  `<div>
    <comp ref='propOne' :active='active' :prop-one='text' @change='handleChange'></comp>
    <comp ref='active'></comp>
  </div>`,
  data: {
    active: true,
    text: '你好'
  },
  methods: {
    handleChange () {
      this.text = 'Nike'
    }
  }
})

app.$mount('#root')
