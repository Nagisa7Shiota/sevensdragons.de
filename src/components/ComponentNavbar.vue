<script setup lang="ts">
import { RouterLink } from 'vue-router';
import '../assets/comnav.css';
</script>

<template>
  <nav>
    <RouterLink class="nav-component" to="/" exact-active-class="is-active">Home</RouterLink>
    <RouterLink class="nav-component" to="/games" exact-active-class="is-active">Games</RouterLink>
    <RouterLink class="nav-component" to="/socialmedia" exact-active-class="is-active">Social Media</RouterLink>
  </nav>
</template>
