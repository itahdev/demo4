<template>
  <el-form-item :error="errorMessage" :label="label">
    <el-select v-model="value" :validate-event=false placeholder="please select language">
      <el-option label="Vietnamese" value="vi" />
      <el-option label="Korean" value="ko" />
      <el-option label="English" value="en" />
    </el-select>
  </el-form-item>
</template>

<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})

const { value, errorMessage } = useField(toRef(props, 'name'))
</script >

<style scoped></style>
