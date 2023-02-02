<script setup lang="ts">
</script>

<template>
  <div class="tooltip-container">
    <p>This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.</p>
    <a href="/">View Public Profile</a>
  </div>
</template>

<style scoped lang="scss">
.tooltip-container {
  padding: 1.5rem;
  background: $color-white;
  color: $color-black;
  text-align: center;
  line-height: calc-rem(17);
  font-size: calc-rem(14);
  a {
    display: block;
    margin-top: calc-rem(12);
    color: $color-green;
    text-decoration: none;
    font-weight: bold;
  }
}
</style>
