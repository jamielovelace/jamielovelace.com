<template>
  <nuxt-link
    :to="`/projects/${project.slug}`"
    class="c-project-card"
    :class="{ 'c-project-card--featured': featured }"
  >
    <div class="c-project-card__content">
      <h1 class="c-project-card__title u-h3">{{ project.title }}</h1>
      <p v-if="project.tags" class="c-project-card__tags">
        {{ project.tags.join(', ') }}
      </p>
      <p v-if="showDescription" class="c-project-card__description">
        {{ project.description }}
      </p>
      <p v-if="showDescription" class="c-project-card__cta">Read Case Study</p>
    </div>
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
    },
    featured: {
      type: Boolean,
      default: false
    },
    showDescription: {
      type: Boolean,
      default: true
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
  $self: &;
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
  outline: 0;
  -webkit-font-smoothing: subpixel-antialiased;
  border: 2px solid transparent;

  &__title {
    margin-bottom: var(--spacing-tiny);
    color: var(--color-primary);
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
    margin-bottom: -2px;
    img {
      width: 100%;
      border-radius: var(--border-radius) var(--border-radius) 0 0;
      border: 1px solid var(--color-grey-light);
      border-bottom: 0;
    }
  }

  &:hover,
  &:focus {
    box-shadow: 0 1.4px 1.7px -10px rgba(0, 0, 0, 0.02),
      0 3.3px 4px -10px rgba(0, 0, 0, 0.028),
      0 6.3px 7.5px -10px rgba(0, 0, 0, 0.035),
      0 11.2px 13.4px -10px rgba(0, 0, 0, 0.042),
      0 20.9px 25.1px -10px rgba(0, 0, 0, 0.05),
      0 50px 60px -10px rgba(0, 0, 0, 0.07);

    transform: scale(1.02);
  }

  &:focus {
    border-color: var(--color-secondary);
  }

  &--featured {
    @include mq($from: tablet) {
      flex-direction: row;

      #{$self}__content {
        flex-basis: 50%;
        margin-right: var(--spacing-large);
      }

      #{$self}__image {
        width: 50%;
      }
    }
  }
}
</style>
