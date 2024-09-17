<script setup>
import { computed } from 'vue'

const props = defineProps({ post: { type: Object } })
const showBody = computed(() => {
  return props.post.body.substring(0, 100) + '...'
})
</script>
<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ showBody }}</p>
  </div>
</template>
