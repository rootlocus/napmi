<template>
    <div>
        <div class="h-48 w-full bg-cover bg-black" style="background-image:url(https://images.unsplash.com/photo-1559509547-cebb0e1da8da?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGJsdWUlMjBza3l8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60)">
        </div>
        <div class="px-6 md:px-32 flex justify-between lg:flex-row flex-col font-white">
            <div class="flex lg:flex-row flex-col">
                <div class="w-36 h-36 bg-cover rounded-full bg-center absolute transform -translate-y-1/2 ring-4 ring-white">
                    <img class="rounded-full flex items-center justify-center" :src="'../storage/img/eric.png'">
                </div>
                <p class="lg:ml-36 mt-16 lg:mt-0 pl-4 text-3xl font-semibold py-5">
                    Eric Heng
                </p>
            </div>
            <div class="py-5 lg:space-x-3 space-y-3 lg:space-y-0">
                <button class="lg:w-auto inline-flex w-full font-semibold tracking-wide justify-center w-full items-center text-gray-600 space-x-1.5 border border-gray-400 focus:ring-1 focus:ring-gray-300 focus:ring-offset-2 hover:bg-gray-100 focus:outline-none px-4 py-2 text-sm rounded-lg">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
                    </span>
                    
                    <span>
                        Message
                    </span>
                    
                </button>
                <button class="lg:w-auto inline-flex w-full font-semibold tracking-wide justify-center w-full items-center text-gray-600 space-x-1.5 border border-gray-400 focus:ring-1 focus:ring-gray-300 focus:ring-offset-2 hover:bg-gray-100 focus:outline-none px-4 py-2 text-sm rounded-lg">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z"/></svg>
                    </span>
                    
                    <span>
                        Call
                    </span>
                    
                </button>
            </div>
        </div>
    </div>
</template>
