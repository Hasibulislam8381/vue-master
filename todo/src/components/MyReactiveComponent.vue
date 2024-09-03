<script setup>
import { reactive } from 'vue'

let initialState = reactive({ count: 0, user: ['Alex', 'Hales'] })
let changeUser = () => {
  initialState.user[0] = 'Hasibul'
  initialState.user[1] = 'Islam'
}
</script>
<template>
  <div>
    <h1>Count:{{ initialState.count }}</h1>
    <h1>Count:{{ initialState.user }}</h1>
    <button @click="initialState.count += 10">Add 10+</button>
    <button @click="changeUser">Change User</button>
    <button @click="initialState.user.push('Rabu')">Add user</button>
  </div>
</template>
