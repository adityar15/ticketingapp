<template>
  <div>
    <button
      class="flex space-x-3 items-center w-full hover:bg-gray-400 transition-all ease-in-out duration-200 rounded bg-transparent p-1"
      @click="show"
      v-if="!addNew"
    >
      <PlusIcon class="w-4 h-4 fill-gray-500" />
      <span>Add a card</span>
    </button>

    <div class="flex items-center space-x-3" v-else>
      <Button @click="addNewItem">Add card</Button>
      <XMarkIcon
        class="w-8 h-8 fill-gray-400 hover:fill-gray-800"
        @click="hide"
      />
    </div>
  </div>
</template>

<script setup>
import { PlusIcon, XMarkIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";
import { Button } from "@adiranids/vue3-tailwind";

const emit = defineEmits(["new", "added", "hide"]);

const addNew = ref(false);

function show() {
  emit("new");
  addNew.value = true;
}
function hide() {
  emit("hide");
  addNew.value = false;
}

function addNewItem()
{
  emit("added")
  addNew.value = false
}

</script>

<style scoped></style>
