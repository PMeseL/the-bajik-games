<template>

    <div class="h-full w-full">

        <slot/>

    </div>

</template>

<script setup>
useHead({
    title: 'The Bajik Games',
    link: [{ rel: 'favicon', href: '/favicon.ico' }]
})
</script>