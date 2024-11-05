<template>
  <section class="header">
    <!-- 로고 -->
    <img src="../assets/image/Logo.png" />
    <!-- 메뉴 -->
    <nav>
      <ul>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Skills</a>
        </li>
        <li>
          <a>Projects</a>
        </li>
        <li>
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
  z-index: 1000;
  ul li {
    color: #433878;
    font-size: 1.2rem;
    display: inline-block;
    margin: 0 15px;
    transition:
      font-size 1s ease,
      color 1s ease; /* font-size와 color 변경 시 부드럽게 변하도록 설정 */
  }
  ul li:hover {
    font-size: 1.3rem;
    color: #e4b1f0;
  }
  ul li:last-child {
    margin: 0 0 0 15px;
  }
  a {
    font-weight: 600;
  }
}
</style>
