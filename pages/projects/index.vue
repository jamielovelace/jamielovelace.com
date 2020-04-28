<template>
  <div>
    <ul v-for="(project, index) in projects" :key="index">
      <nuxt-link :to="`projects/${project.slug}`">{{
        project.title
      }}</nuxt-link>
      <p>{{ project.description }}</p>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects
    }
  }
}
</script>
