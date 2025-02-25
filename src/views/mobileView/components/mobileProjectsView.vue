<template>
  <section class="mobile-projects-wrap">
    <section class="mobile-projects-title">
      <div class="mobile-projects-text">PROJECTS</div>
      <img
        ref="checkSvg"
        src="@/assets/svg/check.svg"
        alt="check-svg"
        class="mobile-check-svg"
      />
    </section>
    <section class="mobile-projects-container">
      <div
        v-for="(project, projectIdx) in projectsData.list"
        :key="projectIdx"
        class="mobile-project-box"
      ></div>
    </section>
  </section>
</template>
<script setup>
import projectsData from '@/views/mainView/components/data/projectsData.json'
</script>
<style lang="scss">
.mobile-projects-wrap {
  padding: 0;
  margin: 0;
  z-index: 1;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background: linear-gradient(to bottom, #dadada, #d1d0e6);
  .mobile-projects-title {
    margin-top: 120px;
    position: relative; /* 자식 요소들의 기준점 설정 */
    font-family: 'Black Han Sans', sans-serif;
    font-weight: 400;
    font-style: normal;
    height: 20%;
    font-size: clamp(35px, 10vw, 65px);
    color: white; /* 텍스트를 흰색으로 설정 */
    text-shadow:
      0px 1px 3px rgba(80, 80, 80, 0.6),
      /* 살짝 밝은 그림자 */ 0px 3px 6px rgba(120, 120, 120, 0.4); /* 부드럽고 퍼짐 */
    .mobile-projects-text {
      position: absolute;
      top: 50%; /* 수직 가운데 정렬 */
      left: 50%; /* 수평 가운데 정렬 */
      transform: translate(-50%, -50%); /* 가운데 정렬을 위한 보정 */
      z-index: 2; /* 텍스트가 이미지 위에 표시되도록 설정 */
      text-shadow:
        0px 1px 3px rgba(80, 80, 80, 0.6),
        0px 3px 6px rgba(120, 120, 120, 0.4); /* 부드럽고 퍼짐 */
    }

    .mobile-check-svg {
      position: absolute;
      top: 50%; /* SVG를 텍스트보다 약간 아래로 이동 */
      left: 50%; /* 수평 가운데 정렬 */
      transform: translate(-50%, -50%); /* 가운데 정렬 */
      z-index: 1; /* 텍스트 뒤로 배치 */
      width: 15vw;
      min-width: 200px;
      height: auto;
    }
  }

  .mobile-projects-container {
    margin: 100px 0 50px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: 6px;
    width: 96vw;
    max-width: 800px;
    height: 80vh;
    .mobile-project-box {
      display: block;
      border: 1px solid rgba(0, 0, 0, 0.1); /* 연한 테두리 */
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* 부드러운 그림자 */
      transition: box-shadow 0.3s ease-in-out; /* 그림자 부드러운 애니메이션 */
      width: 100%;
      height: 100%;
      border-radius: 20px;
    }
    .mobile-project-box:hover {
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
