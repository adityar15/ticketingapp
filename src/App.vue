<script setup>
import { useRouter } from 'vue-router'
import {ref, defineAsyncComponent} from "vue"


const GuestLayout = defineAsyncComponent(()=> import("./components/layouts/GuestLayout.vue"))
const AuthLayout = defineAsyncComponent(()=> import("./components/layouts/AuthLayout.vue"))

// components are used without registration thus need to take an object of layouts
const layouts = {
  "GuestLayout": GuestLayout,
  "AuthLayout": AuthLayout,
}


const router = useRouter()
const layout = ref("")
router.beforeEach((to, from) => {
  layout.value = layouts[to.meta.layout]
})

</script>

<template>
   <component :is="layout"></component>
</template>

