<template>
    <h1><chrome-icon size="1.5x" class="custom-class"></chrome-icon>Hello World</h1>
</template>

<style scoped>
</style>

<script>
import MainLayout from "@/Layouts/MainLayout";
import Body from '@/Components/Main/Body';
import { ChromeIcon } from 'vue-feather-icons';

    export default {
        layout: MainLayout,
        components: {
            Body,
            ChromeIcon,
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
