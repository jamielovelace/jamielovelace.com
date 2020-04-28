<template>
  <article>
    <h1>{{ project.title }}</h1>
    <div v-html="$md.render(project.body)" />
  </article>
</template>
<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { project: payload }
    else
      return {
        project: await require(`~/assets/content/projects/${params.slug}.json`)
      }
  }
}
</script>
