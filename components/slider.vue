<template>
  <!-- component -->
  <div>
    <div class="flex antialiased text-gray-100 bg-slate-900 dark:text-light">
      <!-- Loading screen -->
      <!-- <div
        x-ref="loading"
        class="fixed inset-0 z-50 flex items-center justify-center text-2xl font-semibold text-white bg-blue-600"
      >
        Loading.....
      </div> -->

      <!-- Sidebar -->
      <div
        x-transition:enter="transform transition-transform duration-300"
        x-transition:enter-start="-translate-x-full"
        x-transition:enter-end="translate-x-0"
        x-transition:leave="transform transition-transform duration-300"
        x-transition:leave-start="translate-x-0"
        x-transition:leave-end="-translate-x-full"
        v-show="isSidebarOpen"
        class="fixed inset-y-0 z-10 flex w-80"
      >
        <!-- Curvy shape -->
        <svg
          class="absolute inset-0 w-full h-full text-slate-900"
          style="filter: drop-shadow(10px 0 10px #00000030)"
          preserveAspectRatio="none"
          viewBox="0 0 309 800"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z"
          />
        </svg>
        <!-- Sidebar content -->
        <div class="z-10 flex flex-col flex-1">
          <div class="flex items-center justify-between flex-shrink-0 w-64 p-4">
            <!-- Logo -->
            <Nuxt-Link to="/profile">
              <span class="sr-only">Franc</span>
              <nuxt-img
                src="https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/8f4874c6-78f3-4875-995c-a2da575ff4aa"
                class="h-20 w-20 rounded-full"
                alt=""
              />
              <h1 class="text-sm text-orange-600 p-1" v-if="mainUser">
                <span class="bg-orange-500 rounded-full p-1 text-black">
                  {{ mainUser }}
                </span>
              </h1>
              <h1 class="text-sm text-orange-600 p-1" v-else>
                <span class="bg-orange-500 rounded-full p-1 text-black">
                  {{ logoutErr }}
                </span>
              </h1>
            </Nuxt-Link>

            <!-- Close btn -->
            <button
              @click="isSidebarOpen = false"
              class="p-1 rounded-lg focus:outline-none focus:ring"
            >
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span class="sr-only">Close sidebar</span>
            </button>
          </div>
          <nav class="flex flex-col flex-1 w-64 p-4 mt-4 gap-y-3">
            <Nuxt-Link to="/" class="flex items-center space-x-2">
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>Home</span>
            </Nuxt-Link>

            <Nuxt-Link to="/tasks" class="flex items-center space-x-2">
              <Icon name="ic:baseline-admin-panel-settings" class="text-white h-6 w-6" />
              <span>Admin</span>
            </Nuxt-Link>
            <Nuxt-Link to="/login" class="flex items-center space-x-2">
              <Icon name="tabler:login" class="text-white h-6 w-6" />
              <span>Login</span>
            </Nuxt-Link>
            <Nuxt-Link to="/profile" class="flex items-center space-x-2">
              <Icon name="material-symbols:settings" class="text-white h-6 w-6" />
              <span>Settings</span>
            </Nuxt-Link>
            <div class="">
              <ToggleMode />
            </div>

            <h3
              class="flex justify-around mb-2 flex-row sm:mx-auto mx-2 items-center text-black py-3 bg-orange-400 rounded max-w-md"
              v-show="close"
            >
              <span class="px-2"> {{ success }}</span>
              <button class="bg-white rounded-full p-2 py-1 m-1" @click="disable">
                ✕
              </button>
            </h3>
            <h3
              class="flex justify-around mb-2 flex-row sm:mx-auto mx-2 items-center text-black py-3 bg-red-600 rounded max-w-md"
              v-show="closeErr"
            >
              <span class="px-2 py-1"> {{ err }}</span>
              <button class="bg-white rounded-full p-2 py-1 m-1" @click="disableErr">
                ✕
              </button>
            </h3>
          </nav>

          <div class="flex-shrink-0 p-4">
            <button class="flex items-center space-x-2" @click="logout">
              <svg
                aria-hidden="true"
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
      <main class="flex flex-col items-center justify-center flex-1">
        <!-- Page content -->
        <button
          @click="isSidebarOpen = true"
          class="fixed p-2 text-white bg-slate-900 rounded-lg top-5 left-5"
        >
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <span class="sr-only">Open menu</span>
        </button>
        <h1 class="sr-only">Home</h1>
        <img
          src="../assets/images/stunning.jpg"
          class="object-cover md:h-96 h-80 w-full"
          alt=""
        />
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      isSidebarOpen: false,
    };
  },

  props: ["getCount"],

  setup() {
    const success = ref("");
    let close = ref(false);
    let mainUser = ref("");
    let logoutErr = ref("");
    let closeErr = ref(false);
    let err = ref("");
    const client = useSupabaseAuthClient();
    const user = client.auth
      .getUser()
      .then((res) => {
        mainUser.value = res.data.user.email;
      })
      .catch((error) => {
        logoutErr.value = " Not Logged In";
      });

    const logout = async () => {
      const { error } = await client.auth.signOut();
      if (!error) {
        close.value = true;
        success.value = "Logged Out!";
      } else {
        closeErr.value = true;
        err.value = error.message;
      }
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    };
    const disable = () => {
      close.value = !close.value;
    };
    const disableErr = () => {
      closeErr.value = !closeErr.value;
    };

    return {
      mainUser,
      logoutErr,
      logout,
      success,
      err,
      close,
      closeErr,
      disable,
      disableErr,
    };
  },
};
</script>

<style></style>
