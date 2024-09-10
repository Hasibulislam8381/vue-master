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
  const pass = ''
  for (let index = 0; index < passLength; index++) {
    const randomIndex = Math.floor(Math.random() * allChar.length)
    pass += allChar[randomIndex]
  }
  generatedPass.value = pass
}
</script>
<template>
  <div>
    <h1>Pas</h1>
  </div>
</template>
