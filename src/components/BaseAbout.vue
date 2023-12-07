<template>
  <div class="about">
    <img class="squat" :src=squat>
    <p class="subtitle">Сквот 17б збирає</p>
    <h1 class="title">На третій дрон-камікадзе</h1>
    <img class="plane" :src=plane>
    <p class="subtitle">Здатний нести до 3кг вибухівки на 40км</p>
    <div class="button-block">
      <div class="bonus">За донат від 200₴ подарунок на барі</div>
      <button>
        <img class="telegram" :src=telegram>
        Звітність
      </button>
      <button class="white" >
        <a href="https://send.monobank.ua/jar/8ev54TuhtG" target="_blank">
          Заправити літачок
        </a>
        </button>
    </div>
  </div>
</template>

<script>
import squat from '../assets/icons/squat.png'
import plane from '../assets/icons/plane_2.svg'
import telegram from '../assets/icons/telegram.png'

export default {
  name: 'BaseMain',
  data() {
    return {
      squat,
      plane,
      telegram
    }
  },
  methods: {
    // fillPlane() {
    //   this.$router.push('/fill-plane')
    // }
  }
}
</script>

<style lang="sass" scoped>
.about
  // position: relative
  align-items: center
  text-align: center
  height: calc(100% - 128px)
  padding: 64px 16px 35px

.squat
  width: 64px

.subtitle
  font-size: 14px
  font-weight: 300

.title
  font-size: 24px
  font-weight: 700

.plane
  position: fixed
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  z-index: -1
  width: 100%

button
  border-radius: 44px
  background-color: black
  outline: none
  color: white
  display: flex
  align-items: center
  justify-content: center
  border: none
  padding: 16px 32px
  cursor: pointer
  font-size: 16px
  font-weight: 700
  width: 80%

button.white
  background-color: white
  color: black
  margin-top: 16px

.button-block
  position: fixed
  width: 100%
  bottom: 35px
  left: 0
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

a
  text-decoration: none
  color: inherit

.bonus
  background: linear-gradient(90deg, #6DFCD1 0%, #006CD0 100%)
  padding: 8px 16px
  border-radius: 8px
  font-size: 12px
  margin-top: 16px
</style>