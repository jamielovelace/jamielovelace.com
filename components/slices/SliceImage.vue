<template>
  <div class="o-wrapper o-wrapper--large">
    <responsive-image
      class="u-1/1 c-styled-image"
      :image="content.image"
      :alt="content.caption"
    />
    <div class="u-margin-top u-text-center u-text-small">
      {{ content.caption }}
    </div>
  </div>
</template>

<script>
import ResponsiveImage from '~/components/ResponsiveImage'
export default {
  components: {
    ResponsiveImage
  },
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
