<template>
    <div class="mx-auto container flex flex-col items-center gap-4 wc">
        <h1 class="text-5xl">Sorry this page is under construction. . .</h1>
        <p>Come back later (please)</p>

        <div class=" p-4 size-6/12 bg-slate-600 rounded-xl">
            <NuxtImg alt="under-construction" format="webp" class="size-fit"
            src="f/3000521/1599x1088/01e1a44e6b/under-construction.png" />
        </div>
        <p class="text-3xl text-center text-w">This page is currently under construction please come back later. i swear it will be good when you come back here (i hope)</p>
        <NuxtLink to="/">
            <button class="btn btn-primary">For the mean time, you can go back</button>
        </NuxtLink>
    </div>
</template>

<script setup>

</script>

<style scoped>
.wc{
    width: 1450px;
}

.text-w{
    width: 1000px;
}
</style>