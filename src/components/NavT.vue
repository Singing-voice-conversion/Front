<script setup>
import { RouterLink } from 'vue-router'
</script>

<script>
export default {
  // mounted() {
  //   // console.log(this.$route.path);
  //   let navMenu = document.querySelector(`nav ul a[name='${this.$route.name}']`);
  //   navMenu.setAttribute("style", "color:#7E30E1");
  // },

}
</script>

<template>
  <nav>
    <div class="outer">
      <div class="inner">
        <ul>
          <RouterLink to="/" name="home">Home</RouterLink>
          <RouterLink to="/" name="top100">Top100</RouterLink>
          <RouterLink to="/training" name="training">Training</RouterLink>
          <RouterLink to="/synthesis" name="synthesis">Synthesis</RouterLink>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.outer {
  border-bottom: 1px solid #EAEDEF;
  background-color: #FFFFFF;
  margin-bottom: 10px;
}

.inner {
  height: 51px;
}

nav ul {
  display: flex;
}

nav ul a {
  display: block;
  text-decoration: none;

  color:#2f3438;
  font-weight: bold;

  padding:16px 10px;
}

nav ul a:hover {
  color:#7E30E1;
}
</style>