<template>
  <nuxt-link :to="`/projects/${slug}`" class="c-project-card">
    <h1 class="c-project-card__title u-h3">{{ title }}</h1>
    <p v-if="tags" class="c-project-card__tags">{{ tags.join(', ') }}</p>
    <p class="c-project-card__description">{{ description }}</p>
    <p class="c-project-card__cta">Read Case Study</p>
    <div
      v-if="image"
      v-lazy-container="{ selector: 'img' }"
      class="c-project-card__image"
    >
      <!-- <img
        :data-loading="image.lqip"
        :data-srcset="image.sizes.srcSet"
        :data-src="image.src"
        :alt="title"
      /> -->
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    slug: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      default: () => {
        return []
      }
    },
    description: {
      type: String,
      default: ''
    },
    image: {
      type: Object,
      default: () => {
        return {}
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
  color: var(--color-text);
  transform: scale(1);
  backface-visibility: hidden;
  transition: all 0.2s ease-out;
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
  }

  &__image {
    margin-top: var(--spacing);
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
