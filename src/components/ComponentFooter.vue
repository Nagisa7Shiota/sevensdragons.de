<script setup lang="ts">
import { RouterLink } from 'vue-router';
import '../assets/comfooter.css';
</script>

<template>
  <footer>
    <div class="mb-4">
      <el-button color="#363333e7" round class="footer-component" ><RouterLink to="/legal" class="footer-text">Legal</RouterLink></el-button>
      © 2025 SevenSDragons. Alle Rechte vorbehalten.
    </div>
  </footer>
</template>
