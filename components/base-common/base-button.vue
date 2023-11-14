<template>
  <el-button
    :class="[ classExtra, classCustom, isFullWidth ? 'w-full' : '', 'btn-common']"
    :loading="loading"
    :disabled="disabled"
    :readonly="readonly"
    :size="size"
    :tabindex="tabindex"
    @click.stop="$emit('submit')"
  >
    <div class="flex items-center">
     <div :class="[text ? 'mr-2' : '' ,iconLeft ? 'w-[20px] h-[20px] flex items-center justify-center': '']">
       <img v-if="iconLeft" :src="iconLeft" alt="">
     </div>
      <p>{{ text }}</p>
      <div :class="[text ? 'mr-2' : '' ,iconRight ? 'w-[20px] h-[20px] flex items-center justify-center': '']">
        <img v-if="iconRight" :src="iconRight" alt="">
      </div>
    </div>
  </el-button>
</template>
<script setup>
import { COMMON_PROPS_BUTTON } from '@/constants/button'
 defineProps({ ...COMMON_PROPS_BUTTON })
 defineEmits(['submit'])

</script>
