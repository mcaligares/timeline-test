<script setup>
import EditorBrowser from './EditorBrowser.vue';
import EditorPlayer from './EditorPlayer.vue';
import EditorTimeline from './EditorTimeline.vue';

</script>

<template>
    <div class="editor">
        <div class="editor-top">
            <EditorBrowser class="editor-panel"/>
            <EditorPlayer class="editor-panel"/>
        </div>
        <div class="editor-bottom">
            <EditorTimeline class="editor-panel"/>
        </div>
    </div>
</template>

<style>
.editor{
    display: flex;
    height: 100vh;
    flex-direction: column;
}
.editor-top {
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.editor-bottom {
    height: 50%;
}
.editor-panel {
    width: 100%;
    height: 100%;
    background-color: lightgray;
}
</style>