<template>
  <div>
    <transition name="fade" mode="out-in">
      <div v-if="isIntroVisible" class="intro-background">
        <p class="intro-text medium-text">The journey is the reward.</p>
        <p class="intro-myName bold-text">
          <b>프론트엔드 개발자</b> 이채원 <b>입니다.</b>
        </p>
      </div>
    </transition>

    <baseLayout :isMobileMode="isMobileMode" />

    <CursorCustom />
  </div>
</template>

<script setup>
import Lenis from '@studio-freight/lenis'
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, onBeforeUnmount, nextTick, watchEffect } from 'vue'
import baseLayout from '@/components/baseLayout.vue'
//componets
import CursorCustom from './components/cursorCustom.vue'

const isIntroVisible = ref(true)

const lenis = new Lenis({
  duration: 1.5, // 부드러운 스크롤 속도
  easing: t => Math.min(1, 1.001 - Math.pow(2, -8 * t)), // easing 함수
  smooth: true, // 기본 부드러운 스크롤 활성화
  direction: 'vertical', // 스크롤 방향
})
const isMobileMode = ref(false)

onMounted(() => {
  lenis.stop()
  // 4초 후 intro를 숨기고 메인 화면으로 전환
  introVisible()
  lenis.start()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  window.addEventListener('resize', updateScreenSize)
  updateScreenSize() // 초기 로드 시에도 실행
  requestAnimationFrame(raf)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenSize)
})

const introVisible = () => {
  setTimeout(() => {
    isIntroVisible.value = false
  }, 4000)
}

// 화면 크기 변경 감지
const updateScreenSize = () => {
  let saveMobileMode = isMobileMode.value
  isMobileMode.value = document.documentElement.clientWidth < 1200

  if (saveMobileMode !== isMobileMode.value) {
    isIntroVisible.value = true
    introVisible()
  }
}
</script>

<style lang="scss">
.mobile-message,
.intro-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  overflow: hidden;
  z-index: 200;
  .intro-text {
    color: black;
    font-size: 24px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid;
    width: 21ch;
    animation:
      typing 2s steps(21, end),
      blink-caret 0.5s step-end infinite;
  }
  .intro-myName {
    color: transparent;
    padding-top: 4px;
    font-size: 24px;
    animation: fadeIn 1s ease forwards;
    animation-delay: 1.5s;
  }
}

/* 타이핑 애니메이션 */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 21ch;
  }
}

/* 커서 깜빡임 */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: black;
  }
}

/* fade 애니메이션 */
@keyframes fadeIn {
  from {
    color: transparent;
  }
  to {
    color: black; /* 원하는 글자색으로 설정 */
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.main-content {
  padding: 20px;
  text-align: center;
}

/* 커서 스타일 */
.Cursor {
  pointer-events: none;
  position: fixed;
  display: block;
  border-radius: 0;
  transform-origin: center center;
  mix-blend-mode: difference;
  top: 0;
  left: 0;
  z-index: 3000;
  filter: url('#goo');
}

.Cursor span {
  position: absolute;
  display: block;
  width: 26px;
  height: 26px;
  border-radius: 20px;
  background-color: white;
  transform-origin: center center;
  transform: translate(-50%, -50%);
}
</style>
