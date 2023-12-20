<template>

    <div v-if="showLoading" class="flex flex-col items-center justify-center">

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

onMounted(() => setTimeout(showLoading.value = false, 2000))
</script>