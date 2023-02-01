<script setup lang="ts">
  import Logo from "./Logo.vue";
  import Widget, { SelectableColor } from "../types/Widget";
  import Switch from "./Switch.vue";
  const props = defineProps<{
    widget: Widget
  }>();

  function generateActionText() {
    return `This product ${props.widget.action} `;
  }

  function generateProductText() {
    return `${props.widget.amount} ${props.widget.type}`;
  }

  function getLogoColor() {
    return ([SelectableColor.white, SelectableColor.beige] as SelectableColor[])
      .includes(props.widget.selectedColor)
      ? SelectableColor.green
      : SelectableColor.white;
  }
</script>

<template>
  <div class="product-card-container">
    <div class="title-container" :class="widget.selectedColor">
      <Logo :color="getLogoColor()"></Logo>
      <div class="title" :style="{ color: getLogoColor() }">
        <h3 class="action">{{ generateActionText() }}</h3>
        <h3 class="product-description">{{ generateProductText() }}</h3>
      </div>
    </div>
    <div class="options">
      <div>{{ props.widget.linked }}</div>
      <div>{{ props.widget.selectedColor }}</div>
      <div><Switch :value="props.widget.active" @on-change="props.widget.active = !props.widget.active" ></Switch>{{ props.widget.active }}</div>
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
