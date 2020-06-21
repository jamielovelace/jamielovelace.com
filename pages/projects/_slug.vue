<template>
  <article>
    <hero-banner>
      <template #title>
        {{ project.title }}
      </template>
      <template #content>
        <p>{{ project.description }}</p>
      </template>
    </hero-banner>
    <slices
      v-for="(slice, index) in project.sections"
      :key="`slice-${index}`"
      :slice="slice"
    />
  </article>
</template>
<script>
import HeroBanner from '~/components/HeroBanner'
import Slices from '~/components/Slices'
export default {
  components: {
    HeroBanner,
    Slices
  },
  async asyncData({ params, payload }) {
    if (payload) return { project: payload }
    else
      return {
        project: await require(`~/assets/content/projects/${params.slug}.json`)
      }
  }
}
</script>
