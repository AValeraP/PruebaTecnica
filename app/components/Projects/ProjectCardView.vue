<script setup>
import { projects } from '~/data/mocksProjectCards';
import ProjectCard from './ProjectCard.vue';

//la variable categories contiene un mapa(clave-valor) con el project y su language:
//Por ejemplo: "PufoSA" : "PHP"
const categories = [...new Set(projects.map(p=> p.language))]
const { selectedOption, filteredItems } = useFilter(projects, 'language')

function filter(){
if(selectedOption.value != "All"){
    return projects.filter(p => p.language === selectedOption.value)
    }
    return projects
}

const displayedProjects = ref(projects)

function applyFilter() {
    displayedProjects.value = filter()
}
</script>

<template>
    <div class="p-8 max-w-7xl mx-auto">        
        <h2 class="w-fit text-4xl rounded m-auto p-5 mb-12 text-center bg-purple-900 text-white font-extrabold">My personal projects </h2>
        <div class="filter-group border-2 border-fuchsia-700 rounded bg-purple-900 text-white m-3 p-3">
            
            <label>Language used: </label>
            <select class="bg-purple-600 mx-4 my-2 px-2 py-2 rounded-full" v-model="selectedOption">
                <label><option value="All">All</option></label>
                <option v-for="cat in categories" :key="cat" :value="cat">
                    {{ cat }}
                </option>
            </select>

            <button class="hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110  bg-blue-600 font-bold mx-4 my-2 px-4 py-2 rounded-full hover:bg"
                @click="applyFilter"
                >Filter</button>
            <!--
            <label for="techs">Languages used: </label>
            <select class="bg-fuchsia-900 rounded" id="techs" v-model="techUsed">
                <option value="all">All</option>
                <option value="php">PHP</option>
                <option value="php">Vue.js</option>
                <option value="php">Java</option>
            </select>
            -->
        </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
                v-for="(project, index) in displayedProjects"
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
