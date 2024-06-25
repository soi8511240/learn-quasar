<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Quasar cli(JS) with vite Setup</div>
      <q-separator class="q-my-md" />
      <q-card dark bordered class="bg-grey-9 my-card">
        <q-card-section>
          <div class="text-h6">Step1. Quasar 설치</div>
        </q-card-section>
        <q-separator dark inset />
        <q-card-section>
          $ npm i -g @quasar/cli<br />$ npm init quasar
        </q-card-section>
      </q-card>
      <q-separator class="q-my-md" />
      <q-card dark bordered class="bg-grey-9 my-card">
        <q-card-section>
          <div class="text-h6">Step2. jsconfig.json 설정추가</div>
        </q-card-section>
        <q-separator dark inset />
        <q-card-section>
          "compilerOptions":{<br />
          },<br />
          <span class="bg-dark">"jsx": "preserve"</span>
        </q-card-section>
      </q-card>
      <q-separator class="q-my-md" />
      <q-card dark bordered class="bg-grey-9 my-card">
        <q-card-section>
          <div class="text-h6">Step3. eslint 설정</div>
        </q-card-section>
        <q-separator dark inset />
        <q-card-section>
          vscode Extension : eslint off, Prettier on
        </q-card-section>
        <q-separator dark inset />
        <q-card-section>
          // root - .prettier<br />
          { "singleQuote": true, "semi": true, "tabWidth": 2, "trailingComma":
          "all", "printWidth": 80, "bracketSpacing": true, "arrowParens":
          "avoid" }
        </q-card-section>
      </q-card>
      <q-separator class="q-my-md" />
      <q-card dark bordered class="bg-grey-9 my-card">
        <q-card-section>
          <div class="text-h6">vscode setting</div>
        </q-card-section>
        <q-separator dark inset />
        <q-card-section>
          vscode Extension : eslint off, Prettier on
        </q-card-section>
        <q-separator dark inset />
        <q-card-section>
          // root - .prettier<br />
          { "singleQuote": true, "semi": true, "tabWidth": 2, "trailingComma":
          "all", "printWidth": 80, "bracketSpacing": true, "arrowParens":
          "avoid" }
        </q-card-section>
      </q-card>
      <q-separator class="q-my-md" />
      <q-card dark bordered class="bg-grey-9 my-card">
        <q-card-section>
          <div class="text-h6">공식문서 가이드 페이지</div>
        </q-card-section>
        <q-separator dark inset />
        <q-card-section>
          <q-btn
            label="https://quasar.dev/start/vs-code-configuration/"
            color="black"
            @click="goOutLink"
          />
        </q-card-section>
      </q-card>
    </section>
  </q-page>
</template>

<script>
const metaData = {
  title: "Typography",
  meta: {
    description: { name: "description", content: "quasar learning typograpy" },
    keywords: { name: "keywords", content: "quasar,learning,typograpy " },
  },
};
</script>

<script setup>
import { useMeta, useQuasar } from "quasar";

useMeta(metaData);

const goOutLink = (e) => {
  window.open(e.target.textContent);
};
</script>

<style lang="scss" scoped></style>
