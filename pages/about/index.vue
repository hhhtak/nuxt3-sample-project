<template>
  <h1>about page</h1>
  <div>
    <button @click="enableCusotomLayout">Upadate Layout</button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  // globalを作成した上で設定すると動かなくなった。。。。
  // middleware: "auth",
  // 下記のようにインラインで書く必要がある
  middleware: defineNuxtRouteMiddleware((to, from) => {
    console.log("to", to);
    console.log("from", from);
  }),
});

const route = useRoute();
const enableCusotomLayout = () => {
  //  setPageLayout("custom");
  route.meta.layout = "custom";
};
</script>
