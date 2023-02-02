<script setup lang="ts">

import { API_SERVICE } from "./api/ApiService";
import { inject, onMounted } from "vue";
import ProductCard from "./components/ProductCard.vue";
import ProductList from "./components/ProductList.vue";
import { store } from "./store";
const apiService = inject(API_SERVICE);

onMounted(async () => {
  const widgets = await apiService?.fetchWidgets();
  if (widgets) {
    store.set(widgets);
  }
});

</script>

<template>
  <div class="container">
    <ProductList>
      <ProductCard v-for="widget of store.widgets" :widget="widget" :key="widget.id"></ProductCard>
    </ProductList>
  </div>
</template>

<style scoped lang="scss">
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
  }
</style>
