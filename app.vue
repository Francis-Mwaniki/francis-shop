<template>
  <div class="">
    <div class="">
      <Slider :getCount="getCount" />
    </div>
    <NuxtPage />
    <Foot />
  </div>
</template>
<script>
import Slider from "~/components/slider.vue";
import Foot from "./components/Foot.vue";
export default {
  components: { Foot, Slider },

  watch: {
    $route() {
      location.reload();
    },
  },
};
</script>
