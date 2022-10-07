<template>
  <div class="flex overflow-auto w-full card-list-container space-x-4 p-4 h-[80vh]">
        <Sidebar />
        <KanbanBoard v-for="(item, index) in categories" :key="index" :category="item"  />
  </div>
</template>

<script setup>
import { defineAsyncComponent, watch } from "vue";
import {useProjectStore} from "../../stores/project"
import {storeToRefs} from 'pinia'


const KanbanBoard = defineAsyncComponent(() =>
  import(/*webpackChunkName: "kanbanboard"*/ "../organisms/KanbanBoard.vue")
);

const Sidebar = defineAsyncComponent(() =>
  import(/*webpackChunkName: "sidebar"*/ "../dashboard/Sidebar.vue")
);


const store = useProjectStore()
const {categories} = storeToRefs(store)


</script>

<style scoped>
.card-list-container::-webkit-scrollbar {
  width: 20px;
}

/* Track */
.card-list-container::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
.card-list-container::-webkit-scrollbar-thumb {
    @apply bg-gray-400/70 rounded-lg
}

/* Handle on hover */
.card-list-container::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-100/10
}
</style>
