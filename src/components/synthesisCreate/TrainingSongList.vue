<script setup>
import Pagination2 from '/src/assets/js/Pagination2';

</script>

<template>
<article class="training_song_list">
  <div class="box">
    <div></div>
    <div>No.</div>
    <div>곡 제목</div>
    <div>원곡 가수</div>
    <div>듣기</div>
  </div>

  <div id="training_song_list--content"></div>
  <div id="training_song_list--pagination"></div>
</article>
</template>

<script>
export default {
  mounted() {
    new Pagination2(
      'training_song_list--content',
      'training_song_list--pagination',
      createItems()
    );

    function createItems() {
      const items = [];

      for(let i = 0; i < 100; i++) {
        let item = `
          <input type="radio" name="selected_item">
          <div>${i+1}</div>
          <div>곡 제목 ${i+1}</div>
          <div>원곡가수</div>
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
.training_song_list {
  width: 90%;
}

.training_song_list .box {
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