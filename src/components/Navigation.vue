<template>
  <div id="navigation-wrapper">
    <svg id="navigation-items" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 151 151">
      <rect class="cls-1" x="5.35" y="45.37" width="15.15" height="15.15" rx="4.49" @click="change(0)"/>
      <rect class="cls-1" x="59.86" y="62.74" width="15.15" height="15.15" rx="4.49"
            transform="translate(164.7 64.71) rotate(130.5)" @click="change(1)"/>
      <rect class="cls-1" x="24.33" y="46.98" width="15.15" height="15.15" rx="4.49"
            transform="translate(56.31 112.86) rotate(-172.38)" @click="change(2)"/>
      <rect class="cls-1" x="43.11" y="52.55" width="15.15" height="15.15" rx="4.49"
            transform="translate(125.53 35.96) rotate(112.24)" @click="change(3)"/>
      <rect class="cls-1" x="90.56" y="130.81" width="15.15" height="15.15" rx="4.49"
            transform="translate(-40.25 236.52) rotate(-90)" @click="change(4)"/>
      <rect class="cls-1" x="73.19" y="76.3" width="15.15" height="15.15" rx="4.49"
            transform="translate(196.66 95.2) rotate(139.5)" @click="change(5)"/>
      <rect class="cls-1" x="88.95" y="111.82" width="15.15" height="15.15" rx="4.49"
            transform="translate(202.08 7.89) rotate(82.38)" @click="change(6)"/>
      <rect class="cls-1" x="83.39" y="93.04" width="15.15" height="15.15" rx="4.49"
            transform="translate(213.24 159.33) rotate(157.76)" @click="change(7)"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  methods:{
    change(ind){
      this.$emit('change', ind)
    }
  }
}
</script>

<style>
.cls-1 {
  fill: #EFEAE4;
}

#navigation-wrapper {
  position: absolute;
  left: 0.5em;
  bottom: 0;
  width: 15vw;
}
#navigation-items rect:hover{
  fill: #181914;
  cursor: pointer;
  /*animation: enlarge 0.5s;*/
}

@keyframes enlarge {
  from{transform: scale(1,1)}
  to{transform: scale(2,2)}
}
.cls-1{font-size:12px;font-family:Abside-Round1, Abside;}.cls-1,.cls-2{fill:#efe7dc;}
</style>