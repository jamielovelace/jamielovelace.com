<template>
  <article>
    <hero-banner>
      <template #title>
        {{ project.title }}
      </template>
      <template #content>
        <p>{{ project.description }}</p>
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
    <slices
      v-for="(slice, index) in project.sections"
      :key="`slice-${index}`"
      :slice="slice"
    />
  </article>
</template>
<script>
import HeroBanner from '~/components/HeroBanner'
import Slices from '~/components/Slices'
export default {
  components: {
    HeroBanner,
    Slices
  },
  async asyncData({ params, payload }) {
    if (payload) {
      return {
        project: payload
      }
    } else {
      return {
        project: await require(`~/assets/content/projects/${params.slug}.json`)
      }
    }
  },
  computed: {
    bannerImages() {
      return (
        this.project.banner_images &&
        this.project.banner_images.map((item) => {
          // check if it exists in the uploads folder, then optimise to sizes etc
          if (item.indexOf('/uploads') === 0) {
            return {
              webp: require(`~/assets${item}?webp`),
              lqip: require(`~/assets${item}?resize&size=50`),
              sizes: require(`~/assets${item}?resize&sizes[]=300&sizes[]=600&sizes[]=1000`),
              src: require(`~/assets${item}`)
            }
          }
          // if not just provide the src url
          return {
            src: item,
            webp: '',
            sizes: { srcSet: '' },
            lqip: ''
          }
        })
      )
    }
  }
}
</script>
