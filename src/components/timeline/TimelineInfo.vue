<script setup>
import NameLabel from '../utils/NameLabel.vue';
</script>

<template>
    <NameLabel name="timeline-info"/>
    <div class="timeline-info-item">
    </div>
</template>

<style lang="scss">
@import '../../styles/variables.scss';

.timeline-info-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: $timeline-track-height;
    background-color: rgba(#000000, 0.1);
}
</style>