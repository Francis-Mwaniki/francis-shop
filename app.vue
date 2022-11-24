<template>
  <div class="">
    <NuxtPage />
  </div>
</template>
<script>
export default {
  components: {},

  watch: {
    $route() {
      location.reload();
    },
  },
};
</script>
