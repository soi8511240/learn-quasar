<template>
  <q-header height-hint="64" bordered>
    <q-toolbar>
      <q-btn flat dense icon="menu" color="black" class="q-mr-sm" />
      <q-avatar>
        <q-img src="~/assets/sample.png" />
      </q-avatar>
      <q-toolbar-title class="text-primary" shrink>Quasar</q-toolbar-title>
      <q-space />
      <div class="row items-center">
        <q-input
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
        />
        <q-btn icon="mic" outlined dense unelevated />
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
.input_search {
  width: 300px;
}
</style>
