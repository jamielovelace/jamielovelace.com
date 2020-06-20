<template>
  <div>
    <hero-banner>
      <template v-slot:title>
        About me
      </template>
      <template v-slot:content>
        <p>
          I’m product designer and front end developer based in Southsea. I’m
          currently a part of the Akero team building out a CRM and advertising
          platform aimed primarily at the education sector.
        </p>
      </template>
      <template v-slot:image>
        <div class="c-image-grid">
          <img src="~/assets/images/test.jpg" />
          <img src="~/assets/images/test.jpg" />
          <img src="~/assets/images/test.jpg" />
        </div>
      </template>
    </hero-banner>
    <div class="o-wrapper o-wrapper--small c-user-content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
        doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur
        rerum illum odit fugit assumenda rem dolores inventore iste
        reprehenderit maxime! Iusto.
      </p>
    </div>
  </div>
</template>

<script>
import heroBanner from '~/components/HeroBanner.vue'
export default {
  components: {
    heroBanner
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
