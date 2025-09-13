<template>
  <div class="wrapper">
    <div>
      <h2>今年が終わるまで</h2>
      <p>{{ yearCountdown }}</p>
      <h2>次の週末まで</h2>
      <p>{{ weekCountdown }}</p>
      <h2>今日が終わるまで</h2>
      <p>{{ dayCountdown }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const yearCountdown = ref('')
const weekCountdown = ref('')
const dayCountdown = ref('')
let timerId

function updateCountdown() {
  const now = new Date()

  // --- 今年の終わりまで ---
  const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59)
  const diffYear = endOfYear - now

  if (diffYear <= 0) {
    yearCountdown.value = '00日00時間00分00秒'
  } else {
    const days = Math.floor(diffYear / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diffYear / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diffYear / (1000 * 60)) % 60)
    const seconds = Math.floor((diffYear / 1000) % 60)

    yearCountdown.value = `${String(days).padStart(2, '0')}日` +
      `${String(hours).padStart(2, '0')}時間` +
      `${String(minutes).padStart(2, '0')}分` +
      `${String(seconds).padStart(2, '0')}秒`
  }

  // --- 今週の終わりまで（金曜23:59:59） ---
  const dayOfWeek = now.getDay() // 0:日曜, 1:月曜, ..., 5:金曜, 6:土曜
  const daysUntilFriday = (5 - dayOfWeek + 7) % 7
  const endOfWeek = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + daysUntilFriday,
    23, 59, 59
  )
  const diffWeek = endOfWeek - now

  if (diffWeek <= 0) {
    weekCountdown.value = '00日00時間00分00秒'
  } else {
    const days = Math.floor(diffWeek / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diffWeek / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diffWeek / (1000 * 60)) % 60)
    const seconds = Math.floor((diffWeek / 1000) % 60)

    weekCountdown.value = `${String(days).padStart(2, '0')}日` +
      `${String(hours).padStart(2, '0')}時間` +
      `${String(minutes).padStart(2, '0')}分` +
      `${String(seconds).padStart(2, '0')}秒`
  }

  // --- 今日の終わりまで ---
  const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59)
  const diffDay = endOfDay - now

  if (diffDay <= 0) {
    dayCountdown.value = '00時間00分00秒'
  } else {
    const hours = Math.floor(diffDay / (1000 * 60 * 60))
    const minutes = Math.floor((diffDay / (1000 * 60)) % 60)
    const seconds = Math.floor((diffDay / 1000) % 60)

    dayCountdown.value = `${String(hours).padStart(2, '0')}時間` +
      `${String(minutes).padStart(2, '0')}分` +
      `${String(seconds).padStart(2, '0')}秒`
  }
}

onMounted(() => {
  updateCountdown()
  timerId = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(timerId)
})
</script>

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

  h1 {
    font-size: 3.6rem;
    margin-bottom: 48px;
  }

  h2 {
    font-size: 2.4rem;
  }

  p {
    font-size: 4rem;
    margin-bottom: 34px;
    letter-spacing: 2px;

    @include mq($until: desktop) {
      font-size: 2.8rem;
    }
  }
}

</style>
