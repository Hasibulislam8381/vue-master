<script setup>
import { ref, watch } from 'vue'
const message = ref('Hey')
const inputText = ref('')
watch(inputText, (newValue, OldValue) => {
  message.value = `${newValue}`
  console.log(OldValue)
})
</script>
<template>
  <div>
    <h1>{{ message }}</h1>
    <input v-model="inputText" type="text" placeholder="Type Here.." />
  </div>
</template>
