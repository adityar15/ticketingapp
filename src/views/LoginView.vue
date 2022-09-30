<template>
  <CenterCard>
    <Form class="w-full" @submit.prevent="login">
      <FormGroup
        type="email"
        label="Email"
        :error="errorBag.email" 
        v-model="form.email"
      />
      <!-- <div>
        <label>Email</label>
        <input type="email" placeholder="Enter email" v-model="form.email"  />
        <span>Email required</span>
      </div> -->
      <FormGroup
        type="password"
        label="Password"
        :error="errorBag.password"
        v-model="form.password"
      />
      <div>
        <span class="text-gray-700 underline underline-offset-2 cursor-pointer"> Reset Password </span>
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
import { reactive } from "vue";
import axios from 'axios'

const errorBag = reactive({
  email: "",
  password: "",
});

const form = reactive({
  email: "",
  password: "",
});

function login() {
  if (form.email == "") 
  errorBag.email = "Please enter your email"
  else 
  errorBag.email = ""

  if (form.password == "") 
  errorBag.password = "Please enter your password"
  else 
  errorBag.password = ""

  if (form.password != "" && form.email != "") {
    errorBag.email = ""
    errorBag.password = ""
  }

  axios.post("http://localhost:8000", form).then((response) => {

  })

  console.log("I am after request")

}
</script>

<style scoped></style>
