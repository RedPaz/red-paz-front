<script setup lang="ts">
import { PropType } from 'vue';
import { storeToRefs } from 'pinia';
import { JOB_AREAS } from '@/common/constants';
import { useAreasStore } from '@/common/stores';

// const route = useRoute();
const areasStore = useAreasStore();
const { currentArea } = storeToRefs(areasStore);
// const isMainRoute = computed(() => route.path === '/experiencias-de-paz/areas-tematicas');

defineProps({
  background: {
    type: String as PropType<'bg-white' | 'bg-gray-100' | 'bg-green-red'>,
    required: false,
    default: 'bg-gray-100',
  },
});
</script>

<template>
  <GridSection
    v-if="!currentArea.id"
    title="Áreas temáticas"
    :background="background"
    :desktop-cols="3"
    :mobile-cols="2"
  >
    <template #description>
      <slot name="description">
        <p class="description">A partir del encuentro Nacional de Experiencias de Paz que se realizó en 2020 logramos identificar las diferentes áreas en las que la comunidad universitaria ha venido desarrollando iniciativas, proyectos, y experiencias de trabajo.
Da click en para conocer más:</p>
      </slot>
    </template>

    <template #items>
      <ItemWithImage
        v-for="(item, index) in JOB_AREAS"
        :key="index"
        :item="item"
        :image-width="60"
        :hide-image-in-mobile="true"
        cover-image="/images/home/jobs-background.png"
      />
    </template>

    <template
      v-if="$slots.append"
      #end
    >
      <slot name="append" />

      <SectionDecoration v-if="!currentArea.id" />
    </template>
  </GridSection>

  <router-view v-else />
</template>

<style scoped>
.description {
  @apply text-center mb-8 text-lg;
}
</style>