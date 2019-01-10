import Vue from 'vue'

const app = new Vue({
  template:
  `<div>
    <p>Name: {{name}}</p>
    <p>Name: {{getName()}}</p>
    <p>Number: {{number}}</p>
    <p>fullName: {{fullName}}</p>
    <p>obj: {{obj.a}}</p>
    <p><input type='text' v-model='number' /></p>
    <p><input type='text' v-model='firstName' /></p>
    <p><input type='text' v-model='lastName' /></p>
    <p><input type='text' v-model='name' /></p>
    <p><input type='text' v-model='obj.a' /></p>
  </div>`,
  data: {
    firstName: 'jacker',
    lastName: 'Love',
    fullName: '',
    number: 0,
    obj: {
      a: '你好'
    }
  },
  computed: {
    // 当数据不变时，会有缓存
    name: {
      // console.log('computed name')
      // return `${this.firstName} ${this.lastName}`

      // 不推荐这么做。
      get () {
        console.log('new name')
        return `${this.firstName} ${this.lastName}`
      },
      set (name) {
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  watch: {
    // firstName (newName, oldName) {
    //   this.fullName = newName + ' ' + this.lastName
    // }
    // handler 只监听当前属性，只有给对应对象赋值的时候才会监听到
    'obj.a': {
      handler () {
        console.log('getName invoked')
        // this.obj.a += 1
      },
      immediate: true
      // deep: true
    }
  },
  methods: {
    getName () {
      console.log('computed getName')
      return `${this.firstName} ${this.lastName}`
    }
  }
})

app.$mount('#root')
