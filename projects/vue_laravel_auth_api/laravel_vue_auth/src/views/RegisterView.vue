<script setup>
import { reactive } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  password: '',
  confirm_password: ''
})

const register = () => {
  console.log(formData)
}
</script>

<template>
  <main>
    <h1 class="title">Register</h1>
    <form @submit.prevent="register" class="w-1/2 mx-auto space-y-6">
      <div>
        <input type="text" placeholder="name" v-model="formData.name" />
      </div>
      <div>
        <input type="email" placeholder="email" v-model="formData.email" />
      </div>
      <div>
        <input type="password" placeholder="password" v-model="formData.password" />
      </div>
      <div>
        <input type="password" placeholder="confirm_password" v-model="formData.confirm_password" />
      </div>
      <button class="primary-btn">Register</button>
    </form>
  </main>
</template>
