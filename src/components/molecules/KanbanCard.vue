<template>
  <li class="w-full bg-white rounded py-2 px-1 my-3" v-bind="$attrs">
    <p class="text-gray-800">{{ props.item.text }}</p>
  </li>
</template>

<script setup>
    const props = defineProps({
        item: Object
    })
</script>


