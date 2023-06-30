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
    <img
      :src="person.image"
      :alt="person.name"
      class="person-image rounded-md w-3/5 xl:w-1/3 mx-auto"
    >

    <div class="person-info">
      <div class="basic-info">
        <h3 class="section-title xl:!text-left">{{ person.name }}</h3>

        <h6 class="item-subtitle">
          {{ person.faculty }} <span class="block font-normal">{{ person.location }}</span>
        </h6>

        <p class="content">
          <Icon icon="mdi-email-outline" class="mr-3"/> {{ person.email }}
        </p>
      </div>

      <p class="description">{{  person.description }}</p>

      <div class="job-links">
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

    <SectionDecoration />
  </section>
</template>

<style scoped>
.descriptions-section {
  @apply relative w-full px-5 pt-9 pb-28 flex flex-col items-start justify-between z-20;
  @apply xl:px-28 xl:py-32 xl:flex-row;
}

.person-info {
  @apply w-full mt-6;
  @apply xl:mt-0 xl:px-16;
}

.basic-info {
  @apply text-center;
  @apply xl:text-left;
}

.description {
  @apply whitespace-pre-line my-10 text-base font-light;
  @apply xl:text-lg;
}

.job-links {
  @apply flex items-center justify-center;
  @apply xl:justify-start;
}

.item-subtitle {
  @apply font-bold text-green-red italic text-base -mt-8 mb-1;
  @apply xl:text-2xl xl:-mt-8 xl:mb-4;
}
.content {
  @apply flex items-center text-gray-unal-100 italic justify-center;
  @apply xl:my-1 xl:text-xl xl:justify-start;
}

.item-action svg {
  @apply mr-3 mb-0.5;
}

.item-action {
  @apply w-36 xl:w-40 rounded-lg text-lg leading-8 font-bold px-2 py-1 flex items-center justify-center duration-200 ease-in-out;
  @apply xl:text-xl xl:py-2 xl:px-4;
}
.item-action:last-of-type {
  @apply ml-5;
}
</style>
