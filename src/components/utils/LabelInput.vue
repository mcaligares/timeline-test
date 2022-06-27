<script setup>
defineProps(['label', 'modelValue', 'type'])
const emit = defineEmits(['update:modelValue'])
</script>

<template>
    <div class="label-input">
        <label class="label-input__label">{{label}}</label>
        <input
            class="label-input__input"
            :type="type || 'text'"
            :value="modelValue"
            :checked="modelValue"
            @input="emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>

<style lang="scss">
.label-input {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-bottom: 10px;
    &__label {
        font-family: monospace;
    }
}
</style>