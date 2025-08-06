<script setup lang="ts">
import dataJson from '../assets/json/omaruporuka.json'
import MainTitle from '../components/MainTitle.vue'
import SearchList from '../components/SearchList.vue'
import TopLink from '../components/TopLink.vue'
</script>

<template>
  <MainTitle title="尾丸ポルカYouTube動画検索（〜2025/07/30）" />
  <SearchList :data="dataJson" />
  <TopLink />
</template>

