<template>
  <header class="mobileHeader">
    <v-btn @click="toggleMenu" variant="text" color="#fff">
      <v-icon
        :icon="isMenuOpen ? 'mdi-close' : 'mdi-menu'"
        color="#000"
        class="icon-transition"
        :class="{ rotate: isMenuOpen }"
        size="x-large"
      />
    </v-btn>
    <div class="mobile-marquee" v-if="!isMenuOpen">
      <p class="mobile-marquee-text">
        THIS PORTFOLIO MADE BY Vue | Vuetify | Vue-Toastify | GSAP | Three.js |
        Swiper | Lenis. I HOPE YOU FIND SOME GOOD LUCK ON THIS PAGE ❤
        <span style="padding-right: 10px"> </span>
      </p>
    </div>
  </header>

  <!-- 사이드 메뉴 박스 -->
  <div class="mobile-menu-box" :class="{ open: isMenuOpen }">
    <nav class="mobile-nav">
      <ul class="mobile-nav-list">
        <li class="mobile-nav-item">
          <a @click="closeMenu(), scrollToSection('idMobileHomeView')">HOME</a>
        </li>
        <li class="mobile-nav-item">
          <a @click="closeMenu(), scrollToSection('idMobileAboutView')"
            >About</a
          >
        </li>
        <li class="mobile-nav-item">
          <a @click="closeMenu(), scrollToSection('idMobileSkillsView')"
            >Skills</a
          >
        </li>
        <li class="mobile-nav-item">
          <a @click="closeMenu(), scrollToSection('idMobileProjectsView')"
            >Projects</a
          >
        </li>
        <li class="mobile-nav-item">
          <a @click="closeMenu(), scrollToSection('idMobileCareerView')"
            >Career</a
          >
        </li>
        <li class="mobile-nav-item">
          <a @click="closeMenu(), scrollToSection('idMobileContactView')"
            >Contact</a
          >
        </li>
      </ul>
    </nav>
  </div>

  <!-- 오버레이 (메뉴가 열릴 때 배경 클릭 시 닫기) -->
  <div v-if="isMenuOpen" class="overlay" @click="toggleMenu"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isMenuOpen = ref(false) // 메뉴 상태 변수
onMounted(() => {
  isMenuOpen.value = false
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value // 상태 토글
}

const closeMenu = () => {
  isMenuOpen.value = false // 메뉴 닫기
}

//메뉴 클릭 시 이동
const scrollToSection = id => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style lang="scss">
.mobileHeader {
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  backdrop-filter: blur(3px);
  color: black;
  background: rgba(255, 255, 255, 0.566);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid #f8f0fc;
  z-index: 100;
  align-items: center;
  .icon-transition {
    transition: transform 0.3s ease-in-out;
  }

  .rotate {
    transform: rotate(180deg);
  }

  .mobile-marquee {
    position: fixed;
    top: 50px;
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

    .mobile-marquee-text {
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
/* 오버레이 (배경 클릭 시 메뉴 닫힘) */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.566);
  backdrop-filter: blur(2px);
  z-index: 99;
}
/* 사이드 메뉴 박스 */
.mobile-menu-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: calc(100vh - 50px);
  top: 50px;
  background: rgba(255, 255, 255, 0.566);
  backdrop-filter: blur(5px);
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 100;
  padding: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
}

/* 메뉴가 열릴 때 (왼쪽에서 나옴) */
.mobile-menu-box.open {
  transform: translateX(0);
}

/* 네비게이션 리스트 스타일 */
.mobile-nav-list {
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  .mobile-nav-item {
    font-size: 30px;
    font-weight: 500;
    text-align: center;

    a {
      display: inline-block; /* background-clip: text 적용을 위해 inline-block 이상이어야 함 */
      color: rgba(0, 0, 0, 0.627); /* 기본 글자 색상 */
      text-decoration: none;
      transition: 0.3s ease; /* hover 시 부드럽게 변하도록 */
      font-size: 20px;
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
</style>
