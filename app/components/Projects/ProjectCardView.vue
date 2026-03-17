<script setup>
import { projects } from '~/data/mocksProjectCards';
import ProjectCard from './ProjectCard.vue';
</script>

<template>
    <div class="p-8 max-w-7xl mx-auto">
<
        <h2 class="w-fit text-4xl rounded m-auto p-5 mb-12 text-center bg-purple-900 text-fuchsia-600 font-extrabold">Mis Proyectos</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
                v-for="(project, index) in projects"
                :key="index"
                :title="project.title"
                :image="project.image"
                :description="project.description"
                :link="project.link"
            ></ProjectCard>
        </div>
    </div>
</template>