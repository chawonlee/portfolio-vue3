/** ✏️ 아이콘 추가  */
import '@mdi/font/css/materialdesignicons.css' // Material Design Icons
import { aliases, mdi } from 'vuetify/iconsets/mdi' // Material Design Icon
import { fa } from 'vuetify/iconsets/fa' // Font Awesome Icon

const icon = {
  defaultSet: 'mdi',
  aliases,
  sets: {
    mdi,
    fa,
  },
}
export default icon
