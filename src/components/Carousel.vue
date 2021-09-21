<template>
  <div>
    <div id="click-sounds" class="hidden">
      <audio id="click-1">
        <source src="../assets/sounds/click-1.wav" type="audio/wav">
      </audio>
      <audio id="click-2">
        <source src="../assets/sounds/click-2.wav" type="audio/wav">
      </audio>
      <audio id="click-3">
        <source src="../assets/sounds/click-3.wav" type="audio/wav">
      </audio>
      <audio id="click-4">
        <source src="../assets/sounds/click-4.wav" type="audio/wav">
      </audio>
      <audio id="click-5">
        <source src="../assets/sounds/click-5.wav" type="audio/wav">
      </audio>
    </div>
    <b-carousel
        v-model="index"
        :autoplay="false"
        @change="playSound"
        :indicator="false"
        icon-size="is-large">
      <b-carousel-item>
        <section class="hero is-fullheight is-dark">
          <div class="hero-body slide-body has-text-black">
            <h1 class="title is-1 has-text-grey-dark is-highlighted blue-highlight">contact</h1>
            <p>Thanks for taking the time to check out my work!
            </p>
            <p class="mb-5">
              Have an idea for a new logo or have any questions about my past works? Hit me up!
            </p>
            <form action="https://formspree.io/f/mbjqwakb" method="POST" target="_blank" class="is-fullwidth">
              <div>
                <b-field label="Name" horizontal class="m-0">
                  <b-input required expanded class="is-fullwidth p-1">
                  </b-input>
                </b-field>
                <b-field label="Email" horizontal class="m-0">
                  <b-input
                      type="email"
                      required
                      name="_replyto"
                      class="is-fullwidth p-1"
                      validation-message="Email address invalid">
                  </b-input>
                </b-field>
                <b-field label="Message" horizontal class="m-0">
                  <b-input maxlength="200" type="textarea" required class="is-fullwidth p-1"></b-input>
                </b-field>
                <b-button type="submit" class="is-primary is-pulled-right">Submit</b-button>
              </div>
            </form>
          </div>
        </section>
      </b-carousel-item>
      <b-carousel-item>
        <section class="hero is-fullheight is-dark">
          <div class="hero-body slide-body has-text-black">
            <h1 class="title is-1 has-text-grey-dark is-highlighted red-highlight">about me</h1>
            <div class="tile is-ancestor">
              <div class="tile">
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child notification is-warning has-text-dark">
                    <p>I strive for all of the
                      products I create to be intuitive and innovative in an out-of-the-div way and I hope that the
                      lasting mark
                      I make on my small corner of the web reflects that goal. My current favorite frameworks are <a
                          href="https://vuejs.org/v2/guide/" target="_blank">Vue js</a> and <a
                          href="https://bulma.io/documentation/" target="_blank">Bulma</a> for
                      CSS. That's
                      what I used for this
                      site.</p>
                  </article>
                  <article class="tile is-child notification is-link has-text-dark">
                    <p>
                      I try to reinvent my personal website around once a year, to accommodate changes in my personal
                      aesthetic
                      tastes, stay current on design trends, and to challenge myself to incorporate a new frontend
                      feature that
                      requires skills I don't have yet. In this iteration of my portfolio, I wanted to reimagine what a
                      showcase
                      could look outside of a single page scroller layout (if you're
                      looking
                      at this on mobile, I promise it looks cooler on desktop).
                    </p>
                  </article>
                </div>
              </div>
              <div class="tile">
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child">
                    <img src="../assets/avi_daria.png" width="80%">
                  </article>
                  <article class="tile is-child notification is-primary">
                    <p>
                      Born and raised in Miami Beach by parents in tech-adjacent fields, while growing up I naturally
                      gravitated
                      toward computers. I started designing t-shirts in MS Paint while in elementary school.
                      Throughout high school and college, I continued to cultivate these skills, mostly through
                      freelance jobs
                      designing logos, websites, and app mockups.
                    </p>
                  </article>
                </div>
              </div>
            </div>
            <div id="social-icons">

            </div>
          </div>
        </section>
      </b-carousel-item>
      <b-carousel-item>
        <section class="hero is-fullheight is-dark">
          <div class="hero-body slide-body has-text-black">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 823.61 684">
              <g id="name">
                <g id="grid2">
                  <line class="blue-stroke" x1="477.04" y1="20.23" x2="412.55" y2="341.33"/>
                  <line class="blue-stroke" x1="536.61" y1="32.19" x2="472.12" y2="353.29"/>
                  <line class="blue-stroke" x1="596.18" y1="44.15" x2="531.69" y2="365.26"/>
                  <line class="blue-stroke" x1="655.75" y1="56.12" x2="591.27" y2="377.22"/>
                  <line class="blue-stroke" x1="715.32" y1="68.08" x2="650.84" y2="389.18"/>
                  <line class="blue-stroke" x1="774.89" y1="80.04" x2="710.41" y2="401.15"/>
                  <line class="blue-stroke" x1="808.74" y1="130.02" x2="435.13" y2="54.99"/>
                  <line class="blue-stroke" x1="796.78" y1="189.59" x2="423.16" y2="114.56"/>
                  <line class="blue-stroke" x1="784.81" y1="249.16" x2="411.2" y2="174.13"/>
                  <line class="blue-stroke" x1="772.85" y1="308.73" x2="399.24" y2="233.7"/>
                  <line class="blue-stroke" x1="760.89" y1="368.3" x2="387.27" y2="293.27"/>
                </g>
                <g id="triangle-lines">
                  <path class="yellow" d="M746.6,620.29l8.92-6.72L784,592.07l-.93-10.1q-23,17.32-45.92,34.67Z"/>
                  <path class="yellow" d="M726.4,612.5l4.33-3.27L782,570.57l-1-11.09-64.92,49Z"/>
                  <path class="yellow"
                        d="M705.37,604.39l11.93-9q22.8-17.22,45.58-34.48,8.5-6.43,17-12.85l-1.06-11.48-84.29,63.64Z"/>
                  <path class="yellow" d="M788.06,636.29l-.86-9.3-7.86,5.93Z"/>
                  <path class="yellow" d="M767.26,628.26,786,614.11l-1-10.62L757.3,624.42Z"/>
                  <path class="yellow"
                        d="M538,539.81l35.88-27.07q23-17.33,46-34.61,21.67-16.35,43.35-32.72l31.33-23.62,51-38.58,17.91-13.55-1-10.32q-12.37,9.32-24.75,18.64-41,31-82,62l-19.36,14.62-105.5,82.49Z"/>
                  <path class="yellow"
                        d="M705.42,555.77q25.46-19.21,50.87-38.48l19.43-14.67-1-10.32-5.22,3.94q-46.23,34.92-92.49,69.81l-24,18.14,9.73,3.76Q684.1,571.86,705.42,555.77Z"/>
                  <path class="yellow"
                        d="M661.69,506.34q-33.41,25.21-66.84,50.39l-4.4,3.32L600.59,564l41-31q30.66-23.16,61.34-46.28,27.94-21.09,55.85-42.22l10.79-8.12-1-10.66c-12.46,9.42-25,18.77-37.43,28.18Q696.43,480.07,661.69,506.34Z"/>
                  <path class="yellow"
                        d="M683.85,596.09l.68-.51q16.29-12.3,32.59-24.59l60.68-45.85-1-11.08-103.33,78Z"/>
                  <path class="yellow"
                        d="M716.61,441.5q-25.7,19.39-51.38,38.82l-51.69,39L570,552.18l9.75,3.76,1.62-1.23Q611,532.34,640.65,510q26.18-19.77,52.33-39.54,24.46-18.48,49-36.95l25.62-19.33-1-10.4Z"/>
                  <path class="yellow"
                        d="M656.26,462.81,601,504.53,548.76,544,559.3,548l54.07-40.78q35.64-26.88,71.27-53.79,28.1-21.23,56.19-42.46l24.71-18.63-1-11.22L723.6,412.05Q689.94,437.43,656.26,462.81Z"/>
                  <path class="yellow"
                        d="M690.34,543.8q28.65-21.64,57.33-43.26l26-19.69-1-11.25q-10.9,8.23-21.8,16.47l-79.19,59.75L631.74,576l10.58,4.09Q666.34,561.92,690.34,543.8Z"/>
                  <path class="yellow"
                        d="M662,540.94q18.15-13.7,36.28-27.43,18.54-14,37.1-27.95,18.12-13.68,36.23-27.39l-1-10.43-62.86,47.47Q669,524.49,630.23,553.76q-9.48,7.17-19,14.31l9.75,3.77c3-2.24,5.93-4.49,8.9-6.72Q645.93,553,662,540.94Z"/>
                </g>
                <g id="grid">
                  <line class="blue-stroke" x1="42.6" y1="94.38" x2="194.93" y2="645.65"/>
                  <line class="blue-stroke" x1="101.17" y1="78.2" x2="253.5" y2="629.47"/>
                  <line class="blue-stroke" x1="159.74" y1="62.01" x2="312.06" y2="613.28"/>
                  <line class="blue-stroke" x1="218.3" y1="45.83" x2="370.63" y2="597.1"/>
                  <line class="blue-stroke" x1="276.87" y1="29.65" x2="429.2" y2="580.92"/>
                  <line class="blue-stroke" x1="335.43" y1="13.46" x2="487.76" y2="564.73"/>
                  <line class="blue-stroke" x1="388.18" y1="42.81" x2="20.87" y2="144.3"/>
                  <line class="blue-stroke" x1="404.36" y1="101.37" x2="37.05" y2="202.87"/>
                  <line class="blue-stroke" x1="420.55" y1="159.94" x2="53.24" y2="261.43"/>
                  <line class="blue-stroke" x1="436.73" y1="218.51" x2="69.42" y2="320"/>
                  <line class="blue-stroke" x1="452.91" y1="277.07" x2="85.6" y2="378.57"/>
                  <line class="blue-stroke" x1="469.68" y1="337.76" x2="102.37" y2="439.26"/>
                  <line class="blue-stroke" x1="485.86" y1="396.33" x2="118.56" y2="497.82"/>
                  <line class="blue-stroke" x1="502.05" y1="454.89" x2="134.74" y2="556.39"/>
                  <line class="blue-stroke" x1="518.23" y1="513.46" x2="150.92" y2="614.95"/>
                </g>
                <rect id="rect" class="blue dark-grey-stroke" x="408.52" y="83.87" width="270.38" height="411.32"
                      transform="translate(-20.23 41.7) rotate(-4.31)"/>
                <g id="triangles">
                  <polygon class="pure-white dark-grey-stroke large-stroke"
                           points="183.62 40.31 319.75 592.34 638.95 316.33 183.62 40.31"/>
                  <polygon class="yellow dark-grey-stroke large-stroke"
                           points="151.23 42.45 287.36 594.48 606.56 318.46 151.23 42.45"/>
                </g>
                <g id="Sam" class="logo-name-text">
                  <text class="dark-grey large-stroke" transform="matrix(0.98, -0.19, 0.19, 0.98, 176.84, 317.86)">Sam
                  </text>
                  <text class="red" transform="matrix(0.98, -0.19, 0.19, 0.98, 174.32, 311.81)">Sam</text>
                </g>
                <g id="Jimenez" class="logo-name-text animate__fadeInTopRight animate__delay-2s">
                  <text class="dark-grey large-stroke" transform="translate(151.3 412.77) rotate(-10.96)">Jimenez</text>
                  <text class="red" transform="translate(149.08 407.77) rotate(-10.96)">Jimenez</text>
                </g>
                <g id="underline">
                  <path class="dark-grey"
                        d="M638.82,354.71l25.16-5.6-.34-1-25.53,4.45-25.51,4.53-51,9.07-51,9.2-50.91,9.36c-17,3.13-34,6.07-51,9.07s-33.91,6.35-50.7,10-33.53,7.5-50.19,11.56-33.25,8.35-49.66,13.18l.34,1c7.06-.76,14.1-1.62,21.11-2.54q-11.08,2.81-22.13,5.74c34.49-4.57,68.64-10.17,102.69-16.08s67.95-12.29,101.74-19,67.46-13.75,101-21.2,67-15.3,100-24.15q-18.91,2.51-37.7,5.38Z"/>
                  <path class="blue"
                        d="M631.61,351.23l25.16-5.6-.34-1-25.53,4.45-25.51,4.54-51,9.06-51,9.2-50.91,9.36c-17,3.13-34,6.07-51,9.08s-33.91,6.34-50.7,10-33.53,7.49-50.19,11.56S267.37,420.19,251,425l.34,1q10.59-1.16,21.11-2.55-11.09,2.81-22.13,5.74c34.49-4.57,68.64-10.17,102.69-16.07s67.94-12.3,101.74-19,67.46-13.74,101-21.2,67-15.3,100-24.14q-18.91,2.49-37.7,5.38Z"/>
                </g>
                <g id="circle">
                  <circle class="dark-grey" cx="592.7" cy="483" r="30.62"/>
                  <circle class="red dark-grey-stroke" cx="588.21" cy="476.73" r="30.62"/>
                </g>
                <g id="triangle">
                  <polygon class="dark-grey" points="447.28 57.83 423.58 138.57 477.58 133.3 447.28 57.83"/>
                  <polygon class="red dark-grey-stroke" points="438.06 51.24 414.36 131.98 468.36 126.71 438.06 51.24"/>
                </g>
                <g id="thunderbolt">
                  <polygon class="dark-grey"
                           points="149.79 492.87 187.84 497.56 180.23 520.39 191.94 522.58 180.81 544.39 190.58 546.33 144.52 612.29 150.16 558.59 138.08 556.68 147.81 533.35 133.99 530.92 149.79 492.87"/>
                  <polygon class="yellow dark-grey-stroke"
                           points="144.3 488.92 182.35 493.61 174.74 516.43 186.45 518.63 175.33 540.43 185.09 542.38 139.03 608.34 144.67 554.63 132.6 552.73 142.32 529.39 128.5 526.97 144.3 488.92"/>
                </g>
                <g id="Z">
                  <polygon class="dark-grey"
                           points="43.65 175.01 69.55 161.84 106.99 178.69 95.02 215.4 133.65 229.45 107.75 241.74 66.92 228.57 80.53 189.06 43.65 175.01"/>
                  <polygon class="blue dark-grey-stroke"
                           points="40.61 168.42 66.51 155.25 103.94 172.1 91.97 208.81 130.61 222.86 104.7 235.15 63.88 221.98 77.48 182.47 40.61 168.42"/>
                </g>
                <g id="zigzag">
                  <polygon class="dark-grey"
                           points="704.03 328.93 721.59 339.91 714.57 311.81 742.67 304.9 734.76 276.25 763.52 269.01 756.06 241.13 783.94 234.98 765.72 223.79 738.5 230.59 745.74 259.13 717.2 266.37 726.04 294.77 696.57 301.93 704.03 328.93"/>
                  <polygon class="blue dark-grey-stroke"
                           points="698.55 321.82 716.11 332.8 709.08 304.7 737.18 297.79 729.28 269.14 758.03 261.9 750.57 234.02 778.45 227.87 760.23 216.68 733.01 223.48 740.25 252.02 711.72 259.26 720.55 287.66 691.08 294.82 698.55 321.82"/>
                </g>
                <g id="circles2">
                  <circle class="red dark-grey-stroke" cx="712.43" cy="91.73" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="693.63" cy="92.18" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="674.83" cy="92.63" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="656.03" cy="93.09" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="637.23" cy="93.54" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="618.43" cy="94" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="599.63" cy="94.45" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="580.83" cy="94.9" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="562.03" cy="95.36" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="543.23" cy="95.81" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="524.43" cy="96.27" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="685.66" cy="122.67" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="666.86" cy="123.13" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="648.06" cy="123.58" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="629.26" cy="124.04" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="610.45" cy="124.49" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="591.65" cy="124.94" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="753.47" cy="151.34" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="734.67" cy="151.79" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="715.87" cy="152.25" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="697.07" cy="152.7" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="678.27" cy="153.15" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="659.47" cy="153.61" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="662.91" cy="62.62" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="644.11" cy="63.07" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="625.31" cy="63.53" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="606.51" cy="63.98" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="587.71" cy="64.44" r="6.59"/>
                  <circle class="red dark-grey-stroke" cx="568.9" cy="64.89" r="6.59"/>
                </g>
                <g id="circles3">
                  <circle class="blue dark-grey-stroke" cx="366" cy="581.52" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="384.81" cy="581.52" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="403.61" cy="581.52" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="422.42" cy="581.52" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="441.22" cy="581.52" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="460.03" cy="581.52" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="478.84" cy="581.52" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="497.64" cy="581.52" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="516.45" cy="581.52" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="535.25" cy="581.52" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="554.06" cy="581.52" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="393.51" cy="611.81" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="412.32" cy="611.81" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="431.13" cy="611.81" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="449.93" cy="611.81" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="468.74" cy="611.81" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="487.54" cy="611.81" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="326.41" cy="642.1" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="345.22" cy="642.1" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="364.02" cy="642.1" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="382.83" cy="642.1" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="401.64" cy="642.1" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="420.44" cy="642.1" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="414.81" cy="551.23" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="433.61" cy="551.23" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="452.42" cy="551.23" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="471.23" cy="551.23" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="490.03" cy="551.23" r="6.59"/>
                  <circle class="blue dark-grey-stroke" cx="508.84" cy="551.23" r="6.59"/>
                </g>
                <g id="circles1">
                  <circle class="yellow dark-grey-stroke" cx="248.39" cy="92.63" r="6.59"/>
                  <circle class="yellow dark-grey-stroke" cx="229.59" cy="93.09" r="6.59"/>
                  <circle class="yellow dark-grey-stroke" cx="210.79" cy="93.54" r="6.59"/>
                  <circle class="yellow dark-grey-stroke" cx="191.99" cy="94" r="6.59"/>
                  <circle class="yellow dark-grey-stroke" cx="173.19" cy="94.45" r="6.59"/>
                  <circle class="yellow dark-grey-stroke" cx="154.39" cy="94.9" r="6.59"/>
                  <circle class="yellow dark-grey-stroke" cx="135.59" cy="95.36" r="6.59"/>
                  <circle class="yellow dark-grey-stroke" cx="116.79" cy="95.81" r="6.59"/>
                  <circle class="yellow dark-grey-stroke" cx="97.99" cy="96.27" r="6.59"/>
                  <circle class="yellow dark-grey-stroke" cx="79.19" cy="96.72" r="6.59"/>
                  <circle class="yellow dark-grey-stroke" cx="60.38" cy="97.18" r="6.59"/>
                  <circle class="yellow dark-grey-stroke" cx="259.61" cy="112.53" r="6.59"/>
                  <circle class="yellow dark-grey-stroke" cx="240.81" cy="112.98" r="6.59"/>
                  <circle class="yellow dark-grey-stroke" cx="222" cy="113.44" r="6.59"/>
                  <circle class="yellow dark-grey-stroke" cx="203.2" cy="113.89" r="6.59"/>
                  <circle class="yellow dark-grey-stroke" cx="184.4" cy="114.35" r="6.59"/>
                  <circle class="yellow dark-grey-stroke" cx="165.6" cy="114.8" r="6.59"/>
                  <circle class="yellow dark-grey-stroke" cx="146.8" cy="115.25" r="6.59"/>
                  <circle class="yellow dark-grey-stroke" cx="128" cy="115.71" r="6.59"/>
                  <circle class="yellow dark-grey-stroke" cx="109.2" cy="116.16" r="6.59"/>
                  <circle class="yellow dark-grey-stroke" cx="90.4" cy="116.62" r="6.59"/>
                  <circle class="yellow dark-grey-stroke" cx="71.6" cy="117.07" r="6.59"/>
                </g>
                <g id="subtitle">
                  <text class="logo-subtitle-text" transform="translate(276.34 459.95) rotate(-10.96)">ui designer
                    &amp;
                  </text>
                  <text class="logo-subtitle-text" transform="translate(280.08 479.26) rotate(-10.96)">frontend
                    engineer
                  </text>
                </g>
              </g>
            </svg>
          </div>
        </section>
      </b-carousel-item>
      <b-carousel-item>
        <section class="hero is-fullheight is-dark">
          <div class="hero-body slide-body has-text-black">
            <h1 class="title is-1 has-text-grey-dark is-highlighted white-highlight">maximus</h1>
            <div class="tile is-ancestor">
              <div class="tile">
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child notification is-primary">
                    <p>Since graduating from the University of Miami with a
                      bachelor’s degree in Computer Science, I’ve found a place on the R&D team at MAXIMUS, working
                      officially
                      as a Software Engineer, and unofficially as the team’s resident UI/UX specialist.</p>
                  </article>
                  <article class="tile is-child notification is-white has-text-dark">
                    <p>Catapult</p>
                  </article>
                  <article class="tile is-child notification is-warning has-text-dark">
                    <p class="title">...tiles</p>
                    <p class="subtitle">Bottom tile</p>
                  </article>
                </div>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification is-link">
                  <p class="title">Wide tile</p>
                  <p class="subtitle">Aligned with the right tile</p>
                  <div class="content">
                    <!-- Content -->
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </b-carousel-item>
      <b-carousel-item>
        <section class="hero is-fullheight is-dark">
          <div class="hero-body slide-body has-text-black">
            <h1 class="title is-1 has-text-grey-dark is-highlighted red-highlight">dsa</h1>

          </div>
        </section>
      </b-carousel-item>
      <b-carousel-item>
        <section class="hero is-fullheight is-dark">
          <div class="hero-body slide-body has-text-black">
            <h1 class="title is-1 has-text-grey-dark is-highlighted blue-highlight">quidditch</h1>

          </div>
        </section>
      </b-carousel-item>
      <b-carousel-item>
        <section class="hero is-fullheight is-dark">
          <div class="hero-body slide-body has-text-black">
            <h1 class="title is-1 has-text-grey-dark is-highlighted yellow-highlight">accomplish</h1>

          </div>
        </section>
      </b-carousel-item>
      <b-carousel-item>
        <section class="hero is-fullheight is-dark">
          <div class="hero-body slide-body has-text-black">
            <h1 class="title is-1 has-text-grey-dark is-highlighted white-highlight">lunch launch</h1>

          </div>
        </section>
      </b-carousel-item>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    carouselIndex: Number,
    soundOn: Boolean
  },
  data() {
    return {}
  },
  computed: {
    index: {
      get() {
        return this.carouselIndex
      },
      set(val) {
        this.$emit('change', val)
      }
    }
  },
  methods: {
    playSound() {
      if(this.soundOn){
        // play random click sound out of 5 options
        let allSounds = document.getElementById('click-sounds').children;
        let randomClickSound = allSounds[Math.floor(Math.random() * allSounds.length)];
        randomClickSound.play();
      }
    }
  }
}
</script>

<style>
.slide-body {
  background-color: #efe7dc;
  border-radius: 50px;
  margin: 4em auto;
  width: 100vh;
  max-width: 100vw;
  flex-direction: column;
}

.carousel-arrow .icon:hover {
  border: none !important;
  background-color: #5a5b55 !important;
}

.landing-logo {
  max-width: 77%;
}

.hero-body {
  text-align: left;
}
</style>
