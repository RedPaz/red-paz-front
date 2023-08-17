import { defineStore } from 'pinia';
import { HeaderItem } from '@/common/interfaces';

export const useHeaderStore = defineStore('header', {
  state: () => ({
    tabs: [] as HeaderItem[],
    currentTab: '',
    showTabs: true,
    alias: '',
    imageSrc: '',
  }),

  actions: {
    setTabs(tabs: HeaderItem[]) {
      this.tabs = tabs;
    },

    selectTab(tab: HeaderItem) {
      this.currentTab = tab.label;
    },
  },
});

export default useHeaderStore;
