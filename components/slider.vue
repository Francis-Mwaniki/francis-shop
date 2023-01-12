<template>
  <div class="flex md:hidden">
    <div class="drawer max-h-32 max-w-md">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="">
        <!-- Page content here -->

        <label class="swap swap-rotate drawer-button" for="my-drawer">
          <!-- hamburger icon -->
          <div
            class="flex justify-center items-center flex-row mx-auto bg-orange-400 h-10 rounded px-6"
          >
            <Icon name="ic:round-menu-open" class="text-black h-16" /><span
              class="text-black"
              >Menu</span
            >
          </div>
        </label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 w-full bg-slate-900 text-base-content">
          <!-- Sidebar content here -->
          <div class="flex justify-between items-center mx-auto flex-col gap-y-1">
            <div class="flex justify-center items-center flex-row mx-auto">
              <Nuxt-Link
                to="/tasks"
                class="btn btn-accent flex justify-center items-center mx-auto gap-x-1"
              >
                <span class="text-indigo-900 mx-1 cursor-pointer text-lg md:text-black">
                  <Icon name="ic:baseline-admin-panel-settings" class="text-black"
                /></span>
                Admin
              </Nuxt-Link>
              <label for="my-modal-3" class="btn btn-accent btn-outline w-28 ml-2 mt-1">
                <span class="text-indigo-900 mx-1 cursor-pointer text-lg md:text-black">
                  <Icon name="ic:outline-shopping-cart" class="text-black"
                /></span>
                <span
                  class="p-3 text-white h-7 w-5 rounded-full justify-center items-center mx-auto flex"
                  >{{ getCount }}</span
                >
              </label>
            </div>
            <div class="flex justify-center items-center flex-row mx-auto gap-x-2">
              <button
                class="btn btn-accent flex justify-center items-center mx-auto gap-x-1"
              >
                <span class="text-indigo-900 mx-1 cursor-pointer text-lg md:text-black">
                  <Icon name="ic:baseline-admin-panel-settings" class="text-black"
                /></span>
                Men
              </button>
              <button
                class="btn btn-accent flex justify-center items-center mx-auto gap-x-1"
              >
                <span class="text-indigo-900 mx-1 cursor-pointer text-lg md:text-black">
                  <Icon name="ic:baseline-admin-panel-settings" class="text-black"
                /></span>
                Women
              </button>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["getCount"],
};
</script>

<style></style>
