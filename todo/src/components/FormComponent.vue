<script setup>
import { ref } from 'vue'
const name = ref('')
const email = ref('')
const password = ref('')
</script>

<template>
  <div>
    <form @submit.prevent="$emit('userInfo', name, email, password)">
      <input type="text" placeholder="name" v-model="name" />
      <input type="email" placeholder="email" v-model="email" />
      <input type="text" placeholder="password" v-model="password" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
