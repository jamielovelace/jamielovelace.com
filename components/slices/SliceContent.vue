<template>
  <div class="o-wrapper o-wrapper--small" v-html="content"></div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style lang="scss" scoped></style>
