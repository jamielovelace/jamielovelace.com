<template>
  <div class="c-hero-banner">
    <div class="c-hero-banner__inner">
      <div class="c-hero-banner__body">
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
    @include mq($from: tablet) {
      max-width: 60%;
    }
    @include mq($from: smallDesktop) {
      max-width: 700px;
    }
    @include mq($from: desktop) {
      max-width: 800px;
    }
  }
  &__title {
    font-size: var(--text-collosal);
    color: var(--color-light);
  }

  &__content {
    color: var(--color-light);
    font-size: var(--text-default);
    margin-right: var(--spacing);
    max-width: 550px;
  }

  &__images {
    flex-grow: 1;
    flex-shrink: 1;
    padding-right: var(--spacing-small);
  }
}
</style>
