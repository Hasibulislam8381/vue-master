<script setup>
import { ref } from 'vue'

const passLength = ref(12)
const isCapital = ref(true)
const isNum = ref(true)
const isSymbole = ref(true)
const generatedPass = ref('')

const generatePass = () => {
  const lowChar = 'abcdefghijklmnopqrstuvwxyz'
  const upperChar = isCapital.value ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : ''
  const symbol = isSymbole ? '!@#$%^&*()_+[]{}|;:,.<>?/' : ''
  const number = isNum ? '0123456789' : ''

  const allChar = lowChar + upperChar + symbol + number
  let pass = ''
  for (let index = 0; index < passLength.value; index++) {
    const randomIndex = Math.floor(Math.random() * allChar.length)
    pass += allChar[randomIndex]
  }
  generatedPass.value = pass
}
</script>
<template>
  <div class="password-generator-container">
    <h2 class="password-generator-title">Password Generator</h2>
    <label for="length">Password Length</label>
    <input type="number" id="length" v-model="passLength" min="4" max="32" />
    <br />

    <label for="isCapital">Include Uppercase:</label>
    <input type="checkbox" id="isCapital" v-model="isCapital" />
    <br />
    <label for="isNum">Include Number:</label>
    <input type="checkbox" id="isNum" v-model="isNum" />
    <br />
    <label for="isSymbole">Include Symbol:</label>
    <input type="checkbox" id="isSymbole" v-model="isSymbole" />
    <br />

    <button @click="generatePass" class="generated-button">Generate Password</button>

    <div v-if="generatePass" class="generated-password">
      <strong>Your Password:</strong>{{ generatedPass }}
    </div>
  </div>
</template>
<style scoped>
.password-generator-container {
  max-width: 400px;
  margin: 50px auto;
}

.password-generator-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}

.generate-button {
  padding: 10px 15px;
  font-size: 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.generate-button:hover {
  background-color: #2980b9;
}

.generated-password {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
  color: #333;
}
</style>
