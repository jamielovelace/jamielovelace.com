<template>
  <div>
    <div class="c-projects-feed">
      <article
        v-for="(project, $index) in topProjects"
        :key="$index"
        class="c-projects-feed__item"
      >
        <project-card :project="project"> </project-card>
      </article>
      <div class="c-projects-feed__item c-projects-feed__item--spacer"></div>
    </div>
    <div class="o-wrapper o-wrapper--large c-projects-link c-user-content">
      <nuxt-link to="/projects">View all projects</nuxt-link>
    </div>
  </div>
</template>

<script>
import projectCard from '~/components/ProjectCard'
export default {
  components: {
    projectCard
  },
  props: {
    projects: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    topProjects() {
      return this.projects.slice(0, 3)
    }
  }
}
</script>

<style lang="scss" scoped>
.c-projects-feed {
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
  padding: var(--spacing) var(--spacing-large) var(--spacing) 0;
  display: flex;
  @include mq($until: smallDesktop) {
    padding: var(--spacing) 0 var(--spacing-enourmous);
    overflow-x: auto;
    overflow-y: visible;
    scroll-snap-type: mandatory;
    scroll-snap-points-x: repeat(85vw);
    scroll-snap-type: x mandatory;
  }

  &__item {
    scroll-snap-align: start;
    min-width: 85vw;
    padding-left: var(--spacing-large);
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    @include mq($from: smallDesktop) {
      min-width: 33.33%;
      padding-right: 0;
    }

    &--spacer {
      min-width: 15vw;
      height: 10px;
      @include mq($from: smallDesktop) {
        display: none;
      }
    }
  }
}

.c-projects-link {
  @include mq($until: smallDesktop) {
    position: relative;
    z-index: 1;
    margin-top: calc(var(--spacing-huge) * -1);
    margin-bottom: var(--spacing-large);
  }

  a {
    font-weight: 900;
  }
}
</style>
