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

    <div id="projects-container" class="projects-container">
      <div class="projects-container-wrap">
        <ul class="projects-list">
          <li
            class="projects-item"
            v-for="(item, index) in projects"
            :key="index"
          >
            <div class="gsap-container">{{ item }}</div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref, onUnmounted } from 'vue'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// Dummy data for projects
const projects = ['1', '2', '3', '4', '5'] // Dummy data for cards

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

onMounted(() => {
  const panels = document.querySelectorAll('.projects-item')
  // const tabs = document.querySelectorAll(".tab-wrap > button");
  gsap.set('.box', {
    zIndex: i => panels.length + i,
  })
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.projects-wrap',
      markers: true,
      pin: true,
      start: 'top 10%',
      end: '+=200%',
      scrub: true,
      onUpdate: self => {
        const scrollProgress = self.progress * (panels.length - 1)
        // const activeIndex = Math.round(scrollProgress);
        // tabs.forEach((btn, i) => {
        //   btn.classList.toggle("active", i === activeIndex);
        // });
      },
    },
  })
  panels.forEach((element, i) => {
    const height = element.clientHeight + 80
    const gap = 15
    gsap.set(element, { position: 'absolute', top: `${height * i}` })
    tl.to(element, {
      y: `-${(height - gap) * i}`,
    }).addLabel(element.classList[1])
  })

  // tabs.forEach((button, index) => {
  //   button.addEventListener("click", () => {
  //     scrollToLabel(1, tl, button.dataset.tab);
  //   });
  // });
})
onUnmounted(() => {})

const scrollToLabel = (duration, timeline, label) => {
  gsap.to(window, {
    overwrite: 'auto',
    duration: duration,
    scrollTo: {
      autoKill: true,
      y: timeline.scrollTrigger.labelToScroll(label),
    },
  })
}
</script>
<style lang="scss">
.projects-wrap {
  position: relative;
  display: flex;
  flex-direction: column; // 자식 요소를 세로로 배치
  align-items: center; // 가로 정렬
  justify-content: center;
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
  .projects-container {
    padding: 4% 0 0 0;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .projects-list {
      position: relative;
      list-style: none;
      width: 100%;
      height: 100%;
      margin: 0;
      display: flex; /* Flexbox 적용 */
      align-items: center;
      justify-content: center; /* 자식 요소들을 가로로 중앙 정렬 */
      padding: 0;

      .projects-item {
        position: absolute;
        width: 80vw;
        height: 60vh;
        display: flex;
        left: 50%;
        transform: translateX(-50%);

        .gsap-container {
          width: 100%;
          height: 100%;
          background: white;
          border-radius: 40px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: bold;
          color: #333;
          position: relative;
        }
      }
    }
  }
}
</style>
