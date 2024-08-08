<link href="https://cdn.jsdelivr.net/gh/yesiamrocks/cssanimation.io@1.0.3/cssanimation.min.css" rel="stylesheet" />
<template>
    <div class="mx-auto container ">
        <div class="p-4 container lg:grid gap-4 lg:grid-cols-2">
            <div>
                <h2 class="text-7xl text-error bg-slate-200 w-fit p-4 rounded-md hover:bg-base-200 transition-colors">
                    About me</h2>
                <h4 class="text-3xl text-justify">I'm a <span class="text-success">Front-end developer</span> or <span
                        class="text-accent">Back-end developer</span> or <span class=" text-info">Full stack
                        developer</span>
                    based in
                    Bandung, Indonesia
                </h4>
                <p class="mt-4 text-justify">
                    I've been doing Web development since i joined University back in 2021. I used to do web development
                    back when i was a kid, and it was just a simple <'p>Hello world<' /p'> stuff. But now i found my
                            passion in Web development since it
                            requires logical thinking, problem solving, getting creative in my designs or code, it's
                            really fun!
                            (even though i come across lots of errors sometimes but it's really fun).
                </p>
            </div>
            <div class="divider divider-accent lg:hidden"></div>
            <!-- disaat viewport menyentuh ukuran 768px maka akan di hidden kan -->
            <!-- bagaiaman cara biar bila sudah di atas 768px muncul -->
            <div class=" container grid items-center flex-col gap-8 justify-around">
                <h2 class="text-3xl text-center">Here are the technologies that i use!</h2>
                <!-- untuk d ukuran exact 767px dia bakal muncul 2 repeaating  -->
                <!-- karena gua set screensize dimana dia bakal hide dan show d px tertentu -->
                <!-- bisa cek tailwind.config.js -->
                <div class=" md-max:hidden">
                    <div class="flex items-center justify-center gap-4 cssanimation leRainDrop flex-wrap">
                        <Icon name="devicon:github" style="white" size="5rem" />
                        <Icon name="devicon:vuejs" size="5rem" />
                        <Icon name="simple-icons:daisyui" size="5rem" />
                        <Icon name="devicon:tailwindcss" size="5rem" />
                        <Icon name="devicon:html5" size="5rem" />
                        <Icon name="devicon:nodejs" size="5rem" />
                    </div>
                    <div class="flex flex-wrap shrink-0 cssanimation leRainDrop gap-4 justify-center">

                        <Icon name="devicon:css3" size="5rem" />
                        <Icon name="devicon:express" size="5rem" />
                        <Icon name="devicon:" size="5rem" />
                        <Icon name="devicon:javascript" size="5rem" />
                        <Icon name="devicon:nuxtjs" size="5rem" />
                        <Icon name="devicon:figma" size="5rem" />
                    </div>
                </div>

                <div class="md:hidden">
                    <div class="flex items-center justify-center gap-4 cssanimation leRainDrop flex-wrap">
                        <Icon name="devicon:github" style="white" size="5rem" />
                        <Icon name="devicon:vuejs" size="5rem" />
                        <Icon name="simple-icons:daisyui" size="5rem" />
                        <Icon name="devicon:tailwindcss" size="5rem" />
                        <Icon name="devicon:html5" size="5rem" />
                        <Icon name="devicon:nodejs" size="5rem" />
                    </div>
                    <div class="flex flex-wrap shrink-0 cssanimation leRainDrop gap-4 justify-center">

                        <Icon name="devicon:css3" size="5rem" />
                        <Icon name="devicon:express" size="5rem" />
                        <Icon name="devicon:" size="5rem" />
                        <Icon name="devicon:javascript" size="5rem" />
                        <Icon name="devicon:nuxtjs" size="5rem" />
                        <Icon name="devicon:figma" size="5rem" />
                    </div>
                </div>

            </div>

        </div>
        <div class="pb-4 px-4">
            <!-- /* From Uiverse.io by faxriddin20 */ -->
            <div class="flex flex-col container my-phone:">
                <h2>Download my resume here!</h2>
                <div class=" my-phone:flex my-phone:justify-end my-phone:w-full md:justify-start">

                    <button class="download-btn flex items-center justify-center ">
                        <a href="https://github.com/BagasCaturS/Personal-project/blob/a6d36101928677ef75080790a1178d2276fbbffc/BagasCatur_Santoso_JFSD_Resume.pdf"
                            target="_blank">
                            <svg id="download" viewBox="0 0 24 24" data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.29,17.29,13,18.59V13a1,1,0,0,0-2,0v5.59l-1.29-1.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3a1,1,0,0,0-1.42-1.42ZM18.42,6.22A7,7,0,0,0,5.06,8.11,4,4,0,0,0,6,16a1,1,0,0,0,0-2,2,2,0,0,1,0-4A1,1,0,0,0,7,9a5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67,3,3,0,0,1,.24,5.84,1,1,0,1,0,.5,1.94,5,5,0,0,0,.17-9.62Z">
                                </path>
                            </svg>
                            <span class="tooltip">Download my resume</span>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>

</script>

<style scoped>
/* From Uiverse.io by faxriddin20 */
.tooltip {
    position: absolute;
    right: -195px;
    bottom: 7px;
    opacity: 0;
    background-color: rgb(12, 12, 12);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.2s;
    pointer-events: none;
    letter-spacing: 0.5px;
}

.tooltip::before {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    background-color: rgb(12, 12, 12);
    background-size: 1000%;
    background-position: center;
    transform: rotate(45deg);
    left: -5%;
    transition-duration: 0.3s;
}

.download-btn:hover .tooltip {
    opacity: 1;
    transition-duration: 0.3s;
}

.icon2 {
    width: 18px;
    height: 5px;
    border-bottom: 2px solid #2196f3;
    border-left: 2px solid #2196f3;
    border-right: 2px solid #2196f3;
}

.download-btn {
    border: 2px solid rgb(168, 38, 255);
    background-color: white;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    position: relative;
    z-index: 1;
    transition: all 0.2s ease;
    cursor: pointer;
}

.download-btn svg {
    width: 25px;
    height: 25px;
    transition: all 0.3s ease;
}

.download-btn:hover svg {
    fill: white;
}

.download-btn:hover {
    background-color: rgb(168, 38, 255);
}


.cssanimation,
.cssanimation span {
    animation-duration: 6s;
    animation-fill-mode: both;
}

.cssanimation span {
    display: inline-block
}

.leRainDrop span {
    animation-name: leRainDrop;
    animation-iteration-count: infinite;
}

@keyframes leRainDrop {

    0%,
    25%,
    55%,
    75%,
    87%,
    97%,
    100% {
        transform: scaleX(1.0)
    }

    26%,
    56%,
    76% {
        transform: scaleX(1.3) scaleY(0.8)
    }

    31%,
    61%,
    81% {
        transform: scaleX(0.8) scaleY(1.2)
    }

    76%,
    88% {
        transform: scaleX(1.2)
    }

    98% {
        transform: scaleX(1.1)
    }
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

.cssanimation span:nth-child(5) {
    animation-delay: 2s;
}

.cssanimation span:nth-child(6) {
    animation-delay: 1s;
}
</style>