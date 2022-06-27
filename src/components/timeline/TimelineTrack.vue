<script setup>
import NameLabel from '../utils/NameLabel.vue';
</script>

<template>
    <div class="timeline-track">
        <NameLabel name="timeline-track"/>
        <slot/>
    </div>
</template>

<style lang="scss">
@import '../../styles/variables.scss';

.timeline-track {
    display: flex;
    width: 100%;
    min-width: 100%;
    height: $timeline-track-height;
}

</style>