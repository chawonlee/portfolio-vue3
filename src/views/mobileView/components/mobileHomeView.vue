<template>
  <section class="mobile-home-wrap">
    <section class="mobile-home-title">
      <div class="mobile-home-title-main">
        <span>웹</span>
        <span class="color-purple">-</span>
        <span class="color-purple">프</span>
        <span class="color-purple">론</span>
        <span class="color-purple">트</span>
        <span class="color-purple">엔</span>
        <span class="color-purple">드</span>
      </div>
      <div class="mobile-home-title-sub">
        <span>포</span>
        <span>트</span>
        <span>폴</span>
        <span>리</span>
        <span>오</span>
      </div>
    </section>
    <section class="mobile-about-container">
      <div class="mobileMyPhoto" ref="threeMobileContainer"></div>
    </section>
    <div class="mobile-about-detail">캐릭터를 좌우로 회전시켜보세요</div>
  </section>
  <!-- 중앙 하단 더보기 -->
  <div class="mobile-scroll-down">
    <div>SCROLL</div>
  </div>
</template>
<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
gsap.registerPlugin(ScrollTrigger)

import { onBeforeUnmount, onMounted, ref } from 'vue'

const threeMobileContainer = ref(null)
// Three.js 초기화
const container = ref(threeMobileContainer)

let scene, camera, renderer, model, animationFrameId
const isDragging = ref(false)
const previousMousePosition = { x: 0, y: 0 }

onMounted(() => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.mobile-home-wrap',
      start: 'top top',
      end: '+=300',
      scrub: true,
    },
  })

  timeline.fromTo(
    '.mobile-home-title-main span',
    { y: 20, opacity: 1 },
    {
      y: -60,
      opacity: 0.3,
      ease: 'power2.out',
      stagger: 0.1,
    },
    0,
  )

  timeline.fromTo(
    '.mobile-home-title-sub span',
    { y: 0, opacity: 1 },
    {
      y: -60,
      opacity: 0.2,
      ease: 'power2.out',
      stagger: 0.1,
    },
    1,
  )

  const width =
    (threeMobileContainer.value.clientWidth || window.innerWidth) / 1
  const height =
    (threeMobileContainer.value.clientHeight || window.innerHeight) / 2.8
  // Renderer
  renderer = new THREE.WebGLRenderer()
  renderer.domElement.id = 'myMobilePhotoCanvas'
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

  renderer.domElement.addEventListener('touchstart', onTouchStart)
  renderer.domElement.addEventListener('touchmove', onTouchMove)
  window.addEventListener('touchend', onTouchEnd)

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
  // controls.dispose() // OrbitControls 메모리 해제
  renderer.dispose()

  renderer.domElement.removeEventListener('mousedown', onMouseDown)
  renderer.domElement.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseup', onMouseUp) // 전역 이벤트 제거

  renderer.domElement.addEventListener('touchstart', onTouchStart)
  renderer.domElement.addEventListener('touchmove', onTouchMove)
  window.addEventListener('touchend', onTouchEnd)

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

// 터치 이벤트 핸들러
const onTouchStart = event => {
  isDragging.value = true
  const touch = event.touches[0]
  previousMousePosition.x = touch.clientX
}

const onTouchMove = event => {
  if (!isDragging.value || !model) return
  const touch = event.touches[0]
  const deltaX = touch.clientX - previousMousePosition.x
  const rotationSpeed = 0.03
  model.rotation.y -= deltaX * rotationSpeed
  previousMousePosition.x = touch.clientX
}

const onTouchEnd = () => {
  isDragging.value = false
}

const animate = () => {
  animationFrameId = requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
</script>
<style lang="scss">
.mobile-home-wrap {
  height: 100vh;
  flex-direction: column;
  // transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw; /* 원하는 너비 조정 */
  background-color: #000;
  .mobile-home-title {
    padding-bottom: 8%;
    font-style: normal;
    color: white;
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
    .mobile-home-title-main {
      font-family: 'Galmuri9';
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: clamp(45px, 6vw, 120px);
    }
    .mobile-home-title-sub {
      font-family: 'GalmuriMono11';
      color: #ffc107;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      font-size: clamp(45px, 6vw, 120px);
    }
  }
  .mobile-about-container {
    justify-content: center;
    align-items: center;
    transform-origin: center bottom; /* 애니메이션 기준점 아래로 설정 */
    will-change: transform, opacity, clip-path; /* 애니메이션 최적화 */

    .mobileMyPhoto {
      display: block;
      height: 100%;
      pointer-events: auto !important;
      z-index: 3;
      #myMobilePhotoCanvas {
        z-index: 3;
        -webkit-user-select: auto;
        -moz-user-select: auto;
        -ms-user-select: auto;
        user-select: auto;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }
    }
  }
  .mobile-about-detail {
    padding: 15px 0;
    color: #fff;
  }
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

.mobile-scroll-down {
  align-items: center;
  justify-items: center;
  position: absolute;
  bottom: 50px; /* about-wrap 아래쪽에 위치 */
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  opacity: 0.8;
  animation: fadeBlink 1.5s ease-in-out infinite; /* 깜빡이는 애니메이션 */
  z-index: 2; /* about-wrap 위에 표시 */
}
/* 깜빡이는 애니메이션 */
@keyframes fadeBlink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}
</style>
