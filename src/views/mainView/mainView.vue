<template>
  <div class="mainView">
    <!-- Home -->
    <section id="idHomeView" class="homeView">
      <home />
    </section>
    <!-- About -->
    <section id="idAboutView" class="aboutView">
      <about />
    </section>
    <!-- Skills -->
    <section id="idSkillsView" class="skillsView">
      <skills />
    </section>
    <!-- Project -->
    <section id="idProjectsView" class="projectsView">
      <projects />
    </section>
    <!-- Career -->
    <section id="idCareerView" class="careerView">
      <career />
    </section>
    <!-- Contact -->
    <section id="idContactView" class="contactView">
      <contact />
    </section>
    <!--footer-->
    <footerView />
  </div>
  <v-btn
    v-show="showScrollTopButton"
    class="scroll-top-button"
    @click="scrollToTop"
    icon="mdi-arrow-up-bold-circle"
    color="#000"
  ></v-btn>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
//components
import home from './components/homeView.vue'
import about from './components/aboutView.vue'
import skills from './components/skillsView.vue'
import projects from './components/projectsView.vue'
import career from './components/careerView.vue'
import contact from './components/contactView.vue'
import footerView from '@/components/footer.vue'

// 버튼 보이기 여부 상태
const showScrollTopButton = ref(false)

// 스크롤 감지 이벤트 핸들러
const handleScroll = () => {
  //scrollY 값이 300 이상일때 true
  showScrollTopButton.value = window.scrollY > 300
}

// 부드러운 상단 스크롤 함수
const scrollToTop = () => {
  const scrollDuration = 1000 // 애니메이션 지속 시간
  const scrollStep = -window.scrollY / (scrollDuration / 16) //프레임 이동거리

  const scrollAnimation = () => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep)
      requestAnimationFrame(scrollAnimation)
    }
  }

  requestAnimationFrame(scrollAnimation) // 애니메이션 시작
}

onMounted(() => {
  //scroll 이벤트 추가
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  //scroll 이벤트 제거
  window.removeEventListener('scroll', handleScroll)
})
</script>
<style lang="scss">
.mainView {
  display: block;
}
.aboutView,
.skillsView,
.projectsView,
.careerView {
  width: 100%;
}
</style>
<style lang="scss">
.scroll-top-button {
  z-index: 2;
  position: fixed;
  bottom: 40px;
  right: 40px;
  padding: 10px 15px;
  font-size: 18px;
  color: #fff;
  border: none;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  opacity: 0.8;
  transition:
    opacity 0.3s,
    transform 0.3s;

  .mdi:before,
  .mdi-set {
    display: inline-block;
    font: normal normal normal 24px / 1 'Material Design Icons';
    font-size: 50px !important;
    text-rendering: auto;
    line-height: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
}
</style>
