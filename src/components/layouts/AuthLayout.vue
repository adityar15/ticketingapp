<template>
    <div>
        <NavBarAuth />
        <div class="mt-3 w-full">
            <RouterView />
        </div>
    </div>
</template>

<script setup>
import {defineAsyncComponent} from "vue"
import { RouterView } from 'vue-router'
const NavBarAuth = defineAsyncComponent(()=>import(/*webpackChunkName:"navbarauth"*/ '../organisms/NavBarAuth.vue'))
</script>

