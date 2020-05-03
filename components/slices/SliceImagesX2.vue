<template>
  <div class="o-wrapper o-wrapper--large">
    <div class="o-layout">
      <div class="o-layout__item u-1/2">
        <responsive-image :image="content.image" :alt="content.caption" />
      </div>
      <div class="o-layout__item u-1/2">
        <responsive-image :image="content.image_2" :alt="content.caption_2" />
      </div>
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
