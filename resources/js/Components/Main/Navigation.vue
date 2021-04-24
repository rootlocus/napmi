<template>
    <div class="">
        <div class="flex flex-row h-30">
            <div class="w-1/6">
                <img class="rounded-full" :src="'../storage/img/eric.png'">
            </div>
            <div class="w-screen p-4">
                <div class="text-8xl font-bold">
                    ERIC HENG
                </div>
                <div class="flex flex-row">
                    <div class="p-2 flex flex-col">
                        <a class="flex flex-row" :href="'https://www.linkedin.com/in/kok-kuan-heng-00369063'" target="_blank">
                            <unicon name="linkedin" width="25" height="25" fill="royalblue"></unicon>
                            <p class="underline">Heng Kok Kuan</p>
                        </a>
                        <a class="flex flex-row" href = "mailto: erickokkuan@gmail.com">
                            <unicon name="at" width="25" height="25" fill="black"></unicon>
                            <p class="underline">erickokkuan@gmail.com</p>
                        </a>
                    </div>
                    <div class="p-2 flex flex-col">
                        <a class="flex flex-row" href = "https://www.instagram.com/erickokkuan/" target="_blank">
                            <unicon name="instagram" width="25" height="25" fill="purple"></unicon>
                            <p class="underline">https://www.instagram.com/erickokkuan/</p>
                        </a>
                        <a class="flex flex-row" target="_blank">
                            <unicon name="map-marker" width="25" height="25" fill="red"></unicon>
                            <p>KL, Malaysia</p>
                        </a>
                    </div>
                </div>
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