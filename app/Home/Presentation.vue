<template >
        <div class="grid grid-cols-2 rounded m-5">
            <div class="">
             <img src="/resources/img/profilepicture.png" width="200" alt="mi foto"> <!--Añadir img de linkedin-->
            </div>

            <div class="border-2">
                <p class="inline-flex items-stretch p-5 m-5 w-auto stretched rounded mx-3 my-1  bg-purple-900 font-bold text-fuchsia-600 text-xs">AVAILABLE FOR NEW PROJECTS</p>
                <h1 class="p-2 px-5 text-white font-extrabold">Alejandro Valera
                    <span class="text-fuchsia-600">.</span>
                </h1>

                <p class="p-2 px-5 font-normal text-white">Front End Developer</p>
                <p class="p-2 px-5 font-normal text-gray-600">Madrid, Spain</p>
            
                <div class="text-white">
                    <NuxtLink to="/Projects">
                        <button class="m-3 p-3 font-bold bg-purple-900 rounded"> View Projects</button>
                    </NuxtLink>
                    <NuxtLink to="/Contact">
                        <button class="m-3 p-3 font-bold bg-purple-900 rounded"> Contact</button>
                    </NuxtLink>
        
                </div>
            </div>
        </div>

        
    </template>