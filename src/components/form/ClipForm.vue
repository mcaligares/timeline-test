<script setup>
import { ref } from 'vue';
import LabelInput from '../utils/LabelInput.vue';
import { useEditorStore } from '../../stores/editorStore';

const store = useEditorStore()
const width = ref('0')
const duration = ref('4')
const type = ref('audio')

const onSubmit = () => {
    try {
        const clip = {
            type: type.value,
            width: Number.parseInt(width.value),
            duration: Number.parseInt(duration.value)
        }
        store.addClip(clip)
    } catch (e) {
        console.error('Error', e)
    }
}
const calculateRanges = () => {
    const clipDuration = Number.parseInt(duration.value)
    const clipWidth = Number.parseInt(duration.value) // escala 1 a 1

    if (clipWidth*100/store.timelineContentWidth < 80) {
        const totalWidthInPixelsFor80 = 80*store.timelineContentWidth/100
        console.log('totalWidthInPixelsFor80', totalWidthInPixelsFor80)
        const unitInPixelForClip = totalWidthInPixelsFor80/clipDuration
        console.log('unitInPixelForClip', unitInPixelForClip)
        const unitInPixelForRange = totalWidthInPixelsFor80/(store.timelineRangeCount - 1)
        console.log('unitInPixelForRange', unitInPixelForRange)
        const totalWidthInPixelsForClip = unitInPixelForClip * clipDuration
        console.log('totalWidthInPixelsForClip', totalWidthInPixelsForClip)
        const durationForRange = (unitInPixelForRange * clipDuration) / totalWidthInPixelsForClip
        console.log('durationForRange', durationForRange)
        store.timelineCalculateRange = unitInPixelForRange
        // store.timelineRangeCount = clipDuration +1
        width.value = unitInPixelForClip * clipDuration
        console.log('width.value', width.value, clipDuration)
    }
}
</script>

<template>
    <form class="form" @submit.prevent="onSubmit">
        <LabelInput label="clip width" v-model="width"/>
        <LabelInput label="clip duration" v-model="duration"/>
        <LabelInput label="clip type" v-model="type"/>

        <button type="submit">submit</button>
        <button type="button" @click="calculateRanges">
            calculate ranges
        </button>
    </form>
</template>

<style lang="scss">
.form {
    width: 70%;
    padding: 10px;
}
</style>