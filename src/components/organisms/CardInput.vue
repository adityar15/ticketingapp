<template>
    <div>
        <Input v-model="input.title" />
        <TextArea v-model="input.content" />
        <button @edit="edit">Edit</button>
        <button>Delete</button>
    </div>
</template>

<script setup>
   import {reactive} from "vue"
   import {useStore} from "../store/"
   import {storeToRefs} from "pinia"
   
   const store = useStore()

   const {cardsFromStore} = storeToRefs(store)
   
   const input = reactive({
    title: "",
    content: ""
   }) 

   const props = defineProps({
    card: Object
   })

    function edit()
    {
       cardsFromStore.value = cardsFromStore.value.map(cardItem =>{
            if(!cardItem.id != props.card.id)
            return cardItem

            else {
                cardItem.title = input.title || cardItem.title
                cardItem.content = input.content || cardItem.content
                return cardItem
            }
        })

    }

</script>

<style lang="scss" scoped>

</style>