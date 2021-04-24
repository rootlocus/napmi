<template>
    <div class="">
        <div class="flex flex-row h-30">
            <div class="w-1/6">
                <img class="rounded-full" :src="'../storage/img/eric.png'">
            </div>
            <div class="w-screen bg-red-200">
                <div class="text-6xl">
                ERIC HENG KOK KUAN
                </div>
                <div>
                </div>
                <!-- <div class="bg-yellow-500">
                    ABCASA
                </div> -->
            </div>
            <div>
                WHAT

            </div>
            <!-- <div class="flex flex-col p-4" v-for="page in pages">
                <a class="m-2" :href="`/profile/${page.slug}`">
                    <div class="flex flex-row">
                        <img class="h-auto w-1/4 rounded-full" :src="page.image ? `/${page.image}` : `/img/no_image.png`" />
                        <p class="m-2">{{ page.title }}</p>
                    </div>
                </a>
            </div> -->
        </div>
    </div>

</template>
<style scoped>

</style>
<script>
// import { ClockIcon } from 'vue-feather-icons'

export default {
    components: {
    },
    props: {
        pages: {
            type: Array,
            required: true
        },
    },
}
</script>