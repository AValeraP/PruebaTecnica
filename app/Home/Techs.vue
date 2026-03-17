<script setup>
const techs = [
    { name: 'html', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'css', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'javascript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'typescript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'},
    { name: 'vue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'php', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg'},
    { name: 'java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'mysql', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
]

</script>
<template >
    <main>
     <div class="flex justify-center items-center">
        <ul class="grid grid-cols-3 gap-12">
            <li v-for="tech in techs" :key="tech.name" class="flex justify-center items-center">
             <a :href="tech.href" target="_blank" :aria-label="tech.name">
                <img :src="tech.icon" :alt="tech.name" class="w-32 h-32 hover:scale-125 transition-transform" />
            </a>
            </li>
        </ul>
    </div>
    </main>
    </template>