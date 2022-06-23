<script setup>
import NameLabel from '../utils/NameLabel.vue';

defineProps({
    width: Number
})
</script>

<template>
    <div
        class="timeline-range"
        :style="width > 90 ? `min-width: ${width}px` : ''"
    >
        <NameLabel name="timeline-range"/>
    </div>
</template>

<style lang="scss">
@import '../../styles/variables.scss';

.timeline-range {
    min-width: 150px;
    height: $timeline-range-height;
    background-color: rgba(#000, 0.1);
}
</style>