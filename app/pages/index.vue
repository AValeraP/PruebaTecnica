<script setup>
import Presentation from '~/Home/Presentation.vue';
import Techs from '~/Home/Techs.vue';
import AboutMe from '~/Home/AboutMe.vue';
</script>
<template >
        <Presentation></Presentation>
        
        <div class="grid grid-cols-2">
            <AboutMe></AboutMe>      
            <Techs></Techs>
        </div>
</template>