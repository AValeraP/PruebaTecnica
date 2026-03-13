<script setup lang="ts">
interface data{
phone: Number,
email: String,
}

const cvProp= defineProps({

    phone: {
        type: Number,
        default: 601081485
    },
    email: {
        type: String,
        default: "avaleraprieto@gmail.com"
    }
})
</script>
<template>

</template>