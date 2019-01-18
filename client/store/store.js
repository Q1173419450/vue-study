import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

// 不允许外部随意修改数值
// const isDev = process.env.NODE_ENV === 'development'

// 使用服务端渲染
export default () => {
  const store = new Vuex.Store({
    // strict: isDev,
    state: defaultState,
    mutations,
    getters,
    actions,
    plugins: [
      (store) => {
        // store.subscribe((mutation, state) => {
        //   console.log(mutation)
        // })
        // store.subscribeAction()
      }
    ],

    modules: {
      a: {
        // 独立mutations,独立命名空间
        namespaced: true,
        state: {
          text: 1
        },
        mutations: {
          updateText (state, text) {
            console.log('a.state', state)
            state.text = text
          }
        },
        getters: {
          /**
           * @param {*} state
           * @param {*} getters 方法
           * @param {*} rootState 全局的state
           */
          textPlus (state, getters, rootState) {
            return state.text + rootState.count + rootState.b.text
          }
        },
        actions: {
          add ({ state, commit, rootState }) {
            // commit('updateText', rootState.count)
            commit('updateCount', { num: 5678 }, { root: true })
          }
        }
      },
      b: {
        namespaced: true,
        state: {
          text: 2
        }
        // actions: {
        //   textAction ({ commit }) {
        //     commit('a/updateText', 'text text', { root: true })
        //   }
        // }
      }
    }
  })

  // 热更替
  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './getters/getters',
      './actions/actions'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newGetters = require('./getters/getters').default
      const newActions = require('./actions/actions').default

      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }
  return store
}
