<script setup>
import SinglePost from './SinglePost.vue'
const props = defineProps({ posts: { type: Array } })
</script>
<template>
  <div>
    <h1>post list</h1>
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>
