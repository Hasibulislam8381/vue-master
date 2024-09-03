<script setup>
const getProps = defineProps(['names'])
</script>

<template>
  <div>
    <h1>{{ getProps.names }}</h1>
  </div>
</template>
