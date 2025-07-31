<script setup lang="ts">
import { ref, computed } from 'vue'
import momosuzuneneJson from './assets/json/momosuzunene.json'
// import HelloWorld from './components/HelloWorld.vue'
const keyword = ref('')
const startDate = ref('')
const endDate = ref('')

const filteredData = computed(() => {
  return momosuzuneneJson.filter(item => {
    const matchesKeyword = item.title.includes(keyword.value)

    const itemDate = new Date(item.release_date)
    const start = startDate.value ? new Date(startDate.value) : null
    const end = endDate.value ? new Date(endDate.value) : null
    const matchesDate =
      (!start || itemDate >= start) &&
      (!end || itemDate <= end)

    return matchesKeyword && matchesDate
  })
})
</script>

<template>
  <h1>桃鈴ねね YouTube動画 アーカイブ</h1>
  <div>
    <input v-model="keyword" placeholder="キーワードで検索" />
    <label>開始日：<input type="date" v-model="startDate" /></label>
    <label>終了日：<input type="date" v-model="endDate" /></label>
  </div>
  <div class="item-list-wrap">
    <div v-for="item in filteredData" :key="item.title" class="item-list">
      <a :href="item.youtube_url" class="item-list-link" target="_blank">
        <img :src="item.thumbnail_url" alt="" class="item-list-thumbnail">
        <h2 class="item-list-title">{{ item.title }}</h2>
        <p class="item-list-date">{{ item.release_date }}</p>
      </a>
    </div>
  </div>
  <!-- 
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
   -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
