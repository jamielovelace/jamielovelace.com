<template>
  <footer class="c-site-footer">
    <div class="c-site-footer__socials">
      <a
        class="c-site-footer__social-link"
        href="https://twitter.com/jamielovelace"
      >
        <icon-twitter class="c-site-footer__social" />
      </a>
      <a
        class="c-site-footer__social-link"
        href="https://instagram.com/jlovelace"
      >
        <icon-instagram class="c-site-footer__social" />
      </a>
      <a
        class="c-site-footer__social-link"
        href="https://github.com/jamielovelace"
      >
        <icon-github class="c-site-footer__social" />
      </a>
    </div>
    <div>
      <a
        class="c-site-footer__view-source"
        href="https://github.com/jamielovelace/jamielovelace.com"
        >View on Github</a
      >
    </div>
  </footer>
</template>

<script>
import IconTwitter from '~/components/IconTwitter'
import IconInstagram from '~/components/IconInstagram'
import IconGithub from '~/components/IconGithub'
export default {
  components: {
    IconTwitter,
    IconInstagram,
    IconGithub
  }
}
</script>

<style lang="scss" scoped>
.c-site-footer {
  text-align: center;
  padding-top: var(--spacing-large);
  padding-bottom: var(--spacing-large);
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__socials {
    display: flex;
  }

  &__social-link {
    display: block;
    color: var(--color-dark);
    margin-right: var(--spacing);
    &:hover,
    &:focus {
      color: var(--color-primary);
    }
  }
  &__social {
    width: 2rem;
    height: 2rem;
  }

  &__view-source {
    color: var(--color-dark);
    text-decoration: none;
    &:hover,
    &:focus {
      color: var(--color-primary);
    }
  }
}
</style>
