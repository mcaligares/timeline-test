<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import TimelineRanges from './TimelineRanges.vue';
import TimelineInfo from './TimelineInfo.vue';
import TimelineTrack from './TimelineTrack.vue';
import NameLabel from '../utils/NameLabel.vue';
import { useEditorStore } from '../../stores/editorStore';

const store = useEditorStore()
const timelineInfo = ref(null)
const timelineRanges = ref(null)

const onScroll = (e) => {
    timelineInfo.value.scrollTop = e.target.scrollTop
}

const onResize = () => {
    store.timelineContentWidth = timelineRanges.value.offsetWidth
}

onMounted(() => {
    onResize()
    window.addEventListener('resize', onResize)
})
onUnmounted(() => {
    window.removeEventListener('resize', onResize)
})
</script>

<template>
    <div class="timeline-container">
        <NameLabel name="timeline-container"/>
        <div class="timeline-info" ref="timelineInfo">
            <div class="timeline-info-gap"></div>
            <TimelineInfo
                v-for="(item, index) in store.timelineTracksCount"
                :key="index"
            />
        </div>
        <div
            ref="timelineRanges"
            class="timeline-content"
            @scroll="onScroll"
        >
            <TimelineRanges/>
            <TimelineTrack
                v-for="(item, index) in store.timelineTracksCount"
                :key="index"
                :width="store.timelineContentWidth"
            />
        </div>
    </div>
</template>

<style lang="scss">
@import '../../styles/variables.scss';

.timeline-container {
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: row;
    .timeline-info {
        height: 100%;
        width: $timeline-info-width;
        overflow: hidden;
        background-color: lightblue;
        .timeline-info-gap {
            height: $timeline-range-height;
            background-color: rgba(#000, 0.2);
        }
    }
    .timeline-content {
        height: 100%;
        overflow: auto;
        width: calc(100% - $timeline-info-width);
        background-color: lightgreen;
        .timeline-track:nth-child(even) {
            background-color: rgba(#000, 0.15);
        }
        .timeline-track:nth-child(odd) {
            background-color: rgba(#000, 0.17);
        }
    }
}
</style>