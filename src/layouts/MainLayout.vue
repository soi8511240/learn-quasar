<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> {{ $t("productName") }} </q-toolbar-title>
        <q-btn stretch flat label="Sub Layout" to="/sub" />
        <q-btn
          flat
          round
          dense
          :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
          @click="toggleDarkmode"
        />
        <q-btn round>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
          </q-avatar>
          <q-menu :offset="[0, 10]">
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup to="/profile">
                <q-item-section>Profile</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup to="/auth/sign-in">
                <q-item-section>로그아웃</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      :width="200"
      :breakpoint="0"
      bordered
      :icon="darkModeIcon"
      behavior="desktop"
      persistent
      no-swipe-close
      draggable="false"
    >
      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
        <q-list>
          <q-item-label header>
            <q-avatar size="lg" class="q-mr-sm">
              <img src="https://cdn.quasar.dev/img/avatar.png" alt="" />
            </q-avatar>
            <span>Quasar v{{ $q.version }}</span>
          </q-item-label>
          <EssentialLink
            v-for="link in linksList"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
const linksList = [
  {
    title: "Quasar setup guide",
    caption: "quasar.dev",
    icon: "school",
    to: "setup-guide",
  },
  {
    title: "Typography",
    caption: "quasar.dev",
    icon: "school",
    to: "typography",
  },
  {
    title: "Colors",
    caption: "quasar.dev",
    icon: "school",
    to: "colors",
  },
  {
    title: "Spacing",
    caption: "quasar.dev",
    icon: "school",
    to: "spacing",
  },
  {
    title: "BreakPoints",
    caption: "quasar.dev",
    icon: "school",
    to: "breakpoints",
  },
  {
    title: "ClassesVariables",
    caption: "quasar.dev",
    icon: "school",
    to: "classes-variables",
  },
  {
    title: "Flex Grid - 1",
    caption: "quasar.dev",
    icon: "school",
    to: "/flex-grid-1",
  },
  // {
  //   title: "Flex Grid - 2",
  //   caption: "quasar.dev",
  //   icon: "school",
  //   to: "/profile",
  // },
  {
    title: "Form Handling",
    caption: "quasar.dev",
    icon: "school",
    to: "/form-handling",
  },
  {
    title: "Quasar Utils",
    caption: "quasar.dev",
    icon: "school",
    to: "/quasar-utils",
  },
  {
    title: "Quasar Language Packs",
    caption: "quasar.dev",
    icon: "school",
    to: "/quasar-language-packs",
  },
  {
    title: "Youtube clone coding",
    caption: "quasar.dev",
    icon: "school",
    to: "/youtube",
  },
];
</script>

<script setup>
import { ref, onMounted, computed } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { LocalStorage, useQuasar } from "quasar";

const leftDrawerOpen = ref(true);

const essentialLink = linksList;
const drawer = ref(false);
const miniState = ref(true);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
const $q = useQuasar();
// onMounted(() => {
//   $q.screen.setSizes({ sm: 1, md: 2, lg: 3, xl: 1600 });
// });

const darkModeIcon = computed(() =>
  $q.dark.isActive ? "dark_mode" : "light_mode"
);

const toggleDarkmode = () => {
  $q.dark.isActive = !$q.dark.isActive;
  $q.localStorage.set("darkMode", $q.dark.isActive);
  $q.dark.set($q.dark.isActive);
};
</script>
