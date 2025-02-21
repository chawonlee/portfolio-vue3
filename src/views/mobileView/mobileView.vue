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
    <!-- Skills -->
    <section id="idMobileSkillsView" class="mobileSkillsView">
      <skills />
    </section>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import home from './components/mobileHomeView.vue'
import about from './components/mobileAboutView.vue'
import skills from './components/mobileSkillsView.vue'
</script>
<style lang="scss"></style>
