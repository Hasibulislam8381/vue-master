<script setup>
import PostList from '@/components/PostList.vue'
import { ref } from 'vue'
const posts = ref([
  {
    id: 1,
    title: 'Understanding Vue 3 Composition API',
    body: 'Vue 3 introduced the Composition API, which is a flexible way to organize your code by composition functions. This API helps create reusable logic across components.'
  },
  {
    id: 2,
    title: 'A Guide to Modern JavaScript',
    body: 'JavaScript has evolved with new features like ES6+ syntax, promises, async/await, and more. This guide will help you learn the modern syntax and best practices.'
  },
  {
    id: 3,
    title: 'Mastering Laravel for Fullstack Development',
    body: "Laravel is a popular PHP framework that simplifies backend development. Learn how to build full-stack applications with Laravel's powerful features like Eloquent ORM, routing, and middleware."
  },
  {
    id: 4,
    title: 'Getting Started with Bootstrap 5',
    body: "Bootstrap 5 is a popular CSS framework that helps in building responsive websites quickly. In this blog, we'll walk through setting up Bootstrap and utilizing its components."
  },
  {
    id: 5,
    title: 'Introduction to React for Beginners',
    body: "React is a JavaScript library for building user interfaces. In this post, we'll explore the basics of React, including components, state management, and hooks."
  }
])
const togglePost = ref(true)
</script>

<template>
  <div class="container">
    <PostList v-if="togglePost" :posts="posts" />
    <button @click="togglePost = !togglePost">Toggle Post</button>
    <button @click="posts.pop()">Delete</button>
  </div>
</template>
