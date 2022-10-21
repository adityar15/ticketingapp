<template>
    <input v-bind="$attrs" @input="$emit('update:modelValue', $event.target.value)" />
</template>

<script setup>
const props = defineProps({
    modelValue: String 
})
const emit = defineEmit(['update:modelValue'])
</script>

