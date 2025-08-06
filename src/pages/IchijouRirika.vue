<script setup lang="ts">
import dataJson from '../assets/json/ichijouririka.json'
import MainTitle from '../components/MainTitle.vue'
import SearchList from '../components/SearchList.vue'
import TopLink from '../components/TopLink.vue'
</script>

<template>
  <MainTitle title="一条莉々華YouTube動画検索" />
  <SearchList :data="dataJson" />
  <TopLink />
</template>

