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
    nextTaskId: 3,
  },
  mutations: {
    addTask(state, { name }) {
      state.tasks.push({
        id: state.nextTaskId,
        name,
        done: false,
      })

      // IDを1つ進める
      state.nextTaskId++
    },
    toggleTaskStatus(state, { id }) {
      const task = state.tasks.find(t => t.id === id)
      task.done = !task.done
    },
  },
})

export default store
