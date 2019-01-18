import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app/:id',
    // path: '/app',
    // 不需要this.$route(),与vue-router进行耦合
    // 如果todo.vue用了this.$router(),无法拿到其他地方用,复用性更高
    props: true,
    // props: {
    //   id: 456
    // },
    // props: (route) => ({ id: route.query.b }),
    component: Todo,
    name: 'app',
    // 路由信息
    meta: {
      title: 'this is app',
      description: 'asdasd'
    },
    beforeEnter: (to, from, next) => {
      console.log('app router enter')
      next()
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: Login
    // 命名视图
    // components: {
    //   default: Login,
    //   a: Todo
    // }
  }
]
