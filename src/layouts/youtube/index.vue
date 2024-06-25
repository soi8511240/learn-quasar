<template>
  <q-layout view="hHh Lpr lff">
    <YoutubeHeader />
    <YoutubeDrawer />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import YoutubeHeader from "./YoutubeHeader.vue";
import YoutubeDrawer from "./YoutubeDrawer.vue";
</script>

<style lang="scss" scoped></style>
