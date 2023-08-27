<template>
  <div id="nav">
    <Navbar />
    <RouterView></RouterView>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { RouterView } from 'vue-router';


export default {
  components: {
    Navbar,
    Footer,
    RouterView
}
};
</script>