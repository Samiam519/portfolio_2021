<template>
  <div id="changer-wrapper">
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.66 150.66">
      <path class="yellow"
            d="M43.19,71.8h0A34.33,34.33,0,1,1,84.75,96.91,34.34,34.34,0,0,1,43.19,71.8ZM73.66,52a11.93,11.93,0,1,0,14.42,8.77A11.94,11.94,0,0,0,73.66,52Z"/>
      <path class="dark-yellow"
            d="M50.88,69.9h0a26.41,26.41,0,1,1,32,19.31A26.42,26.42,0,0,1,50.88,69.9Zm6.38-1.57v0a19.88,19.88,0,1,0,14.49-24.1A19.88,19.88,0,0,0,57.27,68.37Z"/>
      <circle class="yellow" cx="76.52" cy="63.57" r="23.14"/>
      <path class="yellow"
            d="M44.17,86.16c-4.78,7.15-16.82,15.18-27.89,16.12,0,0,1.32,19.11,23.93,24.6,13.56,0,29.52-12.16,29.52-12.16a52.62,52.62,0,0,0,11.5-12A39.48,39.48,0,0,1,44.17,86.16Z"/>
      <path class="white-stroke" d="M144.38,104.59a34.34,34.34,0,0,1-43.31,22" @click="next"/>
      <path class="white-stroke" d="M8.11,51.94A34.33,34.33,0,0,1,25.33,6.53" @click="prev"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Changer",
  props:{
    carouselIndex: Number
  },
  methods:{
    prev(){
      if(this.carouselIndex === 0){
        this.$emit('change', 7)
      }else{
        this.$emit('change', this.carouselIndex-1)
      }
    },
    next(){
      if(this.carouselIndex === 7){
        this.$emit('change', 0)
      }else{
        this.$emit('change', this.carouselIndex+1)
      }
    }
  }
}
</script>

<style>
#changer-wrapper {
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0;
  top: 0;
  width: 13vw;
}
</style>