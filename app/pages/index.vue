<script setup>
import Presentation from '~/components/HomeComps/Presentation.vue';
import Techs from '~/components/HomeComps/Techs.vue';
import AboutMe from '~/components/HomeComps/AboutMe.vue';
</script>
<template >
        <Presentation></Presentation>
        
        <div class="grid grid-cols-2">
            <AboutMe></AboutMe>      
            <Techs></Techs>
        </div>
</template>