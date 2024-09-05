<script setup>
import { inject } from 'vue'
const studentName = inject('studentName')
const studentEmail = inject('studentEmail')
const studentAge = inject('studentAge')
</script>
<template>
  <div>
    <h1>Student Name:{{ studentName }}</h1>
    <h1>Student Name:{{ studentEmail }}</h1>
    <h1>Student Name:{{ studentAge }}</h1>
  </div>
</template>
