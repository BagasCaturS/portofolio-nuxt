<template>
    <section class="relative py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
        <!-- Gradient background accent -->
        <div class="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-b from-blue-500/10 to-transparent rounded-full blur-3xl -z-10"></div>
        
        <div class="px-4 sm:px-6 md:px-8 mx-auto max-w-7xl">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                <!-- Content Section -->
                <div class="space-y-4 sm:space-y-6 lg:space-y-8">
                    <!-- Greeting -->
                    <div>
                        <p class="text-base sm:text-lg lg:text-xl font-medium text-primary mb-2">Hello there 👋</p>
                        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold tracking-tight leading-tight">
                            I'm <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Bagas Catur Santoso</span>
                        </h1>
                    </div>

                    <!-- Title -->
                    <div class="space-y-2">
                        <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-base-content/80">Full-Stack Web Developer</h2>
                        <div class="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    </div>

                    <!-- Description -->
                    <p class="text-sm sm:text-base md:text-lg lg:text-lg text-base-content/70 leading-relaxed max-w-lg">
                        Passionate developer crafting modern, responsive web applications with a strong foundation in front-end and back-end technologies. Specialized in Vue.js, Nuxt.js, and full-stack development.
                    </p>

                    <!-- Skills tags -->
                    <div class="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                        <span class="badge badge-outline badge-xs sm:badge-sm lg:badge-md text-xs sm:text-sm">Vue.js</span>
                        <span class="badge badge-outline badge-xs sm:badge-sm lg:badge-md text-xs sm:text-sm">Nuxt.js</span>
                        <span class="badge badge-outline badge-xs sm:badge-sm lg:badge-md text-xs sm:text-sm">JavaScript</span>
                        <span class="badge badge-outline badge-xs sm:badge-sm lg:badge-md text-xs sm:text-sm">Express.js</span>
                        <span class="badge badge-outline badge-xs sm:badge-sm lg:badge-md text-xs sm:text-sm">MySQL</span>
                        <span class="badge badge-outline badge-xs sm:badge-sm lg:badge-md text-xs sm:text-sm">Tailwind CSS</span>
                    </div>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                        <NuxtLink to="/Contact" class="w-full sm:w-auto">
                            <button class="w-full btn btn-primary btn-sm sm:btn-md lg:btn-lg rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                                <Icon name="material-symbols-light:mail-outline" class="w-4 h-4 sm:w-5 sm:h-5" />
                                <span class="hidden xs:inline">Get In Touch</span>
                                <span class="inline xs:hidden">Contact</span>
                            </button>
                        </NuxtLink>
                        <NuxtLink to="/Project" class="w-full sm:w-auto">
                            <button class="w-full btn btn-outline btn-sm sm:btn-md lg:btn-lg rounded-lg font-semibold hover:bg-base-200 transition-all duration-300">
                                <Icon name="material-symbols-light:folder-outline" class="w-4 h-4 sm:w-5 sm:h-5" />
                                <span class="hidden xs:inline">View Projects</span>
                                <span class="inline xs:hidden">Projects</span>
                            </button>
                        </NuxtLink>
                    </div>
                </div>

                <!-- Image Section -->
                <div class="relative flex items-center justify-center lg:justify-end order-first lg:order-last">
                    <div class="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                        <!-- Decorative elements -->
                        <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
                        <div class="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
                        
                        <!-- Image container -->
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                            <NuxtImg 
                                alt="Bagas Catur Santoso - Web Developer" 
                                format="webp" 
                                class="w-full h-auto object-cover"
                                src="f/3000521/712x791/7333c98b40/frame-11-1.png"
                                loading="lazy"
                            />
                            <!-- Overlay gradient -->
                            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Icon is auto-imported by Nuxt
</script>

<style scoped>
/* Smooth animations for reduced motion preference */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

/* Mobile optimizations */
@media (max-width: 640px) {
    section {
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
}

/* Tablet optimizations */
@media (min-width: 641px) and (max-width: 1023px) {
    section {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
}

/* Desktop optimizations */
@media (min-width: 1024px) {
    section {
        padding-top: 2.5rem;
        padding-bottom: 2.5rem;
    }
}
</style>