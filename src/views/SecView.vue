<script setup>
import HeaderT from '/src/components/HeaderT.vue';
import FooterT from '/src/components/FooterT.vue';
import NavT from '/src/components/NavT.vue';


</script>

<template>
<HeaderT/>
<NavT/>

<main>
  <section class="main_img">
    <div class="outer">
      <div class="inner">

        <div class="img-box">
          <h1>목소리 훈련시키기</h1>
          <span>학습시키고 싶은 음성 파일을 업로드하세요</span>
          <img src="/src/assets/img/training/1.jpg">
        </div>
        
        <a href="training2.html"><div class="start">시작하기</div></a>
    
      </div>
    </div>
  </section>
</main>

<FooterT/>
</template>

<style scoped>
div {
  width:100px;
  height:100px;
  border:1px solid black;
  background-color: red;
  color:#fff;
}

.special {
  background-color:blue;
}
</style>


<script>
export default {
  data() {
    return {
      special : "special"
    }
  }
}
</script>