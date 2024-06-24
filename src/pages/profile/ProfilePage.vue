<template>
  <q-page class="q-pa-xl">
    <section>
      <div class="row q-gutter-x-lg no-wrap">
        <div class="col-auto q-py-lg col-md-auto flex flex-center">
          <q-avatar size="150px">
            <q-img src="https://picsum.photos/id/1/150" />
          </q-avatar>
        </div>
        <div class="col-grow column justify-between q-gutter-y-lg">
          <div class="row items-center q-gutter-x-sm justify-between">
            <span class="text-h6 text-weight-bolder">Name</span>
            <div class="q-gutter-x-sm">
              <q-btn outline label="프로필 편집" />
              <q-btn outline label="프로필 편집" />
              <q-btn outline label="프로필 편집" />
              <q-btn flat color="secondary" icon="more_horiz" />
            </div>
          </div>
          <div class="q-gutter-x-md">
            <span>게시물 123</span>
            <span>게시물 123</span>
            <span>게시물 123</span>
          </div>
          <div>
            어쩌고<br />
            저쩌고<br />
            그리고
          </div>
        </div>
      </div>
      <div class="row no-wrap scroll justify-between q-gutter-x-lg q-mt-lg">
        <div class="col-auto column" v-for="n in 20" :key="n">
          <q-avatar size="120">
            <img src="https://picsum.photos/id/1/120" alt="" />
          </q-avatar>
          <div class="text-center q-mt-sm">제목</div>
        </div>
      </div>
    </section>
    <section class="q-mt-xl">
      <q-tabs
        class="q-mb-lg"
        v-model="tab"
        inline-label
        switch-indicator
        indicator-color="primary"
      >
        <q-route-tab
          :ripple="false"
          icon="edit"
          label="게시글"
          to="/profile"
          exact
        />
        <q-route-tab
          :ripple="false"
          icon="bookmark_border"
          label="저장됨"
          to="/profile/saved"
          exact
        />
        <q-route-tab
          :ripple="false"
          icon="bookmark"
          label="태그됨"
          to="/profile/taged"
          exact
        />
      </q-tabs>
      <router-view />
    </section>

    <section class="q-mb-xl">
      <div class="text-h4">FlexBox - Col</div>
      <q-separator class="q-my-md" />
      <div class="bg-yellow">
        <div class="row q-gutter-x-md">
          <div v-for="n in 4" :key="n" class="square">square</div>
        </div>
        <div class="q-gutter-y-md">
          <div v-for="n in 4" :key="n" class="bg-primary">square</div>
        </div>
      </div>
      <q-separator spaced />
      <div class="bg-yellow">
        <div class="row q-col-gutter-sm items-center">
          <div class="col-3 col-sm-6 col-md-4 col-lg-3" v-for="n in 8" :key="n">
            <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-subtitle2 text-center">
                  Title
                </div>
              </q-img>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <section class="q-mb-xl">
      <div class="text-h4">FlexBox - Col</div>
      <q-separator class="q-my-md" />
      <div class="row">
        <div class="border col-1">col-1</div>
        <div class="border col-8">col-8</div>
        <div class="border col-2">col-2</div>
        <div class="border col-1">col-1</div>
        <div class="border col-1">col-1</div>
      </div>
      <q-separator class="q-my-md" />
      <div class="row">
        <div class="border col">col-1</div>
        <div class="border col">col-8</div>
        <div class="border col">col-2</div>
        <div class="border col">col-1</div>
        <div class="border col">col-1</div>
      </div>
      <q-separator class="q-my-md" />
      <div class="row">
        <div class="border col-auto">col-1</div>
        <div class="border col">col-8</div>
        <div class="border col">col-2</div>
        <div class="border col">col-1</div>
        <div class="border col">col-1</div>
      </div>
      <q-separator class="q-my-md" />
      <div class="row">
        <div class="border col-grow">col-1</div>
        <div class="border col">col-8</div>
        <div class="border col">col-2</div>
        <div class="border col">col-1</div>
        <div class="border col">col-1</div>
      </div>
      <q-separator class="q-my-md" />
      <div class="row no-wrap">
        <div class="border col-auto">col-autocol-autocol-autocol-auto</div>
        <div class="border col-shrink">
          col-shrinkcol-shrinkcol-shrinkcol-shrink
        </div>
        <div class="border col">col-2</div>
        <div class="border col">col-1</div>
        <div class="border col">col-1</div>
      </div>
    </section>
    <section class="q-mb-xl"></section>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
const tab = ref("mails");
</script>

<style lang="scss" scoped>
.square {
  width: 80px;
  height: 80px;
  background-color: $primary;
  border: 1px solid #000;
  display: inline-block;
  font-weight: 900;
  color: #fff;
}
.border {
  border: 1px solid #000;
  padding: 8px;
}
</style>
