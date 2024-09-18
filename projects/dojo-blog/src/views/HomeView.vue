<script setup>
import PostList from '@/components/PostList.vue'
import { ref } from 'vue'
const posts = ref([])

const error = ref(null)

const load = async () => {
  try {
    const response = await fetch('http://localhost:3000/posts')
    if (!response.ok) {
      throw new Error('No data available')
    }
    posts.value = await response.json()
  } catch (err) {
    error.value = err.message
    console.log(error.value)
  }
}

load()
const togglePost = ref(true)
</script>

<template>
  <div class="container">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList v-if="togglePost" :posts="posts" />
    </div>
    <div v-else>Loading...</div>

    <button @click="togglePost = !togglePost">Toggle Post</button>
    <button @click="posts.pop()">Delete</button>
  </div>
</template>
