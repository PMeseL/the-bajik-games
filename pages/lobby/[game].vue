<template>

    <div class="h-full w-full flex flex-col gap-9 p-8 text-white overflow-y-scroll" v-if="game">

        <div class="flex items-center gap-4">

            <i @click="useRouter().back()" class="fi fi-rr-angle-left"></i>
            <p class="text-xl">{{ game.title }}</p>

        </div>

        <div class="flex flex-col gap-3">

            <p class="pb-1 border-b border-neutral-100">Unirme a una partida</p>
            <p class="text-neutral-80">Próximamente...</p>

        </div>

        <div class="flex flex-col gap-3">

            <p class="pb-1 border-b border-neutral-100">Crear una partida</p>
            
            <input type="text" v-model="newGameName" placeholder="Introduce el nombre de la sala" class="outline-none border border-neutral-50 bg-neutral-30 px-3 py-2 text-xs">
            
            <div class="h-9 flex items-center justify-center bg-cta-50 rounded active:scale-95 transition-[opacity,transform]" :class="{'opacity-50 pointer-events-none': !newGameName || loading}">Crear</div>

        </div>
        
    </div>

</template>

<script setup>

    const router = useRouter()
    const route = useRoute()
    const games = useGames()

    const newGameName = ref('')
    const loading = ref(false)

    const game = games.find(g => g.id === route.params.game)

    const createGame = () => {}

    const joinGame = () => {}

</script>