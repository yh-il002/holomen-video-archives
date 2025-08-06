<script setup lang="ts">
import dataJson from '../assets/json/momosuzunene.json'
import MainTitle from '../components/MainTitle.vue'
import SearchList from '../components/SearchList.vue'
import TopLink from '../components/TopLink.vue'
</script>

<template>
  <div class="wapper" id="top">
    <MainTitle title="桃鈴ねねYouTube動画検索（〜2025/08/01）" />
    <SearchList :data="dataJson" />
    <TopLink />
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/mq' as *;

.wapper {
  position: relative;
  width: 960px;
  margin: 0 auto;

  @include mq($until: desktop) {
    width: 100vw;
    padding: 12px 18px;
  }
}
</style>

