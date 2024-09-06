<script setup>
import { reactive, watch } from 'vue'
const userData = reactive({ name: 'Alex' })
watch(
  () => userData.name,
  (newData, OldData) => {
    console.log(newData)
    console.log(OldData)
  }
)
</script>
<template>
  <div>
    <h1>{{ userData.name }}</h1>
    <button @click="userData.name = 'Himel'">Change</button>
  </div>
</template>
