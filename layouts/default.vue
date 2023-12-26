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