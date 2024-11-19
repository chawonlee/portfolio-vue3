<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="0"
    height="0"
    style="position: absolute"
  >
    <defs>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15"
          result="goo"
        />
        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
      </filter>
    </defs>
  </svg>
  <div id="cursor" class="Cursor"></div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const mousePosition = ref({ x: 0, y: 0 })
const dots = ref([])
const amount = 20
const width = 26
let cursorElement = null
let timeoutID = null
let idle = ref(false)
const idleTimeout = 150 // 마우스가 멈춘 후 idle 상태로 전환되는 시간 (ms)

// `Dot` 클래스 정의
const createDot = index => {
  const dot = {
    x: 0,
    y: 0,
    scale: 1 - 0.05 * index,
    range: 1 + index * 0.5, // 지글거림 범위
    limit: width * 0.25 * (1 - 0.05 * index), // Dot의 최대 이동 거리 제한
    angleX: Math.random() * Math.PI * 2,
    angleY: Math.random() * Math.PI * 2,
    anglespeed: 0.01 + index * 0.002, // 지글거림 속도
    element: document.createElement('span'),
  }

  dot.element.style.position = 'absolute'
  dot.element.style.display = 'block'
  dot.element.style.width = '26px'
  dot.element.style.height = '26px'
  dot.element.style.borderRadius = '20px'
  dot.element.style.backgroundColor = 'white'
  dot.element.style.transformOrigin = 'center center'
  dot.element.style.transform = `scale(${dot.scale})`
  cursorElement.appendChild(dot.element)
  return dot
}

// 마우스가 움직일 때 호출되는 함수
const onMouseMove = event => {
  mousePosition.value.x = event.clientX - width / 2
  mousePosition.value.y = event.clientY - width / 2

  // 마우스가 움직이면 idle 상태 해제 및 타이머 초기화
  idle.value = false
  clearTimeout(timeoutID)
  startIdleTimer()
}

// idle 상태로 전환
const goIdle = () => {
  idle.value = true
}

// idle 상태 타이머 시작
const startIdleTimer = () => {
  timeoutID = setTimeout(goIdle, idleTimeout)
}

// 애니메이션 함수
const animateCursor = () => {
  let x = mousePosition.value.x
  let y = mousePosition.value.y

  dots.value.forEach((dot, index) => {
    if (!idle.value) {
      // 마우스 움직일 때
      dot.x = x
      dot.y = y
    } else {
      // idle 상태일 때 작게 일렁거리도록 조정
      dot.angleX += dot.anglespeed
      dot.angleY += dot.anglespeed

      const offsetX = Math.sin(dot.angleX) * dot.range
      const offsetY = Math.sin(dot.angleY) * dot.range

      dot.x += offsetX
      dot.y += offsetY

      // 중심에서 멀어지지 않도록 보정
      dot.x = (dot.x + x) / 2
      dot.y = (dot.y + y) / 2
    }

    dot.element.style.left = `${dot.x}px`
    dot.element.style.top = `${dot.y}px`

    const nextDot = dots.value[index + 1] || dots.value[0]
    x += (nextDot.x - dot.x) * 0.35
    y += (nextDot.y - dot.y) * 0.35
  })

  requestAnimationFrame(animateCursor)
}

// 초기화 함수
const initCursor = () => {
  cursorElement = document.getElementById('cursor')

  // Dot 생성
  for (let i = 0; i < amount; i++) {
    const dot = createDot(i)
    dots.value.push(dot)
  }

  // 마우스 이벤트 등록
  window.addEventListener('mousemove', onMouseMove)

  // idle 타이머 시작
  startIdleTimer()

  // 애니메이션 시작
  animateCursor()
}

onMounted(() => {
  initCursor()
})

// 컴포넌트 언마운트 시 이벤트 리스너 제거
onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMouseMove)
  clearTimeout(timeoutID)
})
</script>
