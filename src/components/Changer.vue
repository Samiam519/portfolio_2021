<template>
  <div id="changer-wrapper" class="is-absolute">
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.66 150.66">
      <path id="path" class="black-stroke" d="M15.23,21.78A107.48,107.48,0,0,1,122.72,129.27"/>
      <g id="drag">
        <path class="yellow"
              d="M51.53,57.63h0A34.33,34.33,0,1,1,93.09,82.74,34.34,34.34,0,0,1,51.53,57.63ZM82,37.82a11.93,11.93,0,1,0,14.42,8.77A12,12,0,0,0,82,37.82Z"/>
        <path class="dark-yellow"
              d="M59.22,55.73h0a26.41,26.41,0,1,1,32,19.32A26.41,26.41,0,0,1,59.22,55.73Zm6.38-1.57v0A19.88,19.88,0,1,0,80.1,30.11,19.88,19.88,0,0,0,65.61,54.2Z"/>
        <circle class="yellow" cx="84.86" cy="49.41" r="23.14"/>
        <path class="yellow"
              d="M52.51,72c-4.78,7.16-16.82,15.19-27.89,16.13,0,0,1.32,19.1,23.93,24.6,13.56,0,29.52-12.17,29.52-12.17a52.41,52.41,0,0,0,11.5-12A39.47,39.47,0,0,1,52.51,72Z"/>
      </g>
      <path class="white-stroke" d="M146.92,124.2a34.35,34.35,0,0,1-48.4,4" @click="next"/>
      <path class="white-stroke" d="M15.6,50.58A34.33,34.33,0,0,1,17.84,2.07" @click="prev"/>
    </svg>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"

export default {
  name: "Changer",
  props:{
    carouselIndex: Number
  },
  data(){
    return {
      target: null,
      path: null,
      bounds: null,
      clamp: null,
      prevProgress: 0.5,
      tl: null
    }
  },
  mounted(){
    gsap.registerPlugin(Draggable, MotionPathPlugin);
    setTimeout(()=> {
      this.target = document.getElementById("drag");
      this.path = document.getElementById("path");
      this.bounds = this.path.getBBox();
      this.clamp = gsap.utils.clamp(0, 1);

      console.log(this.path)
      console.log(this.target)
      console.log(this.bounds)
      console.log(this.clamp)
      this.tl = gsap.timeline({paused: true})
          .to(this.target, {motionPath: {
              path: this.path,
              align: this.path,
              autoRotate: false,
              alignOrigin: [0.5, 0.5]
            }, immediateRender: true, ease: "none"})

      Draggable.create(this.target, {type: "x", onDrag: ()=> {
          let progress = this.clamp((this.x - this.bounds.x)  / this.bounds.width);
          if (progress !== this.prevProgress) {
            this.tl.progress(progress);
            this.tl.progress(progress);
            this.prevProgress = progress;
            console.log(progress);
          } else {
            return false;
          }
        }});
    }, 1000);

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
  right: 1em;
  top: 1em;
  width: 12em;
}
</style>