<template>
  <nav>
    <RouterLink :to="{ name: 'home' }" class="nav-link">Home</RouterLink>

    <div>
      <RouterLink :to="{ name: 'login' }" class="nav-link">Login</RouterLink>
      <RouterLink :to="{ name: 'register' }" class="nav-link">Register</RouterLink>
    </div>
  </nav>
</template>
<script setup></script>
