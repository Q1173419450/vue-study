/**
 * 高级组件
 * 插槽 slot
 * 具名插槽
 */
import Vue from 'vue'

const ChildComponent = {
  template:
  `
  <div>Child component: {{data.value}}</div>
  `,
  inject: ['grandpa', 'data'],
  mounted () {
    // 越级去拿到实例
    // console.log(this.$parent.$options.name)
    console.log(this.data)
  }
}

const component = {
  name: 'comp',
  components: {
    ChildComponent
  },
  // template:
  // `
  // <div :style='style'>
  //   <div class='header'>
  //     <slot name='header'></slot>
  //   </div>
  //   <div class='body'>
  //     <slot name='body'></slot>
  //   </div>
  // </div>
  // `,
  template:
  `
  <div :style='style'>
    <slot value='456' aaa='111' :eat='eat'></slot>
    <child-component></child-component>
  </div>
  `,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      },
      eat: 'component value'
    }
  }
}

const app = new Vue({
  components: {
    comp: component
  },
  // 当不是父子组件，而是跨层级的实现方式的时候，使用到provide
  provide () {
    const data = {}
    // 响应式实现的基础，数据劫持
    Object.defineProperty(data, 'value', {
      get: () => this.value,
      // 可被读取
      enumerable: true
    })
    return {
      grandpa: this,
      // 变化不会引起子组件渲染
      data
    }
  },
  data: {
    value: '123'
  },
  template:
  `
    <div>
      <comp ref='comp'>
        <span slot-scope='prop' ref='span'>{{value}} {{prop.value}} {{prop.aaa}} {{prop.eat}}</span>
      </comp>
      <input type='text' v-model='value'>
    </div>
  `,
  mounted () {
    // console.log(this.$refs.comp)
    // console.log(this.$refs.span)
  }
})

app.$mount('#root')
