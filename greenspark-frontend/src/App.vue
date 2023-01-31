<script setup lang="ts">

import { API_SERVICE } from "./api/ApiService";
import { inject, onMounted, ref } from "vue";
import Widget from "./types/Widget";
import ProductCard from "./components/ProductCard.vue";
import ProductList from "./components/ProductList.vue";

const apiService = inject(API_SERVICE);
const widgets = ref<Widget[] | undefined>([]);

onMounted(async () => {
  widgets.value = await apiService?.fetchWidgets();
});

</script>

<template>
  <div class="container">
    <ProductList>
      <ProductCard v-for="widget of widgets" :widget="widget" :key="widget.id"></ProductCard>
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
