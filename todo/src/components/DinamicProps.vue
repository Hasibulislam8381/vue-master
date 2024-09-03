<script setup>
const props = defineProps(['firstName', 'lastName'])
</script>
<template>
  <div>
    <h2>{{ props.firstName }}</h2>
    <h2>{{ props.lastName }}</h2>
  </div>
</template>
