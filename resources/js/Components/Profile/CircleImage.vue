<template>
    <inertia-link :href="link">
        <div class="flex" :class="customCss">
            <img class="w-3/6 rounded-full" :src="image">
        </div>
    </inertia-link>
</template>
<script>
export default {
props: {
    image: {
        type: String,
        default: '../img/no_image.png'
    },
    link: {
        type: String,
        default: '/'
    },
    customCss: {
        type: String,
        default: ''
    }
},
}
</script>
