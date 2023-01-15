<template>
  <ClientOnly>
    <div>
      <h1 class="text-sm text-orange-600 p-1">
        Color mode:
        <span class="bg-orange-500 rounded-full p-1 text-black">{{
          $colorMode.value
        }}</span>
      </h1>
      <select
        v-model="$colorMode.preference"
        class="rounded-full text-black ring-orange-400 ring-1 bg-orange-300"
      >
        <option
          value="system"
          class="flex justify-center items-center mx-auto flex-row p-1 gap-x-1 ring-1 ring-orange-300 rounded-xl py-2"
        >
          <Icon name="ic:sharp-home-max" class="h-6 w-6 text-white" /><span>System</span>
        </option>
        <option
          value="light"
          class="flex justify-center items-center mx-auto flex-row p-1 gap-x-1 ring-1 ring-orange-300 rounded-xl py-2"
        >
          <Icon
            name="material-symbols:lightbulb-circle"
            class="text-white h-6 w-6"
          /><span>Light</span>
        </option>
        <option
          value="dark"
          class="flex justify-center items-center mx-auto flex-row p-1 gap-x-1 ring-1 ring-orange-300 rounded-xl py-2"
        >
          <Icon name="material-symbols:dark-mode" class="text-black h-6 w-6" /><span
            >Dark</span
          >
        </option>
        <option
          value="sepia"
          class="flex justify-center items-center mx-auto flex-row p-1 gap-x-1 ring-1 ring-orange-300 rounded-xl py-2"
        >
          <Icon name="majesticons:color-swatch" class="text-pink-200 h-6 w-6" /><span
            >Sepia</span
          >
        </option>
      </select>
    </div>
  </ClientOnly>
</template>
<script setup>
const colorMode = useColorMode();
console.log(colorMode.preference);
</script>
<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
