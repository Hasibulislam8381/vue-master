<script setup>
import { ref, computed } from 'vue'
let counter = ref(0)
const squarNum = computed(() => {
  return counter.value ** 2
})

let increament = () => {
  counter.value++
}
</script>

<template>
  <div>
    <h1>Original number: {{ counter }}</h1>
    <h1>Squared number:{{ squarNum }}</h1>

    <button @click="increament">Add</button>
  </div>
</template>
