<template>
  <section class="skills-wrap"></section>
</template>
<script setup></script>
<style lang="scss">
.skills-wrap {
  position: relative;
  width: 100%; /* 화면에 꽉 채우기 */
  height: 100vh; /* 내용에 따라 높이 설정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffc107;
  z-index: 2; /* Canvas보다 위에 위치 */
}
</style>
