<script setup>
import Pagination2 from '/src/assets/js/Pagination2';

</script>

<template>
<article class="training_voice_list">
  <div class="box">
    <div></div>
    <div>No.</div>
    <div>목소리</div>
    <div>만든 날짜</div>
    <div>듣기</div>
  </div>

  <div id="training_voice_list--content"></div>
  <div id="training_voice_list--pagination"></div>
</article>
</template>

<script>
export default {
  mounted() {
    new Pagination2(
      'training_voice_list--content',
      'training_voice_list--pagination',
      createItems()
    );

    function createItems() {
      const items = [];

      for(let i = 0; i < 100; i++) {
        let item = `
          <input type="radio" name="selected_item">
          <div>${i+1}</div>
          <div>목소리명 ${i+1}</div>
          <div>2024-05-02</div>
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
.training_voice_list {
  width: 90%;
}

.training_voice_list .box {
  display: grid;
  grid-template-columns: 0.3fr 0.5fr 2.5fr 1fr 0.5fr;
  row-gap: 10px;

  height:25px;
  margin-bottom:10px;
  
  background-color: #7E30E1;
  color:#fff;

  line-height: 25px;
  text-align: center;

  font-weight: 500;
  font-size: 15px;
}

</style>