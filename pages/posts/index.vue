<template>
  <h1>Posts一覧</h1>
  <ul>
    <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
  </ul>
</template>

<script setup lang="ts">
const { data: posts } = await useFetch(
  "https://jsonplaceholder.typicode.com/posts/"
);
</script>
