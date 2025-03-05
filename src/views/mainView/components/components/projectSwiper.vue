<template>
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
    class="project-swiper"
  >
    <swiper-slide v-if="props.project.videos" class="project-swiper-slide">
      <video
        loop
        autoplay
        muted
        controls
        :src="`assets/projects/${props.project.id}/${props.project.videos}`"
      ></video>
    </swiper-slide>
    <swiper-slide
      v-for="(img, idx) in props.project.images"
      :key="idx"
      class="project-swiper-slide"
    >
      <img :src="`assets/projects/${props.project.id}/${img}`" />
    </swiper-slide>
  </swiper>
  <swiper
    @swiper="setThumbsSwiper"
    :spaceBetween="5"
    :slidesPerView="
      props.project.videos
        ? props.project.images.length + 1
        : props.project.images.length
    "
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
    class="project-swiper-video"
  >
    <swiper-slide v-if="props.project.videos" class="project-swiper-slide">
      <video
        :src="`assets/projects/${props.project.id}/${props.project.videos}`"
      ></video>
    </swiper-slide>
    <swiper-slide
      v-for="(img, idx) in props.project.images"
      :key="idx"
      class="project-swiper-slide"
    >
      <img :src="`assets/projects/${props.project.id}/${img}`" />
    </swiper-slide>
  </swiper>
</template>
<script setup>
import { onMounted, ref, onUnmounted, defineProps } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

// import required modules
import { FreeMode, Navigation, Thumbs, Zoom } from 'swiper/modules'

const modules = [FreeMode, Navigation, Thumbs, Zoom]

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

//slider
const thumbsSwiper = ref(null)
const setThumbsSwiper = swiper => {
  thumbsSwiper.value = swiper
}
</script>
<style scoped>
.project-swiper {
  width: 100%;
  height: 100%;
}

.project-swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.project-swiper-slide {
  background-size: cover;
  background-position: center;
}

.project-swiper {
  height: 100%;
  width: 100%;
}

.project-swiper-video {
  height: 100%;
  box-sizing: border-box;
  padding: 10px 0;
}

.project-swiper-video .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.project-swiper-video .swiper-slide-thumb-active {
  opacity: 1;
}

.project-swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.project-swiper-slide video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
