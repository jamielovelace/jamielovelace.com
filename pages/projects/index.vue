<template>
  <div>
    <hero-banner>
      <template #title>
        Projects
      </template>
      <template #content>
        <p>Products and websites I've worked on recently</p>
      </template>
    </hero-banner>
    <div class="o-wrapper o-wrapper--large">
      <div class="c-projects">
        <article
          v-for="(project, index) in projects"
          :key="index"
          class="c-projects__item"
          data-aos="fade-up"
        >
          <project-card :project="project" :featured="true"> </project-card>
        </article>
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
  max-width: 950px;
  &__item {
    padding-bottom: var(--spacing-large);
  }
}
</style>
