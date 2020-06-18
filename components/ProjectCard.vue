<template>
  <nuxt-link :to="`/projects/${project.slug}`" class="c-project-card">
    <h1 class="c-project-card__title u-h3">{{ project.title }}</h1>
    <p v-if="project.tags" class="c-project-card__tags">
      {{ project.tags.join(', ') }}
    </p>
    <p class="c-project-card__description">{{ project.description }}</p>
    <p class="c-project-card__cta">Read Case Study</p>
    <div
      v-if="optimisedImage"
      v-lazy-container="{ selector: 'img' }"
      class="c-project-card__image"
    >
      <img
        :data-loading="optimisedImage.lqip"
        :data-srcset="optimisedImage.sizes.srcSet"
        :data-src="optimisedImage.src"
        :alt="project.title"
      />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    optimisedImage() {
      // check if it exists in the uploads folder, then optimise to sizes etc
      if (this.project.feature_image.indexOf('/uploads') === 0) {
        return {
          webp: require(`~/assets${this.project.feature_image}?webp`),
          lqip: require(`~/assets${this.project.feature_image}?resize&size=50`),
          sizes: require(`~/assets${this.project.feature_image}?resize&sizes[]=300&sizes[]=600&sizes[]=1000`),
          src: require(`~/assets${this.project.feature_image}`)
        }
      }
      // if not just provide the src url
      return {
        src: this.project.feature_image,
        webp: '',
        sizes: { srcSet: '' },
        lqip: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.c-project-card {
  background-color: #fff;
  text-decoration: none;
  border-radius: var(--border-radius-large);
  display: flex;
  flex-direction: column;
  padding: var(--spacing-large);
  padding-bottom: 0;
  color: #666;
  transform: scale(1);
  backface-visibility: hidden;
  transition: all 0.2s ease;
  -webkit-font-smoothing: subpixel-antialiased;

  &__title {
    margin-bottom: var(--spacing-tiny);
    color: var(--color-dark);
  }

  &__tags {
    font-size: 85%;
  }

  &__cta {
    font-weight: bold;
    color: var(--color-dark);
    margin-bottom: var(--spacing-large);
  }

  &__image {
    margin-top: auto;
    width: 100%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }

  &:hover {
    box-shadow: 0 1.9px 2.2px rgba(0, 0, 0, 0.017),
      0 4.7px 5.3px rgba(0, 0, 0, 0.024), 0 8.8px 10px rgba(0, 0, 0, 0.03),
      0 15.6px 17.9px rgba(0, 0, 0, 0.036), 0 29.2px 33.4px rgba(0, 0, 0, 0.043),
      0 70px 80px rgba(0, 0, 0, 0.06);

    transform: scale(1.02);
  }
}
</style>
