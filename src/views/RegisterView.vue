<template>
  <CenterCard>
    <Form class="w-full">
      <FormGroup type="text" label="Full Name" :error="errorBag.name" />
      <FormGroup type="email" label="Email" :error="errorBag.email" />
      <FormGroup type="password" label="Password" :error="errorBag.email" />
      <div class="text-center">
        <Button type="submit" class="w-36">Register</Button>
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
  name: ""
});
</script>

<style scoped></style>
