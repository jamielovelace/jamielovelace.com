<template>
  <div>
    <div class="c-projects-feed">
      <div
        v-for="(project, $index) in projects"
        :key="$index"
        class="c-projects-feed__item"
      >
        <project-card :project="project"> </project-card>
      </div>
      <div class="c-projects-feed__item c-projects-feed__item--spacer"></div>
    </div>
    <div class="o-wrapper o-wrapper--large c-projects-link">
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
    scroll-snap-points-x: repeat(70vw);
    scroll-snap-type: x mandatory;
  }

  &__item {
    scroll-snap-align: start;
    min-width: 70vw;
    padding-left: var(--spacing-large);
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    @include mq($from: smallDesktop) {
      min-width: 33.33%;
      padding-right: 0;
    }

    &--spacer {
      min-width: 30vw;
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
    text-decoration: none;
    font-weight: 900;
    color: var(--color-dark);
    &:hover {
      color: var(--color-primary);
    }
  }
}
</style>
