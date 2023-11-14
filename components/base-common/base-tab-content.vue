<template>
  <div
    class="text-body-01 h-[40px] text-color-medium hover:bg-bg-03 px-3 flex items-center hover:text-hover-primary cursor-pointer"
    :class="{ 'slug-category text-button': activeFilter === category.slug}"
    @click="$emit('setLayoutPage', category)">
    {{ category.name }}
  </div>
</template>
<script setup>

defineEmits(['setLayoutPage'])
defineProps({
  activeFilter: {
    type: String,
    default: ''
  },
  category: {
    type: Object,
    default: () => {}
  }
})

</script>
