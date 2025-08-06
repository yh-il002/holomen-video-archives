<script setup lang="ts">
import dataJson from '../assets/json/juufuuteiraden.json'
import MainTitle from '../components/MainTitle.vue'
import SearchList from '../components/SearchList.vue'
import TopLink from '../components/TopLink.vue'
</script>

<template>
  <MainTitle title="儒烏風亭らでんYouTube動画検索" />
  <SearchList :data="dataJson" />
  <TopLink />
</template>

