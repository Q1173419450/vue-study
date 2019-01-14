import Vue from 'vue'

const component = {
  // 双向数据绑定
  model: {
    prop: 'value1',
    event: 'change'
  },
  props: ['value1'],
  template:
  `
  <div>
    <input type='text' @input='handleInput' :value='value1'>
  </div>
  `,
  methods: {
    handleInput (e) {
      console.log(e)
      this.$emit('change', e.target.value)
    }
  }
}

const app = new Vue({
  components: {
    comp: component
  },
  template:
  `
  <div>
    <!-- v-model = :value='value' @input='value = arguments[0]' -->
    <comp v-model='value'></comp>
  </div>
  `,
  data () {
    return {
      value: '123'
    }
  }
})

app.$mount('#root')
