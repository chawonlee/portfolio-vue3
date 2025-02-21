<template>
  <section class="mobile-home-wrap">
    <section class="mobile-home-title">
      <div class="mobile-home-title-main">
        <span>웹</span>
        <span class="color-purple">-</span>
        <span class="color-purple">프</span>
        <span class="color-purple">론</span>
        <span class="color-purple">트</span>
        <span class="color-purple">엔</span>
        <span class="color-purple">드</span>
      </div>
      <div class="mobile-home-title-sub">
        <span>포</span>
        <span>트</span>
        <span>폴</span>
        <span>리</span>
        <span>오</span>
      </div>
    </section>
  </section>
  <!-- 중앙 하단 더보기 -->
  <div class="mobile-scroll-down">
    <div>SCROLL</div>
    <v-icon icon="mdi-chevron-down" color="white" size="x-large" />
  </div>
</template>
<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import { onBeforeUnmount, onMounted, ref } from 'vue'

onMounted(() => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.mobile-home-wrap',
      start: 'top top',
      end: '+=300',
      scrub: true,
    },
  })

  timeline.fromTo(
    '.mobile-home-title-main span',
    { y: 20, opacity: 1 },
    {
      y: -60,
      opacity: 0.3,
      ease: 'power2.out',
      stagger: 0.1,
    },
    0,
  )

  timeline.fromTo(
    '.mobile-home-title-sub span',
    { y: 0, opacity: 1 },
    {
      y: -60,
      opacity: 0.2,
      ease: 'power2.out',
      stagger: 0.1,
    },
    1,
  )
})

onBeforeUnmount(() => {})
</script>
<style lang="scss">
.mobile-home-wrap {
  pointer-events: none; /* 마우스 이벤트를 차단 */
  height: 100vh;
  flex-direction: column;
  // transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw; /* 원하는 너비 조정 */
  background-color: #000;
  .mobile-home-title {
    padding-bottom: 8%;
    font-style: normal;
    color: white;
    font-size: 4rem;
    z-index: 3;
    text-shadow:
      1px 1px 1px #fff,
      1px 2px 1px #fff,
      1px 3px 1px #fff,
      1px 4px 1px #fff,
      1px 18px 6px rgba(16, 16, 16, 0.4),
      1px 22px 10px rgba(16, 16, 16, 0.2),
      1px 25px 35px rgba(16, 16, 16, 0.2),
      1px 30px 60px rgba(16, 16, 16, 0.4);
    .mobile-home-title-main {
      font-family: 'Galmuri9';
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: clamp(45px, 6vw, 120px);
    }
    .mobile-home-title-sub {
      font-family: 'GalmuriMono11';
      color: #ffc107;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      font-size: clamp(45px, 6vw, 120px);
    }
  }
}

/* 둥둥 떠다니는 애니메이션 */
@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px); /* 위로 20px 이동 */
  }
  100% {
    transform: translateY(0);
  }
}

.mobile-scroll-down {
  align-items: center;
  justify-items: center;
  position: absolute;
  bottom: 3%; /* about-wrap 아래쪽에 위치 */
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  opacity: 0.8;
  animation: fadeBlink 1.5s ease-in-out infinite; /* 깜빡이는 애니메이션 */
  z-index: 2; /* about-wrap 위에 표시 */
}
/* 깜빡이는 애니메이션 */
@keyframes fadeBlink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}
</style>
