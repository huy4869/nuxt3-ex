<template>
  <div v-if="loading" class="loading fixed top-0 left-0 right-0 flex justify-center items-center h-100v w-100v">
    <div class="loader-spinner">
      <img class="w-[72px] h-[72px]" :src="iconLoading" alt="loading">
    </div>
  </div>
</template>
<script setup>
import appStore from '@/store/app'
import { storeToRefs } from 'pinia'
import iconLoading from '@/assets/images/loading/loading.gif'

const { loading } = storeToRefs(appStore())
</script>
<style></style>
