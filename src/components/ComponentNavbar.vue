<script setup lang="ts">
import { RouterLink } from 'vue-router';
import '../assets/comnav.css';
</script>

<template>
  <nav>
    <RouterLink class="nav-component" to="/" exact-active-class="is-active">Home</RouterLink>
    <RouterLink class="nav-component" to="/about" exact-active-class="is-active">About</RouterLink>
  </nav>
</template>
