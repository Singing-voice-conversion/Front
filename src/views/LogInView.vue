<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
<main>
  <section>
    <div class="login-view">
      <div class="login-box">
        <h1><RouterLink to="/">SingToMe</RouterLink></h1>

        <form action="" method="">
          <input class="input_email" type="text" name="userEmail" placeholder="이메일" required>
          <input class="input_pw" type="password" name="userPw" placeholder="비밀번호" required>

          <button class="submit" type="submit">로그인</button>
        </form>

        <div>
          <a class="reset_pw" href="#">비밀번호 재설정</a>
          <a class="sign_up" href="#">회원가입</a>
        </div>
    
      </div>
    </div>
  </section>
</main>
</template>

<script>
export default {

}
</script>

<style scoped>
.login-view {
   background-image: linear-gradient(to bottom, #7E30E1, white 25%);
   width:100vw;
   height:100vh;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
}


.login-box {
   width: 500px;

   display: flex;
   flex-direction: column;
   align-items: center;
}

h1 {
   margin-bottom:10px;
}

h1 a {
   text-decoration: none;

   color:#7E30E1;
   font-family: "Sitka Banner";
   font-size: 40px;
}

input {
   width: 100%;
   height:50px;

   font-size: 15px;
   box-shadow: 0 0 0 1px #C3C4DA;      /*안쪽에 border 주기 위함*/
   border:0px;
}

.input_email {
   border-radius: 3px 3px 0px 0px;
}

.input_pw {
   border-radius: 0px 0px 3px 3px;
}

.submit {
   background-color: #7E30E1;
   color:#fff;
   font-size: 15px;
   border:0px;
   border-radius: 3px;

   width: 100%;
   height:50px;

   margin:10px 0;
   cursor: pointer;
}

.submit:hover {
   background-color:#6024ae;
}

.sign_up {
   margin-left:10px;
}

.reset_pw,
.sign_up {
   text-decoration: none;
   color:#212529;
}

.reset_pw:hover,
.sign_up:hover {
   opacity : 0.5;
}

</style>