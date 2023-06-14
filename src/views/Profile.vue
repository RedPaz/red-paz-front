<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { PROFILE_MEMBERS_INFO } from '@/common/constants';

const route = useRoute();
const person = PROFILE_MEMBERS_INFO.find((person) => person.slug === route.params.slug);
</script>

<template>
  <section
    v-if="person"
    class="descriptions-section"
  >
    <!-- <pre>{{ personData }}</pre> -->

    <img
      :src="person.image"
      :alt="person.name"
      class="person-image rounded-md"
    >

    <div class="person-info w-full xl:px-16">
      <h3 class="section-title !text-left">{{ person.name }}</h3>

      <h6 class="item-subtitle">
        {{ person.faculty }} <span class="block font-normal">{{ person.location }}</span>
      </h6>

      <p class="content">
        <Icon icon="mdi-email-outline" class="mr-3"/> {{ person.email }}
      </p>

      <p class="description whitespace-pre-line my-10 text-lg font-light">{{  person.description }}</p>

      <div class="job-links flex items-center">
        <a
          v-if="person.cvLac"
          :href="person.cvLac"
          target="_blank"
          class="item-action"
        >
          <Icon icon="mdi-account-box"/>
          CvLac
        </a>

        <a
          v-if="person.linkedIn"
          :href="person.linkedIn"
          target="_blank"
          class="item-action"
        >
          <Icon icon="mdi-linkedin"/>
          LinkedIn
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.descriptions-section {
  @apply w-full px-5 py-9 flex flex-col items-start justify-between z-20;
  @apply xl:px-28 xl:py-32 xl:flex-row;
}

.item-subtitle {
  @apply font-bold text-green-red italic text-sm;
  @apply xl:text-2xl xl:-mt-8 xl:mb-4;
}
.content {
  @apply flex items-center text-gray-unal-100 italic;
  @apply xl:my-1 xl:text-xl;
}

.item-action svg {
  @apply mr-3 mb-0.5;
}

.item-action {
  @apply w-40 rounded-lg text-lg leading-8 font-bold px-2 py-1 flex items-center justify-center duration-200 ease-in-out;
  @apply xl:text-xl xl:py-2 xl:px-4;
}
.item-action:last-of-type {
  @apply ml-5;
}
</style>
