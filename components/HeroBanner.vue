<template>
  <div class="c-hero-banner">
    <div class="c-hero-banner__inner">
      <div
        class="c-hero-banner__body"
        :class="{ 'c-hero-banner__body--full': !hasImage }"
      >
        <h1
          class="c-hero-banner__title"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <slot name="title" />
        </h1>
        <div
          class="c-hero-banner__content c-user-content"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <slot name="content" />
        </div>
      </div>
      <div class="c-hero-banner__images">
        <slot name="image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    hasImage() {
      return !!this.$slots.image
    }
  }
}
</script>

<style lang="scss" scoped>
.c-hero-banner {
  min-height: 40vh;
  display: flex;
  align-items: center;
  @include mq($from: smallDesktop) {
    min-height: 70vh;
  }

  &__inner {
    max-width: 1300px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--spacing);
    padding-top: var(--spacing-large);
    padding-bottom: var(--spacing-huge);
    @include mq($from: tablet) {
      display: flex;
      align-items: center;
      padding-left: var(--spacing-large);
    }
  }

  &__body {
    flex-shrink: 0;
    padding-right: var(--spacing);
    margin-bottom: var(--spacing-huge);
    @include mq($from: tablet) {
      width: 50%;
      margin-bottom: 0;
    }
    @include mq($from: desktop) {
      width: 45%;
    }
    &--full {
      width: 100%;
      max-width: 450px;
      @include mq($from: tablet) {
        max-width: 600px;
      }
      @include mq($from: desktop) {
        max-width: 800px;
      }
    }
  }
  &__title {
    font-size: var(--text-collosal);
    color: var(--color-light);
  }

  &__content {
    color: var(--color-light);
    font-size: var(--text-default);
    max-width: 550px;
  }

  &__images {
    flex-grow: 1;
    flex-shrink: 1;
    padding-right: var(--spacing-small);
  }
}
</style>
