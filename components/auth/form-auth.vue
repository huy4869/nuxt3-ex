<template>
  <div class="w-[450px] bg-bg-02 px-8 py-12 backdrop-blur-xl rounded">
    <p v-if="isTitle" class="text-heading-01 text-center pb-6">
      {{ title  }}
    </p>
    <slot name="form-component"></slot>
  </div>
</template>
<script setup>
 defineProps({
  title: {
    type: String,
    default: ''
  },
  isTitle: {
    type:Boolean,
    default: true,
  }
})

</script>
