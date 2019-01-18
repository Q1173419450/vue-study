export default {
  updateCountAsync (store, data) {
    // 可异步
    setTimeout(() => {
      store.commit('updateCount', {
        num: data.num
      })
    }, data.time)
  }
}
