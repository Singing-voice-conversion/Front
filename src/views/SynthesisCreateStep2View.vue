<script setup>
import HeaderT from '/src/components/HeaderT.vue';
import FooterT from '/src/components/FooterT.vue';
import NavT from '/src/components/NavT.vue';

import TrainingVoiceList from '/src/components/synthesisCreate/TrainingVoiceList.vue';
</script>

<template>
<HeaderT/>
<NavT/>

  <main>
    <div class="outer">
      <div class="inner">

        <section class="work_view">
          <div class="work_view--box">

            <div class="guide_line">
              <div>
                <span class="step">Step2 :</span>
                <span class="step_description">학습시킬 목소리를 선택해주세요.</span>
              </div>
            </div>

            <TrainingVoiceList/>

          </div>
        </section>

        <aside>
          <div class="aside-container">
            <div class="aside_content">
              <h1>목소리 합성하기</h1>
              <div>
                <span class="step">Step1</span>
                <span class="select_song">학습시킬 음악 : </span>
              </div>

              <span style="display:block; margin:50px 0;"></span>

              <div>
                <span class="step">Step2</span>
                <span class="select_song">학습시킬 목소리 : </span>
              </div>
            </div>
            <button class="submit-btn" type="submit">Synthesis</button>
          </div>
        </aside>

      </div>
    </div>
  </main>

  <FooterT/>
</template>

<script>
export default {
  
}
</script>

<style scoped>
main .inner{
  display: flex;
  height: 600px;
}

.work_view {
  height: inherit;
  width: 70%;

  padding: 20px 10px;
}

.work_view--box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.guide_line {
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;
}

.guide_line div {
  width: 100%;
  display: flex;
  align-items: center;
}

.work_view .next_step {
  border:1px solid #7E30E1;
  background-color: #fff;

  width:70px;
  padding: 5px 0;

  cursor: pointer;
}

.work_view .next_step:hover {
  background-color: #965de0;
  color:#fff;
}

.guide_line .step {
  display: inline-block;
  margin-right: 10px;
  font-weight: 700;
  font-size: 20px;
  color:#7E30E1
}

aside {
  height: inherit;
  width: 30%;
}

.aside-container {
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  
  height: 100%;
  padding:0 15px;

  border-left: 1px solid #EAEDEF;
}

.aside_content,
.aside_content > div {
  width:100%;
}

.aside_content h1 {
  text-align: center;
  margin-bottom: 10px;
}

.aside_content span {
  display: block;
}

.aside_content .step {
  font-size: 20px;
  font-weight: 700;
  color:#7E30E1
}

.aside-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

aside h1 {
  margin: 20px 0 10px 0;
}

.submit-btn {
  width: 80%;
  padding: 20px 0;
  margin-bottom: 20px;

  font-size: 30px;
  font-weight: bold;
  background-color: #7E30E1;
  color:#FFFFFF;
  border: 0;
  border-radius: 3px;

  cursor: pointer;
}

.submit-btn:hover {
  background-color: #58229e;
}
</style>