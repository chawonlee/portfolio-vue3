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
import { ref, onMounted } from 'vue'
import skillData from '../data/skillData.json'

const props = defineProps({
  subject: { type: String, default: '' },
})

const animatedText = ref('')

onMounted(() => {
  animatedText.value = `Skills in ${props.subject} Development`
    .split('')
    .map((char, index) => {
      // props.subject를 별도로 처리
      if (index >= 10 && index < 10 + props.subject.length) {
        return `<span class="animated-char" style="animation-delay: ${
          index * 0.1
        }s; color: #ffc107; -webkit-text-stroke: 2px black;">${char}</span>` // 글자 색상 변경
      }

      if (char === ' ') {
        // 공백 처리: 공백을 실제로 렌더링하면서 애니메이션 유지
        return `<span class="animated-space" style="display: inline-block; width: 0.5rem;"></span>`
      }

      return `<span class="animated-char" style="animation-delay: ${
        index * 0.1
      }s;">${char}</span>`
    })
    .join('')

  // DOM이 렌더링된 뒤 애니메이션 클래스 추가
  setTimeout(() => {
    document.querySelectorAll('.animated-char').forEach(el => {
      el.classList.add('jump')
    })
  }, 100) // 100ms 이후 애니메이션 시작
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
  margin-left: 65px; /* 원(circle) 오른쪽으로 이동 */
  margin-top: 15px; /* 상단 여백 */
  font-size: 1.8rem;
  font-weight: bold;
  color: #212121;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px #fff;
  z-index: 2; /* 타이틀이 위로 보이게 */
  margin-bottom: 0.6rem; /* 타이틀 아래 여백 */
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
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1); /* hover 시 박스 확대 */
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); /* 강조된 그림자 */
  }

  .skill-detail {
    position: absolute;
    bottom: -100%; /* 초기 상태: 스킬 박스 바닥에서 숨김 */
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 0.5rem;
    font-size: 0.75rem;
    text-align: center;
    transition:
      bottom 0.6s ease,
      opacity 0.6s ease; /* 부드럽게 애니메이션 */
    opacity: 0; /* 초기 상태에서 숨김 */
    z-index: 1;
  }

  &:hover .skill-detail {
    bottom: 0; /* hover 시 박스 바닥에서 올라옴 */
    opacity: 1; /* 표시 */
  }

  img {
    width: 4rem;
    aspect-ratio: 1 / 1;
    height: auto;
    margin-bottom: 0.5rem;
    transition:
      transform 0.6s ease,
      scale 0.6 ease; /* 이미지 이동 애니메이션 */
  }

  &:hover img {
    scale: 0.8;
    transform: translateY(-100%); /* hover 시 이미지 살짝 위로 이동 */
  }

  .skill-name {
    font-size: 0.8rem;
    font-weight: bold;
    text-align: center;
    color: #212121;
    transition: transform 0.6s ease;
  }
  &:hover .skill-name {
    transform: translateY(-250%);
  }
}
</style>
