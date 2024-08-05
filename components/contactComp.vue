<template>
    <div class="flex flex-col md:grid md:grid-cols-2 md:items-center container p-4 mb-8">
        <div>
            <p class="mb-4">Got anything to ask?</p>
            <h2 class="text-4xl">Chat me on Whatsapp!</h2>
            <p class="mt-10">Feel free to chat me and ask anything about my projects, or even a random questions!</p>
            <div class="flex gap-4 container flex-col w-fit">
                <div class="mt-4 flex items-center gap-4 ">
                    <!-- use material-symbols-light on icones -->
                    <Icon name="material-symbols-light:location-on-rounded" size="2rem" />
                    <span>
                        <p class="text-xl">Bandung, Indonesia</p>
                    </span>
                </div>
                <div class="flex items-center gap-4">
                    <Icon name="material-symbols-light:chat-rounded" size="2rem" />
                    <span>
                        <a class="text-xl link link-hover" href="https://wa.link/0kgbdt">Chat with me!
                        </a>
                    </span>

                </div>
                <div class="flex items-center gap-4">
                    <Icon name="material-symbols-light:mail" size="2rem" />
                    <div class="tooltip tooltip-bottom" data-tip="bagascatursantoso@gmail.com">
                        <a href="mailto:bagascatursantoso@gmail.com" class="link link-hover ">
                            Email me!
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full flex items-center justify-center">
            <NuxtImg alt="flower-telephone" format="webp" class=""
                src="f/3000521/1500x1293/8a6ea95b5a/flower-telephone.png" width="500" />
        </div>
    </div>
    <NuxtLayout name="footer" />
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>