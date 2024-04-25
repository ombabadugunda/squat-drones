<template>
  <router-view/>
</template>

<script>
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnnrXFBRvTtBShdktr3Iq0oJRvEkWOBmM",
  authDomain: "squatdrone-44c7c.firebaseapp.com",
  projectId: "squatdrone-44c7c",
  storageBucket: "squatdrone-44c7c.appspot.com",
  messagingSenderId: "905033620742",
  appId: "1:905033620742:web:afe50084ff9aae64545287",
  measurementId: "G-EM5T6LQF25"
};

// Initialize Firebase


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
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    console.log(analytics);
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
  width: 100%;
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
