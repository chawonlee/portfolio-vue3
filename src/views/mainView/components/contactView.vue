<template>
  <section class="contact-wrap">
    <section class="contact-title">
      <div>CONTACT</div>
    </section>
    <v-card color="#fff" class="contact-container"> </v-card>
  </section>
</template>
<script setup></script>
<style lang="scss">
.contact-wrap {
  position: relative;
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  z-index: 2;

  .contact-title {
    font-family: 'Black Han Sans', sans-serif;
    font-weight: 400;
    font-style: normal;
    height: 15%;
    padding-bottom: 50px;
    font-size: 4rem;
    text-shadow:
      1px 1px 1px #fff,
      1px 2px 1px #fff,
      1px 3px 1px #fff,
      1px 4px 1px #fff,
      1px 18px 6px rgba(16, 16, 16, 0.4),
      1px 22px 10px rgba(16, 16, 16, 0.2),
      1px 25px 35px rgba(16, 16, 16, 0.2),
      1px 30px 60px rgba(16, 16, 16, 0.4);
  }

  .contact-container {
    align-items: center;
    justify-content: center;
    width: 660px;
    height: 600px;
    border-radius: 10px; /* 모서리를 둥글게 */
    box-shadow:
      0 4px 6px rgba(0, 0, 0, 0.1),
      /* 부드러운 그림자 */ 0 1px 3px rgba(0, 0, 0, 0.06);
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out; /* hover 효과를 위한 트랜지션 */

    &:hover {
      box-shadow:
        0 6px 8px rgba(0, 0, 0, 0.2),
        0 2px 4px rgba(0, 0, 0, 0.15);
      transform: translateY(-1px);
    }
  }
}
</style>
