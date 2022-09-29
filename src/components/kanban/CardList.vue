<template>
  <div class="flex overflow-auto w-full card-list-container space-x-4 flex-grow p-4">
        <KanbanBoard v-for="(item, index) in cards" :key="index" :category="item"  />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const KanbanBoard = defineAsyncComponent(() =>
  import(/*webpackChunkName: "kanbanboard"*/ "../organisms/KanbanBoard.vue")
);

const cards = [
  {
    id: 1,
    title: "Backlog",
    color: "bg-blue-600",
    listitems: [
      {
        id: 1,
        text: "Get the task ready",
      },
      {
        id: 2,
        text: "Get the task 2 ready",
      },
      {
        id: 3,
        text: "Get the task 3 ready and make sure everything is at its place so that things doesn't go wrong",
      },
      {
        id: 4,
        text: "Get the task 3 ready and make sure everything is at its place so that things doesn't go wrong",
      },
      {
        id: 5,
        text: "Get the task 3 ready and make sure everything is at its place so that things doesn't go wrong",
      },
      {
        id: 6,
        text: "Get the task 3 ready and make sure everything is at its place so that things doesn't go wrong",
      },
      {
        id: 7,
        text: "Get the task 3 ready and make sure everything is at its place so that things doesn't go wrong",
      },
      {
        id: 8,
        text: "Get the task 3 ready and make sure everything is at its place so that things doesn't go wrong",
      },
    ],
  },
  {
    id: 2,
    title: "To-Do",
    color: "bg-orange-600",
    listitems: [
      {
        id: 1,
        text: "Get the task ready",
      },
      {
        id: 2,
        text: "Get the task 2 ready",
      },
      {
        id: 3,
        text: "Get the task 3 ready and make sure everything is at its place so that things doesn't go wrong",
      },
    ],
  },
  {
    id: 3,
    title: "Doing",
    color: "bg-orange-600",
    listitems: [
      {
        id: 1,
        text: "Get the task ready",
      },
      {
        id: 2,
        text: "Get the task 2 ready",
      },
      {
        id: 3,
        text: "Get the task 3 ready and make sure everything is at its place so that things doesn't go wrong",
      },
    ],
  },
  {
    id: 4,
    title: "Code Review",
    color: "bg-orange-600",
    listitems: [
      {
        id: 1,
        text: "Get the task ready",
      },
      {
        id: 2,
        text: "Get the task 2 ready",
      },
      {
        id: 3,
        text: "Get the task 3 ready and make sure everything is at its place so that things doesn't go wrong",
      },
    ],
  },
  {
    id: 5,
    title: "Testing",
    color: "bg-orange-600",
    listitems: [
      {
        id: 1,
        text: "Get the task ready",
      },
      {
        id: 2,
        text: "Get the task 2 ready",
      },
      {
        id: 3,
        text: "Get the task 3 ready and make sure everything is at its place so that things doesn't go wrong",
      },
    ],
  },
  {
    id: 6,
    title: "Done",
    color: "bg-green-500",
    listitems: [
      {
        id: 1,
        text: "Get the task ready",
      },
      {
        id: 2,
        text: "Get the task 2 ready",
      },
      {
        id: 3,
        text: "Get the task 3 ready and make sure everything is at its place so that things doesn't go wrong",
      },
    ],
  },
];
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
