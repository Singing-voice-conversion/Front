<script setup>
import HeaderT from '/src/components/HeaderT.vue';
import FooterT from '/src/components/FooterT.vue';
import NavT from '/src/components/NavT.vue';
import MainBannerT from '/src/components/MainBannerT.vue';
import SynthesizedSongBanner from '/src/components/home/SynthesizedSongBanner.vue';
import LikedSongBanner from '/src/components/home/LikedSongBanner.vue';
import TrainedSongBanner from '/src/components/home/TrainedSongBanner.vue';
</script>

<template>


<HeaderT/>
<NavT/>

<main>
<MainBannerT/>
<SynthesizedSongBanner/>
<LikedSongBanner/>
<TrainedSongBanner/>
</main>

<FooterT/>
</template>

<style scoped>

</style>
