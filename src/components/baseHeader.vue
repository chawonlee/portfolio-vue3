<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item"><a>About</a></li>
        <li class="nav-item"><a>Skills</a></li>
        <li class="nav-item"><a>Projects</a></li>
        <li class="nav-item"><a>Career</a></li>
        <li class="nav-item"><a>Contact</a></li>
      </ul>
    </nav>
    <div class="marquee">
      <p class="marquee-text">
        THIS PORTFOLIO MADE BY Vue | Vuetify | SCSS | GSAP | Swiper |
        Vue-Toastify. I HOPE YOU FIND FOME GOOD LUCK ON THIS PAGE ❤
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
  background: rgba(255, 255, 255, 0.29);
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
        text-decoration: none;
        color: #433878;
        font-weight: 500;
        transition: color 0.3s;

        &:hover {
          color: #007bff;
        }
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
      font-size: 0.7rem;
      font-weight: 400;
      color: #433878; // 텍스트 기본 색상
      animation:
        marquee 50s linear infinite,
        glow 3s ease-in-out infinite alternate; // 텍스트 애니메이션
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
        0px 0px 2px #614ad380,
        0px 0px 1px #614ad39d,
        0px 0px 6px #9b27b070,
        0px 0px 5px #e1bee7;
    }
    to {
      text-shadow:
        0px 0px 4px #614ad398,
        0px 0px 3px #ffffff,
        0px 0px 5px #d1c4e9,
        0px 0px 8px #ffffff;
    }
  }
}
</style>
