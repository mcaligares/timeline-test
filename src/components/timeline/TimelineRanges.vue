<script setup>
import TimelineRange from './TimelineRange.vue';

defineProps({
    width: Number
})
</script>

<template>
    <div class="timeline-ranges" :style="`width: ${width}px;`">
        <TimelineRange/>
        <TimelineRange/>
        <TimelineRange/>
        <TimelineRange/>
        <TimelineRange/>
        <TimelineRange/>
    </div>
</template>

<style lang="scss">
@import '../../styles/variables.scss';

.timeline-ranges {
    display: flex;
    width: 1837.3px;
    height: $timeline-range-height;
    .timeline-range {
        border-left: 1px solid black;
        &:last-child {
            border-right: 1px solid black;
        }
    }
}
</style>