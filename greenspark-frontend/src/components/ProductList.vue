<script setup lang="ts">

</script>

<template>
  <div class="product-list-container">
    <h3>Per product widgets</h3>
    <div class="list">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-list-container {
  background: $color-off-white;
  border-radius: 8px;
  color: $color-black;
  padding: calc-rem(36);
  h3 {
    font-size: calc-rem(30);
    font-weight: 700;
    line-height: calc-rem(36);
    &::after {
      content: '';
      display: block;
      height: 2px;
      background: $color-border;
      width: 100%;
      margin: calc-rem(12) 0 calc-rem(20);
    }
  }
  .list {
    display: grid;
    @media (min-width: 600px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 0;
    }
    @media (min-width: 650px) {
      gap: 1%;
    }
    @media (min-width: 700px) {
      gap: 5%;
    }
    grid-template-columns: auto;
    row-gap: calc-rem(38);
  }
}
</style>
