<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import '../../assets/comnav.css';
</script>

<template>

  <nav>
      <RouterLink class="nav-component" to="/">Home</RouterLink>
      <RouterLink class="nav-component" to="/about">About</RouterLink>
      <RouterLink class="nav-component" to="/legal">Legal</RouterLink>
  </nav>

</template>

