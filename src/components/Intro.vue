<template>
  <div class="intro-container">
    <audio id="click" class="hidden">
      <source src="../assets/sounds/partial.wav" type="audio/wav">
    </audio>
    <div class="logo">
      <svg width="250px" height="350px" viewBox="0 0 250 350" version="1.1" xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="slide" class="logo-top">
          <circle class="pure-white" cx="127.28" cy="209.67" r="60.27"/>
          <rect class="dark-grey" x="119.15" y="156.7" width="16.27" height="16.27" rx="1.2"/>
          <rect class="dark-grey" x="96.41" y="161.91" width="16.27" height="16.27" rx="1.2"
                transform="translate(-56.58 52.22) rotate(-22.24)"/>
          <rect class="dark-grey" x="119.15" y="245.53" width="16.27" height="16.27" rx="1.2"/>
          <rect class="dark-grey" x="164.36" y="201.54" width="16.27" height="16.27" rx="1.2"/>
          <rect class="dark-grey" x="75.64" y="201.54" width="16.27" height="16.27" rx="1.2"/>
          <rect class="dark-grey" x="80.07" y="179.02" width="16.27" height="16.27" rx="1.2"
                transform="translate(-118.6 193.19) rotate(-66.44)"/>
          <rect class="dark-grey" x="143.12" y="162.28" width="16.27" height="16.27" rx="1.2"
                transform="translate(-63.72 245.92) rotate(-67.76)"/>
          <rect class="dark-grey" x="159.43" y="179.4" width="16.27" height="16.27" rx="1.2"
                transform="translate(-60.99 82.61) rotate(-23.56)"/>
          <rect class="dark-grey" x="141.57" y="240.7" width="16.27" height="16.27" rx="1.2"
                transform="translate(-83.04 75.17) rotate(-22.24)"/>
          <rect class="dark-grey" x="157.91" y="223.59" width="16.27" height="16.27" rx="1.2"
                transform="translate(-112.73 291.3) rotate(-66.44)"/>
          <rect class="dark-grey" x="96.7" y="241.22" width="16.27" height="16.27" rx="1.2"
                transform="translate(-165.65 252.02) rotate(-67.76)"/>
          <rect class="dark-grey" x="80.39" y="224.1" width="16.27" height="16.27" rx="1.2"
                transform="translate(-85.45 54.74) rotate(-23.56)"/>
        </g>
        <g id="viewmaster" class="logo-bottom">
          <polygon class="viewmaster-filler" points="55.1,193.3 74.4,285.9 179.7,285.9 196.2,193.3 "/>
          <path class="yellow" d="M210,191.32A20.08,20.08,0,0,0,226.28,204a26.7,26.7,0,0,1-7.14,4.51,17.19,17.19,0,0,0-9.85-3.62l-1.8-.21-.63-12.06A32,32,0,0,0,210,191.32Z"/>
          <path class="yellow" d="M211.27,184.11h0a17.46,17.46,0,1,1,17.46,17.46A17.46,17.46,0,0,1,211.27,184.11ZM228.73,178a6.07,6.07,0,1,0,6.05,6.09,6.07,6.07,0,0,0-6.05-6.09Z"/>
          <path class="dark-yellow" d="M215.3,184.11h0a13.43,13.43,0,1,1,13.43,13.43A13.43,13.43,0,0,1,215.3,184.11Zm3.34,0v0A10.11,10.11,0,1,0,228.73,174,10.11,10.11,0,0,0,218.64,184.13Z"/>
          <circle class="yellow" cx="228.73" cy="184.11" r="11.77"/>
          <path class="red" d="M44.35,204.45c.21-4.52.57-12.4.87-18.14.45-8.51,4.35-10.94,6.85-12.48s16.88-.9,27.7-.9c11.77,6.91,27.82,9,45.14,9.6,17.32-.63,33.37-2.69,45.13-9.6,10.83,0,25.21-.63,27.71.9s6.4,4,6.84,12.48c.3,5.72.65,13.62.84,18.14A681.27,681.27,0,0,0,44.35,204.45Z"/>
          <path class="red" d="M205.5,261.82c-.88,14.34-6.57,47.08-8.43,51.27-2,4.6-8,5.12-8,5.12H60.76s-6-.51-8-5.12c-1.82-4.19-7.55-36.94-8.44-51.26a681.14,681.14,0,0,0,80.38,4.76A688.38,688.38,0,0,0,205.5,261.82Z"/>
          <path class="red" d="M26.33,222.13v22A14.89,14.89,0,0,0,40.7,259a679.71,679.71,0,0,0,84,5.21A686.33,686.33,0,0,0,209.11,259a14.9,14.9,0,0,0,14.37-14.88v-22a14.91,14.91,0,0,0-14.37-14.87,677.91,677.91,0,0,0-168.41,0A14.91,14.91,0,0,0,26.33,222.13Zm7.16,0a7.79,7.79,0,0,1,7.77-7.76,667.78,667.78,0,0,1,167.38,0,7.79,7.79,0,0,1,7.73,7.75v22a7.81,7.81,0,0,1-7.77,7.77,672.53,672.53,0,0,1-167.38,0,7.79,7.79,0,0,1-7.73-7.76Z"/>
          <path class="dark-grey" d="M41.26,214.38a667.78,667.78,0,0,1,167.38,0,7.79,7.79,0,0,1,7.73,7.75v22a7.81,7.81,0,0,1-7.77,7.77,672.53,672.53,0,0,1-167.38,0,7.79,7.79,0,0,1-7.73-7.76v-22A7.79,7.79,0,0,1,41.26,214.38Z"/>
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
  height: 80%;
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

.logo-bottom {
  animation-duration: 1.5s;
  animation-name: logo-anim-bottom;
}

.logo-top {
  animation-duration: 1.5s;
  animation-name: logo-anim-top;
}

.viewmaster-filler{
  fill: #EFEAE4;
  animation: animate-fill 0.5s forwards;
  animation-delay: 0.75s;
}

@-webkit-keyframes logo-anim-bottom
{
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
@-moz-keyframes logo-anim-bottom
{
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
@-ms-keyframes logo-anim-bottom
{
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
@keyframes logo-anim-bottom
{
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

@-webkit-keyframes logo-anim-top
{
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
@-moz-keyframes logo-anim-top
{
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
@-ms-keyframes logo-anim-top
{
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
@keyframes logo-anim-top
{
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

@-webkit-keyframes fade-out
{
  from {
    opacity: 100%;
  }
  to {
    display: none;
    opacity: 0;
  }
}
@-moz-keyframes fade-out
{
  from {
    opacity: 100%;
  }
  to {
    display: none;
    opacity: 0;
  }
}
@-ms-keyframes fade-out
{
  from {
    opacity: 100%;
  }
  to {
    display: none;
    opacity: 0;
  }
}
@keyframes fade-out
{
  from {
    opacity: 100%;
  }
  to {
    display: none;
    opacity: 0;
  }
}

@-webkit-keyframes animate-fill
{
  from {
    fill: #EFEAE4;
  }
  to {
    fill: #30332A;
  }
}
@-moz-keyframes animate-fill
{
  from {
    fill: #EFEAE4;
  }
  to {
    fill: #30332A;
  }
}
@-ms-keyframes animate-fill
{
  from {
    fill: #EFEAE4;
  }
  to {
    fill: #30332A;
  }
}
@keyframes animate-fill
{
  from {
    fill: #EFEAE4;
  }
  to {
    fill: #30332A;
  }
}

/*@keyframes zoom-in {
  from{transform: scale(1,1)}
  to{transform: scale(50,50)  translateY(-15%)}
}*/
</style>