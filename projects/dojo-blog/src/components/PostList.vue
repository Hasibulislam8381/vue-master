<script setup>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost.vue'
const props = defineProps({ posts: { type: Array } })

onMounted(() => {
  console.log('mounted')
})
onUnmounted(() => {
  console.log('unmounted')
})
onUpdated(() => {
  console.log('Updated')
})
</script>
<template>
  <div>
    <h1>post list</h1>
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>
