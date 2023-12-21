<template>

    <div class="relative w-full">

        <div
            v-if="!props.play.hidden"
            class="h-14 w-full flex items-center justify-center text-xl text-neutral-10 font-semibold bg-warning-70 hover:bg-warning-60 select-none rounded-md shadow-[0_0_5px_theme(colors.warning.70)] border border-warning-90 transition-colors"
            @click="props.play.click">

            {{ props.play.label ?? 'Jugar' }}

        </div>

        <!-- <div
            v-if="!props.create.hidden"
            class="relative h-10 w-full flex items-center justify-center text-sm text-neutral-10 border border-warning-70 text-warning-70 select-none rounded-md mt-2 transition-colors"
            @click="props.create.click">

            {{ props.create.label ?? 'Crear partida' }}

        </div> -->

        <slot/>

    </div>

</template>

<script setup>

    const props = defineProps({ play: { type: Object, default: () => { return {} }} })
    
</script>