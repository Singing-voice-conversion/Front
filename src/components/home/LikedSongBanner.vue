<script setup>
import { RouterLink } from 'vue-router';

import Banner from '/src/assets/js/Banner';
import $ from 'jquery';
</script>


<template>
  <section class="likedSongBanner">
    <div class="outer">
        <div class="inner">

          <div class="header">
              <strong>내가 좋아요한 노래 리스트</strong>
              <RouterLink to="/likedSong"><button type="button">더보기</button></RouterLink>
          </div>

          <div class="banner">
              <div class="banner_box">

                  <div class="frame">
                      <ul>
                          <li>
                              <a href="#">
                                  <div class="img_box">
                                      <img src="\src\assets\img\home\SynthesizedSongBanner\15.jpg">
                                  </div>

                                  <div class="desc">
                                      <p>Charlie puth</p>
                                      <p>Someday</p>
                                  </div>
                              </a>
                          </li>
                              <li>
                                  <a href="#">
                                  <div class="img_box">
                                      <img src="\src\assets\img\home\SynthesizedSongBanner\16.jpg">
                                  </div>

                                  <div class="desc">
                                      <p>이무진</p>
                                      <p>Ready to love</p>
                                  </div>
                              </a>
                              </li>
                          
                              <li>
                                  <a href="#">
                                  <div class="img_box">
                                      <img src="\src\assets\img\home\SynthesizedSongBanner\17.jpg">
                                  </div>

                                  <div class="desc">
                                      <p>도리 (dori)</p>
                                      <p>Summer hate</p>
                                  </div>
                              </a>
                              </li>
                        
                              <li>
                                  <a href="#">
                                  <div class="img_box">
                                      <img src="\src\assets\img\home\SynthesizedSongBanner\18.jpg">
                                  </div>

                                  <div class="desc">
                                      <p>아이유</p>
                                      <p>Hype Boy</p>
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
    let $imgs = $(".likedSongBanner .banner img");

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
      $(".likedSongBanner .banner .frame"),
      $(".likedSongBanner .banner li"),
      $(".likedSongBanner .arrow-box-left"),
      $(".likedSongBanner .arrow-box-right")
    );
  },
}
</script>

<style scoped>
@import '/src/assets/css/banner2.css'
</style>