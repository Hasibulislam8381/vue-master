<script setup>
import { reactive } from 'vue'
import { useAuthStore } from '@/stores/auth'

const formData = reactive({
  name: '',
  email: '',
  password: '',
  confirm_password: ''
})

const authStore = useAuthStore()

const authenticate = async () => {
  await authStore.authenticate('register', formData)
}
</script>

<template>
  <main>
    <h1 class="title">Register First</h1>
    <form @submit.prevent="authenticate" class="w-1/2 mx-auto space-y-6">
      <div>
        <input type="text" placeholder="name" v-model="formData.name" />
        <p v-if="authStore.errors.name" class="text-red-500">{{ authStore.errors.name[0] }}</p>
      </div>
      <div>
        <input type="email" placeholder="email" v-model="formData.email" />

        <p v-if="authStore.errors.email" class="text-red-500">{{ authStore.errors.email[0] }}</p>
      </div>
      <div>
        <input type="password" placeholder="password" v-model="formData.password" />

        <p v-if="authStore.errors.password" class="text-red-500">
          {{ authStore.errors.password[0] }}
        </p>
      </div>
      <div>
        <input type="password" placeholder="confirm_password" v-model="formData.confirm_password" />

        <p v-if="authStore.errors.confirm_password" class="text-red-500">
          {{ authStore.errors.confirm_password[0] }}
        </p>
      </div>
      <button class="primary-btn">Register</button>
    </form>
  </main>
</template>
