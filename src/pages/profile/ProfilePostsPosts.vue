<template>
  <div class="row q-col-gutter-md justify-between">
    <div class="col-4" v-for="n in 12" :key="n">
      <q-card class="my-card">
        <q-img ratio="1" src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div
            class="absolute-bottom text-subtitle2 flex flex-center full-height"
          >
            Title
          </div>
        </q-img>
      </q-card>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
