<template>
  <el-form v-bind="$attrs" @submit="onSubmit">
    <slot></slot>
    <div>
      <slot name="button">
        <el-button type="primary" native-type="submit"
          >{{ buttonTitle }}
        </el-button>
      </slot>
    </div>
  </el-form>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue'

  const props = defineProps({
    schema: {
      type: Object,
      default: () => new Object()
    },
    initialValues: {
      type: Object,
      default: () => new Object()
    },
    buttonTitle: {
      type: String,
      default: 'Submit'
    }
  })
  const { handleSubmit } = useForm({
    validationSchema: props.schema,
    initialValues: props.initialValues
  })

  const emit = defineEmits(['submit'])

  const onSubmit = handleSubmit((values, actions) => {
    emit('submit', values, actions)
  })
</script>

<style scoped></style>
