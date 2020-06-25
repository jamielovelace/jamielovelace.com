<template>
  <div class="c-site-wrap">
    <bg :color="color" />
    <masthead />
    <nuxt class="c-main" />
    <div class="o-wrapper o-wrapper--large c-site-wrap__base">
      <site-footer />
    </div>
  </div>
</template>
<script>
import Masthead from '~/components/Masthead'
import bg from '~/components/BandBlock'
import SiteFooter from '~/components/SiteFooter'
export default {
  components: {
    Masthead,
    bg,
    SiteFooter
  },
  data() {
    return {
      color: 'primary'
    }
  }
}
</script>
<style lang="scss">
.c-site-wrap {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  &__base {
    margin-top: auto;
  }
}
.c-main {
  padding-bottom: var(--spacing-enourmous);
}

img[lazy] {
  transition: filter 0.2s ease;
}
img[lazy='loading'] {
  width: 100%;
  height: auto;
  filter: blur(5px);
}
</style>
