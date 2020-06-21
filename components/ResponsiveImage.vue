<template>
  <div
    v-if="image"
    v-lazy-container="{ selector: 'img' }"
    class="c-responsive-image"
  >
    <img
      :data-loading="optimisedImage.lqip"
      :data-srcset="optimisedImage.sizes.srcSet"
      :data-src="optimisedImage.src"
      :alt="alt"
    />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  },
  computed: {
    optimisedImage() {
      // check if it exists in the uploads folder, then optimise to sizes etc
      if (this.image.indexOf('/uploads') === 0) {
        return {
          webp: require(`~/assets${this.image}?webp`),
          lqip: require(`~/assets${this.image}?resize&size=50`),
          sizes: require(`~/assets${this.image}?resize&sizes[]=300&sizes[]=600&sizes[]=1000&sizes[]=1300sizes[]=1600`),
          src: require(`~/assets${this.image}`)
        }
      }
      // if not just provide the src url
      return {
        src: this.image,
        webp: '',
        sizes: { srcSet: '' },
        lqip: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.c-responsive-image img {
  width: 100%;
}
</style>
