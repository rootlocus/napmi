<template>
<div>
    <nav class="bg-yellow-400 dark:bg-gray-800 shadow">
        <div class="max-w-7xl mx-auto px-8">
            <div class="flex items-center justify-between h-16">
                <div class=" flex items-center">
                    <a class="flex-shrink-0" href="/">
                        <img class="h-8 w-8" :src="'../img/eric.png'" alt="Workflow"/>
                    </a>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <a class="text-black-300  hover:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                Eric Heng
                            </a>
                            <a class="text-black-300  hover:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                Contact Me
                            </a>
                            <a class="flex flex-row dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href = "https://github.com/rootlocus/" target="_blank">
                                <unicon name="github" width="20" height="20" fill="black"></unicon>
                                <p class="underline">@rootlocus</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="ml-4 flex items-center md:ml-6">
                    </div>
                </div>
                <div @click="hideBurger = !hideBurger" class="-mr-2 flex md:hidden">
                    <button class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                        <svg width="20" height="20" fill="currentColor" class="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div v-if="hideBurger" class="md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a class="text-black-300  hover:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                    Eric Heng
                </a>
                <a class="text-black-300  hover:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                    Contact
                </a>
            </div>
        </div>
    </nav>
</div>

</template>
<style scoped>

</style>
<script>

export default {
    components: {
    },
    props: {
        pages: {
            type: Array,
            required: true
        },
    },
    data() {
        return {
            hideBurger: false
        }
    },
}
</script>