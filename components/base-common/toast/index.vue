<template>
  <transition name="top-down">
    <div v-if="toast && toast.isShow" id="toast" :class="`${generateBackground()}`">
      <div v-for="(item, index) in status" :key="index">
        <img
          v-if="toast.type === item.type"
          :src="item.icon"
          width="20"
          height="20"
          alt=""
          class="mr-2 object-cover"
        />
      </div>
      <p class="text-color-light text-button">
        {{ toast.message }}
      </p>
    </div>
  </transition>
</template>

<script setup>
import appStore from '@/store/app'
import { ref, watch, onBeforeUnmount, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import iconError from '@/assets/images/icons/error.svg'
import iconSuccess from '@/assets/images/icons/success.svg'
import iconInfo from '@/assets/images/icons/info.svg'
import iconWarning from '@/assets/images/icons/warning.svg'

const status = reactive([
  {
    type: 'error',
    icon: iconError
  },
  {
    type: 'success',
    icon: iconSuccess
  },
  {
    type: 'info',
    icon: iconInfo
  },
  {
    type: 'warning',
    icon: iconWarning
  }
])
const timeOut = ref(null)
const { toast } = storeToRefs(appStore())
const clearTimeOutToast = () => {
  clearTimeout(timeOut.value)
}
if (toast.value.isShow) {
  clearTimeOutToast()
  timeOut.value = setTimeout(() => (toast.value.isShow = false), 3000)
}

watch(toast, () => {
  if (toast.value.isShow) {
    clearTimeOutToast()
    timeOut.value = setTimeout(() => (toast.value.isShow = false), 3000)
  }
})

onBeforeUnmount(() => {
  clearTimeout(timeOut)
})

const generateBackground = () => {
  switch (toast.value.type) {
    case 'success':
      return 'bg-support-success'
    case 'warning':
      return 'bg-support-warning'
    case 'info':
      return 'bg-support-info'
    case 'error':
      return 'bg-support-danger'
  }
}
</script>
