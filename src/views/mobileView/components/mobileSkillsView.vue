<template>
  <section class="mobile-skills-wrap">
    <section class="mobile-skills-title">
      <div class="mobile-skills-text">SKILLS</div>
      <img
        ref="checkSvg"
        src="@/assets/svg/check.svg"
        alt="check-svg"
        class="mobile-check-svg"
      />
    </section>
    <section class="mobile-skills-container">
      <swiper
        :pagination="{ clickable: true }"
        :effect="'cube'"
        :loop="true"
        :parallax="true"
        :grabCursor="true"
        :cubeEffect="{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }"
        :modules="modules"
        class="mobile-skill-swiper"
      >
        <swiper-slide
          v-for="(skills, category) in skillsData"
          :key="category"
          class="mobile-skill-swiper-slide"
        >
          <div class="mobile-skill-category">{{ category }}</div>
          <div class="mobile-skill-scroll-container" v-touch-scroll:vertical>
            <div
              v-for="(skill, index) in skills"
              :key="index"
              class="mobile-skill-box"
            >
              <div class="mobile-skill-nm">
                <img :src="skill.img" :alt="skill.skillNm" />
                <div>{{ skill.skillNm }}</div>
              </div>
              <div class="mobile-skill-detail">{{ skill.detail }}</div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </section>
  </section>
</template>
<script setup>
import skillsData from '@/views/mainView/components/data/skillData.json'
import { ref, onBeforeUnmount, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
// import required modules
import { EffectCube, Pagination } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'

const modules = [EffectCube, Pagination]
</script>
<style lang="scss">
.mobile-skills-wrap {
  position: relative;
  display: flex;
  flex-direction: column; // 자식 요소를 세로로 배치
  align-items: center; // 가로 정렬
  justify-content: center; // 위에서부터 정렬
  width: 100%;
  height: 100vh; // 전체 높이를 자식 요소에 맞춤
  z-index: 1;
  overflow: hidden;
  background: linear-gradient(to bottom, #626262, #dadada);

  .mobile-skills-title {
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
    .mobile-skills-text {
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

  .mobile-skills-container {
    padding-top: 18px;
    .mobile-skill-swiper {
      width: 86vw;
      height: 64vh;
      .mobile-skill-swiper-slide {
        background-color: #f0f0f0;
        .mobile-skill-category {
          background: linear-gradient(to bottom, #ffffff, #e3e3e3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          position: absolute;
          top: -32px;
          left: 50%;
          transform: translateX(-50%) skewX(-20deg);
          text-align: center;
          white-space: nowrap; // 긴 텍스트 줄바꿈 방지
          font-size: 1.2rem;
          font-weight: bold;
        }
        .mobile-skill-scroll-container {
          overflow-y: scroll;
          height: 100%;
          .mobile-skill-box {
            margin: 0 10px 10px 10px;
            display: block;
            padding: 10px;
            background-color: rgba(255, 255, 255);
            height: 90px;
            border-radius: 10px;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
            &:first-child {
              margin: 10px; // 첫 번째 요소만 적용
            }
            .mobile-skill-nm {
              display: flex;
              padding-bottom: 8px;
              align-items: center;
              font-size: 0.8rem;
              img {
                width: 25px;
                padding-right: 6px;
              }
            }
            .mobile-skill-detail {
              color: #4b5563;
              font-size: 0.86rem;
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.swiper-pagination {
  bottom: -36px !important;
  .swiper-pagination-bullet-active {
    background-color: #fff !important;
  }
}
</style>
