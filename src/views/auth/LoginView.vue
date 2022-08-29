<template>
  <form-wrapper
    :schema="schema"
    :initial-values="formData"
    :loading="loading"
    label-width="auto"
    label-position="left"
    @submit="onSubmit"
  >
    <text-field name="email" label="Email"> </text-field>
    <text-field name="password" label="Password"></text-field>
  </form-wrapper>
</template>

<script setup lang="ts">
  import * as yup from 'yup'
  import type { LoginParamI } from '@/api/params/login.param'
  import { useLogin } from '@/composables/auth/useLogin'
  import { LoginParam } from '@/api/params/login.param'

  const formData: LoginParamI = reactive(new LoginParam())
  const schema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6)
  })

  const { loading, handleLogin } = useLogin()

  async function onSubmit(values: LoginParamI, actions: any) {
    await handleLogin(values)
    actions.resetForm()
  }
</script>

<style scoped></style>
