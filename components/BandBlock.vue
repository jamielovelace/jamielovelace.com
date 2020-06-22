<template>
  <div class="c-band-block">
    <div class="c-band-block__inner"></div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<style lang="scss" scoped>
.c-band-block {
  overflow: hidden;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;

  &__inner {
    border-top: 65vh solid var(--color-primary);
    border-right: 200vh solid transparent;

    @include mq($from: smallDesktop) {
      border-top-width: 95vh;
      border-right-width: 150vw;
    }
  }
}
</style>
