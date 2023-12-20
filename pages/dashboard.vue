<template>

    <div class="relative h-full w-full">

        <Transition :name="slideTransition">

            <div v-if="currentGame === 0" class="h-full w-full flex flex-col gap-8 text-white text-sm p-8">

                <div>

                    <p class="text-2xl font-semibold">Javier El Illor</p>
                    <p class="text-xs font-light mt-4">Debes contar Javielillors y solo Javielillors pero cuidado!! Algunos van hasta las cejas de farlopa 😜</p>

                </div>

                <div class="flex">

                    <div class="w-fit py-2 px-3 bg-neutral-40 border border-neutral-70 rounded-md text-2xs">

                        Jugadores: ♾️

                    </div>

                </div>

                <div class="relative h-14 w-full flex items-center justify-center text-xl text-neutral-10 font-semibold bg-warning-70 hover:bg-warning-60 select-none rounded-md mt-auto shadow-[0_0_5px_theme(colors.warning.70)] border border-warning-90 transition-colors">

                    Unirme

                </div>

                <img src="@/assets/javielillor.jpg" alt="" class="absolute bottom-0 left-0 -z-10 animate-[fade_3s]">

            </div>

            <div v-else-if="currentGame === 1" class="h-full w-full flex flex-col gap-8 text-white text-sm p-8">

                <div>

                    <p class="text-2xl font-semibold">Adivina el opening</p>
                    <p class="text-xs font-light mt-4">Va tocando 🚿 no ?</p>

                </div>

                <div class="flex">

                    <div class="w-fit py-2 px-3 bg-neutral-40 border border-neutral-70 rounded-md text-2xs">

                        Jugadores: ♾️

                    </div>

                </div>

                <div class="relative h-14 w-full flex items-center justify-center text-xl text-neutral-10 font-semibold bg-warning-70 hover:bg-warning-60 select-none rounded-md mt-auto shadow-[0_0_5px_theme(colors.warning.70)] border border-warning-90 transition-colors">

                    Unirme

                    <img src="@/assets/dario.png" alt="" class="absolute bottom-full left-0 w-2/3 -z-10 animate-[fade_1s]">

                </div>

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
    const gamesCount = 2

    const onGameChange = (to) => {

        if ( to === -1 ) { slideTransition.value = 'slide-back' }
        else { slideTransition.value = 'slide-forward' }

        nextTick(() => {

            if ( currentGame.value === 0 ) { currentGame.value = gamesCount - 1 }
            else if ( currentGame.value === gamesCount - 1 ) { currentGame.value = 0 }
            else { currentGame.value = currentGame.value + to }
        })
    }

</script>

<style>
.slide-forward-leave-active,
.slide-forward-enter-active,
.slide-back-leave-active,
.slide-back-enter-active {
    transition: transform 400ms ease, opacity 300ms ease;
}

.slide-forward-leave-active,
.slide-back-leave-active
{ position: absolute; top: 0; left: 0 }

.slide-forward-enter-from {
    transform: translateX(100%);
}

.slide-forward-enter-to {
    transform: translateX(0);
}

.slide-forward-leave-from {
    transform: translateX(0);
    opacity: 1;
}

.slide-forward-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.slide-back-enter-from {
    transform: translateX(-100%);
}

.slide-back-enter-to {
    transform: translateX(0);
}

.slide-back-leave-from {
    transform: translateX(0);
    opacity: 1;
}

.slide-back-leave-to {
    transform: translateX(100%);
    opacity: 0;
}
</style>