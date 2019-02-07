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
        labelIds: [1, 2],
        done: false,
      },
      {
        id: 2,
        name: '食パン買う',
        labelIds: [1, 3],
        done: true,
      }
    ],
    labels: [
      {
        id: 1,
        text: '買い物',
      },
      {
        id: 2,
        text: '仕事',
      },
      {
        id: 3,
        text: '食料',
      }
    ],
    nextTaskId: 3,
    nextLabelId: 4,
  },
  mutations: {
    addTask(state, { name, labelIds }) {
      state.tasks.push({
        id: state.nextTaskId,
        name,
        labelIds,
        done: false,
      })

      // IDを1つ進める
      state.nextTaskId++
    },
    toggleTaskStatus(state, { id }) {
      const task = state.tasks.find(t => t.id === id)
      task.done = !task.done
    },
    addLabel(state, { text }) {
      state.labels.push({
        id: state.nextLabelId,
        text,
      })

      state.nextLabelId++
    }
  },
})

export default store
