<template>
  <div class="main">
    <video
      autoplay
      muted
      loop
      playsinline
      class="background"
    >
      <source src="@/assets/video/background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="gradient-top"></div>
    <div class="gradient-bottom"></div>
    <div class="top">
      <h1>Постійний збір на <span class="yellow">Сквот-дрони</span></h1>
      <h3>Для батальйону <span class="yellow">"Щедрик" 411 полку</span> <span class="yellow">"Яструби"</span></h3>
    </div>
    <div class="bottom">
      <img class="logo" :src=sche>
      <div class="bottom-text">
        <h1 class="yellow">+{{ lastDonaters[0].amount / 100}} ₴</h1>
        <h3>від {{ nameFormatter(lastDonaters[0].description) }}, дякуємо! 💚</h3>
      </div>
      <!-- <h1 class="last-donater">
        <p class="green">+{{ lastDonaters[0].amount / 100}}₴</p> від {{ nameFormatter(lastDonaters[0].description) }}, дякуємо! 💚</h1> -->

      <img class="logo" :src=squat>
    </div>
    <!-- <img :src="background" class="background" alt="">
    <h1 class="title">ТРИВАЄ ЗБІР НА СКВОТ-ДРОН #29</h1>
    <h2 class="amount"><span class="green">{{ numberWithCommas(totalAmount) }}₴</span> <span class="slash">/</span> <span class="red">{{ numberWithCommas(totalPrice) }}₴</span></h2>
    <h1 class="subtitle">на літак-камікадзе з 3кг вибухівки</h1>
    <div class="flight">
      <img class="squat" :src=squat>
      <img class="map-pin" :src=mapPin>
      <img class="pig" :src=pig>
      <img class="path" :src=path>
      <div v-if="currentView == 0" class="plane-box" :style="{ left: planeXPosition, bottom: planeYPosition }">
        <img class="plane" :style="{ transform: `translate(0, -50%) rotate(${planeAngle})`}" :src=plane>
        <img class="bubble" :src=bubble>
        <h1 class="bubble-text">{{ ((this.totalAmount / this.totalPrice) * 100).toFixed() }}%</h1>
      </div>
    </div>
    <h1 class="last-donater"><span class="green">+{{ lastDonaters[0].amount / 100}}₴</span> від {{ nameFormatter(lastDonaters[0].description) }}, дякуємо! 💚</h1> -->
  </div>
</template>

<script>
// import * as d3 from 'd3'
import mapPin from '../assets/icons/map-pin.png'
import sche from '../assets/icons/sche.png'
import squat from '../assets/icons/squat.png'
import pig from '../assets/icons/pig.png'
import plane from '../assets/icons/plane.png'
import path from '../assets/icons/path.png'
import bubble from '../assets/icons/bubble.png'
import background from '../assets/video/background.mp4'
import axios from 'axios';
import moment from 'moment';

export default {
  name: 'BaseMain',
  data() {
    return {
      totalPrice: 56403,
      currentView: 0,
      mapPin,
      squat,
      sche,
      pig,
      plane,
      path,
      bubble,
      background,
      totalAmount: 0,
      lastDonaters: [
        {
          amount: 0,
          description: ' '
        },
      ]
    }
  },
  computed: {
    planeXPosition() {
      return (this.totalAmount / this.totalPrice) * 100 + '%';
    },
    planeYPosition() {
      return (-Math.sin((this.totalAmount / this.totalPrice) * 6.28)) * 50 + '%';
    },
    planeAngle() {
      return Math.cos((this.totalAmount / this.totalPrice) * 6.28) + 0.7 + 'rad';
    },
  },
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    nameFormatter(name) {
      console.log(name);
      if (name.replace('Від: ', '').split(' ')[1]) {
        return name.replace('Від: ', '').split(' ')[0] + ' ' + name.replace('Від: ', '').split(' ')[1][0] + '.';
      } else {
        return name.replace('Від: ', '').split(' ')[0];
      }
    },
    getDonaters() {
      const headers = {
      'X-Token':'uvzL0w91ixz5L8DYoe5Vh3pZPU-Hsb7nTlawUIoG9MG0',
      };
      axios.get(`https://api.monobank.ua/personal/statement/ZjxvVAw-q1A_Et3zb3hNEUtxSwEmt7s/${moment().subtract(1, 'months').unix()}/${moment().unix()}`, { headers })
        .then(response => {
          // console.log('Timestamp', moment().unix());
          // console.log('Last donater', response.data[0].description.replace('Від: ', ''));
          // console.log('Amount', response.data[0].amount / 100, 'UAH');
          // console.log('Total amount', response.data[0].balance / 100, 'UAH');
          // console.log('Data', response.data);
          this.totalAmount = (response.data[0].balance / 100).toFixed(0);
          this.lastDonaters = response.data.slice(0, 3);
        })
        .catch(error => {
          console.error('There was an error!', error);
      });
    }
  },
  mounted() {
  this.getDonaters(); 
  setInterval(() => this.getDonaters(), 61000);
  // setInterval(() => {
  //   if (this.totalAmount < 40000) {
  //     this.totalAmount += 100, 1
  //   } else {
  //     this.totalAmount = 0;
  //   }
  // }, 1000);
  // const width = 2000;
  // const height = 510;

  // const svg = d3.select('svg')
  //   .attr("width", width)
  //   .attr("height", height);

  // const curve = d3.line().curve(d3.curveNatural);
  // const points = [[0, 255], [500, 505], [1000, 255], [1500, 5], [2000, 255]];
  
  // var defs = svg.append('defs');

  // var gradient = defs.append('linearGradient')
  //   .attr('id', 'svgGradient')
  //   .attr('x1', '0%')
  //   .attr('x2', '100%')

  //   gradient.append('stop')
  //   .attr('class', 'start')
  //   .attr('offset', '0%')
  //   .attr('stop-color', 'white')
  //   .attr('stop-opacity', 1);

  //   gradient.append('stop')
  //   .attr('class', 'end')
  //   .attr('offset', '100%')
  //   .attr('stop-color', 'red')
  //   .attr('stop-opacity', 1);

    
  // svg
  //   .append('path')
  //   .attr('d', curve(points))
  //   .attr("stroke-width", 10)
  //   .style("stroke-dasharray", ("40, 20"))
  //   .attr('stroke', 'url(#svgGradient)')
  //   .attr('fill', 'none');
  }
}
</script>

<style lang="sass" scoped>
h1
  font-size: 4vw
  margin: 0
  padding: 0
  font-weight: 400

h3
  font-size: 2.5vw
  margin: 0
  padding: 0
  font-weight: 300

.main
  position: relative
  container-type: inline-size
  align-items: center
  text-align: center
  height: calc(100% - 8vw)
  padding: 4vw
  width: calc(100% - 8vw)
  margin: 0 auto 

.logo
  height: 100%

.bottom
  position: absolute
  bottom: 2vw
  left: 50%
  transform: translateX(-50%)
  width: 80%
  height: 20%
  display: flex
  justify-content: space-between
  align-items: center
  z-index: 10

.bottom-text
  display: flex
  flex-direction: column

.yellow
  color: #FFD700

.top
  position: absolute
  top: 0vw
  left: 50%
  transform: translateX(-50%)
  width: 80%
  height: 20%
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  z-index: 10

.plane
  width: 100%
  
.background
  background-size: cover 
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  z-index: -10
  height: 100%

.slash
  font-weight: 50

.gradient-top
  position: absolute
  top: 0px
  left: 0
  width: 100%
  height: 30%
  background: linear-gradient(to bottom, rgba(0,0,0,1), transparent)
  pointer-events: none
  z-index: 0

.gradient-bottom
  position: absolute
  bottom: 0px
  left: 0
  width: 100%
  height: 30%
  background: linear-gradient(to top, rgba(0,0,0,1), transparent)
  pointer-events: none
  z-index: 0

</style>