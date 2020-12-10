<template>
  <div>
    <hero-banner>
      <template #title>
        About me
      </template>
      <template #content>
        <p>
          I’m product designer and front-end developer based in Southsea. I’m
          currently a designer at TalkJS, which is a tool to build full-featured 
          chat into your websites and mobile apps.
        </p>
      </template>
      <template #image>
        <div class="c-image-grid">
          <div
            v-for="(img, index) in bannerImages"
            :key="img.alt"
            data-aos="zoom-in"
            :data-aos-delay="200 + index * 50"
          >
            <img
              class="c-styled-image"
              :srcset="img.sizes.srcSet"
              :src="img.src"
              :alt="img.alt"
            />
          </div>
        </div>
      </template>
    </hero-banner>
    <div class="o-wrapper o-wrapper--small c-user-content">
      <p>
        My love for front-end development and product design stemmed from
        graphic design, I was previously a designer at an agency for 8 years
        after studying graphic design at college. I got taught the basics of
        HTML and CSS and went from there.
      </p>

      <p>
        I'd call myself a front-end developer but some poeple might call it a UI
        developer, as I love writing HTML and CSS and building out a fast and
        responsive UI. I've been using HTML and CSS for well over 10 years now
        and more involved with javascript or the past 5 years. I have experience
        in <a href="https://angularjs.org/" target="_blank">AngularJS</a> and
        more recently <a href="https://vuejs.org/" target="_blank">Vue</a>.
      </p>

      <p>
        I still pride myself on writing readable, reusable and maintanable CSS,
        even if the industry now seems to be more focused on javascript
        development. I believe a lot of problems can be solved by using a great
        UI without all the bells and whistles that come with
        frameworks/libraries. That being said, I use a lot of javascript and
        frameworks such as Vue and Angular, when necessary, to help build an
        interactive UI.
      </p>

      <p>
        Whilst building <nuxt-link to="/projects/akero"
          >Akero</nuxt-link
        >, I learnt so much about how important it was to create maintanable
        CSS and markup, I always find myself looking at something I did 1 year
        ago wanting to improve it due to learning there's a better way of
        achieving what I wanted. Whether it being more accessible, less markup,
        or rendering speed. Iteration is a great thing that I didn't get to
        experience so much during my graphic design days.
      </p>

      <h2>Hobbies &amp; Interests</h2>

      <p>
        I'm very passionate about music, and find myself always on the hunt for
        a new artist to listen to. My Spotify account definitely gets its
        money's worth! Another thing I've found myself doing a of lot lately, 
        is DIY, and I'll give everything (within reason) a go myself, even if 
        most of the time it ends up costing more money after redoing it a 
        couple of times!
      </p>
    </div>
  </div>
</template>

<script>
import heroBanner from '~/components/HeroBanner.vue'
export default {
  components: {
    heroBanner
  },
  data() {
    return {
      bannerImages: [
        {
          alt: 'me in yosemite',
          webp: require('~/assets/images/me_yosemite.jpg?webp'),
          lqip: require('~/assets/images/me_yosemite.jpg?resize&size=50'),
          sizes: require('~/assets/images/me_yosemite.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000'),
          src: require('~/assets/images/me_yosemite.jpg')
        },
        {
          alt: 'me',
          webp: require('~/assets/images/me.jpg?webp'),
          lqip: require('~/assets/images/me.jpg?resize&size=50'),
          sizes: require('~/assets/images/me.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000'),
          src: require('~/assets/images/me.jpg')
        },
        {
          alt: 'me in tokyo',
          webp: require('~/assets/images/me_tokyo.jpg?webp'),
          lqip: require('~/assets/images/me_tokyo.jpg?resize&size=50'),
          sizes: require('~/assets/images/me_tokyo.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000'),
          src: require('~/assets/images/me_tokyo.jpg')
        }
      ]
    }
  }
}
</script>

<style></style>
