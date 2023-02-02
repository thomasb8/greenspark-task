<script setup lang="ts">
import { SelectableColor, OrderedColors } from "../types/Widget";
import ColorBox from "./ColorBox.vue";

const props = defineProps<{ selectedColor: SelectableColor, id: string }>();
const emit = defineEmits(['change']);
</script>

<template>
  <div class="color-selector">
    <ColorBox v-for="color in OrderedColors"
              :id="props.id + color"
              :color="color"
              @change="emit('change', $event)"
              :selected-color="props.selectedColor"></ColorBox>
  </div>
</template>

<style scoped lang="scss">
.color-selector {
  display: flex;
  gap: calc-rem(4);
}
</style>
