<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import '../../assets/comnav.css';
</script>

<template>

  <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/legal">Legal</RouterLink>
  </nav>

</template>

