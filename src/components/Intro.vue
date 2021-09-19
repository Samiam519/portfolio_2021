<template>
  <div class="intro-container">
    <audio id="click" class="hidden">
      <source src="../assets/sounds/partial.wav" type="audio/wav">
    </audio>
    <div class="logo">
      <svg width="250px" height="350px" viewBox="0 0 250 350" version="1.1" xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="slide" class="logo-top">
          <circle class="cls-1" cx="127.28" cy="209.67" r="60.27"/>
          <rect class="cls-2" x="119.15" y="156.7" width="16.27" height="16.27" rx="1.2"/>
          <rect class="cls-2" x="96.41" y="161.91" width="16.27" height="16.27" rx="1.2"
                transform="translate(-56.58 52.22) rotate(-22.24)"/>
          <rect class="cls-2" x="119.15" y="245.53" width="16.27" height="16.27" rx="1.2"/>
          <rect class="cls-2" x="164.36" y="201.54" width="16.27" height="16.27" rx="1.2"/>
          <rect class="cls-2" x="75.64" y="201.54" width="16.27" height="16.27" rx="1.2"/>
          <rect class="cls-2" x="80.07" y="179.02" width="16.27" height="16.27" rx="1.2"
                transform="translate(-118.6 193.19) rotate(-66.44)"/>
          <rect class="cls-2" x="143.12" y="162.28" width="16.27" height="16.27" rx="1.2"
                transform="translate(-63.72 245.92) rotate(-67.76)"/>
          <rect class="cls-2" x="159.43" y="179.4" width="16.27" height="16.27" rx="1.2"
                transform="translate(-60.99 82.61) rotate(-23.56)"/>
          <rect class="cls-2" x="141.57" y="240.7" width="16.27" height="16.27" rx="1.2"
                transform="translate(-83.04 75.17) rotate(-22.24)"/>
          <rect class="cls-2" x="157.91" y="223.59" width="16.27" height="16.27" rx="1.2"
                transform="translate(-112.73 291.3) rotate(-66.44)"/>
          <rect class="cls-2" x="96.7" y="241.22" width="16.27" height="16.27" rx="1.2"
                transform="translate(-165.65 252.02) rotate(-67.76)"/>
          <rect class="cls-2" x="80.39" y="224.1" width="16.27" height="16.27" rx="1.2"
                transform="translate(-85.45 54.74) rotate(-23.56)"/>
        </g>
        <g id="viewmaster" class="logo-bottom">
          <path class="cls-3"
                d="M42.18,188.86A20.09,20.09,0,0,1,25.9,201.55,26.76,26.76,0,0,0,33,206.07a17.15,17.15,0,0,1,9.86-3.62l1.8-.21.62-12.06A33.1,33.1,0,0,1,42.18,188.86Z"/>
          <path class="cls-3"
                d="M23.46,199.11a17.46,17.46,0,1,1,17.46-17.46h0A17.48,17.48,0,0,1,23.46,199.11Zm0-23.53a6.07,6.07,0,1,0,6.09,6.07,6.06,6.06,0,0,0-6.09-6.07Z"/>
          <path class="cls-4"
                d="M23.46,195.08a13.43,13.43,0,1,1,13.43-13.43h0A13.45,13.45,0,0,1,23.46,195.08Zm0-23.54a10.11,10.11,0,1,0,10.09,10.13v0A10.12,10.12,0,0,0,23.46,171.54Z"/>
          <circle class="cls-3" cx="23.46" cy="181.65" r="11.77"/>
          <path class="cls-5"
                d="M207.83,202c-.2-4.52-.57-12.4-.86-18.14-.45-8.51-4.35-10.94-6.85-12.48s-16.88-.9-27.7-.9c-11.77,6.91-27.82,9-45.14,9.6-17.32-.63-33.37-2.69-45.13-9.6-10.83,0-25.21-.63-27.71.9s-6.4,4-6.84,12.48c-.3,5.72-.65,13.61-.85,18.14A681.27,681.27,0,0,1,207.83,202Z"/>
          <path class="cls-5"
                d="M46.69,259.36c.88,14.34,6.56,47.08,8.43,51.27,2.05,4.6,8,5.12,8,5.12H191.43s6-.51,8-5.12c1.82-4.2,7.54-36.94,8.43-51.27a681,681,0,0,1-80.37,4.77A690.42,690.42,0,0,1,46.69,259.36Z"/>
          <path class="cls-6"
                d="M211.49,204.8a677.91,677.91,0,0,0-168.41,0,14.89,14.89,0,0,0-14.37,14.87v22a14.89,14.89,0,0,0,14.37,14.88,690.28,690.28,0,0,0,84.41,5.21,679.83,679.83,0,0,0,84-5.21,14.91,14.91,0,0,0,14.37-14.88v-22A14.89,14.89,0,0,0,211.49,204.8Zm7.21,36.88a7.81,7.81,0,0,1-7.73,7.76,672.53,672.53,0,0,1-167.38,0,7.8,7.8,0,0,1-7.77-7.77v-22a7.78,7.78,0,0,1,7.73-7.75,667.78,667.78,0,0,1,167.38,0,7.79,7.79,0,0,1,7.77,7.76Z"/>
          <path class="cls-2"
                d="M210.93,211.92a667.78,667.78,0,0,0-167.38,0,7.78,7.78,0,0,0-7.73,7.75v22a7.8,7.8,0,0,0,7.77,7.77,672.53,672.53,0,0,0,167.38,0,7.81,7.81,0,0,0,7.73-7.76v-22A7.79,7.79,0,0,0,210.93,211.92Z"/>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",
  mounted() {
    setTimeout(function () {
      let click = document.getElementById("click");
      click.play();
    }, 250);
    setTimeout(()=> {
      this.$emit('hide')
    }, 1250);
  }
}
</script>

<style scoped>
.intro-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90%;
}
.logo {
  margin-bottom: 1em;
  animation: fade-out 0.5s forwards;
  animation-delay: 0.75s;
}

.logo-bottom,
.logo-top {
  display: inline-block;
  position: relative;
}

@keyframes logo-anim-bottom {
  from {
    top: 0;
  }
  26% {
    top: 0;
  }
  29% {
    top: 15px;
  }
  40% {
    top: 0;
  }
}

@keyframes logo-anim-top {
  from {
    top: -55px;
  }
  25% {
    top: -75px;
  }
  30% {
    top: 15px;
  }
  40% {
    top: 0;
  }
}

@keyframes fade-out {
  from {
    opacity: 100%;
  }
  to {
    display: none;
    opacity: 0;
  }
}

.logo-bottom {
  animation-duration: 1.5s;
  animation-name: logo-anim-bottom;
}

.logo-top {
  animation-duration: 1.5s;
  animation-name: logo-anim-top;
}

.cls-1 {
  fill: #ffffff;
}

.cls-2 {
  fill: #30332a;
}

.cls-3 {
  fill: #fdf388;
}

.cls-4 {
  fill: #e0d580;
}

.cls-5 {
  fill: #ed5959;
}

.cls-6 {
  fill: #ed5858;
}
</style>