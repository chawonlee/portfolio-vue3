<template>
  <canvas ref="connectDot"></canvas>
  <section class="home-wrap">
    <!-- 설명 이미지 -->
    <img
      src="@/assets/image/hoverDot.png"
      class="hover-instruction"
      alt="Move the cursor over the dots!"
    />
    <section class="home-title">
      <div class="home-title-main">
        <div>
          <span>웹</span>
          <span class="color-purple">-</span>
          <span class="color-purple">프</span>
          <span class="color-purple">론</span>
          <span class="color-purple">트</span>
          <span class="color-purple">엔</span>
          <span class="color-purple">드</span>
        </div>
      </div>
      <div class="home-title-sub">
        <span>포</span>
        <span>트</span>
        <span>폴</span>
        <span>리</span>
        <span>오</span>
      </div>
    </section>
  </section>

  <!-- 중앙 하단 더보기 -->
  <div class="scroll-down">
    <div>SCROLL</div>
    <v-icon icon="mdi-chevron-down" color="secondary" size="x-large" />
  </div>

  <!--이벤트-->
  <img src="@/assets/image/background/back1.png" class="sub5" alt="sub1" />
  <img src="@/assets/image/background/back2.png" class="sub2" alt="sub2" />
  <img src="@/assets/image/background/back3.png" class="sub3" alt="sub3" />
  <img src="@/assets/image/background/back4.png" class="sub4" alt="sub4" />
  <img src="@/assets/image/background/back5.png" class="sub1" alt="sub5" />
  <img src="@/assets/image/background/back6.png" class="sub6" alt="sub6" />
  <img src="@/assets/image/background/back7.png" class="sub7" alt="sub7" />
  <img src="@/assets/image/background/back8.png" class="sub8" alt="sub8" />
  <img src="@/assets/image/background/back9.png" class="sub9" alt="sub9" />

  <!-- 중앙 하단 더보기 -->
  <div class="scroll-down">
    <div>SCROLL</div>
    <v-icon icon="mdi-chevron-down" color="secondary" size="x-large" />
  </div>
</template>
<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import { onBeforeUnmount, onMounted, ref } from 'vue'

//canvas 변수
const connectDot = ref(null)
let ctx
let particles = []
const mouse = { x: null, y: null }
let animationFrameId
onMounted(() => {
  if (!connectDot.value) return

  const canvasElement = connectDot.value
  ctx = canvasElement.getContext('2d')

  if (!ctx) {
    console.error('Canvas getContext failed!')
    return
  }

  resizeCanvas()
  initParticles()
  animate()

  window.addEventListener('resize', resizeCanvas)
  canvasElement.addEventListener('mousemove', handleMouseMove)
  canvasElement.addEventListener('mouseleave', handleMouseLeave)

  const animations = [
    { selector: '.sub5', rotation: -360, x: -300, y: 0 }, // 왼쪽으로 회전, 왼쪽 이동
    { selector: '.sub2', rotation: -360, x: -300, y: 0 },
    { selector: '.sub3', rotation: -360, x: -300, y: 0 },
    { selector: '.sub4', rotation: -360, x: -300, y: 0 },
    { selector: '.sub1', rotation: 360, x: 300, y: 0 }, // 오른쪽으로 회전, 오른쪽 이동
    { selector: '.sub6', rotation: 360, x: 300, y: 0 },
    { selector: '.sub7', rotation: 360, x: 300, y: 0 },
    { selector: '.sub8', rotation: 360, x: 300, y: 0 },
    { selector: '.sub9', rotation: 360, x: 300, y: 0 },
  ]

  animations.forEach(({ selector, rotation, x, y }) => {
    const element = document.querySelector(selector)
    if (!element) return

    // 초기 상태 설정
    gsap.set(element, {
      scale: 1.2,
      rotation: 0,
      opacity: 0.7,
    })

    // 애니메이션 설정
    gsap.to(element, {
      scale: 2, // 확대
      rotation, // 각 이미지에 맞는 회전 방향
      x, // 이동 x
      y, // 이동 y
      opacity: 0, // 화면 밖으로 사라짐
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.home-wrap', // 전체 섹션을 트리거로 설정
        start: 'top top', // 페이지 최상단에서 애니메이션 시작
        end: '+=800', // 스크롤이 800px 내려갈 때 애니메이션 종료
        scrub: true, // 스크롤과 동기화
      },
    })
  })
  // "웹-프론트엔드" 애니메이션
  gsap.fromTo(
    '.home-title-main span',
    { y: 20, opacity: 1 }, // 초기 상태
    {
      y: -60, // 위로 이동
      opacity: 0.3, // 흐려짐
      ease: 'power2.out', // 부드러운 애니메이션
      stagger: 0.1, // 각 글자에 순차적으로 적용
      scrollTrigger: {
        trigger: '.home-wrap', // 애니메이션 트리거 요소
        start: 'top top', // 스크롤 시작 지점
        end: '+=500', // 스크롤 300px 동안 애니메이션 진행
        scrub: true, // 스크롤 동기화
      },
    },
  )

  // "포트폴리오" 애니메이션
  gsap.fromTo(
    '.home-title-sub span',
    { y: 0, opacity: 1 }, // 초기 상태
    {
      y: -50, // 위로 이동
      opacity: 0.2, // 흐려짐
      ease: 'power2.out', // 부드러운 애니메이션
      stagger: 0.1, // 각 글자에 순차적으로 적용
      scrollTrigger: {
        trigger: '.home-wrap', // 트리거 요소
        start: 'top top', // 스크롤 시작 지점
        end: '+=500', // 스크롤 300px 동안 애니메이션 진행
        scrub: true, // 스크롤 동기화
      },
    },
  )
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId)
  window.removeEventListener('resize', resizeCanvas)
  connectDot.value.removeEventListener('mousemove', handleMouseMove)
  connectDot.value.removeEventListener('mouseleave', handleMouseLeave)
})

// Create particles
class Particle {
  constructor(x, y, size, color) {
    this.x = x //점의 x 위치
    this.y = y //점의 y 위치
    this.size = size //점 반지름
    this.color = color //점 색상
    this.dx = (Math.random() - 0.5) * 1.3 //점 속도(매 프레임마다 이동하는 방향 및 거리)
    this.dy = (Math.random() - 0.5) * 1.3
  }

  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.fill()
  }

  update() {
    //점이 화면을 벗어나지 않도록 충돌 감지
    if (this.x + this.size > connectDot.value.width || this.x - this.size < 0) {
      this.dx *= -1
    }
    if (
      this.y + this.size > connectDot.value.height ||
      this.y - this.size < 0
    ) {
      this.dy *= -1
    }

    this.x += this.dx
    this.y += this.dy
    this.draw()
  }
}
const initParticles = () => {
  particles = []
  const particleCount = 200 // 점 개수
  for (let i = 0; i < particleCount; i++) {
    const size = Math.random() * 3 + 3
    const x = Math.random() * connectDot.value.width
    const y = Math.random() * connectDot.value.height
    const color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3)`
    particles.push(new Particle(x, y, size, color))
  }
}

const connectHoveredParticles = () => {
  if (mouse.x === null || mouse.y === null) return

  const nearbyParticles = particles.filter(particle => {
    const dx = particle.x - mouse.x
    const dy = particle.y - mouse.y
    return Math.sqrt(dx * dx + dy * dy) < 100 // 100px 내의 점만 선택
  })

  // 모든 가까운 점들을 선으로 연결
  for (let i = 0; i < nearbyParticles.length; i++) {
    for (let j = i + 1; j < nearbyParticles.length; j++) {
      const p1 = nearbyParticles[i]
      const p2 = nearbyParticles[j]

      //커서 근처 점들만 필터링하여 선으로 연결
      ctx.beginPath()
      ctx.moveTo(p1.x, p1.y)
      ctx.lineTo(p2.x, p2.y)
      ctx.strokeStyle = p1.color // 선 색상을 점의 색상으로
      ctx.lineWidth = 0.8
      ctx.stroke()
    }
  }
}

const animate = () => {
  ctx.clearRect(0, 0, connectDot.value.width, connectDot.value.height)
  particles.forEach(particle => particle.update())
  connectHoveredParticles()
  animationFrameId = requestAnimationFrame(animate) //화면 지속적 업데이트 (이전 점 상태 삭제, 점의 새로운 위치 계산, 새로운 상태 그림)
}

const resizeCanvas = () => {
  connectDot.value.width = window.innerWidth
  connectDot.value.height = window.innerHeight
  initParticles()
}

const handleMouseMove = event => {
  const canvasBounds = connectDot.value.getBoundingClientRect()
  mouse.x = event.clientX - canvasBounds.left
  mouse.y = event.clientY - canvasBounds.top
}

const handleMouseLeave = () => {
  mouse.x = null
  mouse.y = null
}
</script>
<style lang="scss">
.home-wrap {
  position: relative;
  height: 100vh;
  flex-direction: column;
  // transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw; /* 원하는 너비 조정 */

  .hover-instruction {
    animation: float 2s ease-in-out infinite;
    padding-bottom: 3%;
  }
  .home-title {
    padding-bottom: 8%;
    font-style: normal;
    font-size: 4rem;
    z-index: 3;
    text-shadow:
      1px 1px 1px #fff,
      1px 2px 1px #fff,
      1px 3px 1px #fff,
      1px 4px 1px #fff,
      1px 18px 6px rgba(16, 16, 16, 0.4),
      1px 22px 10px rgba(16, 16, 16, 0.2),
      1px 25px 35px rgba(16, 16, 16, 0.2),
      1px 30px 60px rgba(16, 16, 16, 0.4);
    .home-title-main {
      font-family: 'Galmuri9';
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12vmin;
    }
    .home-title-sub {
      font-family: 'GalmuriMono11';
      color: #ffc107;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      font-size: 15vmin;
    }
  }
}
canvas {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1; /* 이미지와 intro 뒤에 위치 */
}

.sub1 {
  position: absolute;
  left: calc(50% - 25vw);
  bottom: calc(50% + 20vh);
  filter: blur(2px);
}
.sub2 {
  position: absolute;
  left: calc(50% - 30vw);
  bottom: calc(50% + 0vh);
  filter: blur(0px);
}
.sub3 {
  position: absolute;
  left: calc(50% - 30vw);
  bottom: calc(50% - 20vh);
  filter: blur(0px);
}
.sub4 {
  position: absolute;
  left: calc(50% - 15vw);
  bottom: calc(50% - 32vh);
  filter: blur(2px);
}
.sub5 {
  position: absolute;
  left: calc(50%);
  bottom: calc(22vh);
  filter: blur(0px);
}
.sub6 {
  position: absolute;
  left: calc(50% + 15vw);
  bottom: calc(50% - 20vh);
  filter: blur(0px);
}
.sub7 {
  position: absolute;
  left: calc(50% + 30vw);
  bottom: calc(50% - 30vh);
  filter: blur(2px);
}
.sub8 {
  position: absolute;
  left: calc(50% + 30vw);
  bottom: calc(50% + 0vh);
  filter: blur(0px);
}
.sub9 {
  position: absolute;
  left: calc(50% + 20vw);
  bottom: calc(50% + 20vh);
  filter: blur(2px);
}

/* 둥둥 떠다니는 애니메이션 */
@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px); /* 위로 20px 이동 */
  }
  100% {
    transform: translateY(0);
  }
}

.scroll-down {
  align-items: center;
  justify-items: center;
  position: absolute;
  bottom: 5%; /* about-wrap 아래쪽에 위치 */
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.2rem;
  font-weight: 600;
  color: #433878;
  opacity: 0.8;
  animation: fadeBlink 3s ease-in-out infinite; /* 깜빡이는 애니메이션 */
  z-index: 2; /* about-wrap 위에 표시 */
}
/* 깜빡이는 애니메이션 */
@keyframes fadeBlink {
  0%,
  100% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.4;
  }
}
</style>
