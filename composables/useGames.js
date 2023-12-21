export const useGames = () => {

    return [

        {
            id: 'javielillor',
            title: 'Javier El Illor',
            description: 'Debes contar Javielillors y solo Javielillors pero cuidado!! Algunos van hasta las cejas de farlopa 😜',
            players: '♾️',
            backgroundImage: '/_nuxt/assets/javielillor.jpg',
            backgroundImageClass: 'absolute bottom-0 left-0 -z-10 animate-[fade_3s]',
            click: () => useRouter().push('/lobby/javielillor')
        },
        {
            id: 'openings',
            title: 'Adivina el opening',
            description: 'Va tocando 🚿 no ?',
            players: '♾️',
            buttonImage: '/_nuxt/assets/dario.png',
            buttonImageClass: 'absolute bottom-full left-0 w-3/4 -z-10 animate-[fade_1s]',
            click: () => useRouter().push('/lobby/openings')
        }
    ]
}