<script setup>
import TheTitle from '~/components/TheTitle.vue';
import TheFooter from '~/components/TheFooter.vue'
</script>

<template>
    <div class="bg-slate-950">
<TheTitle></TheTitle>
<slot></slot>
<TheFooter></TheFooter>
    </div>
</template>