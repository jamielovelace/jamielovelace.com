<template>
  <div>
    <hero-banner>
      <template #title>
        Front End Developer &amp; Product Designer
      </template>
      <template #content>
        <p>
          Currently senior front-end developer at
          <a
            class="c-link"
            href="https://akerolabs.com"
            target="_blank"
            rel="nofollow"
            >Akero</a
          >
        </p>
      </template>
    </hero-banner>
    <div data-aos="fade-up">
      <div class="o-wrapper o-wrapper--large">
        <h4 class="u-margin-bottom-tiny u-color-light">Projects</h4>
      </div>
      <projects-feed :projects="projects" class="u-padding-bottom-huge" />
    </div>
    <div
      class="o-wrapper o-wrapper--large u-margin-top-huge"
      data-aos="fade-up"
    >
      <div class="o-layout o-layout--huge">
        <div class="o-layout__item u-1/2@tablet">
          <div class="c-user-content">
            <h3>{{ about.title }}</h3>
            <div v-html="about.body"></div>
            <p>
              <strong><nuxt-link to="/about">More about me</nuxt-link></strong>
            </p>
          </div>
        </div>
        <div class="o-layout__item u-1/2@tablet">
          <div v-lazy-container="{ selector: 'img' }">
            <img
              class="c-styled-image"
              :data-loading="about.image.lqip"
              :data-srcset="about.image.sizes.srcSet"
              :data-src="about.image.src"
              alt="Me"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import heroBanner from '~/components/HeroBanner.vue'
import projectsFeed from '~/components/ProjectsFeed.vue'
export default {
  components: {
    heroBanner,
    projectsFeed
  },
  data() {
    return {
      about: {
        title: 'About me',
        body: `
          <p>I’m product designer and front-end developer based in Southsea. I’m currently a part of the Akero team building out a CRM and advertising platform aimed primarily at the education sector.<p>
          <p>My primary focus is building a great UI's that are easy, pleasing and fast to use.<p>
          <p>I'd say I'm an expert in CSS and HTML, since I've been using both in depth for over 10 years, though recently the focus is more on javascript and frameworks.<p>
        `,
        image: {
          webp: require('~/assets/images/me.jpg?webp'),
          lqip: require('~/assets/images/me.jpg?resize&size=50'),
          sizes: require('~/assets/images/me.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000'),
          src: require('~/assets/images/me.jpg')
        }
      }
    }
  },
  computed: {
    projects() {
      return this.$store.state.projects
    }
  }
}
</script>

<style></style>
