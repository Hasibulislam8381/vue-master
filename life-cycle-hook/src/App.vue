<script setup>
import HookTest from './components/HookTest.vue'
import { ref } from 'vue'
const isShow = ref(true)
</script>
<template>
  <div>
    <HookTest v-if="isShow" /><br />
    <button @click="isShow = !isShow">Show/Hide</button>
  </div>
</template>
