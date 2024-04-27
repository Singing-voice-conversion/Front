<script setup>
import HeaderT from '/src/components/HeaderT.vue';
import FooterT from '/src/components/FooterT.vue';
import NavT from '/src/components/NavT.vue';
// import { RouterLink } from 'vue-router';
import $ from 'jquery';
</script>

<template>
<HeaderT/>
<NavT/>

<main>
    <div class="outer">
      <div class="inner">

        <section>
          <div class="section-container">
              <div id="fileList"></div>

              <div v-for="(item, index) in items" :key="item.fileName" :style="fileBoxStyle">
                <span :style="fileIdxStyle">{{index + 1}}</span>
                <span :style="fileNameStyle">{{item.fileName}}</span>
                <span class="remove_btn" @click="removeFile" :style="removeBtnStyle">X</span>
              </div>
          </div>
        </section>

        <aside>
          <div class="aside-container">
            <div>
              <h1>훈련시킬 목소리 선택하기</h1>
              <label for="file-upload" @click="uploadFiles"><div><span>목소리 파일 선택</span></div></label>
              <input type="file" id="file-upload" multiple accept=".mp3,.wav">
            </div>
            <button class="submit-btn" type="submit">Training</button>
          </div>
        </aside>

      </div>
    </div>
  </main>

<FooterT/>
</template>

<script>
export default {
  data() {
    return {
      items : new Set(),
      fileBoxStyle: {
        margin: "0 0 5px 0"
      },
      fileIdxStyle: {
        display: "inline-block",
        // border: "1px solid black",
        width: "20px",
        color: "#7E30E1",
        textAlign: "center",
        fontWeight: "700"
      },
      fileNameStyle: {
        display: "inline-block",
        fontWeight: "300",
        fontSize: '15px'
      },
      removeBtnStyle: {
        display: "inline-block",
        width: "20px",
        fontWeight: "500",
        textAlign: "center",
        color: "red",
        cursor: "pointer"
      }

    }
  },
  methods :{
    uploadFiles() {
      let $fileUpload = $('#file-upload');
      $fileUpload.change(()=> {
          let files = $fileUpload[0].files;

          for (let i = 0; i < files.length; i++) {
            let flag = true;
            let listItem = {fileName : `${files[i].name}`};

            this.items.forEach(item => {
              if (item.fileName == listItem.fileName) {
                flag = false;
                return;
              }
            });
            
            if(flag) this.items.add(listItem);
          }
      });
    },

    removeFile(event) {
      // console.log(event.target.parentElement.children[1].textContent);

      let target = event.target.parentElement.children[1].textContent;
      this.items.forEach(item => {
        if (item.fileName == target) {
        this.items.delete(item);
        return;
      }
  });

    }
  }
}
</script>

<style scoped>
main .inner{
  display: flex;
  height: 500px;
}

section {
  height: inherit;
  width: 70%;
}

aside {
  height: inherit;
  width: 30%;
}

.section-container {
  position: relative;
  background-color:#fbf8ff;
  height: inherit;
  width:100%;

  padding: 20px 10px;
}

.aside-container {
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  
  height: 100%;

  border-left: 1px solid #EAEDEF;
}

.aside-container div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

aside h1 {
  margin: 20px 0 10px 0;
}

input[type=file] {
  display: none;
}

label div {
  width: 200px;

  border: 1px solid #7E30E1;
  background-color: #FFFFFF;

  text-align: center;
  line-height: 30px;
  cursor: pointer;
}

label span:hover {
  opacity: 0.5;
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