/** ✏️ Vuetify  */
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
/** ✏️ Vuetify UI Component  */
import * as components from 'vuetify/components'
/** ✏️ Vuetify Directives  */
import * as directives from 'vuetify/directives'
/** ✏️ Vuetify Labs Components  */
import * as labsComponents from 'vuetify/labs/components'
/** ✏️ Icon 추가 (Material Design Icon, FontAwesome) */
import icon from '@/plugin/icons'
/** ✏️ Material Design 3 적용  */
import { md3 } from 'vuetify/blueprints'
/** ✏️ 테마 추가  */
import theme from '@/assets/theme/theme'
/** ✏️ i18n Adapter  */
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
/** ✏️ vue-i18n 추가  */
import { createI18n, useI18n } from 'vue-i18n'
/** ✏️ 다국어 메세지 추가  */
import { ko, en } from 'vuetify/locale'
import localeMessages from '@/i18n/index'
const messages = {
  ko: {
    ...localeMessages.ko,
    $vuetify: ko,
  },
  en: {
    ...localeMessages.en,
    $vuetify: en,
  },
}
/** ✏️ create vue-i18n  */
const i18n = createI18n({
  legacy: true, // vue2와 호환성 제공하지 않음 : vue3에 맞게 업데이트
  locale: 'ko', // 기본 언어
  fallbackLocale: 'en', // 기본 언어가 없을 경우 대체 언어
  messages, // 다국어 객체
  silentTranslationWarn: true, // 번역을 찾지 못한 경우 콘솔에 경고 표시 여부
})
/** ✏️ create vuetify  */
const vuetify = createVuetify({
  components: {
    ...components,
    ...labsComponents,
  },
  directives,
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }, { useScope: 'global' }),
  },
  blueprint: md3,
  theme: theme,
  icons: icon,
  styles: {},
  display: {
    mobileBreakpoint: 'sm',
    thresholds: {
      xs: 0,
      sm: 340,
      md: 540,
      lg: 800,
      xl: 1280,
    },
  },
})
/** ✏️ plugin setting  */
const vuetifyPlugins = {
  vuetify: vuetify,
  i18n: i18n,
}
export default vuetifyPlugins
