<template>
    <div class="ml-4 object-left-top">
        <div class="flex flex-col w-1/6 h-36 bg-cover">
            <img class="rounded-full flex items-center justify-center" :src="'../storage/img/eric.png'">
            <div class="flex flex-col p-4" v-for="page in pages">
                <div class="flex flex-row">
                    <img class="h-auto w-1/4 rounded-full" :src="page.image ? `/${page.image}` : `/img/no_image.png`" />
                    <a class="m-2" :href="`/profile/${page.slug}`">{{ page.title }}</a>
                </div>
            </div>
        </div>
    </div>

</template>
<style scoped>

</style>
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