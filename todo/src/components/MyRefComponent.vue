<script setup>
import { ref } from 'vue'
let friends = ref(['Hani', 'Asik', 'Himel'])
</script>
<template>
  <div>
    <div v-for="friend in friends" :key="friend">
      <h1>{{ friend }}</h1>
    </div>
  </div>
</template>
