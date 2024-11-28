<template>
  <section>
    <div class="skills-title-circle"></div>
    <span class="skillsTitle" v-html="animatedText"></span>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 텍스트를 props로 받아옴
const props = defineProps({
  subject: { type: String, default: '' },
})

const animatedText = ref('')

// 텍스트를 HTML로 변환 후 애니메이션 트리거
onMounted(() => {
  animatedText.value = props.subject
    .split('')
    .map(
      (char, index) =>
        `<span class="animated-char" style="animation-delay: ${
          index * 0.1
        }s;">${char}</span>`,
    )
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
.skillsTitle {
  position: relative;
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 900;
  color: black;
  text-shadow:
    1px 1px 1px #919191,
    1px 2px 1px #919191,
    1px 3px 1px #919191,
    1px 4px 1px #919191,
    1px 5px 1px #919191,
    1px 18px 6px rgba(16, 16, 16, 0.4),
    1px 22px 10px rgba(16, 16, 16, 0.2),
    1px 25px 35px rgba(16, 16, 16, 0.2),
    1px 30px 60px rgba(16, 16, 16, 0.4);
  span {
    display: inline-block;
    transform: translateY(0); // 초기 상태
    transition: transform 0.5s ease;

    &.jump {
      animation: jump 0.5s ease infinite; // 무한 반복
    }
  }
}

@keyframes jump {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
