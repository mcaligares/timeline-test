<script setup>
defineProps({
    name: String
})
</script>

<template>
    <div class="name-label">
        <label class="name-label__value">{{name}}</label>
    </div>
</template>

<style lang="scss">
.name-label {
    position: relative;
    &__value {
        top: -3px;
        width: 200px;
        position: absolute;
        font-size: x-small;
        font-family: monospace;
    }
}
</style>