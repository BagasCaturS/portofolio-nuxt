<template>
  <section class="relative py-16 sm:py-24 overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/3 rounded-full blur-3xl"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Content -->
        <div class="space-y-8">
          <div class="space-y-4">
            <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
              <Icon name="material-symbols-light:chat-outline" class="w-4 h-4" />
              Let's Talk
            </span>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Got a question or
              <span class="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">project</span>
              in mind?
            </h2>
            <p class="text-base sm:text-lg text-base-content/60 max-w-lg">
              Feel free to chat me and ask anything about my projects, or even random questions — I'm always happy to connect!
            </p>
          </div>

          <div class="space-y-4">
            <a v-for="contact in contacts" :key="contact.label" :href="contact.href"
              class="flex items-center gap-4 p-4 rounded-xl bg-base-200/50 backdrop-blur-sm border border-base-300/50 hover:border-accent/30 hover:bg-base-200/80 transition-all duration-200 group">
              <div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Icon :name="contact.icon" class="w-5 h-5 text-accent" />
              </div>
              <div>
                <p class="text-sm text-base-content/60">{{ contact.label }}</p>
                <p class="font-medium text-base-content group-hover:text-accent transition-colors">{{ contact.value }}</p>
              </div>
            </a>
          </div>
        </div>

        <!-- Image -->
        <div class="flex items-center justify-center">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-br from-accent/10 to-blue-500/10 rounded-3xl blur-2xl"></div>
            <div class="relative rounded-2xl overflow-hidden border border-base-300/50 shadow-2xl">
              <NuxtImg
                alt="Contact illustration"
                format="webp"
                class="w-full max-w-md object-cover"
                src="f/3000521/1500x1293/8a6ea95b5a/flower-telephone.png"
                width="500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const contacts = [
  {
    label: 'WhatsApp',
    value: 'Message me!',
    href: 'https://wa.link/0kgbdt',
    icon: 'material-symbols-light:chat-rounded',
  },
  {
    label: 'Email',
    value: 'Email me!',
    href: 'mailto:bagascatursantoso@gmail.com',
    icon: 'material-symbols-light:mail',
  },
  {
    label: 'Location',
    value: 'Bandung, Indonesia',
    href: '#',
    icon: 'material-symbols-light:location-on-rounded',
  },
]
</script>
