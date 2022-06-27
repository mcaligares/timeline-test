<script setup>
import { ref } from 'vue';
import LabelInput from '../utils/LabelInput.vue';
import { useEditorStore } from '../../stores/editorStore';

const store = useEditorStore()
const width = ref('1000')
const audioTracks = ref('2')
const audioClips = ref('1')
const graphicTracks = ref('2')
const graphicClips = ref('1')
const ranges = ref('4')
const interactMethod = ref(true)

const onSubmit = () => {
    try {
        store.timelineContentWidth = Number.parseInt(width.value)
        store.timelineRangeCount = Number.parseInt(ranges.value)
        store.timelineAudioTracksCount = Number.parseInt(audioTracks.value)
        store.timelineAudioClipsCount = Number.parseInt(audioClips.value)
        store.timelineGraphicClipsCount = Number.parseInt(graphicClips.value)
        store.timelineGraphicTracksCount = Number.parseInt(graphicTracks.value)
        console.log(interactMethod.value)
        if (store.useIntereactMethod != interactMethod.value) {
            store.useIntereactMethod = interactMethod.value
            store.timelineAudioClipsCount = 0
            store.timelineGraphicClipsCount = 0
            setTimeout(() => {
                console.log(interactMethod.value)
                store.timelineAudioClipsCount = Number.parseInt(audioClips.value)
                store.timelineGraphicClipsCount = Number.parseInt(graphicClips.value)
            }, 1500)
        }
    } catch (e) {
        console.log('Error', e)
    }
}
</script>

<template>
    <form class="form" @submit.prevent="onSubmit">
        <LabelInput label="timeline width" v-model="width"/>
        <LabelInput label="nº ranges" v-model="ranges"/>
        <LabelInput label="nº audio clips" v-model="audioClips"/>
        <LabelInput label="nº audio tracks" v-model="audioTracks"/>
        <LabelInput label="nº graphic clips" v-model="graphicClips"/>
        <LabelInput label="nº graphic tracks" v-model="graphicTracks"/>
        <LabelInput label="interact method" type="checkbox" v-model="interactMethod"/>

        <button type="submit">submit</button>
    </form>
</template>

<style lang="scss">
.form {
    width: 50%;
    padding: 10px;
}
</style>