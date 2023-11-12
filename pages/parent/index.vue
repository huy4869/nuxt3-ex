<template>
    <div>
        <div>parent page</div>
        <button @click="modal = true">
            Open Modal
        </button>
        <div v-if="modal" v-on-click-outside="closeModal">
            Hello World
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'

const modal = ref(false)
function closeModal() {
    modal.value = false
}

</script>