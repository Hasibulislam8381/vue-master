<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue'

const message = ref('Hello Hook Test')
onBeforeMount(() => {
  console.log('Component is about to Mount')
})
onMounted(() => {
  console.log('Component Mounted')
})
onBeforeUpdate(() => {
  console.log('Component is about to update')
})

const updateMsg = () => {
  message.value = 'Message Updated'
}
onUpdated(() => {
  console.log('Component Has been Updated')
})
onBeforeUnmount(() => {
  console.log('Component is abount to unmount')
})
onUnmounted(() => {
  console.log('Component Unmounted')
})
</script>
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="updateMsg()">change</button>
  </div>
</template>
