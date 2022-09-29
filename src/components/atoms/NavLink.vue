<template>
    <RouterLink :to="props.href">
        <span class="text-gray-800 text-lg font-semibold" v-bind="$attrs">
            <slot />
        </span>
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps({
    href: String,
})
</script>

