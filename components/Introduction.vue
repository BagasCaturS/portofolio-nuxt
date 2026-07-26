<template>
  <section class="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
    <!-- Ambient background blobs -->
    <div class="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 -right-32 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Content -->
        <div class="space-y-8 animate-fade-in">
          <div class="space-y-2">
            <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
              <span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              Available for work
            </span>
          </div>

          <div class="space-y-4">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
              Hi, I'm
              <span class="bg-gradient-to-r from-accent via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Bagas Catur Santoso
              </span>
            </h1>

            <div class="space-y-2">
              <h2 class="text-xl sm:text-2xl lg:text-3xl text-base-content/80 font-medium">
                Full-Stack Web Developer
              </h2>
              <div class="h-1 w-24 bg-gradient-to-r from-accent to-blue-400 rounded-full"></div>
            </div>
          </div>

          <p class="text-base sm:text-lg text-base-content/60 leading-relaxed max-w-xl">
            Passionate about crafting modern, performant web applications with clean architecture and great user experiences. Specializing in Vue.js, Nuxt.js, and full-stack development.
          </p>

          <!-- Skills -->
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in skills" :key="skill"
              class="px-3 py-1.5 text-xs sm:text-sm rounded-lg bg-base-300/50 border border-base-300 text-base-content/70 font-medium">
              {{ skill }}
            </span>
          </div>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-3 pt-4">
            <NuxtLink to="/Contact">
              <button class="btn bg-accent hover:bg-accent/90 text-accent-content border-none rounded-xl font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300 px-6 h-12 gap-2">
                <Icon name="material-symbols-light:mail-outline" class="w-5 h-5" />
                Get In Touch
              </button>
            </NuxtLink>
            <NuxtLink to="/Project">
              <button class="btn btn-outline border-base-300 hover:bg-base-300/50 text-base-content rounded-xl font-semibold transition-all duration-300 px-6 h-12 gap-2">
                <Icon name="material-symbols-light:folder-outline" class="w-5 h-5" />
                View Projects
              </button>
            </NuxtLink>
          </div>
        </div>

        <!-- Image -->
        <div class="hidden lg:flex items-center justify-center animate-fade-in">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
            <div class="absolute -inset-4 bg-gradient-to-br from-accent/10 to-blue-500/10 rounded-3xl"></div>
            <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-base-300/50">
              <NuxtImg
                alt="Bagas Catur Santoso - Web Developer"
                format="webp"
                class="w-full max-w-sm object-cover"
                src="f/3000521/712x791/7333c98b40/frame-11-1.png"
                loading="eager"
                width="500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-base-100/30 to-transparent"></div>
            </div>
            <!-- Floating badge -->
            <div class="absolute -bottom-4 -left-4 bg-base-200/90 backdrop-blur-sm border border-base-300/50 rounded-xl px-4 py-3 shadow-xl animate-float">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-accent"></div>
                <span class="text-sm font-medium text-base-content/80">2+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = ['Vue.js', 'Nuxt.js', 'JavaScript', 'TypeScript', 'Express.js', 'MySQL', 'Tailwind CSS']
</script>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in,
  .animate-float,
  .animate-pulse {
    animation: none !important;
  }
}
</style>
