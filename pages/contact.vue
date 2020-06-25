<template>
  <div>
    <hero-banner>
      <template #title>
        Contact
      </template>
      <template #content>
        <p>
          You can email me at
          <a href="mailto:hello@jamielovelace.com">hello@jamielovelace.com</a>
          or send me a message on
          <a href="https://twitter.com/jamielovelace/">Twitter</a>
        </p>
      </template>
      <template #image>
        <div class="c-image-grid">
          <div
            v-for="(img, index) in bannerImages"
            :key="img.alt"
            data-aos="zoom-in"
            :data-aos-delay="200 + index * 50"
          >
            <img
              class="c-styled-image"
              :srcset="img.sizes.srcSet"
              :src="img.src"
              :alt="img.alt"
            />
          </div>
        </div>
      </template>
    </hero-banner>
  </div>
</template>

<script>
import heroBanner from '~/components/HeroBanner.vue'
export default {
  components: {
    heroBanner
  }
}
</script>

<style></style>
