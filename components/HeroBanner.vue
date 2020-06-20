<template>
  <div class="c-hero-banner">
    <div class="c-hero-banner__inner">
      <div class="c-hero-banner__body">
        <h1
          class="c-hero-banner__title"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <slot name="title" />
        </h1>
        <div
          class="c-hero-banner__content c-user-content"
          data-aos="fade-left"
          data-aos-delay="200"
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

<style lang="scss" scoped>
.c-hero-banner {
  min-height: 40vh;
  display: flex;
  align-items: center;
  @include mq($from: smallDesktop) {
    min-height: 70vh;
  }

  &__inner {
    display: flex;
    max-width: 1300px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--spacing);
    padding-top: var(--spacing-large);
    padding-bottom: var(--spacing-huge);
    @include mq($from: smallDesktop) {
      padding-left: var(--spacing-large);
    }
  }

  &__body {
    max-width: 800px;
    flex-shrink: 0;
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
  }
}
</style>
