<template>
  <div>
    <h2> タスク一覧 </h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <input type="checkbox" :checked="task.done" @change="toggleTaskStatus(task)">
        {{task.name}}
        -
        <span v-for="id in task.labelIds" :key="id">
          {{getLabelText(id)}}
        </span>
      </li>
    </ul>
    <form @submit.prevent="addTask">
      <input type="text" v-model="newTaskName" placeholder="新しいタスク">
    </form>
    <h2>ラベル一覧</h2>
    <ul>
      <li v-for="label in labels" :key="label.id">
        <input type="checkbox" v-model="newTaskLabelIds" :value="label.id">
        {{label.text}}
      </li>
    </ul>
    <form @submit.prevent="addLabel">
      <input type="text" v-model="newLabelText" placeholder="新しいラベル">
    </form>
    <h2> ラベルでフィルタ </h2>
    <ul>
      <li v-for="label in labels" :key="label.id">
        <input type="radio" :checked="label.id === filter" @change="changeFilter(label.id)">{{label.text}}
      </li>
      <li>
        <input type="radio" :checked="filter === null" @change="changeFilter(null)">
        フィルタしない
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTaskName: '',
      newLabelText: '',
      newTaskLabelIds: [],
    }
  },
  computed: {
    tasks() {
      // ストアからtasksを取得
      return this.$store.getters.filteredTasks
    },
    labels() {
      return this.$store.state.labels
    },
    filter() {
      return this.$store.state.filter
    },
  },
  methods: {
    addTask() {
      this.$store.commit('addTask', {
        name: this.newTaskName,
        labelIds: this.newTaskLabelIds,
      })
      this.newTaskName = ''
      this.newTaskLabelIds = []
    },
    toggleTaskStatus(task) {
      this.$store.commit('toggleTaskStatus', {
        id: task.id
      })
    },
    addLabel() {
      this.$store.commit('addLabel', {
        text: this.newLabelText,
      })
    },
    getLabelText(id) {
      const label = this.labels.find(label => label.id === id)
      return label ? label.text : ''
    },
    changeFilter(labelId) {
      this.$store.commit('changeFilter', {
        filter: labelId
      })
    }
  },
}
</script>
