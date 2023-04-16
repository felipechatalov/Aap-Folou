<template>
  <Navbar :logo = "logo_src" :alt="app_name"/>
  <router-view/>
</template>

<script>
  import Navbar from './views/Navbar.vue';
  
  export default {
    data() {
      return{
        logo_src: '/src/components/icons/patinha.png',
        app_name: 'AAP FOLOU'
      }
    },
    components:{
    Navbar
    }
  }
  
</script>