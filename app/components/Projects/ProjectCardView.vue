<script setup>
import { projects } from '~/data/mocksProjectCards';
import ProjectCard from './ProjectCard.vue';
</script>

<template>
    <div class="p-8 max-w-7xl mx-auto">        
        <h2 class="w-fit text-4xl rounded m-auto p-5 mb-12 text-center bg-purple-900 text-white font-extrabold">My personal projects </h2>

        <div class="filter-group border-2 border-fuchsia-700 rounded bg-purple-900 text-white m-3 p-3">
            <label for="techs">Languages used: </label>
            <select class="bg-fuchsia-900 rounded" id="techs" v-model="techUsed">
                <option value="all">All</option>
                <option value="php">PHP</option>
                <option value="php">Vue.js</option>
                <option value="php">Java</option>
            </select>
            
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
                v-for="(project, index) in projects"
                :key="index"
                :title="project.title"
                :language="project.language"
                :image="project.image"
                :description="project.description"
                :link="project.link"
            ></ProjectCard>
        </div>
    </div>
</template>
