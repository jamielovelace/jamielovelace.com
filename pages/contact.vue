<template>
  <div>
    <hero-banner>
      <template #title>
        Contact
      </template>
      <template #content>
        <p>
          You can email me at
          <a href="mailto:hello@jamielovelace.com">hello@jamielovelace.com</a>
          or send me a message on
          <a href="https://twitter.com/jamielovelace/">Twitter</a>
        </p>
      </template>
    </hero-banner>
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

<style></style>
