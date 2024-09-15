<script setup>
import { ref, onMounted } from 'vue'

const jobs = ref([])

onMounted(() => {
  fetch('http://localhost:3000/jobs')
    .then((res) => res.json())
    .then((data) => {
      jobs.value = data
    })
    .catch((err) => console.log(err.message))
})
</script>

<template>
  <div class="container">
    <div v-if="jobs.length">
      <h1 class="text-center">Job Post</h1>
      <div class="all-jobs">
        <ul>
          <li v-for="job in jobs" :key="job.id">
            <router-link :to="{ name: 'job_details', params: { id: job.id } }">
              <h2>{{ job.title }}</h2>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <p>Loading Jobs</p>
    </div>
  </div>
</template>
<style scoped>
.all-jobs ul li {
  list-style: none;
}
.all-jobs a {
  text-decoration: none;
}
.all-jobs h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.all-jobs h2:hover {
  background: #ddd;
}
</style>
