<template>
  <section class="mobile-about-wrap">
    <section class="mobile-about-title">
      <div class="mobile-about-text">ABOUT</div>
      <img
        ref="checkSvg"
        src="@/assets/svg/check.svg"
        alt="check-svg"
        class="mobile-check-svg"
      />
    </section>
    <div class="mobile-intro">
      <div class="mobile-title">The journey is the reward</div>
      <div class="mobile-main-text">
        <div>저는 {{ displayText }} 입니다.</div>
        <v-btn
          @click="shuffleText"
          variant="text"
          :disabled="isRunning"
          color="#fff"
          ><v-icon icon="mdi-shuffle-variant" color="#f0c40d"
        /></v-btn>
      </div>
      <div class="mobile-detail-text">
        안녕하세요. 개발자 이채원입니다. <br />

        바람과 비에 흔들리면서도 곧게 뻗어 <br />아름답게 피어나는 꽃처럼,<br />

        저도 풀스택이라는 명확한 목표를 향해 <br />꾸준히 성장하고 있습니다.<br />

        새로운 기술을 배우고 도전하는 <br />과정이 쉽지는 않지만, <br />
        사람들과 협업하여 의미 있는 결과물을 <br />만들어내는 일에 큰 보람을
        느낍니다.<br />

        다양한 의견을 존중하며 최선의 해결책을 <br />함께 찾아가는 경험을 소중히
        여기며,<br />

        변화하는 기술과 트랜드에 적응하고 한 단계 <br />더 발전하는 개발자가
        되기 위해<br />
        끊임없이 노력하고 있습니다.<br />
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
//👉셔플 버튼 클릭 시
const shuffleText = () => {
  if (!isRunning.value) {
    isRunning.value = true
    runShuffle()

    // 5초 후 자동 멈춤
    setTimeout(() => {
      stopShuffle()
    }, 5000)
  }
}
//👉 텍스트 랜덤 제공
const runShuffle = () => {
  if (isRunning.value) {
    displayText.value =
      phrases.value[Math.floor(Math.random() * phrases.value.length)]
    intervalId.value = setTimeout(() => {
      runShuffle()
    }, 200)
  }
}
//👉2초 후 텍스트 랜덤 제공 중지
const stopShuffle = () => {
  clearTimeout(intervalId.value)
  isRunning.value = false
}

onMounted(() => {})
</script>
<style lang="scss">
.mobile-about-wrap {
  padding: 0;
  margin: 0;
  z-index: 1;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background: linear-gradient(to bottom, #000000, #626262);
  .mobile-about-title {
    position: relative; /* 자식 요소들의 기준점 설정 */
    font-family: 'Black Han Sans', sans-serif;
    font-weight: 400;
    font-style: normal;
    height: 20%;
    font-size: clamp(35px, 10vw, 65px);
    color: white; /* 텍스트를 흰색으로 설정 */
    text-shadow:
      0px 1px 3px rgba(80, 80, 80, 0.6),
      /* 살짝 밝은 그림자 */ 0px 3px 6px rgba(120, 120, 120, 0.4); /* 부드럽고 퍼짐 */
    .mobile-about-text {
      position: absolute;
      top: 50%; /* 수직 가운데 정렬 */
      left: 50%; /* 수평 가운데 정렬 */
      transform: translate(-50%, -50%); /* 가운데 정렬을 위한 보정 */
      z-index: 2; /* 텍스트가 이미지 위에 표시되도록 설정 */
      text-shadow:
        0px 1px 3px rgba(80, 80, 80, 0.6),
        0px 3px 6px rgba(120, 120, 120, 0.4); /* 부드럽고 퍼짐 */
    }

    .mobile-check-svg {
      position: absolute;
      top: 50%; /* SVG를 텍스트보다 약간 아래로 이동 */
      left: 50%; /* 수평 가운데 정렬 */
      transform: translate(-50%, -50%); /* 가운데 정렬 */
      z-index: 1; /* 텍스트 뒤로 배치 */
      width: 15vw;
      min-width: 200px;
      height: auto;
    }
  }
  .mobile-intro {
    width: 60vw;
    min-width: 300px;
    font-size: clamp(14px, 3vw, 14px);
    opacity: 1;
    z-index: 2;

    .mobile-title {
      font-weight: 600;
      color: #f0c40d;
    }

    .mobile-main-text {
      display: flex;
      color: white;
      justify-content: space-between;
      border-bottom: 1.5px solid;
      padding: 8px 0 2px 0;
      margin-bottom: 10px;
      align-items: center;
    }

    .mobile-detail-text {
      line-height: 2.2;
      color: white;
    }
  }
}
</style>
