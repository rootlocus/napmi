<template>
    <div>
        test
        <unicon name="car-wash" fill="limegreen"></unicon>
        <unicon name="layer-group" fill="royalblue" icon-style="monochrome"></unicon>
    </div>
</template>

<style scoped>
</style>

<script>
import MainLayout from "@/Layouts/MainLayout";
import Body from '@/Components/Main/Body';

    export default {
        layout: MainLayout,
        components: {
            Body,
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
