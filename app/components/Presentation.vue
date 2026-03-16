<template >
    <header class="m-5 p-5 grid-flow-co">

        <div class="border">
            <img src="" alt="mi foto"> <!--Añadir img de linkedin-->

                <p class="m-2 p-2 font-bold text-white font-m">Available for a new project</p>
                <h1 class="m-2 p-2 font-extrabold text-white font-xl">Alejandro Valera.</h1>
                <p class="m-2 p-2 font-extrabold text-white font-l">Front-end Developer</p>
                <p class="m-2 p-2 font-extrabold text-white font-l">Madrid, Spain</p>
                <div class="text-white m-2 p-2">
                    <NuxtLink to="/projects">
                        <button class="px-3 mx-2 font-bold bg-purple-600 rounded">See my projects</button>
                    </NuxtLink>
                    <NuxtLink to="contact">
                        <button class="px-3 mx-2 font-bold bg-purple-600 rounded">Contact me</button>
                    </NuxtLink>
                </div>
        </div>
    </header>
    </template>