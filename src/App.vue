<script setup lang="ts">
</script>

<template>
  <HeaderUnal/>

  <div class="main-content">
    <router-view/>
    <!-- Notifications -->
    <!-- <Notifications
      position="bottom left"
      :close-on-click="true"
      :ignore-duplicates="true"
    >
      <template #body="props">
        <div
          class="red-notification"
          :class="props.item.type"
        >
          <h4 class="title">
            {{ props.item.title }}
          </h4>

          <div v-html="props.item.text"/>
        </div>
      </template>
    </Notifications> -->
  </div>

  <FooterUnal/>
</template>

<style scoped>
.main-content {
  @apply min-h-[calc(100vh-250px)];
}

.red-notification {
  @apply font-sans text-base p-3 mt-0 mx-1.5 mb-1.5 text-white bg-gray-500 border-l-4 border-l-gray-900 cursor-pointer;
}

.red-notification.error {
  @apply bg-red-700 border-l-red-900;
}
</style>
