<template>

    <div class="relative h-full w-full">

        <div
            v-for="game in games" :key="game"
            class="absolute h-full w-full text-white text-sm p-12">

            <p class="text-3xl font-semibold">{{ game.title }}</p>
            <p class="mt-4 text-xs font-light">{{ game.description }}</p>

        </div>

    </div>
    
</template>

<script setup>
const games = [

    {
        title: 'Javier El Illor',
        description: 'Debes contar Javielillors y solo Javielillors, pero cuidado!!\nAlgunos van hasta las cejas de farlopa 😜',

    }
]
</script>