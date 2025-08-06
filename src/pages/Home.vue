<script setup lang="ts">
import dataJson from '../assets/json/momosuzunene.json'
import MainTitle from '../components/MainTitle.vue'
import SearchList from '../components/SearchList.vue'
</script>

<template>
  <div class="wapper" id="top">
    <MainTitle title="桃鈴ねねYouTube動画検索（〜2025/08/01）" />
    <SearchList :data="dataJson" />
    <a href="#nav" class="top-link">TOPへ</a>
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

.wapper {
  position: relative;
  width: 960px;
  margin: 0 auto;

  @include mq($until: desktop) {
    width: 100vw;
    padding: 12px 18px;
  }
}

.top-link {
  position: fixed;
  bottom: 100px;
  right: 100px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  font-size: 1.8rem;
  color: #fff;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in;

  @include mq($until: desktop) {
    bottom: 10px;
    right: 10px;
    width: 60px;
    height: 60px;
    border-radius: 50px;
    font-size: 1.4rem;
  }

  &:hover {
    opacity: 0.5;

    @include mq($until: desktop) {
      opacity: 1;
    }
  }
}
</style>

