<template>
  <section class="projects-wrap">
    <!--wave 상단 효과-->
    <div class="ocean">
      <div class="wave"></div>
      <div class="wave"></div>
    </div>

    <section class="projects-title">
      <div>PROJECTS</div>
    </section>
  </section>
</template>
<script setup>
import { onMounted, ref, onUnmounted } from 'vue'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {})
onUnmounted(() => {})
</script>
<style lang="scss">
.projects-wrap {
  position: relative;
  display: flex;
  flex-direction: column; // 자식 요소를 세로로 배치
  align-items: center; // 가로 정렬
  justify-content: flex-start; // 위에서부터 정렬
  width: 100%;
  height: 100vh; // 전체 높이를 자식 요소에 맞춤
  background-color: #006bff;
  z-index: 2;
  overflow: hidden;
  .project-popup {
  }
  .ocean {
    position: relative;
    top: 0;
    height: 15px;
    width: 100%;
    position: absolute;
    left: 0;
    background: rgba(0, 0, 0, 0.99);
    .wave {
      background: url(src/assets/svg/wave.svg) repeat-x;
      position: absolute;
      top: 0px;
      width: 6400px;
      height: 100px;
      animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
      transform: translate3d(0, 0, 0);
    }
    .wave:nth-of-type(2) {
      top: 10px;
      animation:
        wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
        swell 7s ease -1.25s infinite;
      opacity: 1;
    }
  }

  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }

  @keyframes swell {
    0%,
    100% {
      transform: translate3d(0, -25px, 0);
    }
    50% {
      transform: translate3d(0, -10px, 0);
    }
  }

  .projects-title {
    color: white;
    padding-top: 6%;
    font-family: 'Black Han Sans', sans-serif;
    font-weight: 400;
    font-style: normal;
    height: 15%;
    font-size: 4rem;
    text-shadow:
      1px 1px 1px rgba(0, 0, 0, 0.1),
      1px 2px 1px rgba(0, 0, 0, 0.15),
      1px 3px 1px rgba(0, 0, 0, 0.2),
      1px 4px 1px rgba(0, 0, 0, 0.25),
      1px 18px 6px rgba(0, 0, 0, 0.4),
      1px 22px 10px rgba(0, 0, 0, 0.3),
      1px 25px 35px rgba(0, 0, 0, 0.2),
      1px 30px 60px rgba(0, 0, 0, 0.15);
    margin-bottom: 20px; // 타이틀 아래 간격 조정
  }
}
</style>
