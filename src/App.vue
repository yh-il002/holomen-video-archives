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
  <div class="wapper">
    <h1>桃鈴ねね YouTube動画 アーカイブ</h1>
    <div class="serch-warp">
      <input v-model="keyword" placeholder="キーワードで検索" class="input-keyword" />
      <input type="date" v-model="startDate" class="input-startdate" />
      <span>〜</span>
      <input type="date" v-model="endDate" class="input-enddate" />
    </div>
    <div class="serch-num">検索結果：{{ filteredData.length }}件</div>
    <div class="item-list-wrap">
      <transition-group name="fade" tag="div">
        <div v-for="item in filteredData" :key="item.title" class="item-list">
          <a :href="item.youtube_url" class="item-list-link" target="_blank">
            <img :src="item.thumbnail_url" alt="" class="item-list-thumbnail">
            <div>
              <h2 class="item-list-title">{{ item.title }}</h2>
              <p class="item-list-date">{{ item.release_date }}</p>
            </div>
          </a>
        </div>
      </transition-group>
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

<style lang="scss" scoped>
/* .logo {
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
} */

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  // transform: translateY(5px);
}

.wapper {
  width: 960px;
  margin: 0 auto;

  h1 {
    font-size: 3.4rem;
  }
}

.serch-warp {
  margin: 24px 0;

  span {
    font-size: 1.8rem;
    padding: 0 12px;
  }
}

.input-keyword {
  width: 300px;
  height: 40px;
  font-size: 1.8rem;
}

.input-startdate {
  width: 150px;
  height: 40px;
  font-size: 1.8rem;
  margin-left: 24px;
}

.input-enddate {
  width: 150px;
  height: 40px;
  font-size: 1.8rem;
}

.serch-num {
  font-size: 1.8rem;
}

.item-list {
  border-radius: 20px;

  &:hover {
    background-color: #ffb65d;
    transition: all 0.1s ease-in;
  }
}

.item-list-link {
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 16px;
  padding: 18px;
  color: #333;
}

.item-list-thumbnail {
  border-radius: 12px;
}

.item-list-title {
  font-size: 1.8rem;
}

.item-list-date {
  font-size: 1.4rem;
  margin-top: 8px;
}

</style>
