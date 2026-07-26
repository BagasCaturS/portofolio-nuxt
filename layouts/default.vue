<template>
  <div class="min-h-screen bg-base-100 text-base-content">
    <!-- Sticky Glassmorphism Navbar -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-base-100/80 backdrop-blur-xl border-b border-base-300/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 sm:h-20">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-2 group">
            <div class="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
              <span class="text-accent font-bold text-sm">B</span>
            </div>
            <span class="font-semibold text-base-content/90 text-lg hidden sm:block">Bagas Catur S.</span>
          </NuxtLink>

          <!-- Desktop Nav -->
          <div class="hidden lg:flex items-center gap-1">
            <NuxtLink v-for="item in navItems" :key="item.path" :to="item.path"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              :class="$route.path === item.path
                ? 'text-accent bg-accent/10'
                : 'text-base-content/70 hover:text-base-content hover:bg-base-300/30'">
              {{ item.label }}
            </NuxtLink>
          </div>

          <!-- Right section -->
          <div class="flex items-center gap-3">
            <NuxtLink to="/Contact">
              <button class="btn btn-sm bg-accent hover:bg-accent/90 text-accent-content border-none rounded-lg font-medium transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-accent/40">
                <Icon name="material-symbols-light:mail-outline" class="w-4 h-4" />
                <span class="hidden sm:inline">Contact</span>
              </button>
            </NuxtLink>

            <!-- Mobile menu button -->
            <button @click="mobileOpen = !mobileOpen" class="lg:hidden btn btn-ghost btn-sm btn-square">
              <Icon v-if="!mobileOpen" name="material-symbols-light:menu-rounded" class="w-6 h-6" />
              <Icon v-else name="material-symbols-light:close-rounded" class="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <Transition
        enter-active-class="transition-all duration-200 ease-out"
        leave-active-class="transition-all duration-150 ease-in"
        enter-from-class="opacity-0 -translate-y-2"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="mobileOpen" class="lg:hidden border-t border-base-300/50 bg-base-100/95 backdrop-blur-xl">
          <div class="px-4 py-3 space-y-1">
            <NuxtLink v-for="item in navItems" :key="item.path" :to="item.path" @click="mobileOpen = false"
              class="block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
              :class="$route.path === item.path
                ? 'text-accent bg-accent/10'
                : 'text-base-content/70 hover:text-base-content hover:bg-base-300/30'">
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </nav>

    <!-- Main content with navbar offset -->
    <main class="pt-20 sm:pt-24">
      <slot />
    </main>
  </div>
</template>

<script setup>
const route = useRoute();
const mobileOpen = ref(false);

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/AboutMe' },
  { label: 'Projects', path: '/Project' },
  { label: 'Other Things', path: '/OtherThings' },
];
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', system-ui, sans-serif;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
</style>
