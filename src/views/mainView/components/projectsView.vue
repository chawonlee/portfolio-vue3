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
            v-for="(project, projectIdx) in projectsData.list"
            :key="projectIdx"
          >
            <div class="projects-item-container">
              <div class="projects-item-left">
                <!-- swiper들을 감싸는 래퍼 div 추가 -->
                <div class="swiper-container">
                  <projectSwiper :project="project" />
                </div>
                <div class="projects-detail-container">
                  <div class="projects-item-left-title">
                    {{ project.projectNm }}
                  </div>
                  <div class="projects-item-left-period">
                    {{ project.period }}
                  </div>
                  <div class="projects-item-left-skills">
                    <span
                      class="badge"
                      v-for="(skill, skillIdx) in project.skills"
                      :key="skillIdx"
                    >
                      {{ skill }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="projects-item-right">
                <div class="projects-item-right-wrap">
                  <div
                    v-for="(contents, contentIdx) in project.detail"
                    :key="contentIdx"
                    class="item-contents"
                  >
                    {{ contentIdx + 1 + `. ` + contents.title }}
                    <div
                      v-for="(sub, subIdx) in contents.content"
                      :key="subIdx"
                      class="item-sub"
                    >
                      <div>{{ '■ ' + sub.title }}</div>
                      <div
                        v-for="(detail, detailIdx) in sub.content"
                        :key="detailIdx"
                        class="item-detail"
                      >
                        {{ '-' + detail }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
import projectsData from './data/projectsData.json'
import projectSwiper from './components/projectSwiper.vue'

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
      pin: true,
      start: 'top 0%',
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
    const height = element.clientHeight + 200
    const gap = 10
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
  pointer-events: auto !important;
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
    padding: 3.5% 0 0 0;
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
        width: 90vw;
        height: 69vh;
        max-width: 1400px;
        max-height: 800px;
        display: flex;
        left: 50%;
        transform: translateX(-50%);

        .projects-item-container {
          overflow: hidden;
          box-sizing: border-box; /* 패딩 포함 높이 계산 */
          display: grid;
          grid-template-columns: 45% 55%;
          align-items: stretch; /* 자식 아이템들이 컨테이너 높이를 꽉 채움 */
          width: 100%;
          height: 100%;
          padding: 1rem;
          background: white;
          border-radius: 30px;
          box-shadow:
            0 10px 20px rgba(0, 0, 0, 0.2),
            inset 0 2px 6px rgba(0, 0, 0, 0.2);
          position: relative;
          .projects-item-left,
          .projects-item-right {
            align-self: stretch;
          }
          .projects-item-left {
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-rows: 60% 30%; // 상단은 swiper 영역, 하단은 기타 콘텐츠
            // 추가: 내부의 첫 번째 그리드 셀에 해당하는 래퍼에 높이 100% 적용
            .swiper-container {
              height: auto;
              display: grid;
              grid-template-rows: 80% 20%; // 메인 swiper와 썸네일 swiper의 비율 조정
            }
            .projects-detail-container {
              .projects-item-left-title {
                font-weight: 600;
                font-size: 1.2rem;
                // padding: 10px 0;
              }
              .projects-item-left-period {
                color: #4b5563;
                font-size: 0.9rem;
                padding: 10px 0;
              }
              .projects-item-left-skills {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;

                .badge {
                  padding: 10px 0;
                  background-color: #dbeafe;
                  color: #1e40af;
                  padding: 0.5rem 0.5rem;
                  border-radius: 999px; /* 둥근 뱃지 형태 */
                  font-size: 0.7rem;
                  font-weight: bold;
                }
              }
            }
          }
          .projects-item-right {
            padding-left: 1rem;
            display: flex;
            align-items: stretch;
            max-height: 714px;
            height: calc(65.5vh);
            max-height: 780px;

            .projects-item-right-wrap {
              padding: 5px;
              flex: 1; // 남은 공간을 꽉 채우게 함
              min-height: 0; // 자식의 최소 높이를 0으로 설정해 부모 높이 제한 적용
              width: 100%;
              height: 100%;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 그림자 효과
              border-radius: 10px;
              overflow-y: scroll;
              .item-contents {
                padding-left: 5px;
                padding-bottom: 3px;
                font-weight: 900;
                font-size: 1rem;
                .item-sub {
                  padding-left: 10px;
                  padding-bottom: 3px;
                  font-weight: 600;
                  font-size: 0.9rem;
                  .item-detail {
                    padding-left: 15px;
                    font-size: 0.9rem;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 100%;
  width: 100%;
}

.mySwiper {
  height: 100%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.swiper-slide video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
