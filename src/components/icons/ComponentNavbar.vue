<script setup lang="ts">
  import '../../assets/comnav.css';
  import { ref } from 'vue';
  const activeName = ref('first');
</script>

<template>
  <el-tabs v-model="activeName" class="demo-tabs">
    <el-tab-pane label="Home" name="first" to="/"></el-tab-pane>
    <el-tab-pane label="About" name="second" to="/about"></el-tab-pane>
    <el-tab-pane label="Legal" name="third" to="/legal"></el-tab-pane>
  </el-tabs>
</template>
