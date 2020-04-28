<template>
  <div class="c-site-wrap">
    <bg :color="color" />
    <masthead />
    <nuxt class="c-main" />
  </div>
</template>
<script>
import masthead from '~/components/Masthead'
import bg from '~/components/BandBlock'
export default {
  components: {
    masthead,
    bg
  },
  data() {
    return {
      color: 'primary'
    }
  }
}
</script>
<style>
.c-site-wrap {
  min-height: 100vh;
}
.c-main {
  padding-bottom: var(--spacing-enourmous);
}
img[lazy] {
  transition: filter 0.5s ease-out;
}
img[lazy='loading'] {
  filter: blur(10px);
}
</style>
