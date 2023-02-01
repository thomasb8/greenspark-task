<script setup lang="ts">
  import Widget from "../types/Widget";
  const props = defineProps<{
    widget: Widget
  }>();

  function generateActionText() {
    return `This product ${props.widget.action} `;
  }

  function generateProductText() {
    return `${props.widget.amount} ${props.widget.type}`;
  }
</script>

<template>
  <div class="product-card-container">
    <div class="title-container" :class="widget.selectedColor">
      <div class="logo">
        <img src="../assets/greenspark-logo.svg" alt="Greenspark logo">
      </div>
      <div class="title">
        <h3 class="action">{{ generateActionText() }}</h3>
        <h3 class="product-description">{{ generateProductText() }}</h3>
      </div>
    </div>
    <div class="options">
      <div>{{ props.widget.linked }}</div>
      <div>{{ props.widget.selectedColor }}</div>
      <div>{{ props.widget.active }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-card-container {
  .title-container {
    padding: 0.625rem 0.75rem;
    border-radius: 6px;
    &.blue {
      background: $color-blue;
    }
    &.green {
      background: $color-green;
    }
    &.beige {
      background: $color-beige;
    }
    display: flex;
    align-items: center;
    .title {
      margin-left: 1rem;
      .action {
        font-weight: normal;
        font-size: .75rem;
        padding-bottom: 0.5rem;
      }
      .product-description {
        font-weight: bold;
        font-size: 1.115rem;
      }
    }
  }
  .options {
    display: flex;
    flex-direction: column;
  }
}
</style>
