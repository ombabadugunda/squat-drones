<template>
  <router-view/>
</template>

<script>
export default {
  name: 'BaseMain',
  data() {
    return {
      windowHeight: window.innerHeight
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  methods: {  
    onResize() {
      this.windowHeight = window.innerHeight
    }
  }
}
</script>

<style lang="scss">
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
  height: 100%;
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
</style>
