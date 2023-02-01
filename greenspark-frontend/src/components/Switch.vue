<script setup lang="ts">
const props = defineProps<{ value: boolean }>();
const emit = defineEmits(['onChange']);
function handleChange() {
  emit('onChange', !props.value);
}
</script>

<template>
  <div>
    <div class="switch"
         :class="{ on: props.value }"
         @click="handleChange()"
    >
      <div class="knob"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.switch {
  position: relative;
  width: 2.9rem;
  height: 1.5rem;
  background: $color-white;
  border-radius: 2.125rem;
  border: 0.5px solid $color-gray;
  box-shadow: inset 0 1px 6.8px rgba(0, 0, 0, 0.15);
  .knob {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-2px);
    position: absolute;
    left: 0;
    transition: left .15s ease;
    width: 1.5rem;
    height: 1.5rem;
    background: $color-green;
    border-radius: 50%;
    &::after {
      display: block;
      content: '';
      background: $color-white;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      opacity: 1;
      border: 0.5px solid $color-gray;
      box-shadow: 0 0 1.36722px rgba(0, 0, 0, 0.35);
      z-index: 1;
    }
  }
  &.on {
    background: $color-green;
    .knob {
      transform: translateX(2px);
      left: calc(100% - 1.5rem);
    }
  }
  &:hover {
    cursor: pointer;
    .knob {
      box-shadow: 0 0 0 0.425rem rgba(175, 198, 189, 0.5);
    }
  }
}
</style>
