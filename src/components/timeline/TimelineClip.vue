<script setup>
import interact from 'interactjs'
import * as Draggabilly from 'draggabilly'
import { onMounted, ref, reactive } from 'vue';
import { useEditorStore } from '../../stores/editorStore';
import NameLabel from '../utils/NameLabel.vue';

const props = defineProps({
    type: String,
    method: String
})
const textClip = ref('')
const timelineClip = ref(null)
const position = reactive({ x: 0, y: 0})

const getRestrictionClassByType = () => props.type === 'graphic'? '.timeline-graphic-tracks' : '.timeline-audio-tracks'

const initializeInteract = () => {
    textClip.value = `InteractJS - ${props.type}`
    timelineClip.value.style.transform = `translate(${position.x}px, ${position.y}px)`;
    interact(timelineClip.value).draggable({
        inertia: true,
        autoScroll: true,
        modifiers: [
            interact.modifiers.snap({
                targets: [
                    interact.snappers.grid({ x:1, y: 70 })
                ],
            }),
            interact.modifiers.restrictRect({
                restriction: getRestrictionClassByType(),
            }),
        ],
        listeners: {
            move (event) {
                position.x += event.dx;
                position.y += event.dy;
                timelineClip.value.style.transform = `translate(${position.x}px, ${position.y}px)`;
                console.log('event', event.dx, event.dy)
            },
        },
    })
}
const initializeDraggabilly = () => {
    textClip.value = `Draggabilly - ${props.type}`
    new Draggabilly(timelineClip.value, {
        containment: getRestrictionClassByType(),
        grid: [0, 70]
    })
}

onMounted(() => {
    if (props.method === 'interactjs') {
        initializeInteract()
    } else {
        initializeDraggabilly()
    }
})
</script>

<template>
    <div ref="timelineClip" class="timeline-clip">
        <NameLabel name="timeline-clip"/>
        {{ textClip }}
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