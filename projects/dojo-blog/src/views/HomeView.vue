<script setup>
import { ref, computed } from 'vue'
let names = ref(['Himel', 'Rabu', 'Hasina', 'Majedul', 'Hamim', 'Mitu'])
let search = ref('')

// Filter
const searchValue = computed(() => {
  return names.value.filter((name) =>
    name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())
  )
})
</script>

<template>
  <div class="container">
    <input type="text" v-model="search" /><br />
    your search key - <span style="color: brown">{{ search }}</span>
    <div v-for="name in searchValue" :key="name">
      {{ name }}
    </div>
  </div>
</template>
