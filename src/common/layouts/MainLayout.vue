<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: true,
    validator: (value: string) => /^#[0-9A-F]{6}$/i.test(value),
  },
  bannerSrc: {
    type: String,
    required: true,
  },
});

const route = useRoute();
const routeName = route.name?.toString() || '';
</script>

<template>
  <PageHeader
    :title="routeName"
    background="#4DB372"
    image="/images/about-us/header-image.png"
  />

  <router-view/>
</template>