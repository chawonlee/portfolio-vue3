<template>
  <section class="contact-wrap">
    <section class="contact-title">
      <div>CONTACT</div>
    </section>
    <section class="contact-flexView">
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
      <div ref="threeContainer" class="three-container" @click="handleEvents">
        <svg
          version="1.1"
          id="threeCanvas"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2560 1440"
        >
          <defs>
            <filter
              id="blur"
              x="-150%"
              y="-150%"
              width="280%"
              height="280%"
              color-interpolation-filters="sRGB"
            >
              <feGaussianBlur id="gBlur" in="SourceGraphic" stdDeviation="0" />
            </filter>
          </defs>
          <text id="text" x="1250" y="770">Click Me!</text>

          <g id="heart" filter="url(#blur)">
            <polygon
              fill="#D04646"
              points="1261.5,596.5 1258.5,807.5 1132.5,524.5 	"
            />
            <polygon
              fill="#C93B3B"
              points="1261.5,596.5 1388.5,524.5 1258.5,807.5 	"
            />
            <polygon
              fill="#E46565"
              points="1261.5,596.5 1266.5,447.5 1132.5,524.5 	"
            />
            <polygon
              fill="#E46666"
              points="1266.5,447.5 1388.5,524.5 1261.5,596.5 	"
            />
            <polygon
              fill="#DE5C5C"
              points="1266.5,447.5 1414.5,411.5 1388.5,524.5 	"
            />
            <polygon
              fill="#DB5757"
              points="1266.5,447.5 1379.5,315.5 1414.5,411.5 	"
            />
            <polygon
              fill="#CD4040"
              points="1414.5,411.5 1530.5,233.5 1379.5,315.5 	"
            />
            <polygon
              fill="#BD2828"
              points="1414.5,411.5 1597.5,346.5 1530.5,233.5 	"
            />
            <polygon
              fill="#A72121"
              points="1597.5,346.5 1749.5,262.5 1530.5,233.5 	"
            />
            <polygon
              fill="#991F1F"
              points="1597.5,346.5 1703.5,401.5 1749.5,262.5 	"
            />
            <polygon
              fill="#9F2020"
              points="1597.5,346.5 1707.5,486.5 1703.5,401.5 	"
            />
            <polygon
              fill="#7A1C1C"
              points="1749.5,262.5 1875.5,420.5 1707.5,486.5 1703.5,401.5 	"
            />
            <polygon
              fill="#6A1A1A"
              points="1707.5,486.5 1891.5,605.5 1875.5,420.5 	"
            />
            <polygon
              fill="#761C1C"
              points="1707.5,486.5 1717.5,740.5 1891.5,605.5 	"
            />
            <polygon
              fill="#5E1919"
              points="1717.5,740.5 1839.5,824.5 1891.5,605.5 	"
            />
            <polygon
              fill="#901E1E"
              points="1707.5,486.5 1570.5,589.5 1609.5,733.5 1717.5,740.5 	"
            />
            <polygon
              fill="#851D1D"
              points="1609.5,733.5 1508.5,930.5 1717.5,740.5 	"
            />
            <polygon
              fill="#5E1919"
              points="1508.5,930.5 1652.5,997.5 1839.5,824.5 1717.5,740.5 	"
            />
            <polygon
              fill="#9A1F1F"
              points="1609.5,733.5 1258.5,807.5 1508.5,930.5 	"
            />
            <polygon
              fill="#7E1D1D"
              points="1258.5,807.5 1261.5,1043.5 1508.5,930.5 	"
            />
            <polygon
              fill="#611919"
              points="1261.5,1043.5 1445.5,1081.5 1652.5,997.5 1508.5,930.5 	"
            />
            <polygon
              fill="#5E1919"
              points="1261.5,1043.5 1267.5,1192.5 1445.5,1081.5 	"
            />
            <polygon
              fill="#5E1919"
              points="1261.5,1043.5 1086.5,1081.5 1267.5,1192.5 	"
            />
            <polygon
              fill="#5E1919"
              points="1261.5,1043.5 1016.5,930.5 880.5,995.5 1086.5,1081.5 	"
            />
            <polygon
              fill="#851D1D"
              points="1258.5,807.5 1016.5,930.5 1261.5,1043.5 	"
            />
            <polygon
              fill="#821D1D"
              points="1016.5,930.5 805.5,736.5 914.5,733.5 	"
            />
            <polygon
              fill="#981F1F"
              points="914.5,733.5 1258.5,807.5 1016.5,930.5 	"
            />
            <polygon
              fill="#5E1919"
              points="694.5,824.5 880.5,995.5 1016.5,930.5 805.5,736.5 	"
            />
            <polygon
              fill="#5E1919"
              points="694.5,824.5 641.5,598.5 805.5,736.5 	"
            />
            <polygon
              fill="#721B1B"
              points="641.5,598.5 819.5,486.5 805.5,736.5 	"
            />
            <polygon
              fill="#951F1F"
              points="819.5,486.5 953.5,589.5 914.5,733.5 805.5,736.5 	"
            />
            <polygon
              fill="#681A1A"
              points="658.5,416.5 641.5,598.5 819.5,486.5 	"
            />
            <polygon
              fill="#C43232"
              points="1132.5,524.5 1258.5,807.5 914.5,733.5 953.5,589.5 	"
            />
            <polygon
              fill="#C73737"
              points="1132.5,524.5 1109.5,416.5 953.5,589.5 	"
            />
            <polygon
              fill="#DE5C5C"
              points="1109.5,416.5 1132.5,524.5 1266.5,447.5 	"
            />
            <polygon
              fill="#D95555"
              points="1109.5,416.5 1153.5,315.5 1266.5,447.5 	"
            />
            <polygon
              fill="#CB3D3D"
              points="1109.5,416.5 998.5,233.5 1153.5,315.5 	"
            />
            <polygon
              fill="#C02C2C"
              points="1109.5,416.5 926.5,346.5 998.5,233.5 	"
            />
            <polygon
              fill="#B42222"
              points="926.5,346.5 819.5,486.5 953.5,589.5 1109.5,416.5 	"
            />
            <polygon
              fill="#9E2020"
              points="926.5,346.5 779.5,263.5 998.5,233.5 	"
            />
            <polygon
              fill="#891E1E"
              points="779.5,263.5 826.5,401.5 926.5,346.5 	"
            />
            <polygon
              fill="#9E2020"
              points="826.5,401.5 819.5,486.5 926.5,346.5 	"
            />
            <polygon
              fill="#741B1B"
              points="779.5,263.5 658.5,416.5 819.5,486.5 826.5,401.5 	"
            />
            <polygon
              fill="#C02C2C"
              points="1388.5,524.5 1570.5,589.5 1609.5,733.5 1258.5,807.5 	"
            />
            <polygon
              fill="#C73737"
              points="1414.5,411.5 1570.5,589.5 1388.5,524.5 	"
            />
            <polygon
              fill="#BA2323"
              points="1414.5,411.5 1597.5,346.5 1707.5,486.5 1570.5,589.5 	"
            />
          </g>

          <g id="container" filter="url(#blur)">
            <polygon
              fill="#FAAC37"
              points="1364.5,263.5 1379.5,315.5 1266.5,447.5 "
            />
            <polygon
              fill="#FAA92F"
              points="1346.5,233.5 1364.5,263.5 1266.5,393.5"
            />
            <polygon
              fill="#F9B64C"
              points="1364.5,263.5 1266.5,393.5 1266.5,447.5"
            />
            <polygon
              fill="#FAAC36"
              points="1184.5,233.5 1266.5,393.5 1159.5,263.5"
            />
            <polygon
              fill="#F9B447"
              points="1159.5,263.5 1153.5,315.5 1266.5,447.5"
            />
            <polygon
              fill="#F9B447"
              points="1159.5,263.5 1266.5,447.5 1266.5,393.5"
            />
            <polygon
              fill="#FBA222"
              points="1364.5,263.5 1530.5,172.5 1530.5,233.5 1379.5,315.5"
            />
            <polygon
              fill="#FC990F"
              points="1364.5,263.5 1346.5,233.5 1526.5,106.5 1530.5,172.5"
            />
            <polygon
              fill="#BD6809"
              points="1526.5,106.5 1763.5,89.5 1732.5,172.5 1530.5,172.5"
            />
            <polygon
              fill="#E88A0D"
              points="1530.5,172.5 1530.5,233.5 1749.5,262.5 1732.5,172.5"
            />
            <polygon
              fill="#682602"
              points="1763.5,89.5 1959.5,204.5 1900.5,271.5 1732.5,172.5"
            />
            <polygon
              fill="#BC6809"
              points="1732.5,172.5 1749.5,262.5 1900.5,271.5 "
            />
            <polygon
              fill="#571900"
              points="1959.5,204.5 2074.5,369.5 2016.5,411.5 1900.5,271.5"
            />
            <polygon
              fill="#B66309"
              points="1749.5,262.5 1875.5,420.5 2016.5,411.5 1900.5,271.5"
            />
            <polygon
              fill="#401000"
              points="2074.5,369.5 2100.5,589.5 2016.5,599.5 2016.5,411.5"
            />
            <polygon
              fill="#B96509"
              points="2016.5,411.5 1875.5,420.5 1891.5,605.5 2016.5,599.5"
            />
            <polygon
              fill="#B56209"
              points="1891.5,605.5 1839.5,824.5 1965.5,781.5 2016.5,599.5"
            />
            <polygon
              fill="#4D1500"
              points="2100.5,589.5 2031.5,803.5 1965.5,781.5 2016.5,599.5"
            />
            <polygon
              fill="#A35407"
              points="1965.5,781.5 1839.5,937.5 1839.5,824.5"
            />
            <polygon
              fill="#571900"
              points="2032.5,803.5 1881.5,966.5 1839.5,937.5 1965.5,781.5"
            />
            <polygon
              fill="#A85807"
              points="1839.5,824.5 1839.5,937.5 1652.5,997.5"
            />
            <polygon
              fill="#8F4405"
              points="1652.5,997.5 1662.5,1058.5 1839.5,937.5"
            />
            <polygon
              fill="#401000"
              points="1662.5,1058.5 1692.5,1081.5 1881.5,966.5 1839.5,937.5"
            />
            <polygon
              fill="#A75707"
              points="1652.5,997.5 1445.5,1081.5 1485.5,1130.5 1662.5,1058.5"
            />
            <polygon
              fill="#5E1E01"
              points="1662.5,1058.5 1692.5,1081.5 1508.5,1149.5 1485.5,1130.5"
            />
            <polygon
              fill="#571900"
              points="1360.5,1211.5 1267.5,1296.5 1369.5,1252.5"
            />
            <polygon
              fill="#944806"
              points="1445.5,1081.5 1267.5,1192.5 1360.5,1211.5"
            />
            <polygon
              fill="#692702"
              points="1267.5,1192.5 1267.5,1296.5 1360.5,1211.5"
            />
            <polygon
              fill="#401200"
              points="1369.5,1252.5 1267.5,1379.5 1267.5,1296.5"
            />
            <polygon
              fill="#944806"
              points="1267.5,1192.5 1167.5,1211.5 1267.5,1296.5"
            />
            <polygon
              fill="#571900"
              points="1267.5,1296.5 1159.5,1252.5 1267.5,1379.5"
            />
            <polygon
              fill="#A05207"
              points="1167.5,1211.5 1267.5,1296.5 1159.5,1252.5"
            />
            <polygon
              fill="#D3790B"
              points="1167.5,1211.5 1086.5,1081.5 1267.5,1192.5"
            />
            <polygon
              fill="#ED8D0E"
              points="1043.5,1130.5 1086.5,1081.5 1167.5,1211.5"
            />
            <polygon
              fill="#CD750B"
              points="1043.5,1130.5 1159.5,1252.5 1167.5,1211.5"
            />
            <polygon
              fill="#DA7F0C"
              points="1043.5,1130.5 1029.5,1154.5 1159.5,1252.5"
            />
            <polygon
              fill="#FB9F1B"
              points="880.5,995.5 1086.5,1081.5 1043.5,1130.5 865.5,1058.5"
            />
            <polygon
              fill="#FA970F"
              points="865.5,1058.5 849.5,1081.5 1029.5,1154.5 1043.5,1130.5"
            />
            <polygon
              fill="#FBA425"
              points="880.5,995.5 694.5,935.5 865.5,1058.5 "
            />
            <polygon
              fill="#FBA11F"
              points="694.5,935.5 653.5,963.5 849.5,1081.5 865.5,1058.5"
            />
            <polygon
              fill="#F9B74D"
              points="694.5,935.5 694.5,824.5 880.5,995.5"
            />
            <polygon
              fill="#F7C76E"
              points="694.5,824.5 563.5,779.5 694.5,935.5"
            />
            <polygon
              fill="#F8C264"
              points="563.5,779.5 504.5,801.5 653.5,963.5 694.5,935.5"
            />
            <polygon
              fill="#662501"
              points="1508.5,1149.5 1369.5,1252.5 1485.5,1130.5 "
            />
            <polygon
              fill="#A05207"
              points="1445.5,1081.5 1485.5,1130.5 1360.5,1211.5 "
            />
            <polygon
              fill="#571900"
              points="1360.5,1211.5 1369.5,1252.5 1485.5,1130.5 "
            />
            <polygon
              fill="#F5D995"
              points="563.5,779.5 511.5,598.5 641.5,598.5 694.5,824.5"
            />
            <polygon
              fill="#F6D286"
              points="511.5,598.5 437.5,589.5 504.5,801.5 563.5,779.5"
            />
            <polygon
              fill="#F5D995"
              points="437.5,589.5 459.5,370.5 515.5,408.5 511.5,598.5"
            />
            <polygon
              fill="#F4E2A6"
              points="515.5,408.5 658.5,418.5 641.5,598.5 511.5,598.5"
            />
            <path
              fill="none"
              stroke="#0D0D0D"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="M515.5,408.5L515.5,408.5L515.5,408.5z"
            />
            <polygon
              fill="#F6D388"
              points="515.5,408.5 515.5,408.5 629.5,271.5 779.5,263.5 658.5,418.5"
            />
            <polygon
              fill="#F7C367"
              points="629.5,271.5 571.5,205.5 459.5,370.5 515.5,408.5"
            />
            <polygon
              fill="#F9B54A"
              points="571.5,205.5 769.5,92.5 793.5,172.5 629.5,271.5"
            />
            <polygon
              fill="#F8BD59"
              points="793.5,172.5 779.5,263.5 629.5,271.5"
            />
            <polygon
              fill="#FBA527"
              points="769.5,92.5 769.5,92.5 1006.5,106.5 993.5,172.5 793.5,172.5"
            />
            <polygon
              fill="#F9B952"
              points="993.5,172.5 998.5,233.5 779.5,263.5 793.5,172.5"
            />
            <polygon
              fill="#FBA427"
              points="1006.5,106.5 1006.5,106.5 1184.5,233.5 1159.5,263.5 993.5,172.5"
            />
            <polygon
              fill="#F9B345"
              points="993.5,172.5 998.5,233.5 1153.5,315.5 1159.5,263.5"
            />
          </g>
        </svg>
      </div>
    </section>
    <img
      src="@/assets/image/clickHeart.png"
      class="hover-instruction"
      alt="clickHeart"
    />
  </section>
</template>

<script setup>
import statusIcon from '@/components/statusIcon.vue'
import { ref, watch, computed, onMounted, onUnmounted } from 'vue'
import emailjs from 'emailjs-com'
import { gsap } from 'gsap'
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

const threeContainer = ref(null)
const heart = ref([])
const together = ref(false)
onMounted(() => {
  if (threeContainer.value) {
    // Heart polygons
    heart.value = threeContainer.value.querySelectorAll('polygon')

    // Initial GSAP setup
    gsap.set(heart.value, {
      transformOrigin: 'center',
    })

    // disperse() // Start with hearts dispersed
  } else {
    console.error('Heart container is not available.')
  }
})

function disperse() {
  heart.value.forEach(poly => {
    gsap.to(poly, {
      duration: 1,
      x: 'random(-3000, 3000)',
      y: 'random(-3000, 3000)',
      rotation: 'random(0, 360)',
      scale: 'random(1.5, 2.0)',
      ease: 'power2',
    })
  })

  gsap.to('#gBlur feGaussianBlur', {
    duration: 1,
    attr: { stdDeviation: 12 },
    ease: 'power2',
  })

  gsap.to('#text', {
    duration: 1,
    autoAlpha: 1,
  })
}

function putTogether() {
  gsap.to(heart.value, {
    duration: 1,
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    ease: 'back(0.8)',
    stagger: 0.001,
  })

  gsap.to('#gBlur feGaussianBlur', {
    duration: 1,
    attr: {
      stdDeviation: 0,
    },
    ease: 'back',
  })

  gsap.to('#text', {
    duration: 1,
    autoAlpha: 0,
    delay: 0.5,
  })
}

function handleEvents() {
  if (together.value) {
    disperse()
  } else {
    putTogether()
  }
  together.value = !together.value
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
  pointer-events: none; /* 마우스 이벤트를 차단 */
  z-index: 2;
  .hover-instruction {
    z-index: 1;
    position: absolute;
    right: 15%;
    top: 20%;
    animation: float 2s ease-in-out infinite;
    padding-bottom: 3%;
  }
  /* 둥둥 떠다니는 애니메이션 */
  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px); /* 위로 20px 이동 */
    }
    100% {
      transform: translateY(0);
    }
  }
  .contact-title {
    font-family: 'Black Han Sans', sans-serif;
    font-weight: 400;
    font-style: normal;
    height: 15%;
    padding-bottom: 50px;
    font-size: clamp(40px, 10vw, 65px);
    color: white; /* 텍스트를 흰색으로 설정 */
    text-shadow:
      0px 1px 3px rgba(80, 80, 80, 0.6),
      /* 살짝 밝은 그림자 */ 0px 3px 6px rgba(120, 120, 120, 0.4); /* 부드럽고 퍼짐 */
  }
  .contact-flexView {
    display: flex;
    gap: 3%;
    .three-container {
      background-color: rgba(0, 0, 0, 0.8);
      pointer-events: auto;
      border-radius: 30px;
      width: 600px;
      height: 600px;
      overflow: hidden;
      #threeCanvas {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .contact-container {
      pointer-events: auto;
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

            &:focus-visible {
              outline: none;
            }
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
