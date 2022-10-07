<template>
    <div>
        <NavBarAuth />
        <div class="mt-3 w-full">
            <RouterView />
        </div>
    </div>
</template>

<script setup>
import {defineAsyncComponent, onMounted} from "vue"
import { RouterView, useRouter } from 'vue-router'
import {api} from "../../assets/api"
import { getCookie } from "../../assets/cookie_helper"


const NavBarAuth = defineAsyncComponent(()=>import(/*webpackChunkName:"navbarauth"*/ '../organisms/NavBarAuth.vue'))



// refresh the access token after every 10s

const router = useRouter()
onMounted(()=>{
    setInterval(() => {
        api().get(`/refresh_access_token/${getCookie('access_token') || window.localStorage.getItem("user")}`).then(res =>{
            if(res.status == 200)
            console.log("token all good")
        }).catch(err =>{
            console.log(err.response)
            router.replace("/")
        })
    }, 15000);
})
</script>

