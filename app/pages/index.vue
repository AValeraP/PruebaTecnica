<script setup>
import Presentation from '~/components/Presentation.vue';
import Techs from '~/components/Techs.vue';
import AboutMe from '~/components/AboutMe.vue';
</script>
<template >
        <Presentation></Presentation>
        
        <div class="grid grid-cols-2">
            <AboutMe></AboutMe>      
            <Techs></Techs>
        </div>
</template>