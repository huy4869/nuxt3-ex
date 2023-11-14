<template>
  <a :class="[ classExtra,'text-brand-primary text-body-01 cursor-pointer hover:underline hover:text-hover-primary']" @click.stop="$emit('submit')">
  {{ text }}
  </a>
</template>
<script setup>
defineProps({
  classExtra: {
    type: String,
    default: "text-brand-primary"
  },
  text: {
    type: String,
    default: ""
  },

})
defineEmits(['submit'])

</script>
