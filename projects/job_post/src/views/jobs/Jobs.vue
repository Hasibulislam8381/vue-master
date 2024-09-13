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
    <h1>Job Post</h1>

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
  padding: 10px;
  list-style: none;
  background: rgb(247, 233, 208);
}
</style>
