<template>
    <div>
        <CardList />
    </div>
</template>

<script setup>
import {defineAsyncComponent} from "vue"

const CardList = defineAsyncComponent(()=>import(/*webpackChunkName:"cardlist"*/ "../components/kanban/CardList.vue"))
</script>

<style lang="scss" scoped>

</style>