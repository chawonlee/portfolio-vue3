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
  z-index: 1000;
  ul li {
    color: #433878;
    font-size: 1.1rem;
    display: inline-block;
    margin: 0 15px;
    font-weight: 500;
    position: relative;
    transition: color 0.3s ease;

    &::after {
      content: attr(data-text); /* 현재 텍스트 내용을 그대로 표시 */
      position: absolute;
      left: 0;
      top: 0;
      font-weight: 600; /* hover 시 강조될 font-weight */
      // color: #87a2ff;
      color: #433878;
      white-space: nowrap;
      overflow: hidden;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover::after {
      opacity: 1;
    }

    &:hover {
      color: transparent; /* 본래 글자를 투명하게 처리해 겹쳐보이지 않도록 함 */
    }
  }
}
</style>
