<template>
  <div class="c-slice">
    <slice-content v-if="slice.type === 'content'" :content="slice.content" />
    <slice-content-columns v-if="slice.type === 'content_columns'" />
    <slice-content-columns-image
      v-if="slice.type === 'content_columns_image'"
    />
    <slice-title v-if="slice.type === 'title'" />
    <slice-image v-if="slice.type === 'image'" />
    <slice-images-x2 v-if="slice.type === 'images_x2'" />
    <slice-image-gallery v-if="slice.type === 'image_gallery'" />
  </div>
</template>

<script>
import SliceContent from '~/components/slices/SliceContent.vue'
import SliceContentColumns from '~/components/slices/SliceContentColumns.vue'
import SliceContentColumnsImage from '~/components/slices/SliceContentColumnsImage.vue'
import SliceTitle from '~/components/slices/SliceTitle.vue'
import SliceImage from '~/components/slices/SliceImage.vue'
import SliceImagesX2 from '~/components/slices/SliceImagesX2.vue'
import SliceImageGallery from '~/components/slices/SliceImageGallery.vue'

export default {
  components: {
    SliceContent,
    SliceContentColumns,
    SliceContentColumnsImage,
    SliceTitle,
    SliceImage,
    SliceImagesX2,
    SliceImageGallery
  },
  props: {
    slice: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.c-slice + .c-slice {
  margin-top: var(--spacing-huge);
}
</style>
