<template>
  <header class="c-masthead">
    <nuxt-link to="/" class="c-masthead__logo">
      <logo />
    </nuxt-link>
    <nav class="c-masthead__nav" role="navigation" aria-label="Main">
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
          <a
            href="/Jamie Lovelace - CV.pdf"
            target="_blank"
            class="c-masthead__nav-link"
            ><span class="c-masthead__nav-extra">Download</span> CV</a
          >
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
  width: 100%;
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
    width: 80px;
    flex-shrink: 1;
    border-radius: var(--border-radius);
    padding: 5px 8px;
    margin: -5px -8px;

    &:focus {
      outline: 0;
      background-color: rgba(0, 0, 0, 0.25);
    }

    @include mq($from: smallTablet) {
      width: 90px;
    }

    @include mq($from: tablet) {
      width: 100px;
    }

    @include mq($from: desktop) {
      width: 120px;
    }
  }

  &__nav {
    margin-left: auto;
    @include mq($until: smallTablet) {
      font-size: 80%;
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

    &-extra {
      display: none;
      @include mq($from: smallTablet) {
        display: inline;
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
      &:focus {
        background-color: rgba(0, 0, 0, 0.25);
        outline: 0;
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
