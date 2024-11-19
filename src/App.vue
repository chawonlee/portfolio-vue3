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

    <baseLayout />
    <CursorCustom />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import baseLayout from '@/components/baseLayout.vue'
import CursorCustom from './components/cursorCustom.vue'

const isIntroVisible = ref(true)

onMounted(() => {
  // 3초 후 intro를 숨기고 메인 화면으로 전환
  setTimeout(() => {
    isIntroVisible.value = false
  }, 3000)
})
</script>

<style lang="scss">
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
