<template>
    <div class="flex flex-col h-screen">
        <Navigation :pages="profilePages"/>
        <slot />
        <Footer/>
    </div>
</template>


<style scoped>
   
</style>


<script>
import Navigation from '@/Components/Main/Navigation';
import Footer from '@/Components/Main/Footer';

  export default {
    components: {
        Navigation,
        Footer,
    },
    props: {
      title: String,
    },
  }
</script>