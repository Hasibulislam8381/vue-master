<script setup>
import { ref } from 'vue'
let isVisible = ref(true)
</script>
<template>
  <div>
    <h1 v-show="isVisible">It is showing</h1>
    <button @click="isVisible = !isVisible">Toggle me</button>
  </div>
</template>
