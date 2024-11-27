<template>
  <canvas ref="connectDot"></canvas>
  <section class="about-wrap">
    <img src="@/assets/image/myPhoto1.jpg" width="30%" class="myPhoto" />
    <div class="intro">
      <div class="title">The journey is the reward</div>
      <div class="main-text">
        <div>저는 {{ displayText }} 입니다.</div>
        <v-btn
          @click="shuffleText"
          variant="text"
          :disabled="isRunning"
          color="#626463"
          ><v-icon icon="mdi-shuffle-variant" color="secondary"
        /></v-btn>
      </div>
      <div class="detail-text">
        안녕하세요. 프론트엔드 개발자 이채원입니다. <br />

        바람과 비에 흔들리면서도 곧게 뻗어 아름답게 피어나는 꽃처럼,<br />

        저도 풀스택이라는 명확한 목표를 향해 꾸준히 성장하고 있습니다.<br />

        새로운 기술을 배우고 도전하는 과정이 쉽지는 않지만, <br />
        사람들과 협업하여 의미 있는 결과물을 만들어내는 일에 큰 보람을
        느낍니다.<br />

        다양한 의견을 존중하며 최선의 해결책을 함께 찾아가는 경험을 소중히
        여기며,<br />

        변화하는 기술과 트랜드에 적응하고 한 단계 더 발전하는 개발자가 되기
        위해<br />
        끊임없이 노력하고 있습니다.<br />
      </div>
    </div>
  </section>
  <!-- 설명 이미지 -->
  <img
    src="@/assets/image/hoverDot.png"
    class="hover-instruction"
    alt="Move the cursor over the dots!"
  />
  <!-- 중앙 하단 더보기 -->
  <div class="scroll-down">
    <div>더보기</div>
    <v-icon icon="mdi-chevron-down" color="secondary" size="x-large" />
  </div>
</template>
<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
const phrases = ref([
  '열정이 넘치는 개발자',
  '꾸준히 성장하는 개발자',
  '도전적인 개발자',
  '협력 능력이 뛰어난 개발자',
  '문제 해결 능력이 뛰어난 개발자',
  '세부 사항에 주의를 기울이는 개발자',
  '팀워크를 중시하는 개발자',
  '사용자 경험에 집중하는 개발자',
  '시간 관리를 철저히 하는 개발자',
  '열린 마음으로 피드백을 수용하는 개발자',
  '안정성과 성능을 고려하는 개발자',
])
const displayText = ref('꾸준히 성장하는 개발자')
const intervalId = ref(null)
const isRunning = ref(false)

//canvas 변수
const connectDot = ref(null)
let ctx
let particles = []
const mouse = { x: null, y: null }
let animationFrameId
onMounted(() => {
  //3초 후 셔플 함수 실행
  setTimeout(() => {
    shuffleText()
  }, 3000)

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
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId)
  window.removeEventListener('resize', resizeCanvas)
  connectDot.value.removeEventListener('mousemove', handleMouseMove)
  connectDot.value.removeEventListener('mouseleave', handleMouseLeave)
})

//👉셔플 버튼 클릭 시
const shuffleText = () => {
  if (!isRunning.value) {
    isRunning.value = true
    runShuffle()

    // 2초 후 자동 멈춤
    setTimeout(() => {
      stopShuffle()
    }, 2000)
  }
}
//👉 텍스트 랜덤 제공
const runShuffle = () => {
  if (isRunning.value) {
    displayText.value =
      phrases.value[Math.floor(Math.random() * phrases.value.length)]
    intervalId.value = setTimeout(() => {
      runShuffle()
    }, 100)
  }
}
//👉2초 후 텍스트 랜덤 제공 중지
const stopShuffle = () => {
  clearTimeout(intervalId.value)
  isRunning.value = false
}

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
.about-wrap {
  background-color: #fff;
  position: relative;
  top: 50%;
  left: 25%;
  height: 100vh;
  // transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px; /* 원하는 너비 조정 */
  z-index: 2; /* Canvas보다 위에 위치 */

  .myPhoto {
    width: 32%;
    border-radius: 10px;
    z-index: 2;
  }

  .intro {
    font-size: 1.2rem;
    opacity: 0.9;
    z-index: 2;

    .title {
      font-weight: 600;
      color: #433878;
    }

    .main-text {
      display: flex;
      justify-content: space-between;
      border-bottom: 1.5px solid;
      padding: 8px 0 2px 0;
      margin-bottom: 10px;
    }

    .detail-text {
      line-height: 2.2;
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

.hover-instruction {
  position: absolute;
  left: 10%;
  top: 20%;
  animation: float 2s ease-in-out infinite;
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
