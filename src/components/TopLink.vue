<template>
  <a href="#nav" class="top-link">TOPへ</a>
</template>
<style lang="scss" scoped>
@use '../assets/scss/mq' as *;

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