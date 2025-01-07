<template>
  <section class="contact-wrap">
    <section class="contact-title">
      <div>CONTACT</div>
    </section>
    <v-card color="#fff" class="contact-container">
      <!-- title -->
      <div class="editor-wrap">
        <label class="editor-label">Title *</label>
        <div class="editor" :class="{ error: formError.title.error }">
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
      <div class="editor-wrap">
        <label class="editor-label">Your Email *</label>
        <div class="editor" :class="{ error: formError.email.error }">
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
      <div class="editor-wrap">
        <label class="editor-label">Message *</label>
        <div
          class="editor"
          style="height: 300px !important"
          :class="{ error: formError.message.error }"
        >
          <textarea
            name="message"
            id="message"
            type="text"
            v-model="formMng.message"
            required
            @blur="messageVaild()"
            style="width: 100%; height: 280px"
          ></textarea>
          <statusIcon :isError="formError.message.error"></statusIcon>
          <span v-if="formError.message.error">{{
            formError.message.errorMsg
          }}</span>
        </div>
      </div>
      <!-- send btn-->
      <div class="contact-button-wrap">
        <v-btn
          size="large"
          class="contact-button"
          v-if="isFormValid"
          color="#000"
          @click="sendEmail"
        >
          SEND
        </v-btn>
      </div>
    </v-card>
  </section>
</template>

<script setup>
import statusIcon from '@/components/statusIcon.vue'
import { ref, watch, computed } from 'vue'
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
.contact-wrap {
  position: relative;
  width: 100%;
  height: 850px;
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
    .contact-button-wrap {
      width: 100%;
      height: 80px;
      align-items: center;
      justify-content: center;
      display: flex;
      .contact-button {
        border-radius: 10% !important;
      }
    }
    .editor-wrap {
      width: 100%;
      padding-bottom: 10px;
      .editor-label {
        width: 100%;
      }

      .editor {
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
          overflow-y: scroll;

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
