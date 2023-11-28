import { defineStore } from 'pinia';
import { ENEP_PAPERS } from '@/common/constants';
import { AreaItem, FeaturedItem } from '@/common/interfaces';

export const useAreasStore = defineStore('areas', {
  state: () => ({
    currentArea: {} as AreaItem,
  }),

  getters: {
    currentAreaNews: (state): FeaturedItem[] => {
      if (!state.currentArea.id) return [];

      return ENEP_PAPERS.filter((item) => item.area.id === state.currentArea.id);
    }
  },

  actions: {
    setCurrentArea(area: Partial<AreaItem>) {
      Object.assign(this.currentArea, area);
    }
  },
});

export default useAreasStore;
