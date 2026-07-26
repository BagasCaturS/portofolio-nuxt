<template>
  <section class="relative py-16 sm:py-24 overflow-hidden">
    <div class="absolute top-0 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center space-y-4 mb-16">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
          <Icon name="material-symbols-light:folder-outline" class="w-4 h-4" />
          Experience & Projects
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          My work &
          <span class="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">projects</span>
        </h2>
        <p class="text-base sm:text-lg text-base-content/60 max-w-2xl mx-auto">
          A selection of my recent work, including professional internships and full-stack web development projects.
        </p>
      </div>

      <div class="space-y-8">
        <!-- Project 1: Data Scientist Internship -->
        <article class="bg-base-200/50 backdrop-blur-sm border border-base-300/50 rounded-2xl p-6 sm:p-8 lg:p-10 space-y-6 hover:border-accent/30 transition-all duration-300 group">
          <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-warning/10 text-warning border border-warning/20">Internship</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-semibold">
                Data Scientist Intern
              </h3>
              <p class="text-base-content/60 text-sm">Telkom University · Bandung, Indonesia</p>
            </div>
            <span class="inline-flex items-center rounded-full border border-base-300 bg-base-300/30 px-3 py-1 text-xs font-medium text-base-content/60 whitespace-nowrap">
              Feb 2024 – Aug 2024
            </span>
          </div>

          <div class="border-t border-base-300/50 pt-6 space-y-4">
            <h4 class="text-sm font-semibold text-base-content/60 uppercase tracking-wider">Key Responsibilities</h4>
            <ul class="space-y-2">
              <li v-for="item in internshipHighlights" :key="item"
                class="flex items-start gap-3 text-sm sm:text-base text-base-content/70">
                <span class="w-1.5 h-1.5 rounded-full bg-accent/60 mt-2 shrink-0"></span>
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="border-t border-base-300/50 pt-6">
            <h4 class="text-sm font-semibold text-base-content/60 uppercase tracking-wider mb-3">Tech Stack</h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in internshipTech" :key="tech"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-base-300/40 border border-base-300/30 text-xs sm:text-sm font-medium text-base-content/70">
                <Icon :name="tech.icon" class="w-4 h-4" />
                {{ tech.name }}
              </span>
            </div>
          </div>
        </article>

        <!-- Project 2: Jaling House -->
        <article class="bg-base-200/50 backdrop-blur-sm border border-base-300/50 rounded-2xl p-6 sm:p-8 lg:p-10 space-y-6 hover:border-accent/30 transition-all duration-300 group">
          <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-accent/10 text-accent border border-accent/20">SaaS</span>
                <span class="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">Full-Stack</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-semibold">
                Jaling House
              </h3>
              <p class="text-base-content/60 text-sm">Restaurant POS & Management · Multi-tenant Architecture</p>
            </div>
            <span class="inline-flex items-center rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-medium text-accent whitespace-nowrap">
              Ongoing (2026–Present)
            </span>
          </div>

          <div class="border-t border-base-300/50 pt-6 space-y-4">
            <h4 class="text-sm font-semibold text-base-content/60 uppercase tracking-wider">Project Overview</h4>
            <p class="text-sm sm:text-base text-base-content/70 leading-relaxed">
              A comprehensive multi-tenant Point-of-Sale (POS) and restaurant management system built with modern web technologies. Designed for restaurants, warungs, and hospitality businesses to manage menus, orders, inventory, and customer interactions seamlessly.
            </p>

            <h4 class="text-sm font-semibold text-base-content/60 uppercase tracking-wider">Key Features</h4>
            <ul class="grid sm:grid-cols-2 gap-2">
              <li v-for="feature in jalingFeatures" :key="feature"
                class="flex items-start gap-3 text-sm text-base-content/70">
                <Icon name="material-symbols-light:check-circle-rounded" class="w-4 h-4 text-accent mt-0.5 shrink-0" />
                {{ feature }}
              </li>
            </ul>
          </div>

          <div class="border-t border-base-300/50 pt-6">
            <h4 class="text-sm font-semibold text-base-content/60 uppercase tracking-wider mb-3">Tech Stack</h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in jalingTech" :key="tech.name"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-base-300/40 border border-base-300/30 text-xs sm:text-sm font-medium text-base-content/70">
                <Icon :name="tech.icon" class="w-4 h-4" />
                {{ tech.name }}
              </span>
            </div>
          </div>

          <div class="border-t border-base-300/50 pt-6 flex flex-wrap gap-3">
            <a href="https://github.com/BagasCaturS/jaling-web" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-base-300/30 hover:bg-base-300/50 border border-base-300/50 transition-all duration-200 text-sm font-medium">
              <Icon name="simple-icons:github" class="w-4 h-4" />
              View on GitHub
            </a>
            <a href="https://jaling-web.vercel.app" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent hover:bg-accent/90 text-accent-content font-medium transition-all duration-200 text-sm shadow-lg shadow-accent/20 hover:shadow-accent/40">
              <Icon name="material-symbols-light:open-in-new" class="w-4 h-4" />
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const internshipHighlights = [
  'Developed machine learning models in Python to classify different types of waste, including plastic bottles, glass bottles, masks, and beverage cans.',
  'Collected and curated a dataset of over 2,200 images to train and evaluate the models across multiple waste categories.',
  'Researched and selected suitable machine learning algorithms and approaches to improve model performance and reliability.',
]

const internshipTech = [
  { name: 'GitHub', icon: 'simple-icons:github' },
  { name: 'Google Colab', icon: 'simple-icons:googlecolab' },
  { name: 'TensorFlow', icon: 'simple-icons:tensorflow' },
  { name: 'Python', icon: 'simple-icons:python' },
]

const jalingFeatures = [
  'Multi-role system — Admin dashboard, kitchen display, waiter management, customer portal',
  'Real-time features — Live order tracking, table management, instant notifications',
  'Business intelligence — Sales analytics, revenue trends, order duration tracking, inventory management',
  'Security & scalability — JWT auth, RLS policies, multi-tenant isolation, serverless deployment',
  'Customer experience — QR table ordering, PDF receipts, dark/light themes, live chat support',
]

const jalingTech = [
  { name: 'Next.js', icon: 'devicon:nextjs' },
  { name: 'React 18', icon: 'devicon:react' },
  { name: 'TypeScript', icon: 'devicon:typescript' },
  { name: 'Supabase', icon: 'simple-icons:supabase' },
  { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
  { name: 'Vercel', icon: 'simple-icons:vercel' },
  { name: 'GitHub', icon: 'simple-icons:github' },
  { name: 'Upstash Redis', icon: 'simple-icons:upstash' },
]
</script>
