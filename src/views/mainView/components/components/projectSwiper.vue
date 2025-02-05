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
    class="mySwiper2"
  >
    <swiper-slide v-if="props.project.videos">
      <video
        loop
        autoplay
        muted
        controls
        :src="`assets/projects/${props.project.id}/${props.project.videos}`"
      ></video>
    </swiper-slide>
    <swiper-slide v-for="(img, idx) in props.project.images" :key="idx">
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
    class="mySwiper"
  >
    <swiper-slide v-if="props.project.videos">
      <video
        :src="`assets/projects/${props.project.id}/${props.project.videos}`"
      ></video>
    </swiper-slide>
    <swiper-slide v-for="(img, idx) in props.project.images" :key="idx">
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
