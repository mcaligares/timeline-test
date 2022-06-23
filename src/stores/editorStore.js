import { defineStore } from 'pinia'

export const useEditorStore = defineStore('editor', {
  state: () => {
    return {
      timelineRangeWidth: 100,
      timelineTracksCount: 1,
    }
  }
})
