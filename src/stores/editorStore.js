import { defineStore } from 'pinia'

export const useEditorStore = defineStore('editor', {
  state: () => {
    return {
      timelineRangeCount: 4,
      timelineContentWidth: 100,
      timelineTracksCount: 1,
    }
  },
  getters: {
    timelineRangeWidth: (state) => {
      const borderWidth = state.timelineRangeCount - 1
      return (state.timelineContentWidth - borderWidth) / state.timelineRangeCount
    },
  }
})
