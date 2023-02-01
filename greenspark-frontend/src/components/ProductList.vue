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
  padding: 2.25rem;
  h3 {
    font-size: 1.875rem;
    font-weight: 700;
    line-height: 2.25rem;
    &::after {
      content: '';
      display: block;
      height: 2px;
      background: $color-border;
      width: 100%;
      margin: 0.75rem 0 1.25rem;
    }
  }
  .list {
    display: flex;
  }
}
</style>
