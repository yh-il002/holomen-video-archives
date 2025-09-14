<template>
  <div class="wrapper">
    <h2>{{ props.talent }}</h2>
    <div class="elapsed">
      <p v-if="error" class="err">{{ error }}</p>
      <template v-else>
        <div class="grid">
          <div class="box"><div class="num">{{ YY }}</div><div class="label">年</div></div>
          <div class="box"><div class="num">{{ dd }}</div><div class="label">日</div></div>
          <div class="box"><div class="num">{{ hh }}</div><div class="label">時間</div></div>
          <div class="box"><div class="num">{{ mm }}</div><div class="label">分</div></div>
          <div class="box"><div class="num">{{ ss }}</div><div class="label">秒</div></div>
        </div>
        <p class="meta">デビュー日：{{ startDateText }}</p>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
  talent: { type: String, default: '' },
  start: { type: String, default: '' },
})

const error = ref('')
const startDate = ref(null) // Date | null
const startDateText = computed(() => startDate.value ? formatYmdHms(startDate.value) : '')

const nowMs = ref(Date.now())        // ★ 現在時刻(ミリ秒)をリアクティブに保持
const elapsedMs = ref(0)
let timerId = null

function pad(n){ return String(n).padStart(2,'0') }
function formatYmdHms(d){
  return `${d.getFullYear()}/${pad(d.getMonth()+1)}/${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
}
function parseYmdHms(str){
  const re = /^\s*(\d{4})\/(\d{1,2})\/(\d{1,2})\s+(\d{1,2}):(\d{1,2}):(\d{1,2})\s*$/
  const m = re.exec(str)
  if(!m) return null
  const [_, y, mo, d, h, mi, s] = m.map(Number)
  if(mo<1||mo>12||d<1||d>31||h>23||mi>59||s>59) return null
  const dt = new Date(y, mo-1, d, h, mi, s, 0)
  // 不正日付の弾き（例: 2/31 -> 3/2）
  if(dt.getFullYear()!==y || (dt.getMonth()+1)!==mo || dt.getDate()!==d ||
     dt.getHours()!==h || dt.getMinutes()!==mi || dt.getSeconds()!==s) return null
  return dt
}

function initStart(){
  error.value = ''
  if(props.start && props.start.trim()){
    const dt = parseYmdHms(props.start)
    if(!dt){
      error.value = 'start の形式が正しくありません（例：2025/01/01 00:00:00）'
      startDate.value = null
      elapsedMs.value = 0
      return
    }
    startDate.value = dt
  }else{
    startDate.value = new Date() // 未指定なら今
  }
  tick() // 即時反映
}

function tick(){
  nowMs.value = Date.now() // ★ 現在時刻を毎秒更新
  if(!startDate.value){ elapsedMs.value = 0; return }
  const diff = nowMs.value - startDate.value.getTime()
  elapsedMs.value = Math.max(0, diff)
}

onMounted(() => {
  initStart()
  timerId = setInterval(tick, 1000)
})
onBeforeUnmount(() => {
  if(timerId) clearInterval(timerId)
})
watch(() => props.start, initStart)

/**
 * 年・日・時・分・秒への分解
 * - 年は「起点の記念日を何回越えたか」で計算（閏年にも対応）
 * - 年を切り出した残り時間を日/時/分/秒に分解
 */
const nowDate = computed(() => new Date(nowMs.value))

const YY = computed(() => {
  if(!startDate.value) return '0'
  if(nowMs.value < startDate.value.getTime()) return '0'
  let years = nowDate.value.getFullYear() - startDate.value.getFullYear()
  const anniv = new Date(startDate.value)
  anniv.setFullYear(startDate.value.getFullYear() + years)
  if(anniv > nowDate.value) {
    years -= 1
  }
  return String(Math.max(0, years))
})

const remainderMsAfterYears = computed(() => {
  if(!startDate.value) return 0
  const yearsNum = Number(YY.value)
  const base = new Date(startDate.value)
  base.setFullYear(base.getFullYear() + yearsNum)
  return Math.max(0, nowMs.value - base.getTime())
})

const totalSeconds = computed(() => Math.floor(remainderMsAfterYears.value / 1000))
const dd = computed(() => String(Math.floor(totalSeconds.value / (24*3600))))
const hh = computed(() => {
  const rem = totalSeconds.value % (24*3600)
  return String(Math.floor(rem/3600)).padStart(2,'0')
})
const mm = computed(() => {
  const rem = totalSeconds.value % 3600
  return String(Math.floor(rem/60)).padStart(2,'0')
})
const ss = computed(() => String(totalSeconds.value % 60).padStart(2,'0'))
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
}

h2 {
  font-size: 2.8rem;
}

.elapsed {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Hiragino Sans", "Noto Sans JP", sans-serif;
}

.grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(60px, 1fr));
  gap: 8px;
  margin: 8px 0;
}

.box {
  background: #f6f7f9;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
}

.num {
  font-size: 28px;
  font-weight: 800;
}

.label {
  font-size: 12px;
  color: #666;
}

.meta {
  font-size: 12px;
  color: #666;
}

.err {
  color: #c00;
  font-weight: 700;
}
</style>
