<script setup>
import { RouterLink } from 'vue-router';

import Banner from '/src/assets/js/Banner';
import $ from 'jquery';
</script>

<template>
  <section class="trainedVoiceBanner">
    <div class="outer">
        <div class="inner">

          <div class="header">
              <strong>내가 학습시킨 목소리 리스트</strong>
              <RouterLink to="/trainedVoice"><button type="button">더보기</button></RouterLink>
          </div>

          <div class="banner">
              <div class="banner_box">

                  <div class="frame">
                      <ul>
                          <li>
                              <a href="#">
                                  <div class="img_box">
                                      <img src="\src\assets\img\home\Singer\1.jpg">
                                  </div>

                                  <div class="desc">
                                      <p>윤하 (YOUNHA)</p>
                                  </div>
                              </a>
                          </li>
                              <li>
                                  <a href="#">
                                  <div class="img_box">
                                      <img src="\src\assets\img\home\Singer\2.jpg">
                                  </div>

                                  <div class="desc">
                                      <p>도리 (dori)</p>
                                  </div>
                              </a>
                              </li>
                          
                              <li>
                                  <a href="#">
                                  <div class="img_box">
                                      <img src="\src\assets\img\home\Singer\3.jpg">
                                  </div>

                                  <div class="desc">
                                      <p>아이유 (IU)</p>
                                  </div>
                              </a>
                              </li>
                        
                              <li>
                                  <a href="#">
                                  <div class="img_box">
                                      <img src="\src\assets\img\home\Singer\4.jpg">
                                  </div>

                                  <div class="desc">
                                      <p>비비 (BIBI)</p>
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
    let $imgs = $(".trainedVoiceBanner .banner img");

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
      $(".trainedVoiceBanner .banner .frame"),
      $(".trainedVoiceBanner .banner li"),
      $(".trainedVoiceBanner .arrow-box-left"),
      $(".trainedVoiceBanner .arrow-box-right")
    );
  },
}
</script>

<style scoped>
@import '/src/assets/css/banner2.css'
</style>