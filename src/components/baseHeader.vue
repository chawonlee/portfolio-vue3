<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item"><a>About</a></li>
        <li class="nav-item"><a>Skills</a></li>
        <li class="nav-item"><a>Projects</a></li>
        <li class="nav-item"><a>Contact</a></li>
      </ul>
    </nav>
  </header>
</template>
<script setup></script>
<style lang="scss">
.header {
  position: fixed; /* 부모 요소(#app)를 기준으로 위치 */
  top: 0;
  width: 100%;
  height: 68px;
  backdrop-filter: blur(3px);
  color: black;
  background: rgb(255 255 255 / 29%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  border-bottom: 1px solid #f8f0fc;
  z-index: 101;

  .nav-list {
    display: flex; /* 가로 정렬 */
    justify-content: space-around; /* 항목 간 균등 간격 */
    align-items: center; /* 세로 정렬 */
    width: 100%; /* 전체 너비 */
    height: 68px;
    list-style: none;
    margin: 0;
    padding: 0;

    .nav-item {
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      height: 100%; /* 헤더 높이와 동일하게 */
      display: flex; /* 플렉스를 사용해 자식 요소 정렬 */
      align-items: center; /* 세로 중앙 정렬 */
      justify-content: center; /* 가로 중앙 정렬 */

      a {
        text-decoration: none;
        color: #433878; /* 기본 텍스트 색상 */
        font-weight: 500;
        transition: color 0.3s;

        &:hover {
          color: #007bff; /* 호버 시 색상 변경 */
        }
      }
    }
  }
}
</style>
