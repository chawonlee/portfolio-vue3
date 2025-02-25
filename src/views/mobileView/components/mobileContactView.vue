<template>
  <section class="mobile-contact-wrap">
    <section class="mobile-contact-title">
      <div class="mobile-contact-text">CONTACT</div>
      <img
        ref="checkSvg"
        src="@/assets/svg/check.svg"
        alt="check-svg"
        class="mobile-check-svg"
      />
    </section>
    <section>
      <v-card class="mobile-contact-container">
        <!-- title -->
        <div class="mobile-editor-wrap">
          <label class="mobile-editor-label">Title *</label>
          <div class="mobile-editor" :class="{ error: formError.title.error }">
            <input
              id="title"
              type="text"
              name="title"
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
        <!-- Email -->
        <div class="mobile-editor-wrap">
          <label class="mobile-editor-label">Your Email *</label>
          <div class="mobile-editor" :class="{ error: formError.email.error }">
            <input
              id="email"
              name="email"
              type="text"
              v-model="formMng.email"
              required
              @blur="emailVaild()"
            />
            <statusIcon :isError="formError.email.error"></statusIcon>
            <span v-if="formError.email.error">{{
              formError.email.errorMsg
            }}</span>
          </div>
        </div>
        <!-- Message -->
        <div class="mobile-editor-wrap">
          <label class="mobile-editor-label">Message *</label>
          <div
            class="mobile-editor"
            style="height: calc(68vh - 240px) !important"
            :class="{ error: formError.message.error }"
          >
            <textarea
              name="message"
              id="message"
              type="text"
              v-model="formMng.message"
              required
              @blur="messageVaild()"
              style="width: 100%; height: calc(68vh - 260px)"
            ></textarea>
            <statusIcon :isError="formError.message.error"></statusIcon>
            <span v-if="formError.message.error">{{
              formError.message.errorMsg
            }}</span>
          </div>
        </div>
        <!-- send btn-->
        <div class="mobile-contact-button-wrap">
          <v-btn
            size="large"
            class="mobile-contact-button"
            v-if="isFormValid"
            color="#000"
            @click="sendEmail"
          >
            SEND
          </v-btn>
        </div>
      </v-card>
    </section>
  </section>
</template>
<script setup>
import statusIcon from '@/components/statusIcon.vue'
import { ref, watch, computed, onMounted, onUnmounted } from 'vue'
import emailjs from 'emailjs-com'
import { notify } from '@/components/notify'

const formError = ref({
  title: {
    error: true,
    errorMsg: '제목을 입력해주세요',
  },
  email: {
    error: true,
    errorMsg: '이메일을 입력해주세요',
  },
  message: {
    error: true,
    errorMsg: '메시지를 입력해주세요',
  },
})
const formMng = ref({
  title: null,
  email: null,
  message: null,
})

// 모든 에러 상태를 확인하는 computed 속성
const isFormValid = computed(() => {
  return (
    !formError.value.title.error &&
    !formError.value.email.error &&
    !formError.value.message.error
  )
})

const titleVaild = () => {
  if (!formMng.value.title || formMng.value.title.length < 1) {
    formError.value.title.error = true
    formError.value.title.errorMsg = '제목을 입력해주세요'
  } else {
    formError.value.title.error = false
  }
}

const emailVaild = () => {
  const email = formMng.value.email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!email || email.length < 1) {
    formError.value.email.error = true
    formError.value.email.errorMsg = '이메일을 입력해주세요'
  } else if (!emailRegex.test(email)) {
    formError.value.email.error = true
    formError.value.email.errorMsg = '이메일 형식이 아닙니다'
  } else {
    formError.value.email.error = false
    formError.value.email.errorMsg = ''
  }
}

const messageVaild = () => {
  if (!formMng.value.message || formMng.value.message.length < 1) {
    formError.value.message.error = true
    formError.value.message.errorMsg = '메시지를 입력해주세요'
  } else {
    formError.value.message.error = false
  }
}

// `title` 변경 감지
watch(() => formMng.value.title, titleVaild)
// `email` 변경 감지
watch(() => formMng.value.email, emailVaild)
// `message` 변경 감지
watch(() => formMng.value.message, messageVaild)

// EmailJS로 이메일 보내기
const sendEmail = () => {
  const serviceID = import.meta.env.VITE_SERVICE_ID
  const templateID = import.meta.env.VITE_TEMPLATE_ID
  const publicID = import.meta.env.VITE_PUBLIC_ID
  emailjs.send(serviceID, templateID, formMng.value, publicID).then(
    () => {
      notify('success', '전송 성공', '이메일이 성공적으로 전송되었습니다.')
      formMng.value = { title: '', email: '', message: '' }
      formError.value = {
        title: {
          error: true,
          errorMsg: '',
        },
        email: {
          error: true,
          errorMsg: '',
        },
        message: {
          error: true,
          errorMsg: '',
        },
      }
    },
    () => {
      notify(
        'error',
        '전송 실패',
        '이메일 전송에 실패했습니다. 다시 시도해주세요.',
      )
    },
  )
}
</script>
<style lang="scss">
.mobile-contact-wrap {
  padding: 0;
  margin: 0;
  z-index: 1;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background: linear-gradient(to bottom, #a2a0d6, #433878);
  .mobile-contact-title {
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
    .mobile-contact-text {
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

  .mobile-contact-container {
    pointer-events: auto;
    background-color: rgb(255, 255, 255, 0.5);
    width: 90vw;
    max-width: 660px;
    height: 72vh;
    border-radius: 20px !important; /* 모서리를 둥글게 */
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
    .mobile-contact-button-wrap {
      width: 100%;
      height: 80px;
      align-items: center;
      justify-content: center;
      display: flex;
      .contact-button {
        border-radius: 10% !important;
      }
    }
    .mobile-editor-wrap {
      width: 100%;
      padding-bottom: 10px;
      .mobile-editor-label {
        font-size: 0.8rem;
        width: 100%;
      }

      .mobile-editor {
        position: relative;
        width: 100%;
        height: 42px;
        border-radius: 4px;
        padding: 0.5rem;
        background: #f4fce3;
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
        textarea {
          width: 100%;
          padding: 0;
          border-radius: 0;
          border: none;
          background: transparent;
          font-size: 1rem;
          resize: none;
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
