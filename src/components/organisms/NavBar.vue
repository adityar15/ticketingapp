<template>
    <header class="w-full flex lg:justify-between flex-col lg:flex-row lg:items-center px-5 h-28 overflow-hidden">
        <div>
            <Logo class="w-32 h-32" />
        </div>
        <div class="flex flex-col lg:flex-row lg:items-center lg:space-x-4 space-y-4 lg:space-y-0">
            <NavLink href="/">Login</NavLink>
            <NavLink href="/register">Register</NavLink>
        </div>
    </header>
</template>

<script setup>
import Logo from "../atoms/Logo.vue"
import NavLink from "../atoms/NavLink.vue"
</script>

