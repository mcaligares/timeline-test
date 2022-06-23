<script setup>
import TimelineRange from './TimelineRange.vue';
import NameLabel from '../utils/NameLabel.vue';

defineProps({
    width: Number
})
</script>

<template>
    <div class="timeline-ranges" :style="`width: ${width}px;`">
        <NameLabel :name="`timeline-ranges width: ${width}`" inverted/>
        <TimelineRange/>
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