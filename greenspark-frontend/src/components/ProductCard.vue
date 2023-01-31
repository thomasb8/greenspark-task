<script setup lang="ts">
  import Widget from "../types/Widget";
  const props = defineProps<{
    widget: Widget
  }>();

  function generateActionText() {
    return `This product ${props.widget.action} ${props.widget.amount} ${props.widget.type}`;
  }

  function generateProductText() {
    return `${props.widget.amount} ${props.widget.type}`;
  }
</script>

<template>
  <div class="product-card-container">
    <div class="title" :class="widget.selectedColor">
      <div>logo</div>
      <h3>{{ generateActionText() }}</h3>
      <h3>{{ generateProductText() }}</h3>
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
  .title {
    &.blue {
      background: $color-blue;
    }
    &.green {
      background: $color-green;
    }
    &.beige {
      background: $color-beige;
    }
  }
  .options {
    display: flex;
    flex-direction: column;
  }
}
</style>
