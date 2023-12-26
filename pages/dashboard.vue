<template>

    <div class="relative h-full w-full">

        <Transition :name="slideTransition" v-for="game, index in games" :key="game">

            <div v-if="currentGame === index" class="h-full w-full flex flex-col gap-8 text-white text-sm p-8">

                <div>

                    <p class="text-2xl font-semibold" v-html="game.title"/>
                    <p class="text-xs font-light mt-4" v-html="game.description"/>

                </div>

                <div class="flex">

                    <div class="w-fit py-2 px-3 bg-neutral-40 border border-neutral-70 rounded-md text-2xs">

                        Jugadores: {{ game.players }}

                    </div>

                </div>

                <GameButtons class="mt-auto" :play="{ click: game.click }">

                    <img v-if="game.buttonImage" :src="game.buttonImage" alt="" :class="game.buttonImageClass"/>

                </GameButtons>

                <img v-if="game.backgroundImage" :src="game.backgroundImage" alt="" :class="game.backgroundImageClass">

            </div>

        </Transition>

        <div class="absolute top-1/2 -translate-y-1/2 w-full flex justify-between z-50 px-4">

            <div class="h-12 w-12 flex items-center justify-center bg-neutral-60/30 border border-neutral-100 rounded-full p-4 text-xl text-white opacity-50 active:scale-90 transition-transform" @click="onGameChange(-1)">&lt;</div>
            <div class="h-12 w-12 flex items-center justify-center bg-neutral-60/30 border border-neutral-100 rounded-full p-4 text-xl text-white opacity-50 active:scale-90 transition-transform" @click="onGameChange(1)">&gt;</div>

        </div>

    </div>
    
</template>

<script setup>

    let slideTransition = ref('slide-forward')
    let currentGame = ref(0)

    const img = useImage()
    
    const games = useGames()

    const onGameChange = (to) => {

        if ( to === -1 ) { slideTransition.value = 'slide-back' }
        else { slideTransition.value = 'slide-forward' }

        nextTick(() => {

            if ( currentGame.value === 0 ) { currentGame.value = games.length - 1 }
            else if ( currentGame.value === games.length - 1 ) { currentGame.value = 0 }
            else { currentGame.value = currentGame.value + to }
        })
    }

</script>