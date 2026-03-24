<script setup>
import infoSkills from "~/data/coreSkills.json"
import infoEducation from "~/data/education&Certifications.json"
import infoInternships from "~/data/internships.json"

const techs = [
  { name: 'html', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'css', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', href: '' },
  { name: 'javascript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', href: '' },
  { name: 'typescript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', href: '' },
  { name: 'react', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', href: '' },
  { name: 'angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg', href: '' },
  { name: 'vue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', href: '' },
  { name: 'php', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', href: '' },
  { name: 'laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', href: '' },
  { name: 'java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', href: '' },
  { name: 'mysql', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', href: '' },
  { name: 'vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', href: '' },
]
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-8">

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-gradient-to-br from-purple-900 to-purple-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-purple-700">
      <div class="flex justify-center items-center bg-purple-700 bg-opacity-50 rounded-xl border border-purple-600 p-4">
        </div>
      <div class="flex flex-col justify-center gap-3">
        <span class="inline-flex items-center w-fit px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 border border-fuchsia-500 text-white font-semibold text-xs">
          AVAILABLE FOR NEW PROJECTS
        </span>
        <h1 class="font-extrabold text-3xl text-white">
          Alejandro Valera<span class="text-fuchsia-400">.</span>
        </h1>
        <p class="font-semibold text-fuchsia-300 text-sm">Front End Developer</p>
        <p class="font-semibold text-purple-400 text-xs">Madrid, Spain</p>
        <div class="flex gap-3 mt-2">
          <NuxtLink to="/Projects">
            <button class="px-5 py-2 font-bold text-white text-sm bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 border border-fuchsia-500 rounded-full transition-all duration-200 transform hover:scale-105">
              View Projects
            </button>
          </NuxtLink>
          <NuxtLink to="/Contact">
            <button class="px-5 py-2 font-bold text-white text-sm bg-purple-700 hover:bg-purple-600 border border-purple-500 rounded-full transition-all duration-200 transform hover:scale-105">
              Contact
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-br from-purple-900 to-purple-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-purple-700">
      <h2 class="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 py-4 mb-4 border-b border-purple-600 pb-4">
        About Me
      </h2>
      <p class="text-white font-semibold text-sm leading-relaxed">
        I am a 21 year old front-end developer, designer and tech enthusiast based in Madrid. I
        specialize in building modern, scalable web applications with a focus on user experience and
        clean minimalistic aesthetic. My goal is to create experiences that are not only functional
        but also visually stunning — a bridge between complex features and intuitive interfaces.
      </p>
    </div>

    <div class="bg-gradient-to-br from-purple-900 to-purple-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border mb-10 border-purple-700">
      <h2 class="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 py-4 mb-4 border-b border-purple-600 pb-4">
        Tech Stack
      </h2>
      <ul class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        <li
          v-for="tech in techs"
          :key="tech.name"
          class="flex flex-col justify-center items-center gap-2 bg-purple-700 bg-opacity-50 p-4 rounded-xl border border-purple-600 hover:border-fuchsia-500 transition-all duration-200 transform hover:scale-105"
        >
          <a  :aria-label="tech.name">
            <img :src="tech.icon" :alt="tech.name" class="w-10 h-10" />
          </a>
          <span class="text-white font-semibold text-xs capitalize">{{ tech.name }}</span>
        </li>
      </ul>
    </div>

  </div>
</template>