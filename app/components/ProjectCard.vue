<script setup lang="ts">
import { projects } from '~/data/mocksProjectCards'
interface ProjectProp{
    image?: string,
    title: string,
    description: string,
    link: string,
}

const props = withDefaults(defineProps<ProjectProp>(), {
    image: 'img',
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
             <NuxtLink to="/">
                <a 
                target="_blank"
                class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
            >
                Ver Proyecto →
            </a>
             </NuxtLink>
           
        </div>
    </div>
</template>