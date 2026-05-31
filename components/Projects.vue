<template>
    <section class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div class="space-y-8">
            <!-- Section heading -->
            <header class="text-center lg:text-left space-y-2">
                <p class="text-sm font-medium tracking-wide text-primary uppercase">Experience & Projects</p>
                <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-base-content">
                    My work & projects
                </h2>
                <p class="text-sm sm:text-base text-base-content/70 max-w-2xl mx-auto lg:mx-0">
                    A selection of my recent work, including professional internships and full-stack web development
                    projects that showcase my skills across multiple domains.
                </p>
            </header>

            <!-- Projects Grid -->
            <div class="space-y-6">
                <!-- Project 1: Data Scientist Internship -->
                <article class="bg-base-200 rounded-2xl shadow-sm border border-base-300 p-6 sm:p-7 lg:p-8 space-y-6 hover:shadow-md transition-shadow duration-300">
                <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6">
                    <div class="space-y-1">
                        <h3 class="text-xl sm:text-2xl font-semibold text-base-content">
                            Internship as a <span class="text-warning">Data Scientist</span>
                        </h3>
                        <p class="text-sm sm:text-base text-base-content/70">
                            Telkom University · Bandung, Indonesia
                        </p>
                    </div>
                    <div class="flex md:flex-col items-center md:items-end gap-2 text-sm">
                        <span
                            class="inline-flex items-center rounded-full border border-accent/60 bg-base-100 px-3 py-1 font-medium text-xs sm:text-sm text-base-content/80">
                            Feb 2024 – Aug 2024
                        </span>
                    </div>
                </div>

                <div class="border-t border-base-300 pt-4">
                    <h4 class="text-sm font-semibold text-base-content/80 mb-2">Key responsibilities</h4>
                    <ul class="list-disc list-inside space-y-2 text-sm sm:text-base text-base-content/80">
                        <li>
                            Developed machine learning models in Python to classify different types of waste, including
                            plastic bottles, glass bottles, masks, and beverage cans.
                        </li>
                        <li>
                            Collected and curated a dataset of over 2,200 images to train and evaluate the models
                            across multiple waste categories.
                        </li>
                        <li>
                            Researched and selected suitable machine learning algorithms and approaches to improve
                            model performance and reliability.
                        </li>
                    </ul>
                </div>

                <!-- Tech stack -->
                <div class="pt-4 border-t border-base-300 space-y-3">
                    <h4 class="text-sm font-semibold text-base-content/80">Tech stack</h4>
                    <div class="flex flex-wrap gap-2">
                        <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-base-100 shadow-sm">
                            <Icon name="simple-icons:github" class="w-4 h-4" />
                            <span class="text-xs sm:text-sm font-medium">GitHub</span>
                        </div>
                        <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-base-100 shadow-sm">
                            <Icon name="simple-icons:googlecolab" class="w-4 h-4" />
                            <span class="text-xs sm:text-sm font-medium">Google Colab</span>
                        </div>
                        <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-base-100 shadow-sm">
                            <Icon name="simple-icons:tensorflow" class="w-4 h-4" />
                            <span class="text-xs sm:text-sm font-medium">TensorFlow</span>
                        </div>
                        <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-base-100 shadow-sm">
                            <Icon name="simple-icons:python" class="w-4 h-4" />
                            <span class="text-xs sm:text-sm font-medium">Python</span>
                        </div>
                    </div>
                </div>
                </article>

                <!-- Project 2: Jaling House - Restaurant POS -->
                <article class="bg-base-200 rounded-2xl shadow-sm border border-base-300 p-6 sm:p-7 lg:p-8 space-y-6 hover:shadow-md transition-shadow duration-300">
                <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6">
                    <div class="space-y-1">
                        <h3 class="text-xl sm:text-2xl font-semibold text-base-content">
                            <span class="text-success">Jaling House</span> — Restaurant POS & Management
                        </h3>
                        <p class="text-sm sm:text-base text-base-content/70">
                            Production-ready SaaS platform · Multi-tenant architecture
                        </p>
                    </div>
                    <div class="flex md:flex-col items-center md:items-end gap-2 text-sm">
                        <span class="inline-flex items-center rounded-full border border-accent/60 bg-base-100 px-3 py-1 font-medium text-xs sm:text-sm text-base-content/80">
                            Ongoing (2024–Present)
                        </span>
                    </div>
                </div>

                <div class="border-t border-base-300 pt-4">
                    <h4 class="text-sm font-semibold text-base-content/80 mb-3">Project overview</h4>
                    <p class="text-sm sm:text-base text-base-content/80 mb-4">
                        A comprehensive multi-tenant Point-of-Sale (POS) and restaurant management system built with modern web technologies. Designed for restaurants, warungs, and hospitality businesses to manage menus, orders, inventory, and customer interactions seamlessly.
                    </p>
                    <h4 class="text-sm font-semibold text-base-content/80 mb-2">Key features</h4>
                    <ul class="list-disc list-inside space-y-1.5 text-sm sm:text-base text-base-content/80">
                        <li>
                            <strong>Multi-role system</strong> — Admin dashboard, kitchen display, waiter management, customer portal
                        </li>
                        <li>
                            <strong>Real-time features</strong> — Live order tracking, table management, instant notifications
                        </li>
                        <li>
                            <strong>Business intelligence</strong> — Sales analytics, revenue trends, order duration tracking, inventory management
                        </li>
                        <li>
                            <strong>Security & scalability</strong> — JWT auth, RLS policies, multi-tenant isolation, serverless deployment
                        </li>
                        <li>
                            <strong>Customer experience</strong> — QR table ordering, PDF receipts, dark/light themes, live chat support
                        </li>
                    </ul>
                </div>

                <!-- Tech stack -->
                <div class="pt-4 border-t border-base-300 space-y-3">
                    <h4 class="text-sm font-semibold text-base-content/80">Tech stack</h4>
                    <div class="flex flex-wrap gap-2">
                        <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-base-100 shadow-sm">
                            <Icon name="devicon:nextjs" class="w-4 h-4" />
                            <span class="text-xs sm:text-sm font-medium">Next.js</span>
                        </div>
                        <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-base-100 shadow-sm">
                            <Icon name="devicon:react" class="w-4 h-4" />
                            <span class="text-xs sm:text-sm font-medium">React 18</span>
                        </div>
                        <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-base-100 shadow-sm">
                            <Icon name="devicon:typescript" class="w-4 h-4" />
                            <span class="text-xs sm:text-sm font-medium">TypeScript</span>
                        </div>
                        <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-base-100 shadow-sm">
                            <Icon name="simple-icons:supabase" class="w-4 h-4" />
                            <span class="text-xs sm:text-sm font-medium">Supabase</span>
                        </div>
                        <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-base-100 shadow-sm">
                            <Icon name="simple-icons:postgresql" class="w-4 h-4" />
                            <span class="text-xs sm:text-sm font-medium">PostgreSQL</span>
                        </div>
                        <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-base-100 shadow-sm">
                            <Icon name="simple-icons:vercel" class="w-4 h-4" />
                            <span class="text-xs sm:text-sm font-medium">Vercel</span>
                        </div>
                        <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-base-100 shadow-sm">
                            <Icon name="simple-icons:github" class="w-4 h-4" />
                            <span class="text-xs sm:text-sm font-medium">GitHub</span>
                        </div>
                        <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-base-100 shadow-sm">
                            <Icon name="simple-icons:upstash" class="w-4 h-4" />
                            <span class="text-xs sm:text-sm font-medium">Upstash Redis</span>
                        </div>
                    </div>
                </div>

                <!-- Links -->
                <div class="pt-4 border-t border-base-300 flex flex-wrap gap-2">
                    <a href="https://github.com/BagasCaturS/jaling-web" target="_blank" rel="noopener noreferrer"
                        class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-base-100 hover:bg-base-300 transition-colors text-sm font-medium">
                        <Icon name="simple-icons:github" class="w-4 h-4" />
                        <span>View on GitHub</span>
                    </a>
                    <a href="https://jaling-web.vercel.app" target="_blank" rel="noopener noreferrer"
                        class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-content hover:opacity-90 transition-opacity text-sm font-medium">
                        <Icon name="material-symbols-light:open-in-new" class="w-4 h-4" />
                        <span>Live Demo</span>
                    </a>
                </div>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>