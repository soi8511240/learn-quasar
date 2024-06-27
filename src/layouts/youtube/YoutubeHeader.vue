<template>
  <q-header class="bg-white">
    <q-toolbar class="bg-white">
      <q-btn flat dense icon="menu" color="black" class="q-mr-sm" />

      <q-avatar>
        <q-img src="~/assets/sample.png" />
      </q-avatar>
      <q-toolbar-title class="text-primary" shrink>Quasar</q-toolbar-title>
      <q-space />
      <div class="row items-center search">
        <q-input
          class="col-grow"
          outlined
          dense
          square
          @focus="isSearchFocus = true"
          @blur="isSearchFocus = false"
        >
          <template #prepend v-if="isSearchFocus">
            <q-icon name="search" size="16px"></q-icon>
          </template>
          <template #append>
            <q-icon name="keyboard" size="16px"></q-icon>
          </template>
        </q-input>
        <q-btn
          icon="search"
          outlined
          dense
          unelevated
          color="grey-3"
          text-color="black"
          padding="sm"
        />
        <q-btn
          icon="mic"
          outlined
          dense
          unelevated
          padding="sm"
          text-color="black"
        />
      </div>
      <q-space />

      <q-btn icon="more_vert" dense flat class="q-mr-sm" />
      <q-btn
        label="로그인"
        icon="user"
        rounded
        outline
        unelevated
        color="red"
      />
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { ref } from "vue";

const isSearchFocus = ref(false);
</script>

<style lang="scss" scoped>
.q-toolbar {
  height: 55px;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: #c9c9c9;
}

.search {
  min-width: 100px;
  max-width: 600px;
  width: 55%;
  &-btn {
    border-style: solid;
    border-width: 1px 1px 1px 0;
    border-color: #000;
    max-width: 60px;
    width: 100%;
    height: 40px;
  }
}
</style>
