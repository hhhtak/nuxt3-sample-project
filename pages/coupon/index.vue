<template>
  <div>
    <h1>Coupon Page</h1>
    <button @click="handleClick">Coupon Get</button>
    <LazyCoupon v-if="show" />
  </div>
</template>

<script setup lang="ts">
const show = ref(false);
const handleClick = () => {
  show.value = !show.value;
};
</script>
