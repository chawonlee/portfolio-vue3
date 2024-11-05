<template>
  <section class="main-wrap">
    <!-- About -->
    <section class="aboutView">
      <about />
    </section>
  </section>
</template>
<script setup>
import about from './components/aboutView.vue'
</script>
<style lang="scss">
.main-wrap {
  position: relative;
  padding: 10% 0 0 0;
  width: 100%;
  height: 100vh;
  background-color: white;
}
</style>
