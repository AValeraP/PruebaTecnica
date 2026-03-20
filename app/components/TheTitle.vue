<script setup>
const isMenuOpen = ref(false)
const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/cv', label: 'CV' },
  { to: '/contact', label: 'Contact' },
]
</script>

<template>
  <header class="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white shadow-2xl border-b-2 border-fuchsia-600 sticky top-0 z-50">
    
    <!-- Barra principal -->
    <div class="flex justify-between items-center p-4 sm:p-6">
      
      <!-- Nombre -->
      <div class="text-xl sm:text-2xl font-extrabold ml-2 sm:ml-8 bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
        Alejandro Valera
      </div>

      <!-- Nav desktop (oculto en móvil) -->
      <nav class="hidden md:block">
        <ul class="flex items-center space-x-2 lg:space-x-8 p-3 rounded-full bg-slate-800 bg-opacity-50 backdrop-blur-sm border border-purple-600 border-opacity-50">
          <li v-for="link in links" :key="link.to">
            <NuxtLink :to="link.to">
              <button class="p-2 lg:p-3 px-3 lg:px-5 rounded-full hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-purple-600 font-semibold transition-all duration-300 transform hover:scale-110 text-white text-sm lg:text-base">
                {{ link.label }}
              </button>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Botón hamburguesa (solo móvil) -->
      <button 
        class="md:hidden p-2 rounded-lg hover:bg-purple-800 transition-colors duration-200"
        @click="toggleMenu"
        aria-label="Toggle menu"
      >
        <!-- Icono hamburguesa / X -->
        <div class="w-6 flex flex-col gap-1.5 transition-all duration-300">
          <span :class="['block h-0.5 bg-white transition-all duration-300', isMenuOpen ? 'rotate-45 translate-y-2' : '']"></span>
          <span :class="['block h-0.5 bg-white transition-all duration-300', isMenuOpen ? 'opacity-0' : '']"></span>
          <span :class="['block h-0.5 bg-white transition-all duration-300', isMenuOpen ? '-rotate-45 -translate-y-2' : '']"></span>
        </div>
      </button>

    </div>

    <!-- Menú móvil desplegable -->
    <Transition name="menu">
      <nav v-if="isMenuOpen" class="md:hidden border-t border-purple-700 bg-slate-900 bg-opacity-95 backdrop-blur-sm">
        <ul class="flex flex-col p-4 gap-2">
          <li v-for="link in links" :key="link.to">
            <NuxtLink :to="link.to" @click="isMenuOpen = false">
              <button class="w-full text-left p-3 px-5 rounded-full hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-purple-600 font-semibold transition-all duration-300 text-white">
                {{ link.label }}
              </button>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </Transition>

  </header>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: all 0.3s ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>