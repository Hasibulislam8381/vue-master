<script setup>
import { ref } from 'vue'
let count = ref(0)

let IncreamentCounter = () => {
  count.value++
}
let DecreamentCounter = () => {
  count.value--
}
</script>

<template>
  <div>
    <h1>Counter : {{ count }}</h1>
    <button @click="IncreamentCounter">Increament</button>
    <button v-on:click="DecreamentCounter">Decreament</button>
  </div>
</template>
