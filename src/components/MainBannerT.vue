<script>
import $ from "jquery";
import MainBanner from '/src/assets/js/MainBanner';

export default {
  mounted() {
    const mainBanner = new MainBanner(
      $(".main-banner .banner--box"),
      $(".main-banner .banner--frame"),
      $(".main-banner ul"),
      $(".main-banner li"),

      $(".main-banner .arrow-box-left"),
      $(".main-banner .arrow-box-right")
    );

    mainBanner.autoSlide();
  },
}
</script>

<template>
  <section class="main-banner">
    <div class="outer">
      <div class="inner">

        <div class="banner--box">
            <div class="banner--frame">
                <ul>
                    <a href="#"><li><img src="/src/assets/img/home/MainBanner/1.png"></li></a>
                    <a href="#"><li><img src="/src/assets/img/home/MainBanner/2.png"></li></a>
                </ul>
            </div>

            <div class="arrow-box arrow-box-left">
                <div class="arrow left"></div>
            </div>

            <div class="arrow-box arrow-box-right">
                <div class="arrow right"></div>
            </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.banner--box {
  /* 화살표 위치시키기 위함 */
  position: relative;

  height: 250px;
  width: inherit;
}

.banner--frame {
  /* 배너 틀 크기 */
  width: inherit;
  height:100%;

  position:relative;
  overflow:hidden;
}

.main-banner ul {
  height:100%;

  display: flex;
  position: absolute;
  left:0px;

  list-style: none;
}

.main-banner li {
  height:100%;
  width: 1100px;

  display: flex;
  justify-content: center;
  overflow: hidden;
}

.main-banner img {
  height:100%;
}

/*
.main-banner ul :nth-child(1) li {
  background-color: red;
}

.main-banner ul :nth-child(2) li {
  background-color: orange;
}

.main-banner ul :nth-child(3) li {
  background-color: yellow;
}

.main-banner ul :nth-child(4) li {
  background-color: green;
}

.main-banner ul :nth-child(5) li {
  background-color: blue;
}

.main-banner ul :nth-child(6) li {
  background-color: purple;
}
*/

/* ======================================================== */

.arrow-box {
  width:48px;
  height:48px;
  border-radius: 50%;

  position: absolute;
  background-color: white;
  box-shadow: 0 2px 5px rgba(63, 71, 77, 0.15);

  cursor: pointer;
}

.arrow {
  width:14px;
  height:14px;

  position: absolute;
  right: 50%;
  top: 50%;

  border-top : 3px solid #2F3438;
  border-left : 3px solid #2F3438;
}

.left {
  transform: translate(75%, -50%) rotate(-45deg);
}

.right {
  transform: translate(25%, -50%) rotate(135deg);
}

.arrow-box-left {
  top:50%;
  left:0;
  transform: translate(-50%, -50%);
} 

.arrow-box-right {
  top:50%;
  right:0;
  transform: translate(50%, -50%);
} 

.arrow-box-left:hover {
  background-color: #F7F9FA;
}

.arrow-box-right:hover {
  background-color: #F7F9FA;
}

.banner--box .arrow-box {
  display: none;
}

.banner--box:hover > .arrow-box {
  display: block;
}

</style>