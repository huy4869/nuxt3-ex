<script setup>
// composables
const { sayHello } = UseUtils()
sayHello()

// store
import { useCounterStore} from "~/stores/myStore.js";
const store = useCounterStore()
const { name, doubleCount } = storeToRefs(store)
const { increment } = store
console.log(name.value, doubleCount.value )

// server api
// const response = await $fetch('/api/helo')
// console.log(response)

// useFetch
const { data: products } = await useFetch('/api/products', {
    transform: (response) => response.data
})

const { data: helo, pending } = await useLazyFetch('/api/helo')
console.log(toRaw(products.value))

</script>

<template>
    <div>
        <!--        <img class="logo" src="@/assets/img/nuxt.png" alt="Discover Nuxt 3" />-->
        <header-switch-locale/>
        <profile-header/>
        <alert/>
        <div @click="$router.push('/parent')">change page</div>

        <!--        <div @click="increment">add</div> {{ doubleCount}}-->

        <div> {{ pending ? 'Loading' : helo }}</div>

        <nuxtui-modal/>
<!--        <nuxtui-color-mode/>-->
        <ElButton :icon="ElIconEditPen" type="success">button</ElButton>

    </div>
</template>

<style lang="scss" scoped>

</style>