<script setup>
import interact from 'interactjs'
import { onMounted, ref, reactive } from 'vue';
import NameLabel from '../utils/NameLabel.vue';

const timelineClip = ref(null)
const position = reactive({ x: 0, y: 0})

onMounted(() => {
    interact(timelineClip.value).draggable({
        // inertia: true,
        autoScroll: true,
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
            })
        ],
        listeners: {
            move (event) {
                position.x += event.dx;
                position.y += event.dy;
                console.log('event', event.dx, event.dy)
                timelineClip.value.style.transform = `translate(${position.x}px, ${position.y}px)`;
                timelineClip.value.setAttribute('data-x', position.x)
                timelineClip.value.setAttribute('data-y', position.y)
            },
        },
    })
})
</script>

<template>
    <div ref="timelineClip" class="timeline-clip">
        <NameLabel name="timeline-clip"/>
    </div>
</template>

<style lang="scss">
@import '../../styles/variables.scss';

.timeline-clip {
    width: 200px;
    height: $timeline-track-height;
    background-color: rgba(#000, 0.4);
    user-select: none;
    touch-action: none;
}
</style>