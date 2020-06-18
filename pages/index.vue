<template>
  <div>
    <hero-banner>
      <template v-slot:title>
        Front End Developer &amp;
        <br />
        Product Designer
      </template>
      <template v-slot:content>
        <p>
          Currently senior front end developer at
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
    <div class="o-wrapper o-wrapper--large">
      <h4 class="u-color-dark u-margin-bottom-tiny">Projects</h4>
    </div>
    <projects-feed :projects="projects" class="u-padding-bottom-large" />
    <div class="o-wrapper o-wrapper--large u-margin-top-huge">
      <div class="o-layout o-layout--huge">
        <div class="o-layout__item u-2/5@tablet">
          <h3>{{ about.title }}</h3>
          <p>{{ about.body }}</p>
        </div>
        <div class="o-layout__item u-3/5@tablet">
          <div v-lazy-container="{ selector: 'img' }">
            <img
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
      oldprojects: [
        {
          title: 'Akero',
          tags: ['Product Design', 'Front-end Development', 'UX Research'],
          description:
            'CRM & Advertising platform aimed at the education sector. Akero is a large CRM system which includes a form builder, landing page builder, automation and an advertising platform.',
          slug: 'akero',
          image: {
            webp: require('~/assets/images/test.jpg?webp'),
            lqip: require('~/assets/images/test.jpg?resize&size=50'),
            sizes: require('~/assets/images/test.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000'),
            src: require('~/assets/images/test.jpg')
          }
        },
        {
          title: 'Akero Website',
          tags: [
            'Design',
            'Front-end Development',
            'Headless CMS',
            'UX Research'
          ],
          description:
            'CRM & Advertising platform aimed at the education sector. Akero is a large CRM system which includes a form builder, landing page builder, automation and an advertising platform.',
          slug: 'akero-website',
          image: {
            webp: require('~/assets/images/test.jpg?webp'),
            lqip: require('~/assets/images/test.jpg?lqip'),
            sizes: require('~/assets/images/test.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000'),
            src: require('~/assets/images/test.jpg')
          }
        },
        {
          title: 'Student Hut',
          tags: ['Redesign', 'Front-end Development', 'UX Research'],
          description:
            'Trip Advisor for universities. Student Hut is a website aimed at current, previous and potential students. Students can view reviews and rate all parts of life at uni.',
          slug: 'student-hut',
          image: {
            webp: require('~/assets/images/test.jpg?webp'),
            lqip: require('~/assets/images/test.jpg?lqip'),
            sizes: require('~/assets/images/test.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000'),
            src: require('~/assets/images/test.jpg')
          }
        }
      ],
      about: {
        title: 'About me',
        body:
          'I’m product designer and front end developer based in Southsea. I’m currently a part of the Akero team building out a CRM and advertising platform aimed primarily at the education sector.',
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
