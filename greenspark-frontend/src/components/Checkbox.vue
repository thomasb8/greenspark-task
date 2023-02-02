<script setup lang="ts">
const props = defineProps<{ value: boolean, id: string }>();
const emit = defineEmits(['onChange']);

function handleChange(e: Event) {
  emit('onChange', (e.target as HTMLInputElement).checked);
}
</script>

<template>
  <label class="checkbox" :for="props.id">
    <input type="checkbox" :id="props.id" :checked="props.value" @change="handleChange" />
    <div class="box" :class="{ checked: props.value }"></div>
  </label>
</template>



<style scoped lang="scss">
input {
  visibility: hidden;
  position: absolute;
}
.box {
  position: relative;
  width: calc-rem(14);
  height: calc-rem(14);
  border-radius: 2px;
  border: calc-rem(2) solid black;
  box-sizing: content-box;
  &:hover {
    cursor: pointer;
    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      width: calc-rem(36);
      height: calc-rem(36);
      transform: translate(-50%, -50%);
      background: $color-gray;
      opacity: 0.5;
      z-index: 1;
      border-radius: 50%;
    }
  }
  svg {
    display: none;
    path {
      fill: $color-green;
    }
  }
  &.checked {
    width: calc-rem(18);
    height: calc-rem(18);
    border: none;
    background: url("../assets/checkbox.svg") no-repeat;
    background-size: contain;
  }
}
</style>
