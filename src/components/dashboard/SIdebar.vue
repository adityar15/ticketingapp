<template>
    <div class="w-[350px] bg-transparent border-l-0 h-full border border-r-gray-300 border-t-gray-300 border-b-0 p-16 flex-none">
        <ul class="flex flex-col space-y-4">
            <li v-for="(item,index) in projects" :key="index" class="cursor-pointer text-gray-600 transition-all ease-in-out duration-150" @click="active(item.id)" 
            :class="`${activeItem == item.id ? 'active' : ''}`">{{item.title}}</li>
        </ul>
    </div>
</template>

<script setup>
import {useProjectStore} from "../../stores/project"
import {storeToRefs} from 'pinia'
import {onMounted, ref} from 'vue'

const store = useProjectStore()
const {projects, selectedProject, categories} = storeToRefs(store)
const activeItem = ref(-1)

function active(id)
{
    // filter returns an array so we just want first item
    selectedProject.value = projects.value.filter(project => project.id == id)[0]
    categories.value = selectedProject.value.categories
    activeItem.value = id
}

onMounted(()=>{
  store.fetchProjects()
})
</script>

<style scoped>
.active{
    @apply text-gray-800 font-semibold;
}
</style>
