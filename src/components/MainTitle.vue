<template>
  <h1 class="main-title">{{ title }}</h1>
</template>

<script setup>
defineProps({
  title: String
})
</script>

<style lang="scss" scoped>
@use '../assets/scss/mq' as *;

.main-title {
  font-size: 2.8rem;

  @include mq($until: desktop) {
    font-size: 1.8rem;
  }
}
</style>
