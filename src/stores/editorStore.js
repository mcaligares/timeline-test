import { defineStore } from 'pinia'

export const useEditorStore = defineStore('editor', {
  state: () => {
    return {
      timelineRangeCount: 4,
      timelineContentWidth: 1900,
      timelineAudioTracksCount: 2,
      timelineAudioClipsCount: 0,
      timelineAudioClips: [],
      timelineGraphicTracksCount: 2,
      timelineGraphicClipsCount: 0,
      timelineGraphicClips: [],
      timelineMethod: 'draggabilly',
      timelineCalculateRange: 0
    }
  },
  getters: {
    timelineTracksCount: (state) => {
      return state.timelineAudioTracksCount + state.timelineGraphicTracksCount
    },
    timelineRangeWidth: (state) => {
      if (state.timelineCalculateRange) {
        return state.timelineCalculateRange
      } else {
        const borderWidth = state.timelineRangeCount - 1
        return (state.timelineContentWidth - borderWidth) / state.timelineRangeCount
      }
    },
  },
  actions: {
    addClip(clip) {
      if (clip && clip.type === 'graphic') {
        this.timelineGraphicClips = [...this.timelineGraphicClips, clip]
      } else {
        this.timelineAudioClips = [...this.timelineAudioClips, clip]
      }
    }
  }
})
