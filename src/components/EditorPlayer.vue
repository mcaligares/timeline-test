<script setup>
import NameLabel from './utils/NameLabel.vue';
import ClipForm from './form/ClipForm.vue';
</script>

<template>
    <div class="editor-player">
        <NameLabel name="editor-player"/>
        <ClipForm/>
    </div>
</template>

<style lang="scss">
.editor-player {
    background-color: rgba(#000, 0.2);
}

</style>