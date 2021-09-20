<template>
  <div id="changer-wrapper">
    <b-button @click="prev">Previous</b-button>
    <b-button @click="next">Next</b-button>
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
  width: 10vw;
}
</style>