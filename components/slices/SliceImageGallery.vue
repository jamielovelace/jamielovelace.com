<template>
  <div v-html="content"></div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
