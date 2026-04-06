<template>
    <section class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div class="space-y-8">
            <!-- Section heading -->
            <header class="text-center lg:text-left space-y-2">
                <p class="text-sm font-medium tracking-wide text-primary uppercase">Experience</p>
                <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-base-content">
                    Recent project highlight
                </h2>
                <p class="text-sm sm:text-base text-base-content/70 max-w-2xl mx-auto lg:mx-0">
                    A glimpse into one of my recent roles where I applied data science and machine learning to solve
                    real-world problems.
                </p>
            </header>

            <!-- Experience card -->
            <article class="bg-base-200 rounded-2xl shadow-sm border border-base-300 p-6 sm:p-7 lg:p-8 space-y-6">
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
            </article>

            <!-- Tech stack -->
            <section class="mt-4 space-y-3">
                <h3 class="text-lg sm:text-xl font-semibold text-center lg:text-left">
                    Tech stack used in this project
                </h3>
                <div
                    class="flex flex-wrap justify-center lg:justify-start gap-4 bg-warning/10 border border-warning/40 rounded-xl px-4 py-3 text-base-content">
                    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-base-100 shadow-sm">
                        <Icon name="simple-icons:github" class="w-6 h-6" />
                        <span class="text-sm font-medium">GitHub</span>
                    </div>
                    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-base-100 shadow-sm">
                        <Icon name="simple-icons:googlecolab" class="w-6 h-6" />
                        <span class="text-sm font-medium">Google Colab</span>
                    </div>
                    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-base-100 shadow-sm">
                        <Icon name="simple-icons:tensorflow" class="w-6 h-6" />
                        <span class="text-sm font-medium">TensorFlow</span>
                    </div>
                    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-base-100 shadow-sm">
                        <Icon name="simple-icons:python" class="w-6 h-6" />
                        <span class="text-sm font-medium">Python</span>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>