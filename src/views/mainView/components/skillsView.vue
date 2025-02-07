<template>
  <section class="skills-wrap">
    <section class="skills-title">
      <div class="skills-text">SKILLS</div>
      <img
        ref="checkSvg"
        src="@/assets/svg/check.svg"
        alt="check-svg"
        class="check-svg"
      />
    </section>
    <section class="skills-container">
      <div class="skills-slide-content">
        <skillSlideView
          class="skills-slide-view"
          v-for="(skills, category) in skillData"
          :key="category"
          :subject="category"
          :content="skills"
        />
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, onBeforeUnmount, onMounted } from 'vue'
import skillSlideView from './components/skillsSlideView.vue'
import { gsap } from 'gsap'
import skillData from './data/skillData.json'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const container = document.querySelector('.skills-slide-content')

  // 전체 스크롤 길이 계산
  const totalScrollWidth = container.scrollWidth
  // ScrollTrigger 생성
  gsap.fromTo(
    container,
    { x: 0 }, // 초기 위치
    {
      x: -totalScrollWidth, // 전체 너비만큼 이동
      ease: 'none',
      scrollTrigger: {
        trigger: '.skills-wrap', // 트리거 대상
        start: 'top top', // 시작 지점
        end: () => `+=${Math.max(totalScrollWidth) * 1.2}`, // 전체 스크롤 길이
        scrub: true, // 스크롤 동기화
        pin: '.skills-wrap', // wrap 고정
        invalidateOnRefresh: true, // 화면 크기 변화 시 갱신
      },
    },
  )
})

// 이벤트 및 타이머 해제
onBeforeUnmount(() => {})
</script>

<style lang="scss" scoped>
.skills-wrap {
  pointer-events: none;
  position: relative;
  display: flex;
  flex-direction: column; // 자식 요소를 세로로 배치
  align-items: center; // 가로 정렬
  justify-content: center; // 위에서부터 정렬
  width: 100%;
  height: 100vh; // 전체 높이를 자식 요소에 맞춤
  z-index: 1;
  overflow: hidden;
  pointer-events: none; /* 마우스 이벤트를 차단 */

  .skills-title {
    position: relative; /* 자식 요소들의 기준점 설정 */
    font-family: 'Black Han Sans', sans-serif;
    font-weight: 400;
    font-style: normal;
    height: 20%;
    font-size: clamp(40px, 10vw, 65px);
    color: white; /* 텍스트를 흰색으로 설정 */
    text-shadow:
      0px 1px 3px rgba(80, 80, 80, 0.6),
      /* 살짝 밝은 그림자 */ 0px 3px 6px rgba(120, 120, 120, 0.4); /* 부드럽고 퍼짐 */
    .skills-text {
      position: absolute;
      top: 50%; /* 수직 가운데 정렬 */
      left: 50%; /* 수평 가운데 정렬 */
      transform: translate(-50%, -50%); /* 가운데 정렬을 위한 보정 */
      z-index: 2; /* 텍스트가 이미지 위에 표시되도록 설정 */
      text-shadow:
        0px 1px 3px rgba(80, 80, 80, 0.6),
        0px 3px 6px rgba(120, 120, 120, 0.4); /* 부드럽고 퍼짐 */
    }

    .check-svg {
      position: absolute;
      top: 50%; /* SVG를 텍스트보다 약간 아래로 이동 */
      left: 50%; /* 수평 가운데 정렬 */
      transform: translate(-50%, -50%); /* 가운데 정렬 */
      z-index: 1; /* 텍스트 뒤로 배치 */
      width: 15vw;
      min-width: 260px;
      height: auto;
    }
  }

  .skills-container {
    margin: 2% 0% 0 5%;
    padding: 0 0 0 100px;
    display: flex;
    width: 0%;
    height: 68vh;
    overflow: visible; /* 텍스트 및 요소 잘림 방지 */

    .skills-slide-title {
      position: relative;
      z-index: 15;
      width: 100vw;
      max-height: 68vh; /* 최대 높이 제한 */
    }
    .skills-slide-content {
      display: flex;
      gap: 40px; // 박스 간격
      width: auto; // 고정 너비 대신 유동적인 너비 설정
      overflow: visible; // 스크롤 내 요소 잘림 방지
      .skill-slide-view {
        flex: 0 0 1000px; // 각 박스의 너비를 명시적으로 설정
        height: 800px;
        margin: 0; // 간격은 `gap`으로 관리
        overflow: hidden;
        position: relative;
      }
    }
  }
}
</style>
