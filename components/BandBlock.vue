<template>
  <div class="c-band-block"></div>
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
  width: 0;
  height: 0;
  border-top: 120vh solid var(--color-secondary-light);
  border-right: 60vw solid transparent;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
