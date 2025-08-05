<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">桃鈴ねね</router-link></li>
        <li><router-link to="/hologura">ホロぐら</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@use './assets/scss/mq' as *;

nav {
  margin-bottom: 1rem;
  font-size: 2.4rem;
  margin: 24px auto;

  ul {
    list-style: none;
    width: 960px;
    margin: 0 auto;
    padding: 12px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: #27c7ff;
    border-radius: 50px;

    @include mq($until: desktop) {
      width: 90vw;
    }
  }

  li {
    font-size: 2.2rem;
    text-align: center;

    @include mq($until: desktop) {
      font-size: 1.4rem;
    }

    &:hover {
      opacity: 0.5;
    }
    
    a {
      color: #fff;
      font-weight: bold;
    }
  }
}
</style>
