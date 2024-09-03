<script setup>
import { ref } from 'vue'
import CounterMake from './components/CounterMake.vue'
import MyReactiveComponent from './components/MyReactiveComponent.vue'
import MyRefComponent from './components/MyRefComponent.vue'
import ComputedProperty from './components/ComputedProperty.vue'
import ConditionalRendering from './components/ConditionalRendering.vue'
import StaticProp from './components/StaticProp.vue'
import DinamicProps from './components/DinamicProps.vue'
import CustomValidator from './components/CustomValidator.vue'

const firstName = ref('Hasibul')
const lastName = ref('Islam')
</script>
<template>
  <!-- <div><CounterMake /></div>
  <div><MyReactiveComponent /></div>
  <div><MyRefComponent /></div>
  <div><ComputedProperty /></div>
  <p>-Conditional rendering-</p>
  <div><ConditionalRendering /></div>
  <p>-Props-</p>
  <StaticProp names="Himel" />
  <DinamicProps :firstName="firstName" :lastName="lastName" /> -->
  <CustomValidator name="Hasibul" :age="20" password="HimelIslam" />
</template>
<style scoped></style>
