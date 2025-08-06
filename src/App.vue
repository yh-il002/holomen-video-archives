<template>
  <div id="app">
    <nav id="nav">
      <ul>
        <li><router-link to="/">このサイトは？</router-link></li>
        <li><router-link to="/hologura">ホロぐら</router-link></li>
        <li><router-link to="/momosuzunene">桃鈴ねね</router-link></li>
        <li><router-link to="/omaruporuka">尾丸ポルカ</router-link></li>
        <li><router-link to="/ichijouririka">一条莉々華</router-link></li>
        <li><router-link to="/juufuuteiraden">儒烏風亭らでん</router-link></li>
        <li><router-link to="/nanashimumei">NanashiMumei</router-link></li>
        <li><router-link to="/ourokronii">OuroKronii</router-link></li>
      </ul>
    </nav>
    <div class="wapper">
      <router-view />
    </div>
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
    grid-template-columns: repeat(4, 1fr);
    row-gap: 12px;
    column-gap: 8px;

    @include mq($until: desktop) {
      width: 90vw;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  li {
    font-size: 2.2rem;
    text-align: center;
    padding: 8px 0;
    background-color: #27c7ff;
    border-radius: 50px;

    @include mq($until: desktop) {
      font-size: 1.2rem;
    }

    &:hover {
      opacity: 0.5;
    }
    
    a {
      color: #fff;
      font-weight: bold;
      display: inline-block;
      width: 100%;
    }
  }
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
</style>
