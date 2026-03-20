<script setup>
import infoSkills from "~/data/coreSkills.json"
import infoEducation from "~/data/education&Certifications.json"
import infoInternships from "~/data/internships.json"
</script>

<template>
    <!-- Cambiado: grid-cols-3 fijo → responsive con 1 col en móvil, 2 en md, 3 en lg -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-3 md:m-6 p-4 md:p-8 max-w-7xl mx-auto">
        
        <!--
        <div class="bg-gradient-to-br from-purple-900 to-purple-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-purple-700">
            <h1 class="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 py-4 mb-4 border-b border-purple-600 pb-4">Core Skills</h1>
            <div class="flex flex-row flex-wrap  gap-3">
                <label class="text-white font-semibold bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 border border-fuchsia-500 rounded-full px-4 py-2 text-xs whitespace-nowrap cursor-pointer transition-all duration-200 transform hover:scale-105">HTML</label>
                <label class="text-white font-semibold bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 border border-fuchsia-500 rounded-full px-4 py-2 text-xs whitespace-nowrap cursor-pointer transition-all duration-200 transform hover:scale-105">CSS</label>
                <label class="text-white font-semibold bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 border border-fuchsia-500 rounded-full px-4 py-2 text-xs whitespace-nowrap cursor-pointer transition-all duration-200 transform hover:scale-105">Java-Script</label>
                <label class="text-white font-semibold bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 border border-fuchsia-500 rounded-full px-4 py-2 text-xs whitespace-nowrap cursor-pointer transition-all duration-200 transform hover:scale-105">TypeScript</label>
                <label class="text-white font-semibold bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 border border-fuchsia-500 rounded-full px-4 py-2 text-xs whitespace-nowrap cursor-pointer transition-all duration-200 transform hover:scale-105">Vue.js</label>
                <label class="text-white font-semibold bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 border border-fuchsia-500 rounded-full px-4 py-2 text-xs whitespace-nowrap cursor-pointer transition-all duration-200 transform hover:scale-105">React</label>
                <label class="text-white font-semibold bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 border border-fuchsia-500 rounded-full px-4 py-2 text-xs whitespace-nowrap cursor-pointer transition-all duration-200 transform hover:scale-105">Angular</label>
                <label class="text-white font-semibold bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 border border-fuchsia-500 rounded-full px-4 py-2 text-xs whitespace-nowrap cursor-pointer transition-all duration-200 transform hover:scale-105">Node.js</label>
                <label class="text-white font-semibold bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 border border-fuchsia-500 rounded-full px-4 py-2 text-xs whitespace-nowrap cursor-pointer transition-all duration-200 transform hover:scale-105">PHP</label>
                <label class="text-white font-semibold bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 border border-fuchsia-500 rounded-full px-4 py-2 text-xs whitespace-nowrap cursor-pointer transition-all duration-200 transform hover:scale-105">Laravel</label>
                <label class="text-white font-semibold bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 border border-fuchsia-500 rounded-full px-4 py-2 text-xs whitespace-nowrap cursor-pointer transition-all duration-200 transform hover:scale-105">MySQL</label>
                <label class="text-white font-semibold bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 border border-fuchsia-500 rounded-full px-4 py-2 text-xs whitespace-nowrap cursor-pointer transition-all duration-200 transform hover:scale-105">PL-SQL</label>
                <label class="text-white font-semibold bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 border border-fuchsia-500 rounded-full px-4 py-2 text-xs whitespace-nowrap cursor-pointer transition-all duration-200 transform hover:scale-105">Git</label>
                <label class="text-white font-semibold bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 border border-fuchsia-500 rounded-full px-4 py-2 text-xs whitespace-nowrap cursor-pointer transition-all duration-200 transform hover:scale-105">GitHub</label>
                <label class="text-white font-semibold bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 border border-fuchsia-500 rounded-full px-4 py-2 text-xs whitespace-nowrap cursor-pointer transition-all duration-200 transform hover:scale-105">Vercel</label>
            </div>
        </div>
        -->

        <!-- Core Skills: añadido w-full para que ocupe todo el ancho de su celda en cualquier tamaño -->
        <div class="w-full m-1 gap-3 bg-gradient-to-br from-purple-900 to-purple-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-purple-700">
            <h2 class="font-extrabold text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 py-4 mb-4 border-b border-purple-600 pb-4">Core Skills</h2>
            <div class="flex flex-row flex-wrap gap-1.5">
                <label v-for="(item, key) in infoSkills.coreSkills"
                    :key="item.id" 
                    class="mx-1 my-0.5 text-white font-semibold bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 border border-fuchsia-500 rounded-full p-4 py-2 text-xs whitespace-nowrap cursor-pointer transition-all duration-200 transform hover:scale-105">
                    {{ item.name }}
                </label>
            </div>
        </div>

        <!-- Internships -->
        <div class="w-full bg-gradient-to-br from-purple-900 to-purple-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-purple-700">
            <h1 class="font-extrabold text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 py-4 mb-4 border-b border-purple-600 pb-4">Internships</h1>
            
            <!--
            <div class="space-y-5">
                <div class="bg-purple-700 bg-opacity-50 p-4 rounded-lg border-l-4 border-fuchsia-500">
                    <p class="font-bold text-fuchsia-400 text-sm">Alebat Management Consulting</p>
                    <p class="font-semibold text-white text-xs mt-2 leading-relaxed">Worked as an intern employee for the consulting company Alebat as front-end developer on vue projects. Developed responsive websites for various clients and designed courses card and header images.</p>
                </div>
                <div class="bg-purple-700 bg-opacity-50 p-4 rounded-lg border-l-4 border-fuchsia-500">
                    <p class="font-bold text-fuchsia-400 text-sm">Sapimsa S.A</p>
                    <p class="font-semibold text-white text-xs mt-2 leading-relaxed">Worked on the migration of processes and services from SAP R/3 to SAP S/4HANA, enabling real-time business operations, AI-driven analytics and streamlined processes</p>
                </div>
            </div>
            -->

            <div 
                v-for="(item, key) in infoInternships.internships"
                :key="key"
                class="space-y-5 rounded-lg border-l-4 border-fuchsia-500 bg-purple-700 mb-2 py-2 px-3">
                <p class="font-bold text-fuchsia-400 text-sm">{{ item.name }}</p>
                <p class="font-semibold text-white text-xs mt-2 leading-relaxed">{{ item.description }}</p>
            </div>
        </div>

        <!-- Education and Certifications -->
        <!-- Cambiado: en móvil ocupa toda la fila, en md ocupa las 2 columnas para equilibrar el layout -->
        <div class="w-full md:col-span-2 lg:col-span-1 bg-gradient-to-br from-purple-900 to-purple-800 p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-purple-700">
            <h2 class="flex font-extrabold text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 mb-4 border-b border-purple-600 pb-2">Education and Certifications</h2>
            
            <!--
            <div class="space-y-4">
                <div class="bg-purple-700 bg-opacity-50 p-4 rounded-lg border-l-4 border-fuchsia-500">
                    <p class="text-fuchsia-400 font-bold text-sm">2024 - 2026</p>
                    <p class="font-semibold text-white text-xs mt-2 leading-relaxed">DAW: Upper Level Vocational Training on Web Development Applications</p>
                </div>
                <div class="bg-purple-700 bg-opacity-50 p-4 rounded-lg border-l-4 border-fuchsia-500">
                    <p class="text-fuchsia-400 font-bold text-sm">2026 - 2027</p>
                    <p class="font-semibold text-white text-xs mt-2 leading-relaxed">DAM: Upper Level Vocational Training on Multiplatform Applications</p>
                </div>
            </div>
            -->

            <div 
                v-for="(item, key) in infoEducation.courses"
                :key="key"
                class="space-y-2">
                <div class="bg-purple-700 bg-opacity-50 p-4 rounded-lg border-l-4 border-fuchsia-500 my-1">
                    <p class="text-fuchsia-400 font-bold text-sm">{{ item.age }}</p>
                    <p class="font-semibold text-white text-xs mt-2 leading-relaxed">{{ item.description }}</p>
                </div>
            </div>
        </div>

    </div>
</template>