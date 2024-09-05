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
import FormComponent from './components/FormComponent.vue'
import NameSlot from './components/NameSlot.vue'
import SchoolComponent from './components/SchoolComponent.vue'
import { provide } from 'vue'

const firstName = ref('Hasibul')
const lastName = ref('Islam')

const getFormData = (name, email, password) => {
  console.log(name)
  console.log(email)
  console.log(password)
}

provide('studentName', 'Alex Hamja')
provide('studentEmail', 'alex@gmail.com')
provide('studentAge', 20)
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
  <!-- <CustomValidator name="Hasibul" :age="20" password="HimelIslam" />
  <FormComponent @userInfo="getFormData" />
  <NameSlot>
    <template v-slot:one> <h1>Pushing to slot 1</h1></template>
    <template v-slot:two> <h1>Pushing to slot 2</h1></template>
  </NameSlot> -->
  <SchoolComponent />
</template>
<style scoped></style>
