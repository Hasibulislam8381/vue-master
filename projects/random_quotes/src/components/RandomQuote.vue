<script setup>
import { ref, onMounted } from 'vue'
const quotes = ref([
  {
    quote: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs'
  },
  {
    quote:
      'In the end, we will remember not the words of our enemies, but the silence of our friends.',
    author: 'Martin Luther King Jr.'
  },
  {
    quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    author: 'Winston Churchill'
  },
  {
    quote: 'It does not matter how slowly you go as long as you do not stop.',
    author: 'Confucius'
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: 'John Lennon'
  }
])
const current = ref({ quote: '', author: '' })
const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.value.length)
  current.value = quotes.value[randomIndex]
}
onMounted(getRandomQuote)
</script>
<template>
  <div class="quote-generator">
    <h1 class="app-title">Random Quote Generator</h1>
    <blockquote class="quote-contaier">
      <p>{{ current.quote }}</p>
      <cite>{{ current.author }}</cite>
    </blockquote>
    <button @click="getRandomQuote" class="quote-button">Get Random Quote</button>
  </div>
</template>
<style scoped>
.quote-generator {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.app-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.quote-container {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  margin-bottom: 10px;
}

cite {
  font-style: normal;
  color: #777;
}

.quote-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.quote-button:hover {
  background-color: #2980b9;
}
</style>
