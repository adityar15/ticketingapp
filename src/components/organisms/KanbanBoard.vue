<template>
  <div class="cursor-pointer w-[272px] max-h-[700px] flex-none" v-bind="$attrs">
    <div class="bg-gray-200/80 content p-2 rounded flex flex-col space-y-4">
      <KanbanCardHeader :title="props.category.title" />

      <!-- kanban cards -->
      <ul class="overflow-auto max-h-[500px] w-full flex flex-col space-y-3">
        <li
          :style="`background: ${props.category.color}`"
          class="grid min-h-[107px] place-items-center w-full"
        >
          <span class="text-lg text-gray-50 font-bold">{{
            props.category.title
          }}</span>
        </li>

        <VueDraggableNext
          :list="sortedCardItems"
          :group="{ name: props.category.title, put: true, pull: true }"
          @add="updateRankAndCategory"
          @end="updateRankAndCategory"
          @change="updateRankAndCategory"
        >
          <li
            class="w-full bg-white rounded py-2 px-1 my-3"
            v-for="(item, index) in sortedCardItems"
            :key="index"
          >
            <p class="text-gray-800">{{ item.text }}</p>
          </li>
        </VueDraggableNext>

        <li v-show="show">
          <textarea
            class="w-full outline-none rounded p-1"
            rows="4"
            v-model="cardText"
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
import { ref, defineAsyncComponent, computed } from "vue"
import { VueDraggableNext } from "vue-draggable-next"
import { useKanbanSortStore } from "../../stores/kanbansort"
import { storeToRefs } from "pinia"
import { api } from "../../assets/api"

const store = useKanbanSortStore()

const props = defineProps({
  category: Object,
})

const KanbanCardHeader = defineAsyncComponent(() =>
  import("../molecules/KanbanCardHeader.vue")
)
const KanbanCardAddButton = defineAsyncComponent(() =>
  import("../molecules/KanbanCardAddButton.vue")
)

// const KanbanCard = defineAsyncComponent(() =>
//   import("../molecules/KanbanCard.vue")
// );

const listItems = ref(props.category.cards)

const textarea = ref(null)

const show = ref(false)

const cardText = ref("")

const { addedTo, removedFrom, card, newIndex, oldIndex } = storeToRefs(store)

const sortedCardItems = computed(() =>
  listItems.value.sort((a, b) => {
    if (a.rank > b.rank) return 1
    else if (a.rank < b.rank) return -1

    return 0
  })
)

function showTextArea() {
  show.value = true
  setTimeout(() => {
    textarea.value.focus()
  }, 500)
}

function addNew() {
  let payload = {
    text: cardText.value,
    rank: listItems.value.length,
    category_id: props.category.id,
  }

  if (cardText.value)
    api()
      .post("/add_new_card", payload)
      .then((res) => {
        if (res.status == 200) listItems.value.push(payload)

        cardText.value = ""
        show.value = false
      })
      .catch((err) => alert("Something went wrong"))
}


function updateRankAndCategory(e) {
  let updatedCardItems = listItems.value.map((item, index) => {
    item.rank = index
    item.category_id = props.category.id
    return item
  })

  // console.log("updating", updatedCardItems)

  api()
    .post("/update_card_rank", { cards: updatedCardItems })
    .then((res) => {
      if (res.status == 200) {
        console.log("updated")
      }
    })
    .catch((err) => console.log(err))

  // console.log("after updating", listItems.value[0])
}
</script>
