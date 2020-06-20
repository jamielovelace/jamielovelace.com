<template>
  <div>
    <hero-banner>
      <template v-slot:title>
        Projects
      </template>
    </hero-banner>
    <div class="o-wrapper">
      <div class="c-projects">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="c-projects__item"
        >
          <project-card :project="project" :featured="true"> </project-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import heroBanner from '~/components/HeroBanner'
import projectCard from '~/components/ProjectCard'
export default {
  components: {
    heroBanner,
    projectCard
  },
  computed: {
    projects() {
      return this.$store.state.projects
    }
  }
}
</script>

<style lang="scss" scoped>
.c-projects {
  &__item {
    padding-bottom: var(--spacing-large);
  }
}
</style>
