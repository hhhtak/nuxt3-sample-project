<template>
  <h1>User Id: {{ $route.params.id }}</h1>
</template>

<script setup lang="ts">
definePageMeta({
  // globalを作成した上で設定すると動かなくなった。。。。
  // middleware: "auth",
  // 下記のようにインラインで書く必要がある
  middleware: defineNuxtRouteMiddleware((to, from) => {
    console.log("to", to);
    console.log("from", from);
  }),
});
const router = useRoute();
console.log(router.params.id);
</script>
