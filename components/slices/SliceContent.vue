<template>
  <div class="o-wrapper o-wrapper--tiny">
    <div class="c-user-content" v-html="$md.render(content.body)" />
  </div>
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
