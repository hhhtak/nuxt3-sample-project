<template>
  <h1>about page</h1>
  <div>
    <button @click="enableCusotomLayout">Upadate Layout</button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

const route = useRoute();
const enableCusotomLayout = () => {
  //  setPageLayout("custom");
  route.meta.layout = "custom";
};
</script>
