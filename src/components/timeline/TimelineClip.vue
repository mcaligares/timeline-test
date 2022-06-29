<script setup>
import { onMounted, ref, reactive } from 'vue';
import interact from 'interactjs'
import Draggabilly from 'draggabilly'
import DraggableJs from '../../libs/draggable'
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
                console.log('[interact] event move', event.dx, event.dy)
            },
        },
    })
}
const initializeDraggabilly = () => {
    textClip.value = `Draggabilly - ${props.type}`
    const draggie = new Draggabilly(timelineClip.value, {
        containment: getRestrictionClassByType(),
        grid: [0, 70]
    })
    Array.from(['dragStart', 'dragMove', 'dragEnd', 'pointerDown', 'pointerMove', 'pointerUp', 'staticClick']).forEach(event => {
        draggie.on(event, () => console.log(`[draggablilly] event ${event}`))
    })
}
const initializeDraggable = () => {
    textClip.value = `Draggable - ${props.type}`
    new DraggableJs(timelineClip.value, {
        grid:90,
        limit: document.querySelector(getRestrictionClassByType()),
        onDrag: function (elem, x, y) {
            console.log('[draggable] event drag', x, y)
        },
        onDragStart: function (elem, x, y) {
            console.log('[draggable] event drag start', x, y)
        },
        onDragEnd: function (elem, x, y) {
            console.log('[draggable] event drag end', x, y)
        },
    })
}

onMounted(() => {
    if (props.method === 'interact') {
        initializeInteract()
    } else if (props.method === 'draggable') {
        initializeDraggable()
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