<template>

    <div v-if="showLoading" class="h-full w-full flex flex-col items-center justify-center text-2xl text-white font-semibold">

        The Bajik Games

    </div>

    <div v-else class="h-full w-full">

        <slot/>

    </div>

</template>

<script setup>
useHead({
    title: 'The Bajik Games',
    link: [{ rel: 'favicon', href: '/favicon.ico' }]
})

const showLoading = ref(true)

onMounted(() => setTimeout(() => showLoading.value = false, 2000))
</script>