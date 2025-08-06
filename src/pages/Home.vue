<script setup lang="ts">
import dataJson from '../assets/json/momosuzunene.json'
import MainTitle from '../components/MainTitle.vue'
import SearchList from '../components/SearchList.vue'
import TopLink from '../components/TopLink.vue'
</script>

<template>
  <MainTitle title="桃鈴ねねYouTube動画検索（〜2025/08/01）" />
  <SearchList :data="dataJson" />
  <TopLink />
</template>

