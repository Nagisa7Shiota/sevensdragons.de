<script lang="ts">
import '../assets/homeview.css'
import { useHomeViewImageStore } from '../stores/homeviewimage.ts'

export default {
  setup() {
    const store = useHomeViewImageStore()
    store.getImages()
    return { store }
  },
}
</script>

<template>
  <div class="homeview_div">
    <!-- Begrüßung -->
    <a class="homeview_text">
      <h1>Drachenstarkes Hallo</h1>
      <br />
      Und herzlich Willkommen!<br />
      Dies ist das Reich von SevenSDragons, ein einfacher Typ aus dem Internet.<br /><br />
      Er ist in einigen sozialen Medien oder generell online unterwegs und stellt eigentlich nur
      verrückte Sachen, jedoch sagen viele, dass er ganz nett ist. Auch ist er in einigen Projekten
      verwickelt, die vorerst hier nicht gelistet sind.<br /><br />

      Na ja, willkommen. Nehmt euch eine Tasse Tee und schaut euch um. Vielleicht könnt ihr hier
      etwas finden.
    </a>
    <!-- Begrüßung -->
    <div>
      <!-- Kleine Bio -->
      <el-card class="homeview_card" style="">
        <template #header>
          <div class="homeview_cardheader">
            <span>SevenSDragons</span>
          </div>
          <div class="block text-center" m="t-4">
            <el-carousel indicator-position="outside" trigger="click" height="150px" width="500px">
              <el-carousel-item class="homeview_carousel_icon_item" v-for="image in store.images" :key="image">
                <img
                  class="justify-center"
                  style="max-height: 100%; border-radius: 10%"
                  :src="image"
                />
              </el-carousel-item>
            </el-carousel>
          </div>
        </template>
        <p>Spitznamen: Nagisa, Sev(en), Foxy, Boss etc.</p>
        <p>Herrkunftsland: Deutschland</p>
        <p>Körpergröße: 1,82m</p>
        <p>Lieblingsfarbe: Dunkles Rot</p>
        <p>Liblingsspiel: Rythm Thief (Königsklasse) & Yu-Gi-Oh! (Top 1)</p>
        <p>Vorlieben: Essen, Videospiele & Anime</p>
        <p>Abneigungen: Starke Doppelmoral, Hochmut & Zigaretten</p>
        <template #footer>
          Zeit für ein Duel!<br>
          Quellen - Credits: <br>
          <a href="https://fwugbit.itch.io/padoru-maker">Padorou Bild</a><br>
          <a href="https://aminoapps.com/p/vwt2wk">Rythm Thief Thema</a><br>
          <a href="https://aminoapps.com/p/m1pilv">Yusei Fudo</a>
        </template>
      </el-card>
      <!-- Kleine Bio -->
    </div>
  </div>
</template>
