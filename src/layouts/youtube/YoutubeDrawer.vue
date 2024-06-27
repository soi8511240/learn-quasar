<template>
  <q-drawer v-model="drawer" :width="240" :breakpoint="0" bordered>
    <q-scroll-area class="fit">
      <q-list>
        <template v-for="(menuItem, index) in menuList" :key="index">
          <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
          <q-separator :key="'sep' + index" v-if="menuItem.separator" />
        </template>
      </q-list>
      <q-list>
        <q-item-label header>탐색</q-item-label>
        <template v-for="(menuItem, index) in menuList" :key="index">
          <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
          <q-separator :key="'sep' + index" v-if="menuItem.separator" />
        </template>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>
<script>
const menuList = [
  {
    icon: "home",
    label: "홈",
    separator: false,
  },
  {
    icon: "shorts",
    label: "Shorts",
    separator: false,
  },
  {
    icon: "subscript",
    label: "구독",
    separator: true,
  },
  {
    icon: "",
    label: "보관함",
    separator: false,
  },
  {
    icon: "",
    label: "시청 기록",
    separator: true,
  },
];
</script>
<script setup>
import { ref } from "vue";

const drawer = ref(true);
</script>

<style lang="scss" scoped></style>
