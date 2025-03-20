<script setup lang="ts">
import { RouterLink } from 'vue-router';
import '../../assets/comnav.css'; // Ensure this path is correct
</script>

<template>
  <nav>
    <RouterLink class="nav-component" to="/" exact-active-class="is-active">Home</RouterLink>
    <RouterLink class="nav-component" to="/about" exact-active-class="is-active">About</RouterLink>
    <RouterLink class="nav-component" to="/legal" exact-active-class="is-active">Legal</RouterLink>
  </nav>
</template>
