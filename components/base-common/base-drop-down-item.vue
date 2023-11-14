<template>
  <button :disabled="isDisable" class="w-full p-3 hover:bg-bg-01" :class="classCustom">
      <div class="flex items-center justify-start">
        <img v-if="icon" :src="icon" class="mr-2"  alt=""/>
        <p class="text-body-01 text-color-dark truncate" :class="textClass">
          {{label}}
        </p>
      </div>
  </button>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    required: true
  },
  isDisable: {
    type: Boolean,
    default: false
  },
  classCustom: {
    type:String,
    default: ''
  },
  textClass: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>

</style>
