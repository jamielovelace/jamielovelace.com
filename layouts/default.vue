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
  transition: filter 0.2s ease;
}
img[lazy='loading'] {
  width: 100%;
  height: auto;
  filter: blur(5px);
}
</style>
