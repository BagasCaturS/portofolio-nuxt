<template>
    <div class="p-4 mx-auto my-8 w-full grid grid-cols-2 gap-4">
        <div>
            <h2 class="text-6xl font-bold">Hello 👋,</h2>
            <h2 class="text-6xl font-bold cssanimation lePopUp infinite">I'm <span class="text-error">Bagas Catur Santoso.</span></h2>
            <h2 class="text-6xl font-bold text-yellow-300 border-b-2 pb-4">Web Developer</h2>
            <p class="text-justify mt-4">Aspiring Junior Full-Stack Web Developer with a strong foundation in
                front-end and back-end technologies. Proficient in HTML, CSS,
                JavaScript, and front-end frameworks like VueJS and NuxtJs. Familiar
                with server-side languages like Express.JS, as well as databases like
                MySQL. Eager to learn, collaborate, and contribute to dynamic web
                applications. Committed to staying up-to-date with the latest
                industry trends and best practices.</p>
                <div class="mt-4 mr-8 flex gap-8 justify-end">
                    <NuxtLink to="/Contact">
                        <button class="btn btn-outline btn-warning">Contact Me</button>
                    </NuxtLink>
                    <NuxtLink to="/Project">
                        <div></div>
                        <button class="btn btn-outline btn-accent">See My Projects</button>
                    </NuxtLink>
                </div>
        </div>

        <div class="flex justify-end items-center">
            <div class="tooltip tooltip-bottom w-fit flex flex-row justify-center items-center" data-tip="This is just a place holder dont hate me please">
                <NuxtImg alt="profile-pic" format="webp" class=" size-11/12"
                src="f/3000521/712x791/7333c98b40/frame-11-1.png"/>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

.cssanimation, .cssanimation span {
    animation-duration: 3s ;
    animation-fill-mode: both;
}

.cssanimation span { display: inline-block }


.lePopUp span { animation-name: lePopUp }
@keyframes lePopUp {
    50% { transform: scale(1.5) }
}
</style>