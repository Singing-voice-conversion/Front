<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <div class="outer">
      <div class="inner">
        <ul>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/sec">Top100</RouterLink>
          <a href="">Training</a>
          <a href="">Synthesis</a>

        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.outer {
  border-bottom: 1px solid #EAEDEF;
  background-color: #FFFFFF;
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

nav ul :first-child {
  color:#7E30E1;

  /* after로 넣을 것. 밑줄이 밖으로 빠져나옴 */
  border-bottom: 3px solid #7E30E1;
}
</style>