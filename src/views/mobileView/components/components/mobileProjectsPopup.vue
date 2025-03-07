<template>
  <div class="mobile-projects-popup" v-if="project">
    <div class="mobile-popup-header">
      <div class="mobile-popup-title">{{ project.projectNm }}</div>
      <div class="mobile-close-button" @click="closePopup()">×</div>
    </div>

    <div class="mobile-popup-content">
      <!-- 프로젝트 이미지 슬라이더 (Swiper 사용) -->
      <div
        class="mobile-project-images"
        v-if="project.images && project.images.length"
      >
        <swiper
          :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }"
          :spaceBetween="5"
          :navigation="true"
          :zoom="true"
          :thumbs="{ swiper: thumbsSwiper }"
          :modules="modules"
          class="mobile-project-swiper"
        >
          <swiper-slide
            v-if="project.videos"
            class="mobile-project-swiper-slide"
          >
            <video
              loop
              autoplay
              muted
              controls
              :src="`assets/projects/${project.id}/${project.videos}`"
            ></video>
          </swiper-slide>
          <swiper-slide
            v-for="(img, idx) in project.images"
            :key="idx"
            class="mobile-project-swiper-slide"
          >
            <img :src="`assets/projects/${project.id}/${img}`" />
          </swiper-slide>
        </swiper>
        <swiper
          @swiper="setThumbsSwiper"
          :spaceBetween="5"
          :slidesPerView="project.images.length"
          :freeMode="true"
          :watchSlidesProgress="true"
          :modules="modules"
          class="mobile-project-swiper-preview"
        >
          <swiper-slide
            v-for="(img, idx) in props.project.images"
            :key="idx"
            class="mobile-project-swiper-slide"
          >
            <img :src="`assets/projects/${props.project.id}/${img}`" />
          </swiper-slide>
        </swiper>
      </div>

      <!-- 기술 스택 -->
      <div class="mobile-project-section">
        <h3>기술 스택</h3>
        <div class="mobile-skill-tags">
          <span
            v-for="(skill, index) in project.skills"
            :key="index"
            class="mobile-skill-tag"
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <!-- 프로젝트 기간 -->
      <div class="mobile-project-section">
        <h3>프로젝트 기간</h3>
        <div class="mobile-project-period">{{ project.period }}</div>
      </div>

      <!-- 프로젝트 설명 -->
      <div class="mobile-project-section">
        <div class="mobile-project-description">
          <div
            v-for="(section, index) in project.detail"
            :key="index"
            class="mobile-project-description-padding"
          >
            <div class="section-title">{{ section.title }}</div>
            <div v-for="(content, cIndex) in section.content" :key="cIndex">
              <div class="content-title">{{ '■ ' + content.title }}</div>
              <ul>
                <li v-for="(item, iIndex) in content.content" :key="iIndex">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  defineProps,
  defineEmits,
  watch,
  onMounted,
  onBeforeUnmount,
} from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Navigation, Thumbs, Zoom } from 'swiper/modules'

// Swiper 스타일 가져오기
import 'swiper/css'
import 'swiper/css/pagination'

const props = defineProps({
  project: Object,
})

const emit = defineEmits(['closePopup'])

// Swiper 모듈 설정
const modules = [FreeMode, Navigation, Thumbs, Zoom]

//slider
const thumbsSwiper = ref(null)
const setThumbsSwiper = swiper => {
  thumbsSwiper.value = swiper
}

// 닫기 버튼 클릭 시 스크롤 복원 및 이벤트 발생
const closePopup = () => {
  enableBodyScroll()
  emit('closePopup')
}

// 팝업 내용 영역에서만 스크롤 허용
const preventScroll = event => {
  event.stopPropagation() // 부모 요소로의 스크롤 이벤트 전파 방지
}

// 팝업이 열리면 body 스크롤 막기
const disableBodyScroll = () => {
  const popupContent = document.querySelector('.mobile-popup-content')
  if (popupContent) {
    popupContent.addEventListener('wheel', preventScroll, { passive: false })
  }
  document.body.style.position = 'fixed'
  document.body.style.top = `-${window.scrollY}px`
  document.body.style.width = '100vw'

  // mobileHeader 숨기기
  const header = document.querySelector('.mobileHeader')
  if (header) header.style.display = 'none'

  // title 숨기기
  const title = document.querySelector('.mobile-home-title')
  if (title) title.style.zIndex = '1'
}

// 팝업이 닫히면 body 스크롤 복원
const enableBodyScroll = () => {
  const scrollY = document.body.style.top
  document.body.style.position = ''
  document.body.style.top = ''
  window.scrollTo(0, parseInt(scrollY || '0') * -1)

  // mobileHeader 다시 보이게 하기
  const header = document.querySelector('.mobileHeader')
  if (header) header.style.display = ''

  // title 보이기
  const title = document.querySelector('.mobile-home-title')
  if (title) title.style.zIndex = '3'

  const element = document.getElementById('idMobileProjectsView')
  if (element) {
    element.scrollIntoView()
  }

  const popupContent = document.querySelector('.mobile-popup-content')
  if (popupContent) {
    popupContent.removeEventListener('wheel', preventScroll)
  }
}

// 팝업이 열릴 때 body 스크롤 비활성화
onMounted(() => {
  disableBodyScroll()
})

// 팝업이 닫힐 때 body 스크롤 다시 활성화
onBeforeUnmount(() => {
  enableBodyScroll()
})
</script>

<style lang="scss" scoped>
.mobile-projects-popup {
  background-color: #f5f7fa;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  width: 100vw; /* 화면 크기에 맞춰 적절한 크기로 설정 */
  height: 100vh;
  z-index: 9999; /* 가장 위로 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  -webkit-overflow-scrolling: touch;
}

.mobile-popup-header {
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 16px;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  box-sizing: border-box;
  height: 50px; /* 헤더와 동일한 높이 */
  margin: 5px 0;

  .mobile-popup-title {
    font-size: 18px;
    font-weight: 600;
  }

  .mobile-close-button {
    font-size: 35px;
    cursor: pointer;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.mobile-popup-content {
  padding: 16px 16px 0 16px;
  flex: 1;
  width: 100vw; /* 너비 100%로 설정 */
  height: calc(100vh - 50px);
  box-sizing: border-box; /* 패딩을 너비에 포함 */
  overflow-x: hidden; /* 가로 스크롤 방지 */
  overflow-y: auto; /* 세로 스크롤 활성화 */
}

.mobile-project-images {
  margin-bottom: 20px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
}

.mobile-project-swiper {
  width: 100%;
  height: 220px;

  .mobile-project-swiper-slide {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 100%; /* 슬라이드 너비 100% */

    img,
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
}

:deep(.swiper-pagination-bullet) {
  background: #007aff;
}

.mobile-project-section {
  margin-bottom: 24px;
  background-color: #fff;
  padding: 16px;
  border-radius: 12px;
  width: 100%; /* 섹션 너비 100% */
  box-sizing: border-box; /* 패딩을 너비에 포함 */

  h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
    color: #333;
  }
}

.mobile-skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  .mobile-skill-tag {
    font-size: 14px;
    padding: 6px 12px;
    background-color: #f0f2f5;
    border-radius: 20px;
    color: #333;
  }
}

.mobile-project-period {
  font-size: 14px;
  color: #666;
}

.mobile-project-description {
  .mobile-project-description-padding {
    padding-bottom: 14px;
    .section-title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 12px;
      color: #333;

      &:first-child {
        margin-top: 0;
      }
    }

    .content-title {
      color: #666;
      font-size: 16px;
      margin: 8px 0 4px 0;
    }

    ul {
      margin: 0;
      padding-left: 20px;

      li {
        font-size: 14px;
        margin-bottom: 4px;

        &:last-child {
          margin-bottom: 8px;
        }
      }
    }
  }
}
</style>
<style scoped>
.mobile-project-swiper {
  width: 100%;
  height: 100%;
}

.mobile-project-swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.mobile-project-swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mobile-swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.mobile-project-swiper-slide {
  background-size: cover;
  background-position: center;
}

.mobile-project-swiper {
  height: 100%;
  width: 100%;
}

.mobile-project-swiper-preview {
  height: 100%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mobile-project-swiper-preview .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mobile-project-swiper-preview .swiper-slide-thumb-active {
  opacity: 1;
}

.mobile-project-swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.mobile-project-swiper-slide video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
