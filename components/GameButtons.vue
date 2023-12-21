<template>

    <div class="relative w-full">

        <div
            v-if="!props.join.hidden"
            class="h-14 w-full flex items-center justify-center text-xl text-neutral-10 font-semibold bg-warning-70 hover:bg-warning-60 select-none rounded-md shadow-[0_0_5px_theme(colors.warning.70)] border border-warning-90 transition-colors"
            @click="props.join.click">

            {{ props.join.label ?? 'Unirme' }}

        </div>

        <div
            v-if="!props.create.hidden"
            class="relative h-10 w-full flex items-center justify-center text-sm text-neutral-10 border border-warning-70 text-warning-70 select-none rounded-md mt-2 transition-colors"
            @click="props.create.click">

            {{ props.create.label ?? 'Crear partida' }}

        </div>

    </div>

</template>

<script setup>

    const props = defineProps({ join: { type: Object, default: () => { return {} }}, create: { type: Object, default: () => { return {} }} })
    
</script>