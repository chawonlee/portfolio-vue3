<template>
  <section class="about-wrap">
    <section class="about-title">
      <div>ABOUT</div>
    </section>
    <div class="about-container">
      <img src="@/assets/image/myPhoto1.jpg" width="30%" class="myPhoto" />
      <div class="intro">
        <div class="title">The journey is the reward</div>
        <div class="main-text">
          <div>저는 {{ displayText }} 입니다.</div>
          <v-btn
            @click="shuffleText"
            variant="text"
            :disabled="isRunning"
            color="#626463"
            ><v-icon icon="mdi-shuffle-variant" color="secondary"
          /></v-btn>
        </div>
        <div class="detail-text draggable">
          안녕하세요. 프론트엔드 개발자 이채원입니다. <br />

          바람과 비에 흔들리면서도 곧게 뻗어 아름답게 피어나는 꽃처럼,<br />

          저도 풀스택이라는 명확한 목표를 향해 꾸준히 성장하고 있습니다.<br />

          새로운 기술을 배우고 도전하는 과정이 쉽지는 않지만, <br />
          사람들과 협업하여 의미 있는 결과물을 만들어내는 일에 큰 보람을
          느낍니다.<br />

          다양한 의견을 존중하며 최선의 해결책을 함께 찾아가는 경험을 소중히
          여기며,<br />

          변화하는 기술과 트랜드에 적응하고 한 단계 더 발전하는 개발자가 되기
          위해<br />
          끊임없이 노력하고 있습니다.<br />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
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

onMounted(() => {
  //3초 후 셔플 함수 실행
  setTimeout(() => {
    shuffleText()
  }, 3000)
})

onBeforeUnmount(() => {})

//👉셔플 버튼 클릭 시
const shuffleText = () => {
  if (!isRunning.value) {
    isRunning.value = true
    runShuffle()

    // 2초 후 자동 멈춤
    setTimeout(() => {
      stopShuffle()
    }, 2000)
  }
}
//👉 텍스트 랜덤 제공
const runShuffle = () => {
  if (isRunning.value) {
    displayText.value =
      phrases.value[Math.floor(Math.random() * phrases.value.length)]
    intervalId.value = setTimeout(() => {
      runShuffle()
    }, 100)
  }
}
//👉2초 후 텍스트 랜덤 제공 중지
const stopShuffle = () => {
  clearTimeout(intervalId.value)
  isRunning.value = false
}
</script>
<style lang="scss">
.about-wrap {
  position: relative;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw; /* 원하는 너비 조정 */
  .about-title {
    font-family: 'Black Han Sans', sans-serif;
    font-weight: 400;
    font-style: normal;
    height: 15%;
    font-size: 4rem;
    text-shadow:
      1px 1px 1px #fff,
      1px 2px 1px #fff,
      1px 3px 1px #fff,
      1px 4px 1px #fff,
      1px 18px 6px rgba(16, 16, 16, 0.4),
      1px 22px 10px rgba(16, 16, 16, 0.2),
      1px 25px 35px rgba(16, 16, 16, 0.2),
      1px 30px 60px rgba(16, 16, 16, 0.4);
  }
  .about-container {
    width: auto;
    justify-content: center;
    align-items: center;
    grid-template-columns: 400px 700px; /* 첫 번째 칸은 1fr, 두 번째 칸은 2fr */
    grid-template-rows: auto; /* 세로는 1칸 */
    gap: 3rem; /* 칸 간의 간격 설정 (선택 사항) */
    display: grid;

    .myPhoto {
      width: 100%;
      border-radius: 10px;
      z-index: 2;
    }

    .intro {
      background-color: #fff;
      font-size: 1.2rem;
      opacity: 0.9;
      z-index: 2;

      .title {
        font-weight: 600;
        color: #433878;
      }

      .main-text {
        display: flex;
        justify-content: space-between;
        border-bottom: 1.5px solid;
        padding: 8px 0 2px 0;
        margin-bottom: 10px;
      }

      .detail-text {
        line-height: 2.2;
      }
    }
  }
}
</style>
