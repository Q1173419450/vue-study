import Vue from 'vue'

const component = {
  props: ['props1'],
  name: 'comp',
  // template:
  // `
  // <div :style='style'>
  //   <slot :value='value'></slot>
  // </div>
  // `,
  render (h) {
    return h('div', {
      style: this.style
      // on: {
      //   click: () => { this.$emit('click') }
      // }
    }, [
      this.$slots.header,
      this.props1
    ])
  },
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      },
      value: 'component value'
    }
  }
}

const app = new Vue({
  components: {
    comp: component
  },
  data: {
    value: '1223'
  },
  // template:
  // `
  //   <div>
  //     <comp ref='comp'>
  //       <span ref='span'>{{value}}</span>
  //     </comp>
  //   </div>
  // `,

  // this.$createElement()
  render (createElement) {
    return createElement('comp',
      {
        ref: 'comp',
        props: {
          props1: this.value
        },
        // on: {
        //   click: this.handleClick
        // },
        // 根节点，原生DOM上
        nativeOn: {
          click: this.handleClick
        }
      }, [ createElement('span',
        {
          ref: 'span',
          slot: 'header',
          domProps: {
            innerHTML: '<span>345</span>'
          },
          attrs: {
            id: 'test-id'
          }
        },
        this.value)
      ])
  },
  methods: {
    handleClick () {
      console.log('on click')
    }
  }
})
app.$mount('#root')
