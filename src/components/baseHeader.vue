<template>
  <section class="header">
    <!-- 로고 -->
    <img src="../assets/image/Logo.png" />
    <!-- 메뉴 -->
    <nav>
      <ul>
        <li data-text="About">
          <a>About</a>
        </li>
        <li data-text="Skills">
          <a>Skills</a>
        </li>
        <li data-text="Projects">
          <a>Projects</a>
        </li>
        <li data-text="Contact">
          <a>Contact</a>
        </li>
      </ul>
    </nav>
  </section>
</template>
<script setup></script>
<style lang="scss">
.header {
  position: absolute; /* 부모 요소(#app)를 기준으로 위치 */
  justify-content: space-between; /* img와 nav를 양쪽 끝에 배치 */
  align-items: center; /* 수직 중앙 정렬 */
  display: flex;
  top: 0;
  left: auto;
  width: 100%;
  height: 68px;
  backdrop-filter: blur(1.5px);
  color: black;
  background: rgb(255 255 255 / 29%);
  border-bottom: 1px solid #f8f0fc;
  z-index: 101;
  ul li {
    color: #433878;
    font-size: 1.1rem;
    display: inline-block;
    margin: 0 15px;
    font-weight: 500;
    position: relative;
    transition: color 0.3s ease;

    /* 하단 바 설정 */
    &::after {
      content: '';
      position: absolute;
      bottom: -20px; /* 글자 아래에 배치 */
      left: 0;
      width: 0%; /* 초기 너비는 0% */
      height: 3px; /* 바 높이 */
      background-color: #433878; /* 바 색상 */
      transition:
        width 0.5s ease,
        left 0.5s ease; /* 애니메이션 설정 */
    }

    /* hover 효과 */
    &:hover::after {
      width: 100%; /* 전체 너비로 확장 */
      left: 0; /* 왼쪽에서 시작 */
    }
  }
}
</style>
