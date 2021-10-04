<template>
  <section id="error" class="hero is-fullheight is-dark">
    <div class="hero-body slide-body p-0">
      <canvas id="canvas"></canvas>
    </div>
  </section>
</template>

<script>
export default {
  name: "Error",
  data() {
    return {
      speed: 30,
      scale: 0.17,
      colors: [
        '#191814',
        '#ffffff',
        '#74c7cd',
        '#ed5959',
        '#fdf388'
      ],
      canvas: null,
      cts: null,
      logoColor: null,
      moving: {
        x: 200,
        y: 300,
        xspeed: 10,
        yspeed: 10,
        img: new Image()
      }
    }
  },
  mounted() {
    this.canvas = document.getElementById("canvas");

    this.ctx = this.canvas.getContext("2d");
    //this.moving.img.src = '../assets/404.png';
    this.moving.img.src = 'https://i.imgur.com/kKcBzPF.png';

    if (window.innerWidth < 1024) {
      this.canvas.width = window.innerWidth * 2;
      this.canvas.height = window.innerHeight * 4;
    } else {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    this.pickColor();
    this.update();
  },
  methods: {
    update() {
      setTimeout(() => {
        //Draw the canvas background
        this.ctx.fillStyle = '#efe7dc';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        //Draw moving Logo and his background
        this.ctx.fillStyle = this.logoColor;
        this.ctx.fillRect(this.moving.x, this.moving.y, this.moving.img.width * this.scale, this.moving.img.height * this.scale);
        this.ctx.drawImage(this.moving.img, this.moving.x, this.moving.y, this.moving.img.width * this.scale, this.moving.img.height * this.scale);
        //Move the logo
        this.moving.x += this.moving.xspeed;
        this.moving.y += this.moving.yspeed;
        //Check for collision
        this.checkHitBox();
        this.update();
      }, this.speed)
    },
    checkHitBox() {
      if (this.moving.x + this.moving.img.width * this.scale >= this.canvas.width || this.moving.x <= 0) {
        this.moving.xspeed *= -1;
        this.pickColor();
      }

      if (this.moving.y + this.moving.img.height * this.scale >= this.canvas.height || this.moving.y <= 0) {
        this.moving.yspeed *= -1;
        this.pickColor();
      }
    },
    pickColor() {
      let random = this.colors[Math.floor(Math.random() * this.colors.length)];
      if (this.logoColor !== random) {
        this.logoColor = random
      } else {
        this.pickColor()
      }
    }
  }
}
</script>

<style>
canvas {
  width: 100%;
  height: 100%;
  border-radius: 50px;
}
</style>