<script setup>

</script>

<template>

<header class="flex justify-between items-center bg-stone-900 text-purple-500 p-10">
  <div class="text-xl font-bold">
    Alejandro Valera
  </div>
  <nav>
    <ul class="flex items-center space-x-6 p-2 rounded text-xl font-bold">

      <NuxtLink to="/">
        <li><button class="p-2 rounded hover:bg-slate-700">Home</button></li>
      </NuxtLink>
      <NuxtLink to="/projects">
       <li><button class="p-2 rounded hover:bg-slate-700">Projects</button></li>
      </NuxtLink>
      <NuxtLink to="/cv">
        <li><button class="p-2 rounded hover:bg-slate-700">CV</button></li>
      </NuxtLink>
      <NuxtLink to="/contact">
        <li><button class="p-2 rounded hover:bg-slate-700">Contact</button></li>
      </NuxtLink>
    </ul>
  </nav>
</header>
</template>
