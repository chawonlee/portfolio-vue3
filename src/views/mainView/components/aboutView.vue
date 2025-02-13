<template>
  <section class="about-wrap">
    <section class="about-title">
      <div class="about-text">ABOUT</div>
      <img
        ref="checkSvg"
        src="@/assets/svg/check.svg"
        alt="check-svg"
        class="check-svg"
      />
    </section>
    <div class="about-container">
      <div class="myPhoto" ref="threeContainer"></div>
      <div class="intro">
        <div class="title">The journey is the reward</div>
        <div class="main-text">
          <div>저는 {{ displayText }} 입니다.</div>
          <v-btn
            @click="shuffleText"
            variant="text"
            :disabled="isRunning"
            color="#fff"
            ><v-icon icon="mdi-shuffle-variant" color="#f0c40d"
          /></v-btn>
        </div>
        <div class="detail-text draggable">
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
    </div>
    <img
      src="@/assets/image/dragMe.png"
      class="drag-instruction"
      alt="dragMe"
    />
  </section>
</template>
<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

gsap.registerPlugin(ScrollTrigger)
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

const threeContainer = ref(null)
let controls
// Three.js 초기화
const container = ref(threeContainer)

let scene, camera, renderer, model, animationFrameId
const isDragging = ref(false)
const previousMousePosition = { x: 0, y: 0 }
const zoomSpeed = 0.1
// Three.js 관련 설정
onMounted(() => {
  // 이미지가 왼쪽에서 서서히 등장
  gsap.fromTo(
    '.myPhoto',
    {
      opacity: 0, // 처음에는 투명
      x: -150, // 왼쪽에서 시작
    },
    {
      opacity: 1, // 점점 불투명
      x: 0, // 원래 위치로 이동
      duration: 5, // 애니메이션 지속 시간
      ease: 'power1.inOut', // 부드럽게 감속/가속
      scrollTrigger: {
        trigger: '.about-container', // 애니메이션 트리거
        start: 'top 80%', // 뷰포트의 90% 지점에서 시작
        end: 'top 40%', // 뷰포트의 50% 지점에서 끝
        scrub: true, // 스크롤 동기화
      },
      onComplete: checkAnimationsComplete, // 애니메이션 완료 시 호출
    },
  )

  // intro 클래스가 오른쪽에서 서서히 등장
  gsap.fromTo(
    '.intro',
    {
      opacity: 0, // 처음에는 투명
      x: 150, // 오른쪽에서 시작
    },
    {
      opacity: 1, // 점점 불투명
      x: 0, // 원래 위치로 이동
      duration: 5, // 애니메이션 지속 시간
      ease: 'power1.inOut', // 부드럽게 감속/가속
      scrollTrigger: {
        trigger: '.about-container', // 애니메이션 트리거
        start: 'top 80%', // 뷰포트의 90% 지점에서 시작
        end: 'top 40%', // 뷰포트의 50% 지점에서 끝
        scrub: true, // 스크롤 동기화
      },
      onComplete: checkAnimationsComplete, // 애니메이션 완료 시 호출
    },
  )

  const path = document.querySelector('.check-svg path')

  if (path) {
    const pathLength = path.getTotalLength()
    path.style.strokeDasharray = pathLength
    path.style.strokeDashoffset = pathLength

    gsap.to(path, {
      strokeDashoffset: 0, // path를 점점 그려나감
      scrollTrigger: {
        trigger: '.about-wrap', // 트리거 설정
        start: 'top center', // 화면 중앙에 도달할 때 시작
        end: 'bottom center', // 화면 하단에 도달할 때 종료
        scrub: true, // 스크롤과 동기화
      },
    })
  }
  const width = threeContainer.value.clientWidth || window.innerWidth
  const height = threeContainer.value.clientHeight || window.innerHeight
  console.log(
    threeContainer.value.clientWidth,
    threeContainer.value.clientHeight,
  )
  // Renderer
  renderer = new THREE.WebGLRenderer()
  renderer.domElement.id = 'myPhotoCanvas'
  renderer.setSize(width, height)

  container.value.appendChild(renderer.domElement)

  // Scene
  scene = new THREE.Scene()

  // Camera
  camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000)
  camera.position.set(0, 1.6, 3)

  // Light
  const ambientLight = new THREE.AmbientLight(0xffffff, 1)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
  directionalLight.position.set(5, 5, 5)
  scene.add(directionalLight)

  // 이벤트 리스너 추가
  renderer.domElement.addEventListener('mousedown', onMouseDown)
  renderer.domElement.addEventListener('mousemove', onMouseMove)
  // 전역 mouseup 이벤트 추가 (캔버스 외부에서 버튼을 떼도 감지)
  window.addEventListener('mouseup', onMouseUp)
  // GLTFLoader
  const loader = new GLTFLoader()
  loader.load(
    'models/bookworm_girl/scene.gltf', // 경로
    gltf => {
      model = gltf.scene

      // 모델 크기 강제로 크게 조정
      model.scale.set(22, 22, 22)

      // 모델 위치 조정
      model.position.set(0, 0, 0) // 바닥 중앙 정렬

      // 모델 회전 조정 (정면으로 설정)
      model.rotation.y = 0 // 90도 회전

      // 씬에 모델 추가
      scene.add(model)

      // 카메라 위치 조정
      camera.position.set(0, 1.5, 3)
      camera.lookAt(0, 1, 0)
    },
    xhr => {
      console.log(`Model loading progress: ${(xhr.loaded / xhr.total) * 100}%`)
    },
    error => {
      // 오류 발생 시 출력
      console.error('An error occurred while loading the GLTF model:', error)
    },
  )
  animate()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId)
  controls.dispose() // OrbitControls 메모리 해제
  renderer.dispose()

  renderer.domElement.removeEventListener('mousedown', onMouseDown)
  renderer.domElement.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseup', onMouseUp) // 전역 이벤트 제거

  scene = null
  camera = null
  renderer = null
  model = null
})

// 마우스 이벤트 핸들러
const onMouseDown = () => {
  isDragging.value = true

  // 드래그 시작 시 마우스 위치 저장
  previousMousePosition.x = event.clientX
}

const onMouseMove = event => {
  if (!isDragging.value || !model) return

  // 드래그한 X축 거리 계산
  const deltaX = event.clientX - previousMousePosition.x

  const rotationSpeed = 0.03

  // Y축 회전 업데이트 (누적 방식)
  model.rotation.y -= deltaX * rotationSpeed

  // 이전 마우스 위치 업데이트
  previousMousePosition.x = event.clientX
}

const onMouseUp = () => {
  isDragging.value = false
}

const animate = () => {
  animationFrameId = requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

//intro gsap
const animationsCompleted = ref(0)
const checkAnimationsComplete = () => {
  animationsCompleted.value += 1

  if (animationsCompleted.value === 2) {
    shuffleText()
    animationsCompleted.value = 0
  }
}

//👉셔플 버튼 클릭 시
const shuffleText = () => {
  if (!isRunning.value) {
    isRunning.value = true
    runShuffle()

    // 5초 후 자동 멈춤
    setTimeout(() => {
      stopShuffle()
    }, 5000)
  }
}
//👉 텍스트 랜덤 제공
const runShuffle = () => {
  if (isRunning.value) {
    displayText.value =
      phrases.value[Math.floor(Math.random() * phrases.value.length)]
    intervalId.value = setTimeout(() => {
      runShuffle()
    }, 200)
  }
}
//👉2초 후 텍스트 랜덤 제공 중지
const stopShuffle = () => {
  clearTimeout(intervalId.value)
  isRunning.value = false
}
</script>
<style lang="scss">
.about-wrap {
  z-index: 1;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw; /* 원하는 너비 조정 */
  pointer-events: none; /* 마우스 이벤트를 차단 */
  .drag-instruction {
    z-index: 1;
    position: absolute;
    left: 15%;
    top: 20%;
  }
  .about-title {
    position: relative; /* 자식 요소들의 기준점 설정 */
    font-family: 'Black Han Sans', sans-serif;
    font-weight: 400;
    font-style: normal;
    height: 20%;
    font-size: clamp(40px, 10vw, 65px);
    color: white; /* 텍스트를 흰색으로 설정 */
    text-shadow:
      0px 1px 3px rgba(80, 80, 80, 0.6),
      /* 살짝 밝은 그림자 */ 0px 3px 6px rgba(120, 120, 120, 0.4); /* 부드럽고 퍼짐 */
    .about-text {
      position: absolute;
      top: 50%; /* 수직 가운데 정렬 */
      left: 50%; /* 수평 가운데 정렬 */
      transform: translate(-50%, -50%); /* 가운데 정렬을 위한 보정 */
      z-index: 2; /* 텍스트가 이미지 위에 표시되도록 설정 */
      text-shadow:
        0px 1px 3px rgba(80, 80, 80, 0.6),
        0px 3px 6px rgba(120, 120, 120, 0.4); /* 부드럽고 퍼짐 */
    }

    .check-svg {
      position: absolute;
      top: 50%; /* SVG를 텍스트보다 약간 아래로 이동 */
      left: 50%; /* 수평 가운데 정렬 */
      transform: translate(-50%, -50%); /* 가운데 정렬 */
      z-index: 1; /* 텍스트 뒤로 배치 */
      // width: 350px; /* SVG의 크기 */
      width: 15vw;
      min-width: 260px;
      height: auto;
    }
  }
  .about-container {
    padding-top: 3%;
    width: auto;
    justify-content: center;
    align-items: center;
    grid-template-columns: 400px 700px; /* 첫 번째 칸은 1fr, 두 번째 칸은 2fr */
    grid-template-rows: auto; /* 세로는 1칸 */
    display: grid;
    transform-origin: center bottom; /* 애니메이션 기준점 아래로 설정 */
    will-change: transform, opacity, clip-path; /* 애니메이션 최적화 */

    .myPhoto {
      display: block;
      height: 100%;
      pointer-events: auto !important;
      z-index: 2;
      #myPhotoCanvas {
        -webkit-user-select: auto;
        -moz-user-select: auto;
        -ms-user-select: auto;
        user-select: auto;
        touch-action: auto !important; /* 터치 이벤트를 허용 */
        pointer-events: auto !important; /* 마우스 이벤트도 허용 */
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }
    }

    .intro {
      backdrop-filter: blur(100px);
      font-size: 1.2rem;
      opacity: 1;
      z-index: 2;
      pointer-events: auto; /* 내부 요소는 클릭 가능 */

      .title {
        font-weight: 600;
        color: #f0c40d;
      }

      .main-text {
        display: flex;
        color: white;
        justify-content: space-between;
        border-bottom: 1.5px solid;
        padding: 8px 0 2px 0;
        margin-bottom: 10px;
      }

      .detail-text {
        line-height: 2.2;
        color: white;
      }
    }
  }
}
</style>
