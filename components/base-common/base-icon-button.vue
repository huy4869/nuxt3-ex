<template>
  <el-button
    :class="[classCustom, 'justify-center btn-icon', '']"
    :loading="loading"
    :disabled="disabled"
    :readonly="readonly"
    @click.stop="$emit('submit')"
  >
      <div :class="['w-[24px] h-[24px] flex items-center justify-center']">
        <img v-if="!disabled " :class="['icon-default']" :src="iconButton" :alt="iconButton">
        <img v-if="!disabled && iconButtonHover" class="icon-hover" :src="iconButtonHover" :alt="iconButtonHover">
        <img v-if="disabled && iconButtonDisabled" :src="iconButtonDisabled" :alt="iconButtonDisabled">
      </div>
  </el-button>
</template>
<script setup>
import { COMMON_PROPS_BUTTON } from '@/constants/button'
defineProps({ ...COMMON_PROPS_BUTTON })
defineEmits(['submit'])

</script>
