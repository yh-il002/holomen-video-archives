<template>
  <div id="app">
    <nav>
      <router-link to="/">桃鈴ねねYouTube動画検索</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/hologura">ホロぐら検索</router-link>
    </nav>
    <p>↑↑↑↑↑ページ切り替え↑↑↑↑↑</p>
    <router-view />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
nav {
  margin-bottom: 1rem;
  font-size: 2.4rem;
}

p {
  font-size: 1.8rem;
}
</style>
