<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const embedSrc = computed(() => props.url.replace('watch?v=', 'embed/'));
</script>

<template>
  <iframe
    :src="embedSrc"
    :title="title"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    class="w-full h-full min-h-[230px] xl:min-h-[360px] rounded-xl"
  />
</template>

<style scoped>
</style>
