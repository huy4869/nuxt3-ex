<template>
    <div> id: {{ $route.params.id }}</div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp()
console.log(nuxtApp)
definePageMeta({
    layout: 'custom'
})
</script>

<style scoped>

</style>