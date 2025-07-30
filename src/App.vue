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
  <div>
    <input v-model="keyword" placeholder="キーワードで検索" />
    <input type="date" v-model="startDate" />
    <input type="date" v-model="endDate" />
  </div>
  <ul>
    <!-- <li v-for="momosuzunene in momosuzuneneJson" :key="momosuzunene.thumbnail">{{ momosuzunene.title }}</li> -->
    <li v-for="item in filteredData" :key="item.title">{{ item.title }} - {{ item.release_date }}</li>
  </ul>
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
