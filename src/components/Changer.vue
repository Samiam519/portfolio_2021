<template>
  <div id="changer-wrapper" class="is-absolute">
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198.51 199.76">
      <path id="path" class="no-stroke" d="M46.52,45.59A107.48,107.48,0,0,1,154,153.08"/>
      <g id="end1">
        <path class="white-stroke"
              d="M24.7,83.07a31.2,31.2,0,0,1-10.22-5.64,40.21,40.21,0,0,1-7.25-9.28A46.49,46.49,0,0,1,7.23,23a40.21,40.21,0,0,1,7.25-9.28A32.77,32.77,0,0,1,24.7,8.11a35,35,0,0,0-8.85,7.1A37.72,37.72,0,0,0,9,24,44.48,44.48,0,0,0,9,67.16,37.5,37.5,0,0,0,15.86,76,36.31,36.31,0,0,0,24.7,83.07Z"/>
      </g>
      <g id="end2">
        <path class="white-stroke"
              d="M191.7,171.21a31.53,31.53,0,0,1-5.64,10.23,40.17,40.17,0,0,1-9.28,7.24,46.43,46.43,0,0,1-45.12,0,40.21,40.21,0,0,1-9.28-7.25,32.46,32.46,0,0,1-5.64-10.22,34.87,34.87,0,0,0,7.1,8.85,37.72,37.72,0,0,0,8.81,6.88,44.41,44.41,0,0,0,43.14,0,37.46,37.46,0,0,0,8.8-6.88A36.55,36.55,0,0,0,191.7,171.21Z"/>
      </g>
      <g id="drag">
        <path class="yellow"
              d="M51.76,82.81a38.09,38.09,0,0,1-20.54-.64,155.8,155.8,0,0,1-6.52,61.16,20,20,0,0,0,20.8,19.11c11-.47,17.37-13.95,19.1-20.8,4.12-16.28,5.23-45.23,3.09-67.11A38,38,0,0,1,51.76,82.81Z"/>
        <path class="yellow"
              d="M9.19,53.82h0A34.33,34.33,0,1,1,50.75,78.93,34.34,34.34,0,0,1,9.19,53.82ZM39.66,34a11.93,11.93,0,1,0,14.42,8.77A11.95,11.95,0,0,0,39.66,34Z"/>
        <path class="dark-yellow"
              d="M16.88,51.92h0a26.41,26.41,0,1,1,32,19.31A26.42,26.42,0,0,1,16.88,51.92Zm6.38-1.57v0a19.88,19.88,0,1,0,14.49-24.1A19.88,19.88,0,0,0,23.27,50.39Z"/>
        <circle class="yellow" cx="42.52" cy="45.59" r="23.14"/>
      </g>

    </svg>
  </div>
</template>

<script>
import {gsap} from "gsap";
import {MotionPathPlugin} from "gsap/MotionPathPlugin"
import {Draggable} from "gsap/Draggable"

export default {
  name: "Changer",
  props: {
    carouselIndex: Number
  },
  data() {
    return {
      target: null,
      path: null,
      knob: null,
      bounds: null,
      clamp: null,
      prevProgress: 0,
      tl: null
    }
  },
  mounted() {
    gsap.registerPlugin(MotionPathPlugin, Draggable);
    setTimeout(() => {
      this.target = document.getElementById("drag");
      this.path = document.getElementById("path");
      this.knob = document.getElementById("knob");
      this.bounds = this.path.getBBox();
      this.clamp = gsap.utils.clamp(0, 1);

      this.tl = gsap.timeline({paused: true})
          .to(this.target, {
            motionPath: {
              path: this.path,
              align: this.path,
              autoRotate: true,
              alignOrigin: [0.56, 0.228],
            }, immediateRender: true, ease: "none"
          })

      let self = this;
      Draggable.create(self.target, {
        type: "x", onDrag: function () {
          let progress = self.clamp((this.x - self.bounds.x) / self.bounds.width);
          if (progress !== self.prevProgress) {
            self.tl.progress(progress);
            self.prevProgress = progress;
            // if whole number, change slide and reset to middle
            if (progress % 1 === 0) {
              if (progress === 0) {
                self.prev()
              }
              if (progress === 1) {
                self.next()
              }
            }
          } else {
            return false;
          }
        }
      });
    }, 1500);


  },
  methods: {
    prev() {
      if (this.carouselIndex === 0) {
        this.$emit('change', 7)
      } else {
        this.$emit('change', this.carouselIndex - 1)
      }
    },
    next() {
      if (this.carouselIndex === 7) {
        this.$emit('change', 0)
      } else {
        this.$emit('change', this.carouselIndex + 1)
      }
    }
  }
}
</script>

<style>
#changer-wrapper {
  right: 0.5em;
  top: 0.5em;
  width: 12em;
}

#knob {
  transform-origin: 10% 90%;
}
</style>