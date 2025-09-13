<template>
  <div class="wrapper">
    <h1>このサイトは？</h1>
    <p>ホロライブ所属タレントさんの過去のYouTube動画を検索できるサイトです。<br>YouTube上で ”歌枠” 等で検索をした時に、過去のもの全てが出てこないことがあり、一覧で全てを見れる仕組みがほしかったので自分のために作りました。<br>今後は検索できるタレントさんを増やしていく予定です。</p>
    <a href="https://x.com/house_mannequin" target="_blank">ハウスマヌカン🍑🥟HouseMannequin（X（旧Twitter））</a>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/mq' as *;

.wrapper {
  width: 80%;
  margin: 0 auto;
  padding-top: 40px;

  @include mq($until: desktop) {
    width: 100%;
    padding-top: 10px;
  }
}

h1 {
  font-size: 2.8rem;
  margin-bottom: 24px;
}

p {
  font-size: 1.8rem;
  margin-bottom: 24px;
}

a {
  font-size: 2rem;
  width: 80%;
  display: block;
}

</style>
