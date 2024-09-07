<script setup>
import { ref } from 'vue'

const newTodo = ref('')
const todos = ref([])
const addTodo = () => {
  if (newTodo.value.trim() !== '') {
    todos.value.push(newTodo.value)
    newTodo.value = ''
  }
}
const removeTask = (index) => {
  todos.value.splice(index, 1)
}
</script>
<template>
  <section>
    <div class="container">
      <div class="todo-container">
        <div class="row">
          <div class="col-md-9">
            <input
              v-model="newTodo"
              class="form-control"
              @keyup.enter="addTodo"
              type="text"
              name=""
            />
          </div>
          <div class="col-md-3">
            <button @click="addTodo" class="btn btn-primary">Add</button>
          </div>
        </div>

        <div class="row show_todo" v-for="(todo, index) in todos" :key="index">
          <div class="col-md-9">{{ todo }}</div>
          <div class="col-md-3">
            <button @click="removeTask(index)" class="btn btn-danger">Remove</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
section {
  padding-top: 60px;
  padding-bottom: 60px;
}
.todo-container {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 30px 30px;
}
.show_todo {
  padding-top: 30px;
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
  padding: 20px;
}
</style>
