<script lang="ts">
  import "../assets/homeview.css"
</script>

<template>
  <div class="homediv">
    <!-- Begrüßung -->
    <a class="hometext">
      <h1>Drachenstarkes Hallo</h1><br>
      Und herzlich Willkommen!<br>
      Dies ist das Reich von SevenSDragons, ein einfacher Typ aus dem Internet.<br><br>
      Er ist in einigen sozialen Medien oder generell online unterwegs und stellt eigentlich nur verrückte Sachen, jedoch sagen viele, dass er ganz nett ist.
      Auch ist er in einigen Projekten verwickelt, die vorerst hier nicht gelistet sind.<br><br>

      Na ja, willkommen. Nimmt euch eine Tasse Tee und scheut euch um. Vielleicht könnt ihr hier etwas finden.
    </a>
    <!-- Begrüßung -->
    <div>
      <!-- Profilicon(s) an der rechten Seite -->
      <div class="block text-center" m="t-4">
        <el-carousel trigger="click" height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small justify-center" text="2xl">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- Profilicon(s) an der rechten Seite -->
      <!-- Kleine Bio -->
        <el-card style="max-width: 480px; background-color: #9E9E9E; color: #980034;">
          <template #header>
            <div class="card-header">
              <span>SevenSDragons</span>
            </div>
          </template>
          <p>Spitznamen: Nagisa, Sev(en), Foxy, Boss etc.</p>
          <p>Herrkunftsland: Deutschland</p>
          <p>Körpergröße: 1,82m</p>
          <p>Lieblingsfarbe: Dunkles Rot</p>
          <p>Liblingsspiel: Rythm Thief (Königsklasse) & Yu-Gi-Oh! (Top 1)</p>
          <p>Vorlieben: Essen, Videospiele & Anime</p>
          <p>Abneigungen: Starke Doppelmoral, Hochmut & Zigaretten</p>
          <template #footer>Zeit für ein Duel!</template>
        </el-card>
      <!-- Kleine Bio -->
    </div>
  </div>
</template>
