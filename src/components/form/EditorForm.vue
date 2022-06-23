<script setup>
import { ref } from 'vue';
import LabelInput from '../utils/LabelInput.vue';
import { useEditorStore } from '../../stores/editorStore';

const store = useEditorStore()
const width = ref('1000')
const tracks = ref('2')

const onSubmit = () => {
    try {
        store.timelineRangeWidth = Number.parseInt(width.value)
        store.timelineTracksCount = Number.parseInt(tracks.value)
    } catch (e) {
        console.log('Error', e)
    }
}
</script>

<template>
    <form class="form" @submit.prevent="onSubmit">
        <LabelInput label="width" v-model="width"/>
        <LabelInput label="tracks" v-model="tracks"/>

        <button type="submit">submit</button>
    </form>
</template>

<style lang="scss">
.form {
    width: 50%;
    padding: 10px;
}
</style>