<template>
  <baseMobileHeader v-if="props.isMobileMode" />
  <baseHeader v-else />
  <RouterView />
</template>
<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { defineProps, watch } from 'vue'
import baseHeader from './baseHeader.vue'
import baseMobileHeader from './baseMobileHeader.vue'

const props = defineProps({
  isMobileMode: Boolean, // Boolean 타입의 props
})

const router = useRouter() // Vue Router 인스턴스 가져오기

// isMobileMode 값 변경 감시
watch(
  () => props.isMobileMode,
  (newVal, oldVal) => {
    if (newVal) {
      router.replace('/mobile') // 모바일
    } else {
      router.replace('/') // 데스크톱
    }
  },
)
</script>
<style lang="scss"></style>
