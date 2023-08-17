<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useHeaderStore } from '@/common/stores';

const route = useRoute();
const { entity } = route.params;
const headerStore = useHeaderStore();
const { alias, imageSrc } = window.history.state;

const partner = computed(() => PARTNERS.find((p) => slugify(p.name) === entity));

onBeforeMount(() => {
  // Hide tabs
  headerStore.$patch({
    alias,
    imageSrc,
    showTabs: false,
  });
});
</script>

<template>
  <template v-if="partner">
    <section class="partner grid grid-cols-3 gap-20 p-28 pt-32">
      <img
        :src="partner.cardImage"
        :alt="partner.name"
      >

      <div class="detail col-span-2">
        <h3 class="section-title !text-left">{{ partner.name }}</h3>

        <p class="description with-icon !-mt-5">
          <Icon icon="mdi-email-outline" class="mr-3"/> {{ partner.email }}
        </p>

        <p class="description with-icon">
          <Icon icon="mdi-phone" class="mr-3"/> {{ partner.phone }}
        </p>

        <p class="description mt-6">{{ partner.description }}</p>
      </div>
    </section>

    <div class="redpaz-areas col-span-3 mt-5 lg:mt-20">
      <GridSection
        :desktop-cols="3"
        :mobile-cols="1"
        :title="`RedPaz UNAL y ${partner.alias}`"
        align-title-left
        background="bg-gray-100"
      >
        <template #description>
          <p class="description mb-10">
            Contenidos resultado de la alianza institucional.
          </p>
        </template>

        <template #items>
          <PictureNew
            v-for="(item, index) in partner.results"
            :key="index"
            :item="item"
          />
        </template>

        <template #end>
          <SectionDecoration />
        </template>
      </GridSection>
    </div>
  </template>
</template>


<style scoped>
.description {
  @apply text-xl;
}

.description.with-icon {
  @apply flex items-center italic text-gray-unal-100 my-0.5;
}
</style>
