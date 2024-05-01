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
        
        <div class="title">내가 학습시킨 목소리 리스트</div>

        <div class="box">
          <div>No.</div>
          <div>학습된 목소리</div>
          <div>만든 날짜</div>
          <div>듣기</div>
        </div>

        <div id="trainedVoice_list--content"></div>
        <div id="trainedVoice_list--pagination"></div>
      </div>
    </div>
  </section>

  <FooterT/>
</template>

<script>
export default {
  mounted() {

    new Pagination(
      'trainedVoice_list--content',
      'trainedVoice_list--pagination',
      createItems()
    );

    function createItems() {
      const items = [];

      for(let i = 0; i < 100; i++) {
        let item = `
          <div>${i+1}</div>
          <div>학습된 목소리 ${i+1}</div>
          <div>2024-05-01</div>
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

.top100 .box {
  display: grid;
  grid-template-columns: 0.5fr 2.5fr 1.5fr 0.5fr;
  row-gap: 10px;
  height:40px;
  margin-bottom:10px;
  
  background-color: #7E30E1;
  color:#fff;

  line-height: 40px;
  text-align: center;

  font-weight: 700;
  font-size: 18px;
}
</style>