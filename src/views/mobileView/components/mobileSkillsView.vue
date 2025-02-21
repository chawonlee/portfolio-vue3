<template>
  <section class="mobile-skills-wrap">
    <section class="mobile-skills-title">
      <div class="mobile-skills-text">SKILLS</div>
      <img
        ref="checkSvg"
        src="@/assets/svg/check.svg"
        alt="check-svg"
        class="mobile-check-svg"
      />
    </section>
  </section>
</template>
<script setup></script>
<style lang="scss">
.mobile-skills-wrap {
  pointer-events: none;
  position: relative;
  display: flex;
  flex-direction: column; // 자식 요소를 세로로 배치
  align-items: center; // 가로 정렬
  justify-content: center; // 위에서부터 정렬
  width: 100%;
  height: 100vh; // 전체 높이를 자식 요소에 맞춤
  z-index: 1;
  overflow: hidden;
  background: linear-gradient(to bottom, #626262, #dadada);

  .mobile-skills-title {
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
    .mobile-skills-text {
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
}
</style>
