<template>
  <section class="contact-wrap">
    <section class="contact-title">
      <div>CONTACT</div>
    </section>
    <v-card color="#fff" class="contact-container">
      <!-- Title -->
      <div class="editor-wrap">
        <label class="editor-label">Title *</label>
        <div class="editor" :class="{ error: formError.title.error }">
          <input
            id="title"
            type="text"
            v-model="formMng.title"
            required
            @blur="titleVaild()"
          />
          <statusIcon :isError="formError.title.error"></statusIcon>
          <span v-if="formError.title.error">{{
            formError.title.errorMsg
          }}</span>
        </div>
      </div>
    </v-card>
  </section>
</template>
<script setup>
import statusIcon from '@/components/statusIcon.vue'
import { ref, watch } from 'vue'

const formError = ref({
  title: {
    error: true,
    errorMsg: '제목을 입력해주세요',
  },
})
const formMng = ref({
  title: null,
})
// `title` 변경 감지
watch(
  () => formMng.value.title,
  (newVal, oldVal) => {
    titleVaild()
  },
)

const titleVaild = () => {
  if (!formMng.value.title || formMng.value.title.length < 1) {
    formError.value.title.error = true
    formError.value.title.errorMsg = '제목을 입력해주세요'
  } else {
    formError.value.title.error = false
  }
}
</script>
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
    width: 660px;
    height: 600px;
    border-radius: 10px; /* 모서리를 둥글게 */
    box-shadow:
      0 4px 6px rgba(0, 0, 0, 0.1),
      /* 부드러운 그림자 */ 0 1px 3px rgba(0, 0, 0, 0.06);
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out; /* hover 효과를 위한 트랜지션 */
    padding: 15px 15px 15px 15px;
    &:hover {
      box-shadow:
        0 6px 8px rgba(0, 0, 0, 0.2),
        0 2px 4px rgba(0, 0, 0, 0.15);
      transform: translateY(-1px);
    }
    .editor-wrap {
      width: 100%;
      .editor-label {
        width: 100%;
      }

      .editor {
        position: relative;
        width: 100%;
        height: 42px;
        border-radius: 4px;
        padding: 0.5rem;
        background: #edf5fd;
        transition: all 0.4s ease-in-out;
        font-size: 8px;
        outline: transparent;

        &.disabled {
          background-color: #ececec;
        }
        &.error {
          border: 1px solid #f96969;
          background: #fef7f7;
          margin-bottom: 1.4rem;

          &:has(:focus-visible) {
            outline: #f96969 auto 1px;
          }

          span:not(.v-select__selection-text) {
            position: absolute;
            top: calc(100% + 4px);
            left: 0;
            color: #f96969;
            font-size: 0.8rem;
            font-weight: 400;
          }
        }

        input {
          width: 100%;
          padding: 0;
          border-radius: 0;
          border: none;
          background: transparent;
          font-size: 1rem;
          font-weight: 400;

          &:focus-visible {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
<style>
.mdi:before,
.mdi-set {
  display: inline-block;
  font: normal normal normal 24px / 1 'Material Design Icons';
  font-size: 20px !important;
  text-rendering: auto;
  line-height: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
