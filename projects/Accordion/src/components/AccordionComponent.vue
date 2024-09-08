<script setup>
import { ref } from 'vue'
const items = ref([
  {
    title: 'Introduction',
    content: 'This section provides an overview of the main topics covered.',
    open: false
  },
  {
    title: 'Features',
    content: 'Explore the key features and functionalities available in this product.',
    open: false
  },
  {
    title: 'Pricing',
    content: 'Learn about the various pricing plans and options available.',
    open: false
  },
  {
    title: 'FAQ',
    content: 'Find answers to the most commonly asked questions.',
    open: false
  },
  {
    title: 'Contact Us',
    content: 'Get in touch with our support team for any queries or assistance.',
    open: false
  }
])
const toggleAccordion = (index) => {
  items.value = items.value.map((item, i) => ({
    ...item,
    open: i === index ? !item.open : false
  }))
}
</script>
<template>
  <div class="accordion-container">
    <div v-for="(item, index) in items" :key="index" class="accordion">
      <div class="accordion-header" @click="toggleAccordion(index)">
        {{ item.title }}
        <span>{{ item.open ? '▼' : '▶' }}</span>
      </div>

      <div v-show="item.open" class="accordion-content">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>
<style scoped>
.accordion-container {
  max-width: 600px;
  margin: 50px auto;
}

.accordion {
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
}

.accordion-header {
  background-color: #3498db;
  color: #fff;
  padding: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.arrow-icon {
  font-size: 20px;
}

.accordion-content {
  padding: 15px;
  display: none;
  border-top: 1px solid #ddd;
  background-color: #f9f9f9;
  color: #333;
}

.accordion-content[style] {
  display: block;
}
</style>
