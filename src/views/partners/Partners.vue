<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useHeaderStore } from '@/common/stores';
import { PARTNERS, PARTNER_CATEGORIES } from '@/common/constants';
import { DescriptionItem } from '@/common/interfaces';

const headerStore = useHeaderStore();
const { currentTab, showTabs } = storeToRefs(headerStore);

const category = computed(() => PARTNER_CATEGORIES.find((p) => p.name === currentTab.value));
const partners = computed(() => PARTNERS.filter((p) => p.category.name === currentTab.value));

const isSocialTab = computed(() => category.value?.slug === 'organismos-sociales');
const socialContent: DescriptionItem[] = [
  {
    title: 'Organizaciones Sociales',
    description: `Diversas organizaciones sociales de diferentes lugares del país son aliados de la RedPaz UNAL, entre ellos:

    - Cooperativa Multiactiva Esperanza del Pueblo Araucano - COOMEPA
    - Asociación Fortuleños por la Paz - AFPAZ
    - Cooperativa Esperanza de Paz - COEPAZ
    - Asociación Flor de Sabana - ASOFLORSA
    - Asociación Indígenas Afros de Arauca - AIAA
    - Asociación Pisando Firme - PISF
    - Asociación Construyendo Huellas de Paz
    - Asociación por la Vida, la Paz, la Reconciliación y la No Estigmatización - ASOPARNES
    - Cooperativa Agrícola para la Paz - AGROPAZ/ Filimarpaz
    - Asociación Campesina Integral Caminos de Paz - ASCAINCAPAZ
    - Asociación de Reincorporados y Campesinos - ASOREICAM
    - Asociación Nosotras Tenemos Voz - ANTVOZ
    - Asociación por la Vida y por la Paz - ASOVIP
    - Asociacion de Mujeres Buscando Caminos hacia el Futuro de Reconciliacion y Paz - AMUCAFRYD
    - Cooperativa Multiactiva Memoria, Vida y Esperanza. COOMMAVE
    - Cooperativa Multiactiva Comunitaria del Común. COMUCCON`,
  },
];

onBeforeMount(() => {
  headerStore.$patch({ showTabs: true });
});
</script>

<template>
  <MainLayout>
    <GridSection
      v-if="category && showTabs && !isSocialTab"
      :title="category.name"
      :desktop-cols="3"
      :mobile-cols="1"
      align-title-left
    >
      <template #description>
        <p class="description mb-8">Nuestros aliados de {{ category.name }}</p>
      </template>

      <template #items>
        <div
          v-for="(partner, index) in partners"
          :key="index"
          class="featured-item rounded-md shadow-md shadow-gray-500/50"
        >
          <div class="rounded-lg border border-gray-100 overflow-hidden shadow-md bg-white">
            <img
              class="item-image"
              :src="partner.cardImage"
              :alt="partner.name"
            >

            <div class="item-content p-6">
              <h3 class="item-title !text-left h-32 !leading-7">
                <span class="item-category text-gray-unal-400 uppercase tracking-widest block text-base xl:text-lg text-left">{{ category.name }}</span>
                {{ partner.name }}
              </h3>

              <div class="item-details mt-5 flex justify-between items-center">
                <router-link
                  class="item-link bg-green-red text-white px-6 lg:px-8 xl:px-10 2xl:px-12 py-1 xl:py-1.5 text-sm lg:text-base xl:text-lg 2xl:text-xl tracking-wider rounded-md"
                  :to="{
                    path: partner.src,
                    state: {
                      alias: partner.name,
                      imageSrc: '/images/experiences/podcasts/main-banner.png',
                    }
                  }"
                >
                  Ver más
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template #end>
        <SectionDecoration/>
      </template>
    </GridSection>

    <DescriptionSection
      v-if="isSocialTab"
      :items="socialContent"
      main-image="/images/partners/social.png"
    >
      <template #end>
        <SectionDecoration/>
      </template>
    </DescriptionSection>
  </MainLayout>
</template>

<style scoped>
.description {
  @apply text-base;
  @apply xl:text-xl;
}
</style>
