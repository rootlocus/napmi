<template>
    <div v-for="page in pages">
        <div class="lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
            <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div class="flex">
                    <img class="h-auto w-1/4" :src="page.image ? `/${page.image}` : `/img/no_image.png`" />
                    <div class="p-4">
                        <div class="text-black font-bold text-xl mb-2">
                            <a :href="`/profile/${page.slug}`">{{ page.title }}</a>
                        </div>
                        <p class="text-grey-darker text-base">{{ page.excerpt }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            pages: {
                type: Array,
                required: true
            },
        },
    }
</script>