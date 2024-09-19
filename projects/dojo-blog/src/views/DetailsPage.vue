<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <div>Details {{ props.id }}</div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
</template>
<script setup>
import getPost from '@/compossible/getPost'
const props = defineProps({
  id: { type: String }
})

const { load, post, error } = getPost(props.id)

load()
</script>
