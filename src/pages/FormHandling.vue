<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">QForm Component</div>
      <q-separator class="q-my-md" />
      <q-form
        class="q-gutter-y-md q-mt-lg"
        greedy
        autofocus
        ref="myForm"
        @submit="onSubmit"
        @reset="onReset"
      >
        <q-input
          outlined
          v-model="form.title"
          label="제목"
          :rules="[(val) => !!val || '필수 항목입니다.']"
        />
        <q-input
          outlined
          v-model="form.content"
          label="내용"
          type="textarea"
          hint="50자 이내로 입력해주세요"
          :rules="[
            (val) => !!val || '필수 항목입니다.',
            (val) => val.length <= 50 || '최대 50자까지 입력가능합니다.',
          ]"
          counter
          lazy-rules
        />
        <q-select
          outlined
          v-model="form.tags"
          :options="tagOptions"
          label="Outlined"
          emit-value
          multiple
          hint="최대 2개 선택가능합니다."
          :rules="[
            (val) => val.length > 0 || '필수 항목입니다.',
            (val) => val.length <= 2 || 'chleo 2roRkwl tjsxor rksmdgkqslek.',
          ]"
        />
        <q-input outlined v-model="form.date" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="form.date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-toggle :label="`동의하시겟습니까?`" v-model="form.accapt" />
        <!-- false-value="Disagreed"
          true-value="Agreed" -->
        <div class="row q-gutter-x-md">
          <q-btn label="validate" color="secondary" @click.prevent="validate" />
          <q-btn
            label="resetValidation"
            color="warning"
            @click.prevent="reset"
          />
          <q-btn label="Submit" color="primary" type="submit" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
        {{ form }}
      </q-form>
    </section>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";

const form = ref({
  title: "",
  content: "",
  tags: [],
  date: "2022/01/01",
  accapt: false,
});
const myForm = ref(null);
const tagOptions = ref([
  { label: "구글", value: "google" },
  { label: "페이스북", value: "Facebook" },
  { label: "트위터", value: "Twitter" },
  { label: "애플", value: "Apple" },
  { label: "오라클", value: "Oracle" },
]);

const validate = () => {
  myForm.value.validate().then((success) => {
    if (success) {
      alert("성공입니다.");
    } else {
      alert("실패입니다.");
    }
  });
};

const reset = () => {
  myForm.value.resetValidation();
};

const $q = useQuasar();
const onSubmit = (evt) => {
  $q.loading.show();
  if (form.value.accapt !== true) {
    alert("동의해주세요.");
    $q.loading.hide();

    return;
  }
  setTimeout(() => {
    $q.loading.hide();
    alert("성공!");
  }, 3000);
};
const onReset = () => {
  form.value.title = "";
  form.value.content = "";
  form.value.tags = [];
  form.value.date = "2022/01/01";
};
</script>

<style lang="scss" scoped></style>
