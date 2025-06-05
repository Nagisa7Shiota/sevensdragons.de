<script lang="ts">
import '../assets/socialmediaview.css'
import { useSocialMediaViewAreaStore } from '../stores/socialmediaareas.ts';

export default {
  setup() {
    const store = useSocialMediaViewAreaStore()
    store.getAreas()
    return { store }
  },
}
</script>

<template>
  <!-- YouTube Banner -->
  <img class="socialmediaview_banner" src="../assets/images/socialmediaview/channels4_banner.jpg" />
  <!-- Social Media Links - Divider-->
  <div class="socialmediaview_social_links">
    <span>
      <a href="https://aminoapps.com/u/SevenSDragons">Amino</a>
      <el-divider direction="vertical" />
      <a href="https://youtube.com/@SevenSDragons">YouTube</a>
    </span>
  </div>
  <!-- YouTube Video - Karosouel -->
  <div>
    <el-carousel :interval="4000" type="card" height="200px" indicator-position="none">
      <el-carousel-item
        class="socaialmediaview_carousel_youtube_item"
        v-for="item in 6"
        :key="item"
      >
        <h3 text="2xl" justify="center">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  <!-- Amino & Discord - Karosouel -->
  <div>
    <el-carousel :interval="4000" type="card" height="200px" indicator-position="none">
      <el-carousel-item class="socaialmediaview_carousel_amino_item" v-for="area in store.areas" :key="area">
        <img :alt="area.name" :src="area.img">
        <h3 text="2xl" justify="center">{{ area.name }}</h3>
        <a :href="area.link">Tritt bei</a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
