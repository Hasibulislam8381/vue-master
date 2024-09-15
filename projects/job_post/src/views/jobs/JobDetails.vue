<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute()
const jobId = route.params.id
const job = ref(null)

onMounted(() => {
  fetch('http://localhost:3000/jobs/' + jobId)
    .then((res) => res.json())
    .then((data) => {
      job.value = data
    })
    .catch((err) => console.log(err.message))
})
</script>

<template>
  <div class="container">
    <div v-if="job">
      <h1>{{ job.title }}</h1>
      <p>{{ job.details }}</p>
    </div>
    <div v-else>
      <p>Loading job details...</p>
    </div>
  </div>
</template>
