<template>
  <section class="skills-section">
    <!-- Circle and Title -->
    <div class="skills-title-circle"></div>
    <div class="skills-sub-title" v-html="animatedText"></div>

    <!-- Skill Grid -->
    <div class="skill-grid">
      <div
        v-for="(item, index) in skillData[props.subject]"
        :key="index"
        class="skill-item"
      >
        <img :src="item.img" :alt="item.skillNm" />
        <div class="skill-name">{{ item.skillNm }}</div>
        <div class="skill-detail">{{ item.detail }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import skillData from '../data/skillData.json'

const props = defineProps({
  subject: { type: String, default: '' },
})

const animatedText = ref('')

onMounted(async () => {
  animatedText.value = `Skills in ${props.subject} Development`
    .split('')
    .map((char, index) => {
      if (index >= 10 && index < 10 + props.subject.length) {
        return `<span class="animated-char" style="animation-delay: ${index * 0.1}s; color: #ffc107; -webkit-text-stroke: 1px black;">${char}</span>`
      }
      if (char === ' ') {
        return `<span class="animated-space" style="display: inline-block; width: 0.5rem;"></span>`
      }
      return `<span class="animated-char" style="animation-delay: ${index * 0.1}s;">${char}</span>`
    })
    .join('')

  await nextTick() // DOM이 완전히 렌더링된 후 실행

  document.querySelectorAll('.animated-char').forEach(el => {
    el.classList.add('jump') // jump 클래스를 추가
  })
})
</script>

<style lang="scss">
.skills-section {
  position: relative;
  padding: 1rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* 넘치는 요소 숨기기 */
  height: 100%; /* 부모 컨테이너의 높이 */
  display: flex;
  flex-direction: column; /* 세로 정렬 */
}

.skills-title-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ffc107;
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 2; /* 타이틀이 위로 보이도록 설정 */
}

.skills-sub-title {
  position: relative;
  margin-left: 45px; /* 원(circle) 오른쪽으로 이동 */
  margin-top: 0.1vw; /* 상단 여백 */
  font-size: 1.4vw;
  font-weight: bold;
  color: #212121;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px #fff;
  z-index: 2; /* 타이틀이 위로 보이게 */
  margin-bottom: 0.6rem; /* 타이틀 아래 여백 */
  text-shadow:
    1px 1px 1px #fff,
    1px 2px 1px #fff,
    1px 3px 1px #fff,
    1px 18px 6px rgba(16, 16, 16, 0.4),
    1px 25px 35px rgba(16, 16, 16, 0.2),
    1px 30px 60px rgba(16, 16, 16, 0.4);

  span {
    display: inline-block;
    transform: translateY(0);
    transition: transform 1s ease;

    &.jump {
      animation: jump 2s ease infinite; //무한반복
    }
  }
}
@keyframes jump {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0);
  }
}

.skill-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(150px, 1fr)
  ); /* 반응형 그리드 */
  gap: 1rem; /* 박스 간 간격 */
  width: 100%; /* 부모 너비 채우기 */
  height: 100%; /* 타이틀 제외한 높이 */
  box-sizing: border-box; /* 여백 포함 크기 계산 */
  overflow-y: auto; /* 스크롤 활성화 */
  padding: 1rem; /* 내부 여백 */
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 2px solid #efefef;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative; /* detail을 박스 내부에 위치하도록 설정 */
  overflow: hidden;
  width: 100%;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1); /* hover 시 박스 확대 */
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); /* 강조된 그림자 */
  }

  .skill-detail {
    height: 100%;
    position: absolute;
    bottom: -100%; /* 초기 상태: 스킬 박스 바닥에서 숨김 */
    left: 0;
    right: 0;
    background: black;
    color: #fff;
    padding: 0.5rem;
    font-size: 0.75rem;
    text-align: center;
    border-radius: 10px;
    transition:
      bottom 0.6s ease,
      opacity 0.6s ease; /* 부드럽게 애니메이션 */

    opacity: 0; /* 초기 상태에서 숨김 */
    z-index: 1;
  }

  &:hover .skill-detail {
    bottom: 0; /* hover 시 박스 바닥에서 올라옴 */
    opacity: 0.8; /* 표시 */
  }

  img {
    width: 3vw;
    aspect-ratio: 1 / 1;
    height: auto;
    margin-bottom: 0.5rem;
    transition:
      transform 0.8s ease,
      scale 0.8s ease; /* 이미지 이동 애니메이션 */
  }

  &:hover img {
  }

  .skill-name {
    font-size: 0.8rem;
    font-weight: bold;
    text-align: center;
    color: #212121;
    transition: transform 0.6s ease;
  }
  &:hover .skill-name {
  }
}
</style>
