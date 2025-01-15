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

    <section class="projects-section"></section>
    <!-- 가로 스크롤 섹션 -->
    <section class="projects-container">
      <div class="projects-box" v-for="n in 8" :key="n">
        <div class="project-repre-img">
          <div class="hover-overlay">
            <div class="hover-overlay-title">CLICK ~!</div>
            <div class="hover-overlay-detail">자세히 보기</div>
          </div>
        </div>
        <div class="project-repre-detail">{{ n }}</div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const container = document.querySelector('.projects-container')

  // 전체 스크롤 길이 계산
  const totalScrollWidth = container.scrollWidth - window.innerWidth

  // GSAP 가로 스크롤 설정
  gsap.fromTo(
    container,
    { x: 0 }, // 초기 위치를 가장 왼쪽으로 설정
    {
      x: -totalScrollWidth, // 전체 너비만큼 이동
      ease: 'none',
      scrollTrigger: {
        trigger: '.projects-wrap', // projects-wrap을 트리거로 설정
        start: 'top top', // 타이틀이 화면 상단에 위치하면 시작
        end: () => `+=${container.scrollWidth}`, // 전체 스크롤 길이
        scrub: true, // 스크롤 동기화
        pin: '.projects-wrap', // wrap 전체를 고정
        anticipatePin: 1, // 고정 전후 부드러운 전환
      },
    },
  )
})
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

  .ocean {
    position: relative;
    top: 0;
    height: 15px;
    width: 100%;
    position: absolute;
    left: 0;
    background: #ffc107;
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

  .projects-section {
    display: flex;
  }

  .projects-container {
    display: flex;
    gap: 30px; // 박스 간격
    width: auto; // 고정 너비 대신 유동적인 너비 설정
    min-width: 100vw; // 최소 너비를 화면 크기로 설정
    margin: 8% 10% 0 80px;
    padding: 0 100px;
    height: 500px; // 박스 높이
    overflow: visible; // 스크롤 내 요소 잘림 방지
  }

  .projects-box {
    flex: 0 0 550px; // 각 박스의 너비를 명시적으로 설정
    height: 480px;
    margin: 0; // 간격은 `gap`으로 관리
    border: 1px solid #ccc;
    border-radius: 34px;
    overflow: hidden;
    position: relative;
    background-color: white;

    .project-repre-img {
      width: 100%;
      height: 60%; // 이미지가 차지하는 영역
      background-color: lightgray; // 기본 배경 색
      position: relative; // "자세히 보기" 글자를 위한 부모 위치 설정
      transition: opacity 0.3s ease; // 부드럽게 변경

      .hover-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.7); // 반투명 검정 배경
        color: white;
        font-size: 1.2rem;
        font-weight: bold;
        opacity: 0; // 초기 상태에서는 숨김
        transition: opacity 0.3s ease; // 부드럽게 나타나도록 설정
        .hover-overlay-title {
          position: absolute;
          padding: 4px 8px;
          border-radius: 30px;
          background-color: #006bff; // 반투명 검정 배경
          top: 36%;
          left: 35%;
          font-size: 0.7rem;
          font-weight: 900;
        }
        .hover-overlay-detail {
          border: 2px solid #ffc107;
          border-radius: 32px;
          padding: 10px;
          width: 200px;
          align-items: center;
          display: flex;
          justify-content: center;
        }
      }

      // Hover 상태에서 이미지 어둡게 및 "자세히 보기" 표시
      &:hover .hover-overlay {
        opacity: 1; // "자세히 보기" 표시
      }
    }

    .project-repre-detail {
      text-align: center;
      padding: 10px;
      background-color: white;
      transition: opacity 0.3s ease;
      opacity: 1; // 기본 상태에서는 텍스트 표시
    }

    // project-repre-detail이나 project-repre-img에 hover했을 때 overlay 표시
    &:hover .hover-overlay,
    &:hover .project-repre-detail:hover ~ .hover-overlay {
      opacity: 1;
    }
  }
}
</style>
