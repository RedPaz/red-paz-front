<script setup lang="ts">
const route = useRoute();
const routeName = route.name?.toString() || '';
</script>

<template>
  <PageHeader
    :title="routeName"
    background="#4DB372"
    image="/src/assets/images/about-us/header-image.png"
  />
  <router-view/>
</template>
