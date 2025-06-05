import type Area from '@/interface/socialmediaareaInterface';
import { defineStore } from 'pinia'

export const useSocialMediaViewAreaStore = defineStore('areas', {
  state: () => ({
    areas: [] as Area[],
  }),
  actions: {
    async loadAreas() {
      this.areas = [{img: "", link: "https://aminoapps.com/c/GenshinImpactComGer", name: "Genshin Impact Amino"}, {img: "", link: "https://discord.com/invite/WH9DAjJamW", name: "Genshin Discord"}];
    },
    getAreas() {
      this.loadAreas().then( () =>
        {return this.areas;}
      )
    },
  },
});
