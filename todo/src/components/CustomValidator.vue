<script setup>
defineProps({
  name: {
    type: String,
    validator: (propValue) => {
      return ['Hasibul', 'Islam', 'Himel'].includes(propValue)
    }
  },
  age: {
    type: Number,
    validator: (propValue) => (propValue >= 18 && propValue <= 30 ? true : false)
  },
  password: {
    type: String,
    validator: (propValue) => propValue.length >= 8
  }
})
</script>
<template>
  <div>Custom Validator</div>
  <h3>{{ name }}</h3>
  <h3>{{ age }}</h3>
  <h3>{{ password }}</h3>
</template>
