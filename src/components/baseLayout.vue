<template>
  <baseHeader />
  <RouterView />
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import baseHeader from './baseHeader.vue'
</script>
