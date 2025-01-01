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
    <section class="ProjectsView">
      <projects />
    </section>
  </div>
</template>
<script setup>
import about from './components/aboutView.vue'
import skills from './components/skillsView.vue'
import projects from './components/projectsView.vue'
</script>
<style lang="scss">
.mainView {
  display: block;
}
.aboutView,
.skillsView,
.ProjectsView {
  width: 100%;
}
</style>
