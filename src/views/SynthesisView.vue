<script setup>
import HeaderT from '/src/components/HeaderT.vue';
import FooterT from '/src/components/FooterT.vue';
import NavT from '/src/components/NavT.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
<HeaderT/>
<NavT/>

<main>
  <section class="main_img">
    <div class="outer">
      <div class="inner">

        <div class="img-box">
          <h1>음성 합성하기</h1>
          <span>합성시키고 싶은 노래를 업로드하세요</span>
          <img src="/src/assets/img/training/1.jpg">
        </div>
        
        <RouterLink to="/synthesis/create/step1"><div class="start">시작하기</div></RouterLink>
    
      </div>
    </div>
  </section>
</main>

<FooterT/>
</template>

<style scoped>
.main_img .inner{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
}

.main_img .img-box {
  width: inherit;
  height:300px;
  margin-bottom: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  overflow: hidden;
}

.main_img .img-box h1 {
  position: absolute;
  top:40%;

  font-size: 50px;
  color:#FFFFFF;
}

.main_img .img-box span {
  position: absolute;
  top:65%;

  color:#FFFFFF;

  display: block;
}

.main_img img {
  width: inherit;
  height: inherit;
  object-fit: cover;
}

.main_img .start {
  padding: 20px 50px;

  background-color: #7E30E1;
  border-radius: 3px;

  font-size: 30px;
  color:#FFFFFF;
}

.start:hover {
  background-color: #58229e;
}
</style>


<script>
export default {

}
</script>