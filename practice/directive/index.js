import Vue from 'vue'

/**
 * v-text
 * v-html
 * v-show = "变量" display:none
 * v-if //性能大，重绘（重新排版）
 * v-for
 * v-model
 * v-model.number、v-model.trim
 * v-pre
 * v-once 只渲染一次
 */
const app = new Vue({
  template: `
  <div>
    <div v-if='active'>this is {{text}}</div>
    <div v-else-if='text === 0'>else if {{text}}</div>
    <div v-else>else {{text}}</div>

    <input type='text' v-model='text'>
    <input type='checkbox' v-model='active'>

    <div>
      <input type='checkbox' :value='1' v-model='arr'>
      <input type='checkbox' :value='2' v-model='arr'>
      <input type='checkbox' :value='3' v-model='arr'>
    </div>

    <div>
      <input type='radio' value='one' v-model='picker'>
      <input type='radio' value='two' v-model='picker'>
    </div>

    <div>
      <ul>
        <li v-for='(item, index) in arr' :key='item'>{{item}} : {{index}}</li>
      </ul>
    </div>

    <div>
      <ul>
        <li v-for='(item, key) in obj' :id='key'>{{item.name}}: {{item.age}}</li>
      </ul>
    </div>
  </div>`,
  data: {
    text: 0,
    active: true,
    picker: '',
    arr: [1, 2, 3],
    obj: [
      { name: 'chen', age: 12 },
      { name: 'xie', age: 16 },
      { name: 'liang', age: 18 }
    ]
  },
  directives: {

  }
})

app.$mount('#root')
