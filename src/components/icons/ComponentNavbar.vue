<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import '../../assets/comnav.css';
</script>

<template>
  <nav>
    <RouterLink label="Home" to="/">Home</RouterLink>
    <RouterLink label="About" to="/about">About</RouterLink>
    <RouterLink label="Legal" to="/legal">Legal</RouterLink>
  </nav>
</template>
