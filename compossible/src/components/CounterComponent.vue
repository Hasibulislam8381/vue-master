<script setup>
import { useCounter } from '@/shared/userCounter'

const counter = useCounter()
</script>

<template>
  <div>
    <h1>Count:{{ counter.count }}</h1>

    <button @click="counter.increament">-</button>
    <button @click="counter.increament">+</button>
  </div>
</template>
