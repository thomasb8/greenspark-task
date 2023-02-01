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
  width: 0;
  height: 0;
}
.box {
  position: relative;
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 2px;
  border: 0.125rem solid black;
  &:hover {
    cursor: pointer;
    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 2.25rem;
      height: 2.25rem;
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
    width: 1.125rem;
    height: 1.125rem;
    border: none;
    background: url("../assets/checkbox.svg") no-repeat;
    background-size: contain;
  }
}
</style>
