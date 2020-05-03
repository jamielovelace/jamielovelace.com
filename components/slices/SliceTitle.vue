<template>
  <div class="o-wrapper o-wrapper--tiny">
    <div class="c-title-block">
      <div v-if="content.pre_title" class="c-title-block__pre-title">
        {{ content.pre_title }}
      </div>
      <h3 v-if="content.title" class="c-title-block__title">
        {{ content.title }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.c-title-block {
  &__pre-title {
    font-weight: bold;
    color: var(--color-primary);
    font-weight: bold;
    font-size: 1rem;
  }

  &__title {
    color: var(--color-dark);
  }
}
</style>
