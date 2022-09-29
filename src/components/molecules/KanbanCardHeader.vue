<template>
  <div class="flex justify-between items-center">
    <span class="text-gray-800 font-semibold text-base">{{ title }}</span>
    <button
      class="text-gray-700 font-semibold p-2 hover:bg-gray-500 transition-all ease-in-out duration-100"
    >
      ...
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>
