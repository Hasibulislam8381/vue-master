<script setup>
// import JobDetails from '../jobs/JobDetails.vue'
const jobs = [
  { id: 1, title: 'Frontend Developer', details: 'Company A' },
  { id: 2, title: 'Backend Developer', details: 'Company B' },
  { id: 3, title: 'Fullstack Developer', details: 'Company C' }
]
</script>
<template>
  <div class="container">
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
