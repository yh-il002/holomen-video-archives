<script setup lang="ts">
import dataJson from '../assets/json/moricalliope.json'
import MainTitle from '../components/MainTitle.vue'
import SearchList from '../components/SearchList.vue'
import TopLink from '../components/TopLink.vue'
</script>

<template>
  <MainTitle title="Mori Calliope YouTube動画検索" />
  <SearchList :data="dataJson" />
  <TopLink />
</template>

