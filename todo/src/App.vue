<script setup>
import CounterMake from './components/CounterMake.vue'
import MyReactiveComponent from './components/MyReactiveComponent.vue'
import MyRefComponent from './components/MyRefComponent.vue'
import ComputedProperty from './components/ComputedProperty.vue'
import ConditionalRendering from './components/ConditionalRendering.vue'
import StaticProp from './components/StaticProp.vue'
</script>
<template>
  <div><CounterMake /></div>
  <div><MyReactiveComponent /></div>
  <div><MyRefComponent /></div>
  <div><ComputedProperty /></div>
  <p>-Conditional rendering-</p>
  <div><ConditionalRendering /></div>
  <p>-Props-</p>
  <StaticProp names="Himel" />
</template>
<style scoped></style>
