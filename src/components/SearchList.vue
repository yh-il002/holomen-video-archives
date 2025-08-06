<script setup lang="ts">
import { ref, computed } from 'vue'

// アイテムの型定義
interface Item {
  title: string
  release_date: string
  youtube_url: string
  thumbnail_url: string
}

// 親から受け取るJSONデータ
const props = defineProps<{
  data: Item[]
}>()

const keyword = ref('')
const startDate = ref('')
const endDate = ref('')
const inputRef = ref<HTMLInputElement | null>(null) 

const filteredData = computed(() => {
  return props.data.filter(item => {
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

function closeKeyboard() {
  inputRef.value && inputRef.value.blur()
}
</script>

<template>
  <div>
    <div class="serch-wrap">
      <input v-model="keyword" placeholder="キーワードで検索" class="input-keyword" @keydown.enter="closeKeyboard" />
      <input type="date" v-model="startDate" class="input-startdate" />
      <span>〜</span>
      <input type="date" v-model="endDate" class="input-enddate" />
    </div>
    <div class="serch-num">検索結果：{{ filteredData.length }}件</div>
    <div class="item-list-wrap">
      <transition-group name="fade" tag="div">
        <div v-for="item in filteredData" :key="item.title" class="item-list">
          <a :href="item.youtube_url" class="item-list-link" target="_blank">
            <img :src="item.thumbnail_url" alt="" class="item-list-thumbnail" />
            <div>
              <h2 class="item-list-title">{{ item.title }}</h2>
              <p class="item-list-date">{{ item.release_date }}</p>
            </div>
          </a>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/mq' as *;

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.serch-wrap {
  margin: 24px 0;

  span {
    font-size: 1.8rem;
    padding: 0 12px;

    @include mq($until: desktop) {
      padding: 0px;
    }
  }
}

.input-keyword {
  width: 300px;
  height: 40px;
  font-size: 1.8rem;

  @include mq($until: desktop) {
    display: block;
    width: 100%;
    height: 50px;
    margin-bottom: 12px;
  }
}

.input-startdate {
  width: 150px;
  height: 40px;
  font-size: 1.8rem;
  margin-left: 24px;

  @include mq($until: desktop) {
    width: 35vw;
    margin-left: 0;
  }
}

.input-enddate {
  width: 150px;
  height: 40px;
  font-size: 1.8rem;

  @include mq($until: desktop) {
    width: 35vw;
  }
}

.serch-num {
  font-size: 1.8rem;
}

.item-list {
  border-radius: 20px;

  &:hover {
    background-color: #cef2ff;
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

  @include mq($until: desktop) {
    font-size: 1.4rem;
  }
}

.item-list-date {
  font-size: 1.4rem;
  margin-top: 8px;

  @include mq($until: desktop) {
    font-size: 1.2rem;
  }
}
</style>

