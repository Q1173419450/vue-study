// 数据绑定
import Vue from 'vue'

const app = new Vue({
  // template:
  // `<div :id='aaa' @click='handleClick'>
  //   {{isActive ? 'active' : 'not active'}}
  //   {{arr.join(' ')}}
  //   {{Date.now()}}
  //   <p v-html='html'></p>
  // </div>`,
  template:
  // { active: isActive }
  // [ isActive ? "active" : "" ]
  `<div
    :class='[{ active: isActive }]'
    :style='[style1, style2]'
    >
    <p v-html='html'></p>
    <p>{{arrchuli}}</p>
  </div>`,
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>454</span>',
    aaa: 'main',
    style1: {
      color: 'red',
      appearance: 'none'
    },
    style2: {
      color: 'blue'
    }
  },
  computed: {
    arrchuli () {
      return this.arr.join(' ')
    }
  },
  methods: {
    handleClick () {
      console.log('hello')
    },
    arrChuli (arr) {
      return arr.join(' ')
    }
  }
})

app.$mount('#root')
