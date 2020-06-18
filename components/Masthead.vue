<template>
  <header class="c-masthead">
    <nuxt-link to="/">
      <logo class="c-masthead__logo" />
    </nuxt-link>
    <nav class="c-masthead__nav">
      <ul class="o-list-inline">
        <li class="o-list-inline__item c-masthead__nav-item">
          <nuxt-link to="/projects" class="c-masthead__nav-link"
            >Projects</nuxt-link
          >
        </li>
        <li class="o-list-inline__item c-masthead__nav-item">
          <nuxt-link to="/about" class="c-masthead__nav-link">About</nuxt-link>
        </li>
        <li class="o-list-inline__item c-masthead__nav-item">
          <nuxt-link to="/cv" class="c-masthead__nav-link">CV</nuxt-link>
        </li>
        <li class="o-list-inline__item c-masthead__nav-item">
          <nuxt-link to="/contact" class="c-masthead__nav-link"
            >Contact</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
.c-masthead {
  // position: sticky;
  // top: 0;
  // z-index: 2;
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
  padding: var(--spacing);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @include mq($from: smallDesktop) {
    padding-top: var(--spacing-large);
    padding-left: var(--spacing-large);
    padding-right: var(--spacing-large);
  }

  &__logo {
    width: 60px;
    flex-shrink: 1;

    @include mq($from: smallTablet) {
      width: 80px;
    }

    @include mq($from: tablet) {
      width: 90px;
    }

    @include mq($from: desktop) {
      width: 110px;
    }
  }

  &__nav {
    margin-left: auto;
    @include mq($until: smallTablet) {
      font-size: 85%;
    }

    ul {
      display: inline-flex;
      justify-content: space-between;
      margin-bottom: 0;
      margin-right: calc(var(--spacing-tiny) * -1);
    }

    &-item {
      @include mq($from: smallTablet) {
        margin-left: var(--spacing-small);
      }
      @include mq($from: smallDesktop) {
        margin-left: var(--spacing);
      }
    }

    &-link {
      display: inline-block;
      font-weight: 900;
      text-decoration: none;
      color: var(--color-light);
      padding: var(--spacing-tiny) var(--spacing-small);
      border-radius: var(--border-radius);
      transition: 0.2s ease;

      &:hover {
        background-color: rgba(0, 0, 0, 0.125);
      }
      &:active {
        transform: scale(0.9);
      }

      .is-active &,
      &.is-active {
        background-color: rgba(0, 0, 0, 0.125);
      }
    }
  }
}
</style>
