<template>
  <section class="skills-wrap">
    <section class="skills-title">SKILLS</section>
    <section class="swiper-container">
      <Swiper
        ref="serviceSwiper"
        :slides-per-view="2"
        :space-between="20"
        :loop="true"
        :centered-slides="true"
        :free-mode="false"
        :allow-touch-move="true"
        @swiper="onSwiper"
      >
        <SwiperSlide @click="clickSlide('library', $event)">
          <skillSlideView subject="library" />
        </SwiperSlide>
        <SwiperSlide @click="clickSlide('FrontEnd', $event)">
          <skillSlideView subject="FrontEnd" />
        </SwiperSlide>
        <SwiperSlide @click="clickSlide('BackEnd', $event)">
          <skillSlideView subject="BackEnd" />
        </SwiperSlide>
        <SwiperSlide @click="clickSlide('ETC', $event)">
          <skillSlideView subject="ETC" />
        </SwiperSlide>
        <SwiperSlide @click="clickSlide('library', $event)">
          <skillSlideView subject="library" />
        </SwiperSlide>
        <SwiperSlide @click="clickSlide('FrontEnd', $event)">
          <skillSlideView subject="FrontEnd" />
        </SwiperSlide>
        <SwiperSlide @click="clickSlide('BackEnd', $event)">
          <skillSlideView subject="BackEnd" />
        </SwiperSlide>
        <SwiperSlide @click="clickSlide('ETC', $event)">
          <skillSlideView subject="ETC" />
        </SwiperSlide>
      </Swiper>
    </section>
    <!-- drag 설명 이미지 -->
    <img
      class="drag-instruction"
      src="@/assets/image/dragBox.png"
      alt="Drag Box!"
    />
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref, onBeforeUnmount } from 'vue'
import skillSlideView from './components/skillsSlideView.vue'

// 슬라이드 클릭
const clickSlide = (path, event) => {
  const currentTarget = event.currentTarget.classList
  const next = currentTarget.contains('swiper-slide-next')
  const prev = currentTarget.contains('swiper-slide-prev')
  const active = currentTarget.contains('swiper-slide-active')
  if (next) {
    serviceSwiper.value.slideNext() // 클릭한 슬라이드가 prev면 이전 슬라이드로 슬라이딩
  } else if (prev) {
    serviceSwiper.value.slidePrev() // 클릭한 슬라이드가 next면 다음 슬라이드로 슬라이딩
  } else if (active) {
  }
}

// 자동 슬라이드
const serviceSwiper = ref(null)
const onSwiper = swiperInstance => {
  serviceSwiper.value = swiperInstance
  // DOM 요소에 직접 터치 이벤트 추가
  serviceSwiper.value.wrapperEl.addEventListener('dragstart', slideStart)
  serviceSwiper.value.wrapperEl.addEventListener('dragend', slideEnd)
}

// 드래그 이벤트 (터치 이벤트)
const startX = ref(0)
const endX = ref(0)

const slideStart = event => {
  console.log(event.touches)
  event.preventDefault() // 기본 동작 방지
  if (event.touches && event.touches.length > 0) {
    startX.value = event.touches[0].clientX
  }
}
const slideEnd = event => {
  event.preventDefault() // 기본 동작 방지
  if (event.changedTouches && event.changedTouches.length > 0) {
    endX.value = event.changedTouches[0].clientX
    if (Math.abs(startX.value - endX.value) > 50) {
      if (startX.value - endX.value > 0) {
        // 오른쪽에서 왼쪽으로 드래그하면 next슬라이딩
        serviceSwiper.value.slideNext()
      }
      if (startX.value - endX.value < 0) {
        // 왼쪽에서 오른쪽으로 드래그하면 prev슬라이딩
        serviceSwiper.value.slidePrev()
      }
    }
  }
}

// 이벤트 및 타이머 해제
onBeforeUnmount(() => {
  // 컴포넌트가 해제되면 이벤트 제거
  if (serviceSwiper.value && serviceSwiper.value.wrapperEl) {
    serviceSwiper.value.wrapperEl.removeEventListener('touchstart', slideStart)
    serviceSwiper.value.wrapperEl.removeEventListener('touchend', slideEnd)
  }
})
</script>

<style lang="scss">
.skills-wrap {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffc107;
  z-index: 2;

  .skills-title {
    height: 20%;
    font-size: 5rem;
    text-shadow:
      1px 1px 1px #fff,
      1px 2px 1px #fff,
      1px 3px 1px #fff,
      1px 4px 1px #fff,
      1px 5px 1px #fff,
      1px 6px 1px #fff,
      1px 7px 1px #fff,
      1px 8px 1px #fff,
      1px 18px 6px rgba(16, 16, 16, 0.4),
      1px 22px 10px rgba(16, 16, 16, 0.2),
      1px 25px 35px rgba(16, 16, 16, 0.2),
      1px 30px 60px rgba(16, 16, 16, 0.4);
    font-weight: 900;
  }

  .swiper-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: calc(80vh / 1.4);
    overflow: visible;

    .swiper {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .swiper-slide {
        transform: scale(0.8);
        transition: all 0.3s ease;
        height: 100%;
        width: calc((100% - 60px) / 2.4);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        line-height: 1.5;
        border-radius: 30px;
        box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.15);
        background-color: white;
        opacity: 0.8;

        em {
          font-family: 'Gmarket Sans';
          // font-size: 20px;/
          font-weight: 600;
        }

        span {
          // font-size: 16px;
          font-weight: 600;
        }

        &.swiper-slide-active {
          transform: scale(1);
          opacity: 1;
          transition: all 0.7s ease;
          z-index: 2; /* 활성 슬라이드가 앞에 보이도록 설정 */
        }
      }
    }
  }
}

// 이미지 스타일 추가
.drag-instruction {
  position: absolute;
  top: 15%; /* 위에서 20% */
  left: 15%; /* 왼쪽에서 10% */
  width: 100px; /* 이미지 크기 */
  height: auto; /* 비율 유지 */
  z-index: 3; /* 글자 위로 올라오도록 설정 */
  animation: moveSideToSide 3s ease-in-out infinite;
}

/* 좌우 이동 애니메이션 */
@keyframes moveSideToSide {
  0% {
    transform: translateX(0); /* 초기 위치 */
  }
  50% {
    transform: translateX(20px); /* 오른쪽으로 이동 */
  }
  100% {
    transform: translateX(0); /* 다시 초기 위치 */
  }
}
</style>
