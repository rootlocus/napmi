<template>
    <div class="flex flex-col h-screen">
        <Navigation :pages="profilePages"/>
        <slot />
        <Footer/>
    </div>
</template>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&display=swap');


.font-buntu {
    font-family: 'Ubuntu', sans-serif;
}
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