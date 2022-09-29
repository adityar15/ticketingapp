<template>
    <div>
        <NavBar />
        <div class="mt-3 w-full">
            <RouterView />
        </div>
    </div>
</template>

<script setup>
import {defineAsyncComponent} from "vue"
import { RouterView } from 'vue-router'
const NavBar = defineAsyncComponent(()=>import(/*webpackChunkName:"navbar"*/ '../organisms/NavBar.vue'))
</script>

