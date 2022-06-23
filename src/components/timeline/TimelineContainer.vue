<script setup>
import TimelineRanges from './TimelineRanges.vue';
import TimelineInfo from './TimelineInfo.vue';
import TimelineTrack from './TimelineTrack.vue';

const width = 1000
</script>

<template>
    <div class="timeline-container">
        <div class="timeline-info">
            <div class="timeline-info-gap"></div>
            <TimelineInfo/>
            <TimelineInfo/>
        </div>
        <div class="timeline-content">
            <TimelineRanges :width="width"/>
            <TimelineTrack :width="width"/>
            <TimelineTrack :width="width"/>
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
        background-color: lightblue;
        .timeline-info-gap {
            height: $timeline-range-height;
            background-color: rgba(#000, 0.2);
        }
    }
    .timeline-content {
        height: 100%;
        overflow: scroll;
        width: calc(100% - $timeline-info-width);
        background-color: lightgreen;
    }
}
</style>