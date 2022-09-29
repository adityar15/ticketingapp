<template>
  <CenterCard>
    <Form class="w-full">
      <FormGroup type="email" label="Email" :error="errorBag.email" />
      <FormGroup type="password" label="Password" :error="errorBag.email" />
      <div>
        <span class="text-gray-700 underline underline-offset-2 cursor-pointer">Reset Password</span>
      </div>
      <div class="text-center">
        <Button type="submit" class="w-36">Login</Button>
      </div>
    </Form>
  </CenterCard>
</template>

<script setup>
import CenterCard from "../components/organisms/CenterCard.vue";
import { FormGroup, Form, Button } from "@adiranids/vue3-tailwind";
import { reactive } from "@vue/reactivity";

const errorBag = reactive({
  email: "",
  password: "",
});
</script>

<style scoped></style>
