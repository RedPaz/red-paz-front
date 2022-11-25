<script setup lang="ts">
</script>

<template>
  <div class="end-decoration">
    <div
      class="dec-image"
      :style="{
        background: `url(/src/assets/images/about-us/red-paz.svg) repeat-x 0 0 transparent`,
        backgroundSize: '64px',
      }"
    />
    <div class="dec-color"/>
  </div>
</template>

<style scoped>
.end-decoration {
  @apply absolute bottom-0 left-0 h-16 w-full;
}

.end-decoration .dec-image {
  @apply h-8 w-full opacity-20;
}

.dec-color {
  @apply h-8 bg-green-red z-10;
}
</style>
