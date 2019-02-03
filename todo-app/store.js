import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// ストア定義
const store = new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        name: '確定申告',
        done: false,
      },
      {
        id: 2,
        name: '食パン買う',
        done: true,
      }
    ],
  },
})

export default store
