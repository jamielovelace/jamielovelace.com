<template>
  <div class="o-wrapper o-wrapper">
    <intersect
      root-margin="-30% 0px -30% 0px"
      @enter="setVideoToPlay()"
      @leave="setVideoToPause()"
    >
      <video
        ref="video"
        class="c-styled-image u-1/1"
        :src="videoUrl"
        controls
        loop
        muted
        playsinline
      >
        <source :src="videoUrl" type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </intersect>
  </div>
</template>

<script>
import Intersect from '~/components/Intersect'
export default {
  components: {
    Intersect
  },
  props: {
    content: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    videoUrl() {
      // check if it exists in the uploads folder, then serve
      if (this.content.video.indexOf('/uploads') === 0) {
        return require(`~/assets${this.content.video}`)
      }
      // if not just provide the src url
      return this.content.video
    }
  },
  methods: {
    setVideoToPlay() {
      this.$refs.video.play()
    },
    setVideoToPause() {
      this.$refs.video.pause()
    }
  }
}
</script>

<style lang="scss" scoped></style>
