<script setup>
import { ref, computed } from 'vue';
import TimelineRange from './TimelineRange.vue';
import NameLabel from '../utils/NameLabel.vue';
import { useEditorStore } from '../../stores/editorStore';

const store = useEditorStore()
const timelineRanges = ref(null)
</script>

<template>
    <div
        ref="timelineRanges"
        class="timeline-ranges"
        :style="`width: ${store.timelineContentWidth}px;`"
    >
        <NameLabel :name="`timeline-ranges width: ${store.timelineContentWidth}`"/>
        <TimelineRange
            v-for="(item, index) in store.timelineRangeCount"
            :key="index"
            :width="store.timelineRangeWidth"
        />
    </div>
</template>

<style lang="scss">
@import '../../styles/variables.scss';

.timeline-ranges {
    display: flex;
    height: $timeline-range-height;
    min-width: 100%;
    background-color: rgba(#000, 0.1);
    .timeline-range {
        border-left: 1px solid black;
        &:last-child {
            border-right: 1px solid black;
        }
    }
}
</style>