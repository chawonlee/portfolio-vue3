<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item">
          <a @click="scrollToSection('idHomeView')">HOME</a>
        </li>
        <li class="nav-item">
          <a @click="scrollToSection('idAboutView')">About</a>
        </li>
        <li class="nav-item">
          <a @click="scrollToSection('idSkillsView')">Skills</a>
        </li>
        <li class="nav-item">
          <a @click="scrollToSection('idProjectsView')">Projects</a>
        </li>
        <li class="nav-item">
          <a @click="scrollToSection('idCareerView')">Career</a>
        </li>
        <li class="nav-item">
          <a @click="scrollToSection('idContactView')">Contact</a>
        </li>
      </ul>
    </nav>
    <div class="marquee">
      <p class="marquee-text">
        THIS PORTFOLIO MADE BY Vue | Vuetify | Vue-Toastify | GSAP | Three.js |
        Swiper | Lenis. I HOPE YOU FIND SOME GOOD LUCK ON THIS PAGE ❤
        <span style="padding-right: 10px"> </span>
      </p>
    </div>
  </header>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

onMounted(() => {
  // 윈도우 로드되면 해당 함수 실행
  Marquee('.marquee', 0.4, false)
})
const scrollToSection = id => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const Marquee = (selector, speed, reverse) => {
  const parentSelector = document.querySelector(selector) // 클래스명을 인자로 받은 매개변수
  const clone = parentSelector.innerHTML // 해당 클래스 엘리먼트의 html 값을 clone으로 선언
  const firstElement = parentSelector.firstElementChild
  let i = 0
  // console.log(firstElement);
  parentSelector.insertAdjacentHTML('beforeend', clone)
  parentSelector.insertAdjacentHTML('beforeend', clone)
  parentSelector.insertAdjacentHTML('beforeend', clone)
  parentSelector.insertAdjacentHTML('beforeend', clone)

  const moveItem = () => {
    if (reverse) {
      firstElement.style.marginRight = `-${i}/2px`
    } else {
      firstElement.style.marginLeft = `-${i}/2px`
    }
    if (i > firstElement.clientWidth) i = 0
    i += speed
    requestAnimationFrame(moveItem)
  }
  requestAnimationFrame(moveItem) // 움직임을 계속해서 주기 위해 requestAnimationFrame 사용
}
</script>
<style lang="scss">
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  backdrop-filter: blur(3px);
  color: black;
  background: rgba(255, 255, 255, 0.566);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid #f8f0fc;
  z-index: 101;

  .nav-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50px;
    list-style: none;
    margin: 0;
    padding: 0;

    .nav-item {
      font-size: 16px;
      font-weight: 500;
      text-align: center;

      a {
        display: inline-block; /* background-clip: text 적용을 위해 inline-block 이상이어야 함 */
        color: rgba(0, 0, 0, 0.627); /* 기본 글자 색상 */
        text-decoration: none;
        transition: 0.3s ease; /* hover 시 부드럽게 변하도록 */
        font-size: 15px;
        font-weight: 600;
      }

      /* hover 시 텍스트 그라데이션 */
      a:hover {
        background: linear-gradient(
          to bottom,
          #745cec,
          #4c00ff
        ); /* 위->아래 보라~흰 */
        background-clip: text; /* 텍스트 영역만 배경 적용 */
        -webkit-background-clip: text; /* 웹킷 브라우저 호환 */
        color: transparent; /* 텍스트 자체 색상은 투명 */
        -webkit-text-fill-color: transparent; /* 웹킷 브라우저에서 텍스트 투명 */
      }
    }
  }

  .marquee {
    position: relative;
    display: flex;
    overflow: hidden; // 텍스트가 영역 밖으로 넘어가지 않도록 설정
    width: 100%;
    height: 30px; // marquee 영역 높이
    background: transparent; // 투명 배경 유지
    border-radius: 10px; // 부드러운 모서리

    /* 양쪽 끝에 그라데이션 마스크 적용 */
    mask-image: linear-gradient(
      to right,
      transparent,
      black 40%,
      black 60%,
      transparent
    );
    -webkit-mask-image: linear-gradient(
      to right,
      transparent,
      black 40%,
      black 60%,
      transparent
    );

    mask-repeat: no-repeat; // 마스크 반복 방지
    -webkit-mask-repeat: no-repeat;

    mask-size: 100% 100%; // 마스크 크기
    -webkit-mask-size: 100% 100%;

    .marquee-text {
      padding-top: 5px;
      display: inline-block;
      white-space: nowrap; // 텍스트가 줄바꿈되지 않도록 설정
      font-size: 0.8rem;
      font-weight: 400;
      color: #fff; // 텍스트 기본 색상
      animation:
        marquee 50s linear infinite,
        glow 1s ease-in-out infinite alternate; // 텍스트 애니메이션
    }
  }

  @keyframes marquee {
    from {
      transform: translateX(0); // 시작 위치
    }
    to {
      transform: translateX(-100%); // 왼쪽으로 이동
    }
  }
  // 텍스트 글로우 애니메이션
  @keyframes glow {
    from {
      text-shadow:
        0px 0px 4px #fff,
        0px 0px 4px #614ad3;
    }
    to {
      text-shadow:
        0px 0px 8px #fff,
        0px 0px 8px #614ad3;
    }
  }
}
</style>
