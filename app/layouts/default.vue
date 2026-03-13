<script setup>
import TheTitle from '~/components/TheTitle.vue';
import TheFooter from '~/components/TheFooter.vue'
</script>

<template>
<TheTitle></TheTitle>
<slot></slot>
<TheFooter></TheFooter>
</template>