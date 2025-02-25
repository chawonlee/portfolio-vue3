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
    <section class="mobile-home-container">
      <heart />
    </section>
    <div class="mobile-home-detail">🩷하트를 터뜨려보세요!🩷</div>

    <!-- 별들 -->
    <div ref="starContainer" class="stars"></div>
  </section>
  <!-- 중앙 하단 더보기 -->
  <div class="mobile-scroll-down">
    <div>SCROLL</div>
  </div>
</template>
<script setup>
import { gsap } from 'gsap'
import heart from '@/components/heart.vue'
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
  // 별들 랜덤 배치
  createStars()
})

onBeforeUnmount(() => {})

// 별 랜덤 배치
const createStars = () => {
  const starContainer = document.querySelector('.stars')

  // 모델 중심 기준으로 원형 영역을 비우기 위한 반경 설정
  const radius = 0.25 // 모델 중심에서의 비어야 하는 영역의 반경

  // 기존 별들 삭제
  starContainer.innerHTML = ''

  for (let i = 0; i < 60; i++) {
    const star = document.createElement('div')
    star.classList.add('star')

    // 랜덤한 x, y 위치 설정 (원형 영역을 피하도록 설정)
    let x, y, distance
    do {
      x = Math.random() * 100 // 0~100% 사이의 랜덤 x 위치
      y = Math.random() * 100 // 0~100% 사이의 랜덤 y 위치

      // x, y의 중심으로부터의 거리 계산 (modelZ를 제외한 중심 기준으로)
      distance = Math.sqrt(Math.pow(x - 50, 2) + Math.pow(y - 50, 2))
    } while (distance < radius * 100) // 원형 영역을 피할 때까지 반복

    // 랜덤 위치 설정
    star.style.left = `${x}%`
    star.style.top = `${y}%`

    const randomDuration = Math.random() * 2 + 3
    star.style.animationDuration = `${randomDuration}s`
    star.style.animationTimingFunction = 'ease-in-out'
    starContainer.appendChild(star)
  }
}
</script>
<style lang="scss">
.mobile-home-wrap {
  padding: 0;
  margin: 0;
  height: 100vh;
  flex-direction: column;
  // transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw; /* 원하는 너비 조정 */
  background-color: #000;
  .stars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    .star {
      z-index: 0;
      position: absolute;
      width: 2px;
      height: 2px;
      background-color: white;
      border-radius: 50%;
      opacity: 0;
      animation: twinkle 1.5s infinite alternate;

      @keyframes twinkle {
        0% {
          opacity: 0.2;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
  .mobile-home-title {
    padding-bottom: 4%;
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
  .mobile-home-container {
    justify-content: center;
    align-items: center;
    .three-container {
      background-color: rgba(0, 0, 0, 0.8);
      pointer-events: auto;
      border-radius: 30px;
      width: 350px;
      height: 350px;
      overflow: hidden;
      #threeCanvas {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  .mobile-home-detail {
    padding: 15px 0;
    color: #fff;
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
  bottom: 30px; /* about-wrap 아래쪽에 위치 */
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
