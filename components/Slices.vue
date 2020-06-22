<template>
  <div class="c-slice" :class="`c-slice--${slice.type}`">
    <slice-content v-if="slice.type === 'content'" :content="slice" />
    <slice-content-columns
      v-if="slice.type === 'content_columns'"
      :content="slice"
    />
    <slice-content-columns-image
      v-if="slice.type === 'content_columns_image'"
      :content="slice"
    />
    <slice-title v-if="slice.type === 'title_with_pre'" :content="slice" />
    <slice-image v-if="slice.type === 'image'" :content="slice" />
    <slice-images-x2 v-if="slice.type === 'dual_images'" :content="slice" />
    <slice-image-gallery
      v-if="slice.type === 'image_gallery'"
      :content="slice"
    />
    <slice-video v-if="slice.type === 'video'" :content="slice" />
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
import SliceVideo from '~/components/slices/SliceVideo.vue'

export default {
  components: {
    SliceContent,
    SliceContentColumns,
    SliceContentColumnsImage,
    SliceTitle,
    SliceImage,
    SliceImagesX2,
    SliceImageGallery,
    SliceVideo
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
.c-slice:not(.c-slice--title_with_pre) + .c-slice {
  margin-top: var(--spacing-huge);
}
</style>
