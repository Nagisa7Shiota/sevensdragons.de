import { defineStore } from 'pinia'

export const useHomeViewImageStore = defineStore('images', {
  state: () => ({
    images: [] as string[],
  }),
  actions: {
    async loadImages() {
      const imageModules = import.meta.glob('@/assets/images/homeview/*.{jpeg,png,gif}');
      this.images = Object.keys(imageModules).map((image) => {return image});
    },
    getImages() {
      this.loadImages().then( () =>
        {return this.images;}
      )
    },
  },
});
