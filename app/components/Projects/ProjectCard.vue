<script setup lang="ts">
import { projects } from '~/data/mocksProjectCards'
interface ProjectProp{
    image?: string,
    language: string,
    title: string,
    description: string,
    link: string,
}

const props = withDefaults(defineProps<ProjectProp>(), {
    image: 'img',
    language: 'Project language',
    title: 'Project title',
    description: 'Project description',
    link: 'Project link',
})
</script>
<template>
    <div class="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
        <!-- Imagen del proyecto -->
        <div class="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center overflow-hidden">
            <img v-if="props.image && props.image !== 'img'" :src="props.image" :alt="props.title" class="w-full h-full object-cover">
            <span v-else class="text-white text-4xl">{{ props.image }}</span>
        </div>
        
        <!-- Contenido de la tarjeta -->
        <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-3">{{ props.title }}</h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-3">{{ props.description }}</p>
            
            <!-- Enlace -->
                <a 
                :href="props.link"
                target="_blank"
                class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
            >
                Ver Proyecto →
            </a>
           
            <div class="inline-block m-4 text-white font-semibold bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 border border-fuchsia-500 rounded-full px-4 py-2 text-xs whitespace-nowrap cursor-pointer transition-all duration-200 transform hover:scale-105">
                <p>{{ props.language }}</p>
            </div>
        </div>
    </div>
</template>