<script setup>
import { ref } from 'vue';
import LabelInput from '../utils/LabelInput.vue';
import { useEditorStore } from '../../stores/editorStore';

const store = useEditorStore()
const width = ref('1000')
const tracks = ref('2')
const ranges = ref('4')
const clips = ref('1')

const onSubmit = () => {
    try {
        store.timelineContentWidth = Number.parseInt(width.value)
        store.timelineRangeCount = Number.parseInt(ranges.value)
        store.timelineTracksCount = Number.parseInt(tracks.value)
        store.timelineClipPerTrack = Number.parseInt(clips.value)
    } catch (e) {
        console.log('Error', e)
    }
}
</script>

<template>
    <form class="form" @submit.prevent="onSubmit">
        <LabelInput label="timeline width" v-model="width"/>
        <LabelInput label="nº ranges" v-model="ranges"/>
        <LabelInput label="nº tracks" v-model="tracks"/>
        <LabelInput label="nº clips x track" v-model="clips"/>

        <button type="submit">submit</button>
    </form>
</template>

<style lang="scss">
.form {
    width: 50%;
    padding: 10px;
}
</style>