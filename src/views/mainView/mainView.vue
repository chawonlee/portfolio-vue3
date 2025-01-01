<template>
  <div class="mainView">
    <!-- About -->
    <section class="aboutView">
      <about />
    </section>
    <!-- Skills -->
    <section class="skillsView">
      <skills />
    </section>
    <!-- Project -->
    <section class="projectsView">
      <projects />
    </section>
    <!-- Career -->
    <section class="careerView">
      <career />
    </section>
  </div>
</template>
<script setup>
import about from './components/aboutView.vue'
import skills from './components/skillsView.vue'
import projects from './components/projectsView.vue'
import career from './components/careerView.vue'
</script>
<style lang="scss">
.mainView {
  display: block;
}
.aboutView,
.skillsView,
.projectsView,
.careerView {
  width: 100%;
}
</style>
