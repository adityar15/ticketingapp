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
        <span class="text-gray-700 underline underline-offset-2 cursor-pointer">
          Reset Password
        </span>
      </div>
      <div class="text-center">
        <Button type="submit" class="w-36">Login</Button>
      </div>
    </Form>
  </CenterCard>
</template>

<script setup>
import CenterCard from "../components/organisms/CenterCard.vue"
import { FormGroup, Form, Button } from "@adiranids/vue3-tailwind"
import { reactive } from "vue"
import axios from "axios"
import { useRouter } from "vue-router"

const errorBag = reactive({
  email: "",
  password: "",
})

const form = reactive({
  email: "",
  password: "",
})

const router = useRouter()

function login() {
  if (form.email == "") errorBag.email = "Please enter your email"
  else errorBag.email = ""

  if (form.password == "") errorBag.password = "Please enter your password"
  else errorBag.password = ""

  if (form.password != "" && form.email != "") {
    errorBag.email = ""
    errorBag.password = ""
  }

  axios.post("http://127.0.0.1:8000/login", form).then((response) => {
    if (response.status == 200 && response.data.token) {
      window.localStorage.setItem("user", response.data.id)
      console.log("response", response.data)
      router.replace("/dashboard")
    }
    else 
    {
      alert("something went wrong")
    }

  }).catch(err =>{
    if(err.response.data)
    {
      alert(err.response.data.detail)
    }
  })
}
</script>

<style scoped></style>
