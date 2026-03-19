<script setup>
import infoContacto from '~/data/contactCards.json'
</script>
 
<template>
  <div class="max-w-7xl mx-auto px-6 py-8">
    <div class="bg-gradient-to-br from-purple-900 to-purple-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-purple-700">
 
      <!-- Header -->
      <h1 class="font-extrabold text-2xl text-white py-4 mb-2 border-b border-purple-600 pb-4">
        Let's build something
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400"> extraordinary </span>
        together
      </h1>
      <p class="text-white font-semibold text-sm leading-relaxed mb-6">
        I'm currently available for freelance work and full time opportunities.
        Reach out if you want to collaborate on your next big project.
      </p>
 
      <!-- Body: contact cards + form -->
      <div class="flex flex-row gap-6">
 
        <!-- Contact Cards -->
        <div class="flex flex-col gap-3 min-w-48">
          <div
            v-for="item in infoContacto.contactData"
            :key="item.id"
            class="bg-purple-700 bg-opacity-50 p-4 rounded-xl border-l-4 border-fuchsia-500 border border-purple-600"
          >
            <p class="text-fuchsia-400 font-bold text-xs mb-1">{{ item.title }}</p>
            <p class="text-white font-semibold text-sm">{{ item.body }}</p>
          </div>
        </div>
 
        <!-- Contact Form -->
        <div class="flex-1 bg-purple-700 bg-opacity-50 p-6 rounded-xl border border-purple-600">
          <h2 class="font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 mb-6">
            Let me know you
          </h2>
 
          <form
            class="flex flex-col gap-4"
            action="https://formspree.io/f/meervevk"
            method="POST"
          >
            <div class="flex items-center justify-between gap-4">
              <label class="w-28 text-fuchsia-300 font-semibold text-xs whitespace-nowrap">Name</label>
              <input
                required
                type="text"
                name="name"
                class="flex-1 w-28 bg-purple-900 border border-purple-600 hover:border-fuchsia-500 focus:border-fuchsia-500 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-fuchsia-500 transition-colors"
              />
            </div>
 
            <div class="flex items-center justify-between gap-4">
              <label class="w-28 text-fuchsia-300 font-semibold text-xs whitespace-nowrap">Lastname</label>
              <input
                required
                type="text"
                name="surname"
                class="flex-1 bg-purple-900 border border-purple-600 hover:border-fuchsia-500 focus:border-fuchsia-500 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-fuchsia-500 transition-colors"
              />
            </div>
 
            <div class="flex items-center justify-between gap-4">
              <label class="w-28 text-fuchsia-300 font-semibold text-xs whitespace-nowrap">Email</label>
              <input
                required
                type="email"
                name="email"
                class="flex-1 bg-purple-900 border border-purple-600 hover:border-fuchsia-500 focus:border-fuchsia-500 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-fuchsia-500 transition-colors"
              />
            </div>
 
            <div class="flex items-center justify-between gap-4">
              <label class="w-28 text-fuchsia-300 font-semibold text-xs whitespace-nowrap">Phone number</label>
              <input
                required
                type="tel"
                name="phone number"
                class="flex-1 bg-purple-900 border border-purple-600 hover:border-fuchsia-500 focus:border-fuchsia-500 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-fuchsia-500 transition-colors"
              />
            </div>
 
            <button
              type="submit"
              class="mt-2 px-6 py-2 font-bold text-white text-sm bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 border border-fuchsia-500 rounded-full transition-all duration-200 transform hover:scale-105 self-end"
            >
              Send
            </button>
          </form>
        </div>
 
      </div>
    </div>
  </div>
</template>