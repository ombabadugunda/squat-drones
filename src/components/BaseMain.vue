<template>
  <div class="main">
    <video autoplay muted loop class="background">
      <source :src="background" type="video/mp4">
    </video>
    <h1 class="title">ТРИВАЄ ЗБІР НА СКВОТ-ДРОН #6</h1>
    <h2 class="amount"><span class="green">{{ numberWithCommas(totalAmount) }}₴</span> / <span class="red">{{ numberWithCommas(40000) }}₴</span></h2>
    <h1 class="subtitle">на літак-камідзе з 3кг вибухівки</h1>
    <div class="flight">
      <img class="squat" :src=squat>
      <img class="map-pin" :src=mapPin>
      <img class="pig" :src=pig>
      <svg id="path"></svg>
      <div class="plane-box" :style="{ left: planeXPosition, bottom: planeYPosition}">
        <img class="plane" :src=plane>
      </div>
    </div>
    <h1 class="last-donater"><span class="green">+{{ lastDonaters[0].amount / 100}}₴</span> від {{ nameFormatter(lastDonaters[0].description) }}, дякуємо! 💚</h1>
  </div>
</template>

<script>
import * as d3 from 'd3'
import mapPin from '../assets/icons/map-pin.png'
import squat from '../assets/icons/squat.png'
import pig from '../assets/icons/pig.png'
import plane from '../assets/icons/plane.png'
import background from '../assets/video/background.mp4'
import axios from 'axios';
import moment from 'moment';

export default {
  name: 'BaseMain',
  data() {
    return {
      mapPin,
      squat,
      pig,
      plane,
      background,
      totalAmount: 30000,
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
      return (this.totalAmount / 40000 * 2000) + 'px';
    },
    planeYPosition() {
      return (Math.cos((this.totalAmount / 40000) + 1.57)) * 510 / 2 + 'px';
    }
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
          console.log('Timestamp', moment().unix());
          console.log('Last donater', response.data[0].description.replace('Від: ', ''));
          console.log('Amount', response.data[0].amount / 100, 'UAH');
          console.log('Total amount', response.data[0].balance / 100, 'UAH');
          console.log('Data', response.data);
          this.totalAmount = (response.data[0].balance / 100).toFixed(0);
          this.lastDonaters = response.data.slice(0, 3);
        })
        .catch(error => {
          console.error('There was an error!', error);
      });
    }
  },
  mounted() {
    console.log(Math.cos((this.totalAmount / 40000) + 1.57));
  this.getDonaters(); 
  setInterval(() => this.getDonaters(), 61000);
  const width = 2000;
  const height = 510;

  const svg = d3.select('svg')
    .attr("width", width)
    .attr("height", height);

  const curve = d3.line().curve(d3.curveNatural);
  const points = [[0, 255], [500, 505], [1000, 255], [1500, 5], [2000, 255]];
  
  var defs = svg.append('defs');

  var gradient = defs.append('linearGradient')
    .attr('id', 'svgGradient')
    .attr('x1', '0%')
    .attr('x2', '100%')

    gradient.append('stop')
    .attr('class', 'start')
    .attr('offset', '0%')
    .attr('stop-color', 'white')
    .attr('stop-opacity', 1);

    gradient.append('stop')
    .attr('class', 'end')
    .attr('offset', '100%')
    .attr('stop-color', 'red')
    .attr('stop-opacity', 1);

    
  svg
    .append('path')
    .attr('d', curve(points))
    .attr("stroke-width", 10)
    .style("stroke-dasharray", ("40, 20"))
    .attr('stroke', 'url(#svgGradient)')
    .attr('fill', 'none');
  }
}
</script>

<style lang="sass" scoped>
.main
  align-items: center
  text-align: center
  height: 100vh
  padding: 80px

.title
  margin-bottom: 0.7em
  font-weight: 700
  margin: auto

.green
  color: #4DCF33

.red
  color: #F00

.subtitle
  font-weight: 300

.flight
  width: 2000px
  height: 510px
  position: relative
  margin: 20em auto

.map-pin
  position: absolute
  top: 130px
  left: 0
  transform: translateX(-50%)

.squat
  position: absolute
  top: -160px
  left: 0
  transform: translateX(-50%)

.pig
  position: absolute
  top: -100px
  right: 0
  transform: translateX(50%)

#path
  z-index: 2
  position: absolute
  top: 0px
  left: 0

.plane-box
  position: absolute
  transform: translate(-50%, 0)
  z-index: 4

.background
  position: fixed
  top: 0
  left: 0
  // width: auto
  height: 100%
  z-index: -1
  opacity: 0.8
</style>