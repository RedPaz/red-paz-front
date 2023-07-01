import { defineStore } from 'pinia';
import { AreaItem, FeaturedItem } from '../interfaces';
import THEMATIC_NEWS from '../constants/thematicNews';

export const useAreasStore = defineStore('areas', {
  state: () => ({
    currentArea: {} as AreaItem,
  }),

  getters: {
    currentAreaNews: (state): FeaturedItem[] => {
      if (!state.currentArea.id) return [];

      return THEMATIC_NEWS.filter((item) => item.area.id === state.currentArea.id);
    }
  },

  actions: {
    setCurrentArea(area: AreaItem) {
      Object.assign(this.currentArea, area);
    }
  },
});

export default useAreasStore;
