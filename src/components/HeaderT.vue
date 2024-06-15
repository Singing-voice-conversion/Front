<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div class="outer">
      <div class="inner">

        <div class="left_menu">
            <div id="logo">
                <RouterLink to="/">
                    <img height="50" src="/src/assets/img/home/logo.svg">
                </RouterLink>
            </div>
        </div>

        <div class="right_menu">
            <RouterLink to="/login"><div>로그아웃</div></RouterLink>
            <!-- <a href="#" class="partition1"><div>회원가입</div></a> -->
            <a href="#" class="partition2"><div>고객센터</div></a>
            <span class="material-symbols-outlined menu_icon">menu</span>
        </div>

      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  height: 81px;
}

header .outer {
  height: 81px;
  border-bottom: 1px solid #EAEDEF;
  background-color: #FFFFFF;

  position: fixed;
  z-index: 100;
}

header .inner {
  display: flex;
  justify-content:space-between;
  align-items: center;
}

header .left_menu {
  display: flex;
  align-items: center;
}

header #logo {
  margin: 0px 35px 0px 0px;
  display: flex;
  justify-content: start;
}

header .left_menu > * {
  margin: 0 10px;
}

header .left_menu a {
  text-decoration: none;
  color:#2f3438;
  font-size: 18px;
  font-weight: bold;
}

header .right_menu {
  display: flex;
  align-items: center;
}

header .menu_icon {
  /* 가운데 맞추기 위해 높이 줌 */
  height:22px;
  cursor: pointer;
  /* background-color: red; */
}

header .right_menu > * {
  /* margin: 0 10px; */
  padding: 0 10px;
}

header .right_menu a {
  text-decoration: none;
  color:#2f3438;
  font-size: 14px;
}

header .right_menu .partition1,
header .right_menu .partition2 {
  border-left: 1px solid #EAEDEF;
}

.right_menu .menu_icon:hover {
  color:#7E30E1;
}
</style>