<template>
  <v-dialog
    v-model="dialog"
    :width="!props.fullscreen ? props.width : ''"
    :fullscreen="props.fullscreen"
    :persistent="props.persistent"
  >
    <template #default>
      <v-card
        :height="props.height"
        :color="props.bgColor"
        :class="props.cardClass"
      >
        <template v-if="props.header">
          <v-toolbar :color="props.color">
            <v-toolbar-title
              class="dialog-toolbar-title"
              :class="`font-weight-bold text-${props.titleColor}`"
            >
              {{ props.title }}
            </v-toolbar-title>
            <template #append>
              <template v-if="!props.bottomClose">
                <v-btn
                  :color="props.titleColor"
                  icon="mdi-close"
                  variant="text"
                  @click="dialog = false"
                  alt="닫기 버튼"
                />
              </template>
            </template>
          </v-toolbar>
        </template>
        <v-col class="pa-0 overflow-auto">
          <slot name="default" />
        </v-col>
        <template v-if="props.bottomClose">
          <v-card-actions class="justify-end">
            <v-btn variant="text" @click="dialog = false">{{
              t(`close`)
            }}</v-btn>
          </v-card-actions>
        </template>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useLocale } from 'vuetify'
const { t } = useLocale()

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  header: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: 'primary',
  },
  bgColor: {
    type: String,
    default: 'contents-bg',
  },
  title: {
    type: String,
    default: '',
  },
  titleColor: {
    type: String,
    default: 'contents-bg',
  },
  bottomClose: {
    type: Boolean,
    default: false,
  },
  width: {
    type: [Number, String],
    default: 800,
  },
  height: {
    type: [String, Number],
    default: 600,
  },
  fullscreen: {
    type: Boolean,
    default: false,
  },
  persistent: {
    type: Boolean,
    default: false,
  },
  cardClass: {
    type: String,
    default: '',
  },
})

const dialog = ref(false)

watch(
  () => props.modelValue,
  () => {
    dialog.value = props.modelValue
  },
)

watch(dialog, () => {
  if (!dialog.value) {
    emit('update:modelValue', false)
  }
})
</script>

<style scoped lang="scss">
.dialog-toolbar-title {
  font-size: 1.7rem;
}
</style>
