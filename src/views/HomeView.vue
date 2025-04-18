<script lang="ts">
  import "../assets/homeview.css"
</script>

<template>
  <!-- Begrüßung -->
  <a class="hometext">
    Herzlich Willkommen!
    Dies ist das Reich von SevenSDragons, ein einfacher Typ aus dem Internet.
    Er ist in einigen sozialen Medien oder generell online unterwegs und stellt eigentlich nur verrückte Sachen, jedoch sagen viele, dass er ganz nett ist.
    Auch ist er in einigen Projekten verwickelt, die vorerst hier nicht gelistet sind.

    Na ja, willkommen. Nimmt euch eine Tasse Tee und scheut euch um. Vielleicht könnt ihr hier etwas finden.
  </a>
  <!-- Begrüßung -->
  <!-- Kleine Bio -->
    <el-card style="max-width: 480px;">
      <template #header>
        <div class="card-header">
          <span>SevenSDragons</span>
        </div>
      </template>
      <p>Spitznamen: Nagisa, Sev(en), Foxy, Boss etc.</p>
      <p>Alter: ???</p>
      <p>Herrkunftsland: Deutschland</p>
      <p>Körpergröße: 1,82m</p>
      <p>Lieblingsfarbe: Dunkles Rot</p>
      <p>Liblingsspiel: Rythm Thief (Königsklasse) & Yu-Gi-Oh! (Top 1)</p>
      <p>Vorlieben: Essen, Videospiele & Anime</p>
      <p>Abneigungen: Starke Doppelmoral, Hochmut & Zigaretten</p>
      <template #footer>Drachenstarkeshallo</template>
    </el-card>
  <!-- Kleine Bio -->

  <!-- Profilicon(s) an der rechten Seite -->
  <div class="block text-center" m="t-4">
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  <!-- Profilicon(s) an der rechten Seite -->
</template>

<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
