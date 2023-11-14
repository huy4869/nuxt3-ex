<template>
  <div class="items-center justify-center grid grid-cols-1 w-full mt-24">
    <div class="grid items-center justify-center">
      <img :src="noDataItem" alt="no item data" class="items-center justify-center flex">
      <p class="text-body-01 text-color-disabled text-center mt-2">Không có dữ liệu</p>
    </div>
  </div>
</template>
<script setup>
import noDataItem from '@/assets/images/icons/empty-box.svg'
</script>
