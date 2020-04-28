<template>
  <div v-html="content"></div>
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
