<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{fullName}} {{counter}}</p>
    <!-- <p>{{textC}}</p> -->
    <p>{{textPlus}}</p>
    <!-- <todo></todo> -->
    <router-link  to='/app/123'>app123</router-link>
    <router-link  to='/app/456'>app456</router-link>
    <router-link  to='/login'>login</router-link>
    <transition name='fade'>
      <router-view />
    </transition>
    <Footer></Footer>
    <!-- <router-view name='a'></router-view> -->
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  // 操作
  mapActions,
  mapMutations
} from 'vuex'

import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'

export default {
  components: {
    Header,
    Footer
    // Todo
  },
  mounted () {
    console.log(this.$store)
    console.log('a/textPlus', this['a/textPlus'])
    // 触发actions
    // this.$store.dispatch('updateCountAsync', {
    //   num: 5,
    //   time: 2000
    // })
    this.updateCountAsync({
      num: 5,
      time: 2000
    })
    // this['a/updateText']('123')
    // this['a/add']()
    // this['b/textAction']()

    // let i = 1
    setInterval(() => {
      // this.$store.commit('updateCount', i++)
      // 多个参数
      // this.$store.commit('updateCount', {
      //   num: i++,
      //   num2: 2
      // })
      // this.updateCount({
      //   num: i++
      // })
    }, 1000)
  },
  computed: {
    /* vuex模块(module) */
    textA () {
      return this.$store.state.a.text
    },
    ...mapState({
      // counter: 'count'
      counter: state => state.count,
      textA: state => state.a.text
      // textC: state => state.c.text
    }),
    // count () {
    //   return this.$store.state.count
    // },

    ...mapGetters({
      'fullName': 'fullName',
      'textPlus': 'a/textPlus'
    })
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  },
  methods: {
    ...mapActions(['updateCountAsync', 'a/add']),
    ...mapMutations(['updateCount', 'a/updateText'])
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>


