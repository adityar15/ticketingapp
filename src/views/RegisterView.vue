<template>
  <CenterCard>
    <Form class="w-full" @submit.prevent="register">
      <FormGroup type="text" label="Full Name" v-model="form.name" :error="errorBag.name" />
      <FormGroup type="email" label="Email" v-model="form.email" :error="errorBag.email" />
      <FormGroup type="password" label="Password" v-model="form.password" :error="errorBag.password" />
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
import axios from "axios"

const errorBag = reactive({
  email: "",
  password: "",
  name: ""
});

const form = reactive({
  email: "",
  password: "",
  name: ""
});


function register() {
  if (form.email == "") 
  errorBag.email = "Please enter your email"
  else 
  errorBag.email = ""

  if (form.password == "") 
  errorBag.password = "Please enter your password"
  else 
  errorBag.password = ""


  if (form.name == "") 
  errorBag.name = "Please enter your full name"
  else 
  errorBag.name = ""

  if (form.password != "" && form.email != "" && form.name != "") {
    errorBag.email = ""
    errorBag.password = ""
    errorBag.name = ""
  }

  // axios.post("http://localhost:8000", form).then((response) => {

  // })

  console.log("I am after request")

}
</script>

<style scoped></style>
