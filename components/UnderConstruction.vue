<template>
  <section class="relative py-16 sm:py-24">
    <div class="max-w-2xl mx-auto px-4 text-center space-y-8">
      <div class="space-y-4">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warning/10 text-warning text-sm font-medium border border-warning/20">
          <Icon name="material-symbols-light:construction-rounded" class="w-4 h-4" />
          Under Construction
        </span>
        <h1 class="text-4xl sm:text-5xl font-bold tracking-tight">
          This page is
          <span class="text-warning">under construction</span>
        </h1>
        <p class="text-base sm:text-lg text-base-content/60">
          I'm working on something awesome here. Check back later!
        </p>
      </div>

      <div class="relative rounded-2xl overflow-hidden border border-base-300/50">
        <NuxtImg
          alt="Under construction illustration"
          format="webp"
          src="f/3000521/1599x1088/01e1a44e6b/under-construction.png"
          width="800"
          class="w-full"
        />
      </div>

      <NuxtLink to="/">
        <button class="btn bg-accent hover:bg-accent/90 text-accent-content border-none rounded-xl font-medium transition-all duration-200 px-6 shadow-lg shadow-accent/20">
          <Icon name="material-symbols-light:arrow-back-rounded" class="w-4 h-4" />
          Back to Home
        </button>
      </NuxtLink>
    </div>
  </section>
</template>
