<link href="https://cdn.jsdelivr.net/gh/yesiamrocks/cssanimation.io@1.0.3/cssanimation.min.css" rel="stylesheet" />
<template>
    <div class="mx-auto p-4 container">
        <div class="p-4 container grid grid-cols-2">

            <div>
                <h2 class="text-7xl">About me</h2>
                <h4 class="text-3xl text-justify">I'm a Front-end developer or Back-end developer or Full stack developer based in
                    Bandung, Indonesia
                </h4>
                <p class="mt-4 text-justify">
                    I've been doing Web development since i joined University back in 2021. I used to do web developing
                    back when i was a kid, but it was just that. But now i found my passion in Web development since it
                    requires logical thinking, problem solving, getting creative in my designs or code, it's really fun!
                    (even though i come across lots of errors sometimes but it's really fun).
                </p>
            </div>
            <div class="container flex items-center flex-col gap-8 justify-around">
                <h2 class="text-3xl">Here are the technologies that i use!</h2>
                <div class="flex items-center justify-center  gap-4 cssanimation leRainDrop">
                    <Icon name="logos:github-icon" style="white" size="5rem" />
                    <Icon name="logos:vue" size="5rem" />
                    <Icon name="logos:tailwindcss-icon" size="5rem" />
                    <Icon name="devicon:html5" size="5rem" />
                </div>
                <div class="flex cssanimation leRainDrop gap-4">

                    <Icon name="devicon:css3" size="5rem" />
                    <Icon name="devicon:javascript" size="5rem" />
                    <Icon name="devicon:figma" size="5rem" />
                </div>

            </div>

        </div>
        <div class="p-4">
            <div class="flex flex-col container ">
                <h2>Work History</h2>
                <a href="https://github.com/BagasCaturS/Personal-project/blob/a6d36101928677ef75080790a1178d2276fbbffc/BagasCatur_Santoso_JFSD_Resume.pdf" target="_blank" class="btn btn-primary w-fit">Resume download</a>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>


.cssanimation, .cssanimation span {
    animation-duration: 3s;
    animation-fill-mode: both;
}

.cssanimation span { display: inline-block }

.leRainDrop span { animation-name: leRainDrop; animation-iteration-count: infinite; }
@keyframes leRainDrop {
    0%, 25%, 55%, 75%, 87%, 97%, 100% { transform: scaleX(1.0) }
    26%, 56%, 76% { transform: scaleX(1.3) scaleY(0.8) }
    31%, 61%, 81% { transform: scaleX(0.8) scaleY(1.2) }
    76%, 88% { transform: scaleX(1.2) }
    98% { transform: scaleX(1.1) }
}

.cssanimation span:nth-child(1) {
    animation-delay: 0s;
}
.cssanimation span:nth-child(2) {
    animation-delay: 1s;
}
.cssanimation span:nth-child(3) {
    animation-delay: 2s;
}
.cssanimation span:nth-child(4) {
    animation-delay: 3s;
}

</style>