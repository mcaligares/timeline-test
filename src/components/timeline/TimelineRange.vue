<script setup>
import NameLabel from '../utils/NameLabel.vue';
</script>

<template>
    <NameLabel name="timeline-range"/>
    <div class="timeline-range">

    </div>
</template>

<style lang="scss">
@import '../../styles/variables.scss';

.timeline-range {
    min-width: 150px - 2px;
    height: $timeline-range-height;
    background-color: rgba(#000, 0.1);
}
</style>