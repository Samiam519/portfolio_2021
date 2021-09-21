<template>
  <div id="navigation-wrapper" class="is-absolute">
    <svg id="navigation-items" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225 225">
      <g id="navigation-names">
        <text class="cls-text" transform="translate(20.52 73.28) rotate(-90)" @click="change(0)"
              v-bind:class="{ activeNavigation: carouselIndex === 0 }">Contact
        </text>
        <text class="cls-text" transform="matrix(0.13, -0.99, 0.99, 0.13, 50.7, 76.06)" @click="change(1)"
              v-bind:class="{ activeNavigation: carouselIndex === 1 }">About Me
        </text>
        <text class="cls-text" transform="translate(80.78 83.35) rotate(-67.76)" @click="change(2)"
              v-bind:class="{ activeNavigation: carouselIndex === 2 }">Home
        </text>
        <text class="cls-text" transform="translate(107.55 101) rotate(-49.5)" @click="change(3)"
              v-bind:class="{ activeNavigation: carouselIndex === 3 }">Maximus
        </text>
        <text class="cls-text" transform="translate(128.39 126.94) rotate(-40.5)" @click="change(4)"
              v-bind:class="{ activeNavigation: carouselIndex === 4 }">DSA
        </text>
        <text class="cls-text" transform="translate(143.04 152.38) rotate(-22.24)" @click="change(5)"
              v-bind:class="{ activeNavigation: carouselIndex === 5 }">Quidditch
        </text>
        <text class="cls-text" transform="translate(150.06 182.97) rotate(-7.62)" @click="change(6)"
              v-bind:class="{ activeNavigation: carouselIndex === 6 }">Accomplish
        </text>
        <text class="cls-text" transform="translate(150.06 213.99)" @click="change(7)"
              v-bind:class="{ activeNavigation: carouselIndex === 7 }">LunchLaunch
        </text>
      </g>
      <g id="navigation-boxes">
        <rect class="black" x="5.37" y="79.91" width="21.09" height="21.09" rx="6.26" @click="change(0)"
              v-bind:class="{ activeNavigation: carouselIndex === 0 }"/>
        <rect class="black" x="31.79" y="82.14" width="21.09" height="21.09" rx="6.26"
              transform="translate(72.02 190.18) rotate(-172.38)" @click="change(1)"
              v-bind:class="{ activeNavigation: carouselIndex === 1 }"/>
        <rect class="black" x="57.94" y="89.9" width="21.09" height="21.09" rx="6.26"
              transform="translate(187.38 75.07) rotate(112.24)" @click="change(2)"
              v-bind:class="{ activeNavigation: carouselIndex === 2 }"/>
        <rect class="black" x="81.25" y="104.09" width="21.09" height="21.09" rx="6.26"
              transform="translate(238.58 119.28) rotate(130.5)" @click="change(3)"
              v-bind:class="{ activeNavigation: carouselIndex === 3 }"/>
        <rect class="black" x="99.82" y="122.96" width="21.09" height="21.09" rx="6.26"
              transform="translate(281 163.35) rotate(139.5)" @click="change(4)"
              v-bind:class="{ activeNavigation: carouselIndex === 4 }"/>
        <rect class="black" x="114" y="146.27" width="21.09" height="21.09" rx="6.26"
              transform="translate(299.19 254.84) rotate(157.76)" @click="change(5)"
              v-bind:class="{ activeNavigation: carouselIndex === 5 }"/>
        <rect class="black" x="121.76" y="172.42" width="21.09" height="21.09" rx="6.26"
              transform="translate(296.12 27.58) rotate(82.38)" @click="change(6)"
              v-bind:class="{ activeNavigation: carouselIndex === 6 }"/>
        <rect class="black" x="123.99" y="198.85" width="21.09" height="21.09" rx="6.26"
              transform="translate(-74.86 343.94) rotate(-90)" @click="change(7)"
              v-bind:class="{ activeNavigation: carouselIndex === 7 }"/>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    carouselIndex: Number
  },
  methods: {
    change(ind) {
      this.$emit('change', ind)
    }
  }
}
</script>