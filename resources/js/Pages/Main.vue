<template>
<div id="body" class="bg-yellow-100">
    <div class="h-screen bg-yellow-400" ref="div1">
        <transition-group name="slide-fade">
            <div v-if="show" class="flex justify-start" key="name">
                <h1 class="mt-40 pl-20 pr-4 text-center font-buntu title-font font-black bg-red-400 text-blue-800">ERIC HENG</h1>
            </div>
            <div v-if="show" class="flex justify-end" key="name">
                <h1 class="mt-20 pl-10 pr-4 text-center font-buntu title-font font-black bg-blue-400 text-red-800">Napmi</h1>
            </div>
        </transition-group>
        <div class="flex justify-start" v-if="show" key="first">
            <h1 class="absolute bottom-0 left-0 p-4 font-buntu text-4xl font-black text-black">Code, Game, & Wonder</h1>
        </div>

        <div class="flex justify-center pt-20" @click="scrollToBottom">
            <a href="#sec-3" v-smooth-scroll>
                <unicon name="angle-double-down" width="40" height="40" fill="black"></unicon>
            </a>
        </div>
        <!-- <transition name="slide-fade" mode="out-in" > -->
        <!-- </transition> -->
    </div>
    <div class="flex h-screen w-screen py-8" id="sec-3">
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

</div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 1.0s ease-out;
}

/* .slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
} */

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}

.title-font {
    font-size: 10rem;
    line-height: 1;
}
</style>

<script>
import MainLayout from "@/Layouts/MainLayout";
import CircleImage from "@/Components/Profile/CircleImage";
// import Body from '@/Components/Main/Body';
import { ref } from 'vue';

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
        mounted() {
            this.show = !this.show
            // this.scrollToElement();
        },
        data() {
            return {
                pages: ['Programmer', 'Gamer', 'Magician', 'Collector', 'Boardgamer'],
                show: false
            }
        },
        methods: {
            goto(refName) {
                var element = this.$refs[refName];
                // var top = element.offsetTop;

                window.scrollTo(0, {top: element.offsetTop, behavior: 'smooth'});
            },
        },
    }
</script>
