<template>
  <div class="cursor-pointer w-[272px] max-h-[700px] flex-none" v-bind="$attrs">
    <div class="bg-gray-200/80 content p-2 rounded flex flex-col space-y-4">
      <KanbanCardHeader :title="props.category.title" />

      <!-- kanban cards -->
      <ul class="overflow-auto max-h-[500px] w-full flex flex-col space-y-3">
        <li
          :class="props.category.color"
          class="grid min-h-[107px] place-items-center w-full"
        >
          <span class="text-lg text-gray-50 font-bold">{{
            props.category.title
          }}</span>
        </li>

        <VueDraggableNext
          :list="listItems"
          :group="{ name: props.category.title, put: true, pull: true }"
          @add="added"
          @remove="removed"
          @change="change"
          @end="complete"
        >
          <li
            class="w-full bg-white rounded py-2 px-1 my-3"
            v-for="(item, index) in listItems"
            :key="index"
          >
            <p class="text-gray-800">{{ item.text }}</p>
          </li>
        </VueDraggableNext>

        <li v-show="show">
          <textarea
            class="w-full outline-none rounded"
            rows="4"
            ref="textarea"
          ></textarea>
        </li>
      </ul>

      <KanbanCardAddButton
        @new="showTextArea"
        @added="addNew"
        @hide="show = false"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import {useKanbanSortStore} from "../../stores/kanbansort"
import {storeToRefs} from "pinia"

const store = useKanbanSortStore()


const props = defineProps({
  category: Object,
});

const KanbanCardHeader = defineAsyncComponent(() =>
  import("../molecules/KanbanCardHeader.vue")
);
const KanbanCardAddButton = defineAsyncComponent(() =>
  import("../molecules/KanbanCardAddButton.vue")
);

const listItems = ref(props.category.listitems);

const textarea = ref(null);

const show = ref(false);

const {addedTo, removedFrom, card} = storeToRefs(store)

function showTextArea() {
  show.value = true;
  setTimeout(() => {
    textarea.value.focus();
  }, 500);
}

function addNew() {
  // make server call
  // add item to the list
}

function added(e) {
  store.added(props.category.id)
}

function removed(e) {
  store.removed(props.category.id)
}

function change(e) {

  let cardID = e.added?.element
    ? e.added?.element.id
    : e.removed?.element.id;
  
  store.change(cardID)
}

function complete(e) {
  console.log("complete", addedTo.value, removedFrom.value, card.value);
}
</script>
