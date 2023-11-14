<template>
<el-avatar :src="uri !== null ? uri : '' " :size="size" fit="cover" class="border-none" >
  <template #default>
    <img :src="imageDefault" alt="">
  </template>
</el-avatar>
</template>

<script setup>
import imageDefault from '@/assets/images/icons/image_default.svg'
defineProps({
  uri: {
    type:String,
    default: null
  },
  size: {
    type: Number,
    default: 32
  },
  isBorder: {
    type: Boolean,
    default: false
  }
})
</script>
