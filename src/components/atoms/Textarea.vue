<template>
    <textarea @input="$emit('update:modelValue', $event.target.value)">
        <slot />
    </textarea>
</template>

<script setup>
const props = defineProps({modelValue: String})
const emit = defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>

</style>