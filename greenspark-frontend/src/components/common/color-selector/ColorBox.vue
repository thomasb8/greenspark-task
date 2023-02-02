<script setup lang="ts">
import { SelectableColor } from "../../../types/Widget";

const props = defineProps<{ id: string, color: SelectableColor, selectedColor: SelectableColor }>();
const emit = defineEmits(['change']);
</script>

<template>
  <label :for="props.id">
    <input type="radio" :id="props.id"
           :value="props.color"
           :checked="props.selectedColor === props.color"
           @change="emit('change', $event.target.value)" />
    <div class="color-box" :class="{[props.color]: true, selected: props.selectedColor === props.color}"></div>
  </label>
</template>

<style scoped lang="scss">
input {
  visibility: hidden;
  position: absolute;
}
.color-box {
  width: 1rem;
  height: 1rem;
  box-shadow: 0 8.5px 8.5px rgba(0, 0, 0, 0.01);
  box-sizing: content-box;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  &.selected {
    width: calc-rem(14);
    height: calc-rem(14);
    border: calc-rem(1.5) solid $color-border;
  }
  @include color-classes();
}
</style>
