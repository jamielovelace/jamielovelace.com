<template>
  <div class="o-wrapper o-wrapper--large">
    <div class="o-layout">
      <div class="o-layout__item u-1/2">
        <responsive-image
          class="c-styled-image"
          :image="content.image"
          :alt="content.caption"
        />
        <div class="u-margin-top u-text-center u-text-small">
          {{ content.caption }}
        </div>
      </div>
      <div class="o-layout__item u-1/2">
        <responsive-image
          class="c-styled-image"
          :image="content.image_2"
          :alt="content.caption_2"
        />
        <div class="u-margin-top u-text-center u-text-small">
          {{ content.caption_2 }}
        </div>
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
