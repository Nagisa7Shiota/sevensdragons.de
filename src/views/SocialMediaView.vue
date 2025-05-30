<script lang="ts">
import '../assets/socialmediaview.css'
</script>

<template>
  <!-- YouTube Banner -->
  <img class="socialmediabanner" src="../assets/images/socialmediaview/channels4_banner.jpg" />
  <!-- Social Media Links - Divider-->
  <div class="socialmedialinks">
    <span>
      <a href="https://aminoapps.com/u/SevenSDragons">Amino</a>
    </span>
    <el-divider direction="vertical"> </el-divider>
    <span>
      <a href="https://aminoapps.com/c/GenshinImpactComGer">Genshin Impact Amino</a>
    </span>
    <el-divider direction="vertical" />
    <span>
      <a href="https://discord.com/invite/WH9DAjJamW">Genshin Impact Discord</a>
    </span>
  </div>
  <!-- YouTube Video - Karosouel -->
  <div>
    <el-carousel :interval="4000" type="card" height="200px" indicator-position="none">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 text="2xl" justify="center">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  <!-- Amino - Karosouel -->
</template>
