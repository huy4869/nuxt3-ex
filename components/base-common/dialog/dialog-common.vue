<template>
  <el-dialog
    v-model='isVisible' :class='[`dialog_common `,sizeClass , classExtra]'
    :close-on-click-modal='false'
    :close-on-press-escape="true"
    :width="width"
    :destroy-on-close="true"
    :show-close='false'
    @keydown.esc="emits('close', false)">
    <template #header='{ close, titleId, titleClass }'>
      <div class='my-header flex justify-between items-center'>
      <div class="flex items-center">
        <slot name="icon"></slot>
        <span :id='titleId' :class='[titleClass, `min-w-min`]'>{{ title }}</span>
      </div>
        <BaseIconButton
          :icon-button-hover="iconCloseHover"
          :icon-button="iconClose"
          @submit='closeModal(close)'
        />
      </div>
    </template>
    <slot name="content"></slot>
   <template #footer>
     <slot name="footer"></slot>
   </template>
  </el-dialog>
</template>
<script setup>
import iconClose from '@/assets/images/icons/close.svg'
import iconCloseHover from '@/assets/images/icons/close-active.svg'

const emits = defineEmits(['close'])
const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  classExtra: {
    type: String,
    default: '',
  },
  width: {
    type: Number,
    default:300,
  },
  sizeClass: {
    type:String,
    default: 'dialog-small'
  }
})
const { isVisible, title } = toRefs(props)

const closeModal = (cb, param) => {
  emits('close', param)
}
</script>
<script>
export default {
  name: 'DialogCommon',
}
</script>
