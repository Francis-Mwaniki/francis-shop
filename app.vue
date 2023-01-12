<template>
  <div class="">
    <NuxtPage />
    <Foot />
  </div>
</template>
<script>
import Foot from "./components/Foot.vue";
export default {
  components: { Foot },

  watch: {
    $route() {
      location.reload();
    },
  },
};
</script>
