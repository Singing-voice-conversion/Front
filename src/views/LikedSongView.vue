<script setup>
import HeaderT from '/src/components/HeaderT.vue';
import FooterT from '/src/components/FooterT.vue';
import NavT from '/src/components/NavT.vue';

import Pagination from '/src/assets/js/Pagination';
</script>

<template>
<HeaderT/>
<NavT/>

  <section class="top100">
    <div class="outer">
      <div class="inner">
        
        <div class="title">내가 좋아요한 노래 리스트</div>

        <div class="box">
          <div>No.</div>
          <div>곡 제목</div>
          <div>원곡 가수</div>
          <div>학습된 목소리</div>
          <div>만든 사람</div>
          <div>좋아요 개수</div>
          <div>좋아요</div>
          <div>듣기</div>
        </div>

        <div id="song_list--content"></div>
        <div id="song_list--pagination"></div>

      </div>
    </div>
  </section>

  <FooterT/>
</template>

<script>
export default {
  data() {
    return {
      heart_icon: 'heart_icon'
    }
  },
  mounted() {

    new Pagination(
      'song_list--content',
      'song_list--pagination',
      createItems()
    );


    function createItems() {
      const items = [];

      for(let i = 0; i < 100; i++) {
        let item = `
          <div>${i+1}</div>
          <div>곡 제목 ${i+1}</div>
          <div>원곡가수</div>
          <div>아이유</div>
          <div>길동이다</div>
          <div>3</div>
          <div><span class="material-icons heart_icon" data-flag="0">favorite_border</span></div>
          <div><span class="material-icons play_arrow_icon">play_arrow</span></div>
        `;

        items.push(item);
      }

      return items;
    }
  }
}
</script>

<style scoped>
.top100 .title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
}

.top100 .box,
#song_list--content {
  display: grid;
  grid-template-columns: 0.5fr 2.5fr 1fr 1fr 1fr 0.8fr 0.5fr 0.5fr;
  row-gap: 10px;
}

.top100 .box {
  height:40px;
  margin-bottom:10px;
  
  background-color: #7E30E1;
  color:#fff;

  line-height: 40px;
  text-align: center;

  font-weight: 700;
  font-size: 18px;
}

.heart_icon,
.play_arrow_icon {
  color: #7E30E1;
  cursor: pointer;
}


#song_list--content div {
  text-align: center;
}


#song_list--pagination {
  display: flex;
  justify-content: center;

  margin: 30px 0 50px 0;
}

#song_list--pagination .page-btn {
  margin: 0 3px;
  width: 30px;
  height: 30px;

  line-height: 30px;
  text-align: center;

  font-size: 15px;
  border:1px solid #7E30E1;
  background-color: white;
  color: #332C5C;

  cursor: pointer;
}

#song_list--pagination .prev-btn,
#song_list--pagination .next-btn {
  margin: 0 5px;
  padding:0 10px;

  height: 30px;

  line-height: 30px;
  text-align: center;

  font-size: 15px;

  color:#332C5C;
  background-color: #F5F3FF;
  border: 1px solid #7E30E1;

  cursor: pointer;
}

</style>