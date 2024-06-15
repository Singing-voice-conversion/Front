<script setup>
import { RouterLink } from 'vue-router';

import Banner from '/src/assets/js/Banner';
import $ from 'jquery';
</script>

<template>
  <section class="synthesizedSongBanner">
    <div class="outer">
        <div class="inner">

          <div class="header">
              <strong>내가 합성한 노래 리스트</strong>
              <RouterLink to="/synthesizedSong"><button type="button">더보기</button></RouterLink>
          </div>

          <div class="banner">
              <div class="banner_box">

                  <div class="frame">
                      <ul>
                          <li>
                              <a href="#">
                                  <div class="img_box">
                                      <img src="\src\assets\img\home\SynthesizedSongBanner\5.jpg">
                                  </div>

                                  <div class="desc">
                                      <p>아이유</p>
                                      <p>밤양갱</p>
                                  </div>
                              </a>
                          </li>
                              <li>
                                  <a href="#">
                                  <div class="img_box">
                                      <img src="\src\assets\img\home\SynthesizedSongBanner\6.jpg">
                                  </div>

                                  <div class="desc">
                                      <p>윤하</p>
                                      <p>관객이 될게</p>
                                  </div>
                              </a>
                              </li>
                          
                              <li>
                                  <a href="#">
                                  <div class="img_box">
                                      <img src="\src\assets\img\home\SynthesizedSongBanner\7.jpg">
                                  </div>

                                  <div class="desc">
                                      <p>펀치</p>
                                      <p>Blueming</p>
                                  </div>
                              </a>
                              </li>
                        
                              <li>
                                  <a href="#">
                                  <div class="img_box">
                                      <img src="\src\assets\img\home\SynthesizedSongBanner\8.jpg">
                                  </div>

                                  <div class="desc">
                                      <p>윤하</p>
                                      <p>라일락 (LILAC)</p>
                                  </div>
                              </a>
                              </li>
                          

                          <li class="seemore">
                              <a href="#">
                                  <div class="seemore-container">
                                      <div class="seemore-arrow-case">
                                          <div class="seemore-arrow">&rarr;</div>
                                      </div>
                                      <div class="seemore-text">더보기</div>
                                  </div>
                              </a>
                          </li>
                      </ul>
                  </div>
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

<script>
export default {
  mounted() {
    let $imgs = $(".synthesizedSongBanner .banner img");

    $imgs.each((index, item)=>{
        $(item).hover(()=>{
            $(item).css("transform", "scale(1.05)");
            $(item).css("transition", "0.2s ease");
                    
        }, ()=>{
            $(item).css("transform", "scale(1)");
            $(item).css("transition", "0.2s ease");
        });
    });

    new Banner(
      $(".synthesizedSongBanner .banner .frame"),
      $(".synthesizedSongBanner .banner li"),
      $(".synthesizedSongBanner .arrow-box-left"),
      $(".synthesizedSongBanner .arrow-box-right")
    );
  },
}
</script>

<style scoped>
@import '/src/assets/css/banner2.css'
</style>