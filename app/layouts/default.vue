<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ]
})

import TheTitle from '~/components/TheTitle.vue';
import TheFooter from '~/components/TheFooter.vue'
</script>

<template>
    <div class="bg-slate-900 min-h-screen">
<TheTitle></TheTitle>
<slot></slot>
<TheFooter></TheFooter>
    </div>
</template>