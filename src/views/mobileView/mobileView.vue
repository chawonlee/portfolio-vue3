<template>
  <div class="mobileView">
    <!-- Home -->
    <section id="idMobileHomeView" class="mobileHomeView">
      <home />
    </section>
    <!-- About -->
    <section id="idMobileAboutView" class="mobileAboutView">
      <about />
    </section>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import home from './components/mobileHomeView.vue'
import about from './components/mobileAboutView.vue'
</script>
<style lang="scss">
.mobileView,
.mobileHomeView,
.mobileAboutView {
  margin: 0;
  padding: 0;
}
</style>
