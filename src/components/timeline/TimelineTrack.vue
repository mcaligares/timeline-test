<script setup>
import NameLabel from '../utils/NameLabel.vue';
defineProps({
    width: Number
})
</script>

<template>
    <div class="timeline-track" :style="`width: ${width}px;`">
        <NameLabel name="timeline-track"/>
    </div>
</template>

<style lang="scss">
@import '../../styles/variables.scss';

.timeline-track {
    min-width: 100%;
    height: $timeline-track-height;
}

</style>