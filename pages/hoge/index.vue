<template>
  <div>
    <NuxtLayout name="custom">
      <h1>Index page</h1>
      <h2>{{ $hello("World2222") }}</h2>
      <div>Count: {{ count }}</div>
      <div>
        <button @click="() => inc()">increase</button>
        <button @click="() => dec()">decrease</button>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "custom",
});
const { count, inc, dec } = useCounter(100);
const { $hello } = useNuxtApp();
</script>
