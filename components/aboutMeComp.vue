<template>
  <section class="relative py-16 sm:py-24 overflow-hidden">
    <!-- Ambient blobs -->
    <div class="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center space-y-4 mb-16">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
          <Icon name="material-symbols-light:person-outline" class="w-4 h-4" />
          About Me
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          Building the web, one
          <span class="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">component</span>
          at a time
        </h2>
        <p class="text-base sm:text-lg text-base-content/60 max-w-2xl mx-auto">
          Full-stack developer based in Bandung, Indonesia — passionate about turning complex problems into simple, elegant solutions.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
        <!-- Story -->
        <div class="space-y-6">
          <div class="bg-base-200/50 backdrop-blur-sm border border-base-300/50 rounded-2xl p-6 sm:p-8 space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Icon name="material-symbols-light:history-rounded" class="w-5 h-5 text-accent" />
              </div>
              <h3 class="text-xl font-semibold">My Journey</h3>
            </div>
            <p class="text-base-content/70 leading-relaxed">
              I've been building for the web since I started university in 2021, but my curiosity began much
              earlier with simple "hello world" pages. I enjoy the mix of logical thinking, problem solving, and
              creativity that web development demands — even when it means wrestling with tricky bugs along the
              way.
            </p>
            <p class="text-base-content/70 leading-relaxed">
              Currently focused on building full-stack applications with modern JavaScript ecosystems, from
              responsive frontends with Vue.js and Nuxt.js to scalable backends with Node.js and PostgreSQL.
            </p>
          </div>

          <div class="bg-base-200/50 backdrop-blur-sm border border-base-300/50 rounded-2xl p-6 sm:p-8 space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Icon name="material-symbols-light:download-rounded" class="w-5 h-5 text-blue-400" />
              </div>
              <h3 class="text-xl font-semibold">Resume</h3>
            </div>
            <p class="text-base-content/70 text-sm">
              Download a detailed overview of my experience, education, and skills.
            </p>
            <a
              href="https://github.com/BagasCaturS/Personal-project/blob/a6d36101928677ef75080790a1178d2276fbbffc/BagasCatur_Santoso_JFSD_Resume.pdf"
              target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent hover:bg-accent/90 text-accent-content font-medium transition-all duration-200 text-sm shadow-lg shadow-accent/20 hover:shadow-accent/40">
              <Icon name="material-symbols-light:download-rounded" class="w-4 h-4" />
              Download Resume (PDF)
            </a>
          </div>
        </div>

        <!-- Tech Stack -->
        <div class="bg-base-200/50 backdrop-blur-sm border border-base-300/50 rounded-2xl p-6 sm:p-8 space-y-6">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Icon name="material-symbols-light:code-rounded" class="w-5 h-5 text-accent" />
            </div>
            <h3 class="text-xl font-semibold">Technologies I Work With</h3>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div v-for="tech in techStack" :key="tech.name"
              class="flex items-center gap-3 p-3 rounded-xl bg-base-300/30 border border-base-300/30 hover:bg-base-300/50 hover:border-base-300/60 transition-all duration-200 group">
              <Icon :name="tech.icon" class="w-6 h-6" :class="tech.color" />
              <span class="text-sm font-medium text-base-content/80">{{ tech.name }}</span>
            </div>
          </div>

          <div class="pt-4 border-t border-base-300/50">
            <h4 class="text-sm font-semibold text-base-content/60 uppercase tracking-wider mb-3">Also experienced with</h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="exp in alsoExperienced" :key="exp"
                class="px-2.5 py-1 text-xs rounded-lg bg-base-300/30 text-base-content/60 border border-base-300/30">
                {{ exp }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const techStack = [
  { name: 'Vue.js', icon: 'devicon:vuejs', color: 'text-emerald-400' },
  { name: 'Nuxt.js', icon: 'devicon:nuxtjs', color: 'text-emerald-500' },
  { name: 'JavaScript', icon: 'devicon:javascript', color: 'text-yellow-400' },
  { name: 'TypeScript', icon: 'devicon:typescript', color: 'text-blue-400' },
  { name: 'Tailwind CSS', icon: 'devicon:tailwindcss', color: 'text-sky-400' },
  { name: 'Node.js', icon: 'devicon:nodejs', color: 'text-lime-400' },
  { name: 'Express', icon: 'devicon:express', color: 'text-base-content/80' },
  { name: 'GitHub', icon: 'devicon:github', color: 'text-base-content/80' },
  { name: 'Figma', icon: 'devicon:figma', color: 'text-pink-400' },
]

const alsoExperienced = ['React', 'Next.js', 'Python', 'TensorFlow', 'PostgreSQL', 'Supabase', 'DaisyUI']
</script>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  .group:hover {
    transform: none !important;
  }
}
</style>
