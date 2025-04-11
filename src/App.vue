<script setup lang="ts">
  import Navbar from './components/ComponentNavbar.vue';
  import Footer from './components/ComponentFooter.vue';
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="nav-header"><Navbar /></el-header>
      <el-main><RouterView /></el-main>
      <el-footer><Footer /></el-footer>
    </el-container>
  </div>
</template>
