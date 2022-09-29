// import { ref, computed } from 'vue'
import { defineStore } from "pinia";

export const useKanbanSortStore = defineStore("kanbansort", {
  state: () => {
    return {
      addedTo: null,
      removedFrom: null,
      card: null,
    };
  },

  actions: {
    added(categoryId) {
      this.addedTo = categoryId;
    },

    removed(categoryId) {
      this.removedFrom = categoryId;
    },

    change(cardId) {
      this.card = cardId;
    },
  },
});
