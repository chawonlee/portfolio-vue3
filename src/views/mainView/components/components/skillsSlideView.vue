<template>
  <section>
    <div class="skills-title-circle"></div>
    <div class="skills-sub-title" v-html="animatedText"></div>
    <!-- skill grid -->
    <div
      v-for="(item, index) in skillData[props.subject]"
      :key="index"
      class="skill-item skill-grid"
    >
      <img :src="item.img" :alt="item.title" class="skill-icon" />
      <div class="skill-skillNm">{{ item.skillNm }}</div>
      <div class="skill-detail">{{ item.detail }}</div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import skillData from '../data/skillData.json'
//아이콘 다운로드: https://icon-sets.iconify.design/

// 텍스트를 props로 받아옴
const props = defineProps({
  subject: { type: String, default: '' },
})

const animatedText = ref('')

// 텍스트를 HTML로 변환 후 애니메이션 트리거
onMounted(() => {
  animatedText.value = `Skills in ${props.subject} Development`
    .split('')
    .map((char, index) => {
      // props.subject를 별도로 처리
      if (
        index >= 10 && // "Skills in "의 길이(10) 이후부터
        index < 10 + props.subject.length
      ) {
        return `<span class="animated-char" style="animation-delay: ${
          index * 0.1
        }s; color: #ffc107; -webkit-text-stroke: 2px black;">${char}</span>` // 글자 색상 변경
      }

      if (char === ' ') {
        return `<span class="animated-space" style="width: 0.5rem;"></span>` // 공백 처리
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
.skills-title-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ffc107;
  left: 15px;
  top: 15px;
  position: absolute;
}
.skills-sub-title {
  opacity: 90%;
  top: 12px;
  left: 65px;
  align-items: center;
  width: 100%;
  position: absolute;
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: 400;
  color: #212121;
  text-shadow:
    1px 1px 1px #fff,
    1px 2px 1px #fff,
    1px 3px 1px #fff,
    1px 4px 1px #fff,
    1px 5px 1px #fff,
    1px 18px 6px rgba(16, 16, 16, 0.4),
    1px 22px 10px rgba(16, 16, 16, 0.2),
    1px 25px 35px rgba(16, 16, 16, 0.2);
  span {
    display: inline-block;
    transform: translateY(0); // 초기 상태
    transition: transform 0.8s ease;

    &.jump {
      animation: jump 0.8s ease infinite; // 무한 반복
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
  position: relative;
  top: 95px;
  left: 0;
  padding: 0 15px 20px 15px;
  width: 100%;
  display: grid;
  grid-template-columns: 3% 14% 82%; /* 열 비율 */
  grid-auto-rows: auto;
  row-gap: 20px;
  align-items: center; /* 세로 중앙 정렬 */
  .skill-icon {
    background-color: #ffc107;
    width: 100%;
    aspect-ratio: 1 / 1; /* 정사각형 비율 */
    border-radius: 50%;
    object-fit: cover;
    align-self: center; /* 개별 세로 중앙 정렬 */
  }

  .skill-skillNm {
    text-align: center;
    margin: 0;
    align-self: center; /* 개별 세로 중앙 정렬 */
  }

  .skill-detail {
    justify-self: start;
    text-align: left;
    margin-left: 8px;
    align-self: center; /* 개별 세로 중앙 정렬 */
  }
}
</style>
