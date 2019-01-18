// 同步操作
export default {
  // 没有第三个参数,
  updateCount (state, { num, num2 }) {
    // console.log(state)
    state.count = num
  }
}
