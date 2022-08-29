<template>
  <FormWrapper
    :schema="schema"
    :initial-values="formData"
    label-width="auto"
    label-position="left"
    button-title="Translate"
    @submit="onSubmit"
  >
    <TextField name="q" label="Text" />
    <TranslateSelectLanguage name="target" label="Language" />
    <el-form-item label="Result">
      <span>{{ translate }}</span>
    </el-form-item>
  </FormWrapper>
</template>

<script setup lang="ts">
import * as yup from "yup";
import { useAxios } from "@vueuse/integrations/useAxios";
import TranslateSelectLanguage from "@/views/demo/TranslateSelectLanguage.vue";

const translate = ref('')

interface ITranslateParam {
  q: string
  target: string
  format: string
  source: string
  key: string
}

const formData: ITranslateParam = reactive({
  q: "",
  target: "en",
  format: "text",
  source: "ja",
  key: import.meta.env.VITE_GOOGLE_TRANSLATE_KEY,
});

const schema = yup.object({
  q: yup.string().required(),
  target: yup.string().required(),
});

async function onSubmit(values: ITranslateParam, actions: any) {
  const { data } = await useAxios(
    import.meta.env.VITE_GOOGLE_TRANSLATE_URL,
    {
      method: 'POST',
      data: values
    },
  );

  translate.value =  data.value.data.translations[0].translatedText;
}
</script>

<style scoped></style>
