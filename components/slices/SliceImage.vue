<template>
  <div class="o-wrapper o-wrapper--large">
    <responsive-image
      class="u-1/1"
      :image="content.image"
      :alt="content.caption"
    />
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
