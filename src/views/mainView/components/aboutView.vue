<template>
  <section class="about-wrap">
    <img src="@/assets/image/myPhoto1.jpg" width="30%" class="myPhoto" />
    <div class="intro">
      <div class="title">About</div>
      <div>
        저는 {{ displayText }} 입니다.
        <button @click="shuffleText" :disabled="isRunning">🔀</button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
const phrases = ref([
  '열정이 넘치는 개발자',
  '꾸준히 성장하는 개발자',
  '도전적인 개발자',
  '협력 능력이 뛰어난 개발자',
  '문제 해결 능력이 뛰어난 개발자',
  '세부 사항에 주의를 기울이는 개발자',
  '팀워크를 중시하는 개발자',
  '사용자 경험에 집중하는 개발자',
  '시간 관리를 철저히 하는 개발자',
  '열린 마음으로 피드백을 수용하는 개발자',
  '안정성과 성능을 고려하는 개발자',
])
const displayText = ref('꾸준히 성장하는 개발자')
const intervalId = ref(null)
const isRunning = ref(false)

const shuffleText = () => {
  if (!isRunning.value) {
    isRunning.value = true
    runShuffle()

    // 3초 후 자동 멈춤
    setTimeout(() => {
      stopShuffle()
    }, 2000)
  }
}

const runShuffle = () => {
  if (isRunning.value) {
    displayText.value =
      phrases.value[Math.floor(Math.random() * phrases.value.length)]
    intervalId.value = setTimeout(() => {
      runShuffle()
    }, 100)
  }
}

const stopShuffle = () => {
  clearTimeout(intervalId.value)
  isRunning.value = false
}
</script>
<style lang="scss">
.about-wrap {
  width: 80%;
  display: flex;
  margin: 0 auto;
  gap: 80px;
  .myPhoto {
    border-radius: 10px;
  }
  .intro {
    font-size: 1.3rem;
    opacity: 0.8;
    margin: 5% 0;
    .title {
      font-weight: 600;
      color: #433878;
      opacity: 0.5;
    }
  }
}
</style>
