<script setup>
defineProps({
    width: Number
})
</script>

<template>
    <div class="timeline-track" :style="`width: ${width}px;`">
        <h3>Timeline Track</h3>
    </div>
</template>

<style lang="scss">
@import '../../styles/variables.scss';

.timeline-track {
    width: 100%;
    height: $timeline-track-height;
    background-color: rgba(#000, 0.1);
}

</style>