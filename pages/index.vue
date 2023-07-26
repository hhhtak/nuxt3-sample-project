<template>
  <NuxtLayout name="default">
    <template>ヘッダー</template>
    <h1>{{ $hello("Main Page") }}</h1>
    <img src="~/assets/images/peach.png" alt="もも" />
    <img src="~/assets/images/risu.svg" alt="リス" />
    <img src="/favicon.ico" alt="Nuxt3 Icon" />
  </NuxtLayout>
</template>
<script setup>
definePageMeta({
  layout: false,
});
const { $hello } = useNuxtApp();
</script>
