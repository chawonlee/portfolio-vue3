<template>
  <div class="status-icon" :class="isError ? 'error' : 'pass'">
    <v-icon
      :icon="isError ? 'mdi-alert-circle-outline' : 'mdi-check-bold'"
    ></v-icon>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue'

onMounted(() => {})

const props = defineProps({
  isError: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.status-icon {
  position: absolute;
  display: flex;
  /* align-items: center; */
  padding-top: 15px;
  justify-content: flex-end;
  width: 25px !important;
  height: 100%;
  padding-right: 10px;
  top: 0;
  right: 0;
  z-index: 1;
  color: #c1c3c5;
  transition: all ease 0.4s;

  &.pass {
    color: #94d82d;
  }

  &.error {
    color: #f96969;
  }
}
</style>
