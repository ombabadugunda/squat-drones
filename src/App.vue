<template>
  <BaseMain />
</template>

<script>
import BaseMain from './components/BaseMain.vue'


export default {
  name: 'App',
  components: {
    BaseMain
  },
  
  mounted() {
    
    // Personal info request

    // axios.get('https://api.monobank.ua/personal/client-info', { headers })
    //   .then(response => {
    //     // Handle the response data
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     // Handle any errors
    //     console.error('There was an error!', error);
    //   });
  }
}
</script>

<style>
@font-face {
  font-family: "e-Ukraine";
  src: local("e-Ukraine"),
    url(./assets/fonts/e-Ukraine-Regular.otf) format("truetype");
}

#app {
  font-family: e-Ukraine, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  background-color: #000;
  color: #fff;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  font-size: 10px;
}

h1 {
  font-size: 6.4em;
}

h2 {
  font-size: 20em;
  margin: 0;
}
</style>
