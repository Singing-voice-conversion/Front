<script setup>
import HeaderT from '/src/components/HeaderT.vue';
import FooterT from '/src/components/FooterT.vue';
import NavT from '/src/components/NavT.vue';


</script>

<template>


<HeaderT/>
<NavT/>

<main>
  세컨드 페이지다
  <div :class="special">색상바꾸기</div>
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