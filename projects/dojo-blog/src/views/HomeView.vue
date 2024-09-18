<script setup>
import PostList from '@/components/PostList.vue'
import getPosts from '@/compossible/getPosts'
import { ref } from 'vue'

const togglePost = ref(true)
const { posts, error, load } = getPosts()
load()
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
