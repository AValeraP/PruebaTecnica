<script setup>

</script>

<template>

<header class="flex justify-between items-center bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white p-6 shadow-2xl border-b-2 border-fuchsia-600 sticky top-0 z-50">
  <div class="text-2xl font-extrabold ml-8 bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
    Alejandro Valera
  </div>
  <nav>
    <ul class="flex items-center space-x-8 p-3 rounded-full bg-slate-800 bg-opacity-50 backdrop-blur-sm border border-purple-600 border-opacity-50">
      <NuxtLink to="/">
        <li><button class="p-3 px-5 rounded-full hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-purple-600 font-semibold transition-all duration-300 transform hover:scale-110 text-white">Home</button></li>
      </NuxtLink>
      <NuxtLink to="/projects">
       <li><button class="p-3 px-5 rounded-full hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-purple-600 font-semibold transition-all duration-300 transform hover:scale-110 text-white">Projects</button></li>
      </NuxtLink>
      <NuxtLink to="/cv">
        <li><button class="p-3 px-5 rounded-full hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-purple-600 font-semibold transition-all duration-300 transform hover:scale-110 text-white">CV</button></li>
      </NuxtLink>
      <NuxtLink to="/contact">
        <li><button class="p-3 px-5 rounded-full hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-purple-600 font-semibold transition-all duration-300 transform hover:scale-110 text-white">Contact</button></li>
      </NuxtLink>
    </ul>
  </nav>
</header>
</template>
