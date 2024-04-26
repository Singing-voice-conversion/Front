<template>
  <section class="ex01">
    <div class="outer">
        <div class="inner">

          <div class="header">
              <strong>내가 합성한 노래 리스트</strong>
              <button type="button">더보기</button>
          </div>

          <div class="banner">
              <div class="banner_box">

                  <div class="frame">
                      <ul>
                          <li>
                              <a href="#">
                                  <div class="img_box">
                                      <img src="\src\assets\img\home\SynthesizedSongBanner\1.avif">
                                  </div>

                                  <div class="desc">
                                      <p>전시, 반품, 스크래치 득템의 기회!</p>
                                      <p>빠른 품절! 리퍼마켓 ~90%</p>
                                  </div>
                              </a>
                          </li>
                              <li>
                                  <a href="#">
                                  <div class="img_box">
                                      <img src="\src\assets\img\home\SynthesizedSongBanner\2.avif">
                                  </div>

                                  <div class="desc">
                                      <p>전상품 무료배송, 요일마다 바뀌는 파격특가 장보기!</p>
                                      <p>오픈런딜</p>
                                  </div>
                              </a>
                              </li>
                          
                              <li>
                                  <a href="#">
                                  <div class="img_box">
                                      <img src="\src\assets\img\home\SynthesizedSongBanner\3.avif">
                                  </div>

                                  <div class="desc">
                                      <p>오늘의집 큐레이션 편집샵 오!굿즈</p>
                                      <p>오직 여기서만, O!Goods</p>
                                  </div>
                              </a>
                              </li>
                        
                              <li>
                                  <a href="#">
                                  <div class="img_box">
                                      <img src="\src\assets\img\home\SynthesizedSongBanner\4.avif">
                                  </div>

                                  <div class="desc">
                                      <p>최대 25만원 SAVE</p>
                                      <p>0원한 특급패스, 오늘의집 배송!</p>
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
import Banner from '/src/assets/js/Banner';
import $ from 'jquery';

export default {
  mounted() {
    let $exhibitionImgs = $(".ex01 .banner img");

    $exhibitionImgs.each((index, item)=>{
        $(item).hover(()=>{
            $(item).css("transform", "scale(1.05)");
            $(item).css("transition", "0.2s ease");
                    
        }, ()=>{
            $(item).css("transform", "scale(1)");
            $(item).css("transition", "0.2s ease");
        });
    });

    new Banner(
      $(".ex01 .banner .frame"),
      $(".ex01 .banner li"),
      $(".ex01 .arrow-box-left"),
      $(".ex01 .arrow-box-right")
    );
  },
}
</script>

<style>
@import '/src/assets/css/banner2.css'
</style>