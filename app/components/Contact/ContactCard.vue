<script setup>

</script>
<template class="bg-purple-950">
    <div class="inline-block bg-gradient-to-br m-5 p-5 from-purple-900 to-purple-800  rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-purple-700">
        <h1 class="font-extrabold text-white">Let's build something
        <span class="font-extrabold text-fuchsia-600">extraordinary</span>
         together</h1>

    <div class=" my-2 py-2 text-xs text-white">
        I'm currently available for freelance work and full time opportunities.
        Reach out if you want to collaborate on you next big project.
    </div>

    <div class="flex flex-row">
     <div class="inline-flex flex-col  items-stretch">
        
        <div class="flex flex-col border-2 border-fuchsia-950 rounded m-5 p-5 bg-fuchsia-900/20">
            <h2 class="text-gray-300 font-normal text-xs "> Email me</h2>
            <p class="text-white font-normal ">avaleraprieto@gmail.com</p>
        </div>

        <div class="flex flex-col border-2 border-fuchsia-950 rounded m-5 p-5 bg-fuchsia-900/20">
            <h2 class=" font-normal text-white text-xs ">My telephone number</h2>
            <p class="text-white font-normal ">213123123</p>
        </div>

        <div class="flex flex-col border-2 border-fuchsia-950 rounded m-5 p-5 bg-fuchsia-900/20">
            <h2 class=" font-normal text-white text-xs ">Location</h2>
            <p class="text-white font-normal ">Madrid</p>
        </div>

      </div>
     <div class="flex flex-col border-2 border-fuchsia-950 rounded m-5 p-5 bg-fuchsia-900/20">
  
  
        <div class="text-white">
     <form class="flex flex-col gap-4 max-w-sm"
            action="https://formspree.io/f/meervevk"
            method="POST"
     >
      <p class="font-extrabold text-lg mb-2">Let me know you</p>

      <div class="flex items-center justify-between gap-4">
        <label class="font-mono text-sm">Name:</label>
        <input required type="text" name="name" class="bg-fuchsia-950 border border-fuchsia-800 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-fuchsia-500">
      </div>

      <div class="flex items-center justify-between gap-4">
        <label class="font-mono text-sm">Surname:</label>
        <input required type="text"name="surname" class="bg-fuchsia-950 border border-fuchsia-800 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-fuchsia-500">
      </div>

      <div class="flex items-center justify-between gap-4">
        <label class="font-mono text-sm">Email:</label>
        <input required type="email" name="email" class="bg-fuchsia-950 border border-fuchsia-800 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-fuchsia-500">
      </div>

      <div class="flex items-center justify-between gap-4">
        <label class="font-mono text-sm">Phone number:</label>
        <input required type="tel" name="phone number"class="bg-fuchsia-950 border border-fuchsia-800 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-fuchsia-500">
      </div>
      
      <button type="submit" class="mt-4 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold py-2 rounded transition-colors">
        Send
      </button>
    </form>
  </div>
</div>
     </div>
    </div>
</template>