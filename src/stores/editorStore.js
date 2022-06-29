import { defineStore } from 'pinia'

export const useEditorStore = defineStore('editor', {
  state: () => {
    return {
      timelineRangeCount: 4,
      timelineContentWidth: 1900,
      timelineAudioTracksCount: 2,
      timelineAudioClipsCount: 1,
      timelineGraphicTracksCount: 2,
      timelineGraphicClipsCount: 1,
      timelineMethod: 'draggabilly',
    }
  },
  getters: {
    timelineTracksCount: (state) => {
      return state.timelineAudioTracksCount + state.timelineGraphicTracksCount
    },
    timelineRangeWidth: (state) => {
      const borderWidth = state.timelineRangeCount - 1
      return (state.timelineContentWidth - borderWidth) / state.timelineRangeCount
    },
  }
})
