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

    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'

const isIntroVisible = ref(true)

onMounted(() => {
  // 4초 후 intro를 숨기고 메인 화면으로 전환
  setTimeout(() => {
    isIntroVisible.value = false
  }, 5000)
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
  z-index: 1000;
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
    color: transparent; /* 처음에는 투명하게 설정 */
    padding-top: 4px;
    font-size: 24px;
    animation: fadeIn 1s ease forwards;
    animation-delay: 2s; /* 2초 뒤에 시작 */
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
  transition: opacity 1s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.main-content {
  padding: 20px;
  text-align: center;
}
</style>
