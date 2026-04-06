<template>
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-2 lg:items-start">
            <!-- About text -->
            <div class="space-y-5">
                <h2
                    class="inline-block text-3xl sm:text-4xl lg:text-5xl font-bold text-error bg-base-200 px-4 py-2 rounded-md shadow-sm">
                    About me
                </h2>
                <h3 class="text-xl sm:text-2xl lg:text-3xl leading-snug text-base-content">
                    I'm a <span class="text-success font-semibold">Front-end developer</span> and
                    <span class="text-accent font-semibold">Back-end developer</span>, building
                    <span class="text-info font-semibold">full-stack applications</span> based in Bandung, Indonesia.
                </h3>
                <p class="mt-2 text-sm sm:text-base text-base-content/80 leading-relaxed max-w-prose">
                    I've been building for the web since I started university in 2021, but my curiosity began much
                    earlier with simple "hello world" pages. I enjoy the mix of logical thinking, problem solving, and
                    creativity that web development demands — even when it means wrestling with tricky bugs along the
                    way.
                </p>
            </div>

            <!-- Tech stack & resume -->
            <div class="flex flex-col gap-8">
                <div class="space-y-3 text-center lg:text-left">
                    <h3 class="text-xl sm:text-2xl font-semibold text-base-content">
                        Technologies I work with
                    </h3>
                    <p class="text-sm sm:text-base text-base-content/70 max-w-md mx-auto lg:mx-0">
                        A selection of tools and technologies I use regularly to design, build, and ship web
                        experiences.
                    </p>
                </div>

                <!-- Icons grid -->
                <div class="grid grid-cols-3 sm:grid-cols-4 gap-4 justify-items-center">
                    <Icon name="devicon:github" class="w-12 h-12 sm:w-16 sm:h-16 text-base-content/80" />
                    <Icon name="devicon:vuejs" class="w-12 h-12 sm:w-16 sm:h-16 text-emerald-500" />
                    <Icon name="simple-icons:daisyui" class="w-12 h-12 sm:w-16 sm:h-16 text-purple-500" />
                    <Icon name="devicon:tailwindcss" class="w-12 h-12 sm:w-16 sm:h-16 text-sky-500" />
                    <Icon name="devicon:html5" class="w-12 h-12 sm:w-16 sm:h-16 text-orange-500" />
                    <Icon name="devicon:css3" class="w-12 h-12 sm:w-16 sm:h-16 text-blue-500" />
                    <Icon name="devicon:javascript" class="w-12 h-12 sm:w-16 sm:h-16 text-yellow-400" />
                    <Icon name="devicon:nodejs" class="w-12 h-12 sm:w-16 sm:h-16 text-lime-500" />
                    <Icon name="devicon:express" class="w-12 h-12 sm:w-16 sm:h-16 text-neutral-700" />
                    <Icon name="devicon:nuxtjs" class="w-12 h-12 sm:w-16 sm:h-16 text-emerald-600" />
                    <Icon name="devicon:figma" class="w-12 h-12 sm:w-16 sm:h-16 text-pink-500" />
                </div>

                <!-- Resume download -->
                <div class="pt-4 border-t border-base-300">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <h3 class="text-base sm:text-lg font-semibold text-base-content">
                                Download my resume
                            </h3>
                            <p class="text-xs sm:text-sm text-base-content/70">
                                View or download a detailed overview of my experience and skills (PDF).
                            </p>
                        </div>
                        <a
                            href="https://github.com/BagasCaturS/Personal-project/blob/a6d36101928677ef75080790a1178d2276fbbffc/BagasCatur_Santoso_JFSD_Resume.pdf"
                            target="_blank" rel="noopener noreferrer" class="inline-flex">
                            <button
                                class="download-btn gradient-background inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm sm:text-base font-semibold text-white shadow-md hover:shadow-lg">
                                <svg id="download" viewBox="0 0 24 24" data-name="Layer 1"
                                    xmlns="http://www.w3.org/2000/svg" class="w-5 h-5">
                                    <path
                                        d="M14.29,17.29,13,18.59V13a1,1,0,0,0-2,0v5.59l-1.29-1.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3a1,1,0,0,0-1.42-1.42ZM18.42,6.22A7,7,0,0,0,5.06,8.11,4,4,0,0,0,6,16a1,1,0,0,0,0-2,2,2,0,0,1,0-4A1,1,0,0,0,7,9a5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67,3,3,0,0,1,.24,5.84,1,1,0,1,0,.5,1.94,5,5,0,0,0,.17-9.62Z">
                                    </path>
                                </svg>
                                <span>Resume (PDF)</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>

</script>

<style scoped>
.gradient-background {
  background: linear-gradient(211deg,#54f634,#f25fa5,#17d2fb,#3d708b,#711fc8,#2a96de);
  background-size: 360% 360%;
  animation: gradient-animation 6s ease infinite;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.tooltip {
    position: absolute;
    right: -130px;
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
    position: relative;
    z-index: 1;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.2s ease;
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
</style>