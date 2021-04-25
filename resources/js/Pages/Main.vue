<template>
    <div class="flex h-screen w-screen py-8 bg-yellow-100">
        <div class="flex justify-row m-auto">
            <div class="w-3/12 flex flex-col md:justify-around">
                <CircleImage :image="'../storage/img/programmer.png'" :link="'/profile/programmer'" :customCss="'justify-end'"/>
                <CircleImage :image="'../storage/img/overwatch.png'" :link="'/profile/gamer'" :customCss="'justify-center'"/>
                <CircleImage :image="'../storage/img/magician.png'" :link="'/profile/magician'" :customCss="'justify-end'"/>
            </div>
            <div class="w-6/12">
                <img class="rounded-full" :src="'../storage/img/eric.png'">
            </div>
            <div class="w-3/12 flex flex-col md:justify-around">
                <CircleImage :image="'../storage/img/collector.png'" :link="'/profile/collector'" :customCss="'justify-start'"/>
                <CircleImage :image="'../storage/img/boardgamer.png'" :link="'/profile/boardgamer'" :customCss="'justify-center'"/>
                <CircleImage :image="'../storage/img/boardgamer.png'" :link="'/profile/no_image'" :customCss="'justify-start'"/>
            </div>
            <!-- <div class="w-screen p-4">
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
                            <p class="underline">@erickokkuan</p>
                        </a>
                        <a class="flex flex-row" target="_blank">
                            <unicon name="map-marker" width="25" height="25" fill="red"></unicon>
                            <p>KL, Malaysia</p>
                        </a>
                    </div>
                    <div class="p-2 flex flex-col">
                        <a class="flex flex-row" href = "https://github.com/rootlocus/" target="_blank">
                            <unicon name="github" width="25" height="25" fill="black"></unicon>
                            <p class="underline">@rootlocus</p>
                        </a>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<style scoped>
</style>

<script>
import MainLayout from "@/Layouts/MainLayout";
import CircleImage from "@/Components/Profile/CircleImage";
// import Body from '@/Components/Main/Body';

    export default {
        layout: MainLayout, 
        components: {
            CircleImage,
            // Body,
        },
        props: {
            profilePages: Array
            // canLogin: Boolean,
            // canRegister: Boolean,
            // laravelVersion: String,
            // phpVersion: String,
        },
        data() {
            return {
                pages: ['Programmer', 'Gamer', 'Magician', 'Collector', 'Boardgamer']
            }
        },
    }
</script>
