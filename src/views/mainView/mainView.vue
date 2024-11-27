<template>
  <div class="mainView">
    <!-- About -->
    <section class="aboutView">
      <about />
    </section>
    <!-- Skills -->
    <section class="SkillsView">
      <skills />
    </section>
  </div>
</template>
<script setup>
import about from './components/aboutView.vue'
import skills from './components/skillsView.vue'
</script>
<style lang="scss">
.mainView {
  display: block;
}
.aboutView {
  width: 100%;
}

.SkillsView {
  width: 100%;
}
</style>
