<template>

    <Transition name="slide-forward">

        <div v-if="gameState === 'gameplay'" class="h-full w-full flex flex-col gap-2 p-3 text-white animate-fade">

            <div class="h-12 w-full flex items-center justify-center bg-neutral-40 shrink-0 rounded-lg text-lg font-medium">

                <div id="timer" class="flex gap-3" :class="{'!text-cta2-90': timer <= 5}">

                    <i class="fi fi-br-clock-three mb-0.5"></i>

                    <p class="w-3.5">{{ timer }}</p>

                </div>

            </div>

            <div class="relative h-full w-full flex items-end overflow-hidden rounded-lg">

                <div class="absolute bottom-[23%] left-0 h-14 w-full">

                    <div
                        v-for="entity in entities" :key="entity"
                        class="absolute opacity-0"
                        :style="`bottom: ${entity.railPosition}%; z-index: ${10 - entity.order}; transform: scale(${1 - (entity.order / 10)}); animation: ${entity.animation} ${1 / entity.speed}s ${entity.delay}s linear`">

                        <img src="@/assets/javier-el-illor-00.png" class="h-20" :style="`animation: walk-keyframes ${1 / entity.speed / 9}s infinite ease`">

                        <div class="absolute h-2 w-full -bottom-4 rounded-[20000000px] bg-black/20 shadow-[0_0_20px_rgba(0,0,0,0.70)]"/>
                        
                    </div>

                </div>

                <img src="@/assets/javielillor-map-00-front.png" alt="" class="absolute top-0 left-0 h-full object-cover z-50">

                <img src="@/assets/javielillor-map-00-back.png" alt="" class="min-h-full min-w-full object-cover">

            </div>

        </div>

        <div v-else-if="gameState === 'score'" class="relative h-full w-full flex flex-col justiufy-between gap-4 border-4 border-white/10 text-white p-6">

            <div id="confetti-origin" class="absolute top-0 left-0 w-full"/>

            <div class="h-full w-full flex items-center justify-center gap-2">

                <div class="w-full flex flex-col justify-center gap-1 text-2xs text-white/50">

                    <p>Otro jugador: 0</p>

                    <p class="text-xs text-white">Yo: {{ touches }}</p>

                    <p>Otro jugador: 0</p>

                </div>

                <div class="w-full flex items-center gap-7">

                    <img id="javielillor-count-image" src="@/assets/javier-el-illor-00.png" class="h-20">
                    <p class="w-8 text-3xl font-semibold text-center">{{ currentEndCount }}</p>

                </div>

            </div>

            <div
                class="h-10 w-full flex items-center justify-center text-sm text-neutral-10 font-semibold bg-warning-70 hover:bg-warning-60 select-none rounded-md shadow-[0_0_5px_theme(colors.warning.70)] border border-warning-90 transition-colors"
                @click="startGame">

                Reiniciar

            </div>

        </div>

    </Transition>

    <div v-if="gameState === 'gameplay'" class="fixed inset-0 z-50" @click="onScreenClick"></div>

</template>

<script setup>

    import party from 'party-js'

    const time = 25
    const entitiesInterval = [[5, 10], [12, 16], [16, 28]]
    let timerInterval
    
    const timer = ref(time)
    const touches = ref(0)
    const entities = ref()
    const gameState = ref('score')
    const currentEndCount = ref(0)

    const generateGame = () => {

        const entities = []

        for (let i = 0; i < entitiesInterval.length; i++) {

            const minEntities = entitiesInterval[i][0]
            const maxEntities = entitiesInterval[i][1]

            const entitiesInThisInterval = Math.floor(Math.random() * (maxEntities - minEntities + 1) + minEntities)
            
            for (let e = 0; e < entitiesInThisInterval; e++) {

                const intervalTime = time / entitiesInterval.length

                const minTime = intervalTime * i;
                const maxTime = minTime + intervalTime;

                const position = Math.floor(Math.random() * 4)
                
                entities.push(

                    {
                        speed: Math.random() * (1.2 - 0.35) + 0.35,
                        delay: Math.random() * (maxTime - minTime) + minTime,
                        animation: 'left-to-right',
                        order: position,
                        railPosition: position * 25
                    }
                )
            }
        }

        return entities
    }

    const gameFinish = async () => {

        currentEndCount.value = 0

        gameState.value = 'score'

        await new Promise(r => setTimeout(r, 1000))

        for (let i = 0; i < entities.value.length; i++) {

            currentEndCount.value += 1

            await new Promise(r => setTimeout(r, 100))
        }

        if ( touches.value === entities.value.length ) { party.confetti(document.querySelector('#confetti-origin'), { count: party.variation.range(30, 40) }) }
    }

    const startTimer = () => {

        timerInterval = setInterval(() => {

            if ( timer.value > 0 ) {
                
                timer.value -= 1

                if ( timer.value <= 5 ) {
                    
                    const timer = document.querySelector('#timer')
                    timer.style.animation = 'none'
                    setTimeout(() => timer.style.animation = 'emphasize 0.5s', 0)
                }
            }

            else {
                
                clearInterval(timerInterval)
                gameFinish()
            }

        }, 1000)
    }

    const onScreenClick = (event) => {

        if ( gameState.value !== 'gameplay' ) { return }

        touches.value += 1
    }

    const startGame = async () => {

        timer.value = time + 5
        touches.value = 0
        entities.value = undefined
        gameState.value = 'gameplay'

        await new Promise(r => setTimeout(r, 1000))

        entities.value = generateGame()

        startTimer()
    }

    startGame()

</script>

<style>
@keyframes left-to-right {
    
    from { left: -200px; opacity: 1 }
    to { left: 100%; opacity: 1 }
}

@keyframes walk-keyframes {
    
    0% { transform: translateY(0) }
    50% { transform: translateY(-5px) }
    100% { transform: translateY(0) }
}

@keyframes emphasize {
    0% { transform: scale(1) }
    50% { transform: scale(1.1) }
    100% { transform: scale(1) }
}
</style>