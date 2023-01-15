<template>
  <main class="overflow-hidden">
    <!-- component -->
    <section
      v-if="!mainUser"
      style="font-family: Montserrat"
      class="bg-[#071e34] flex font-medium items-center justify-center h-screen"
    >
      <section class="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
        <div class="flex items-center justify-between">
          <span class="text-gray-400 text-sm">Your Profile</span>
          <span class="text-emerald-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </span>
        </div>

        <div class="mt-8">
          <h3
            class="flex justify-around flex-row sm:mx-auto mx-2 items-center text-white py-1 bg-red-600 rounded max-w-md"
          >
            <span class="px-2 py-1"> {{ err }}</span>
          </h3>
        </div>
        <p class="text-pink-400 font-semibold mt-2.5">InActive</p>

        <div class="h-1 w-full bg-black mt-8 rounded-full">
          <div class="h-1 rounded-full w-0 bg-yellow-500"></div>
        </div>
        <div class="mt-3 text-white text-sm">
          <span class="text-gray-400 font-semibold">status:</span>
          <span>0%</span>
        </div>
      </section>
    </section>

    <div v-else>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section
        style="font-family: Montserrat"
        class="bg-[#071e34] flex font-medium items-center justify-center h-screen"
      >
        <section class="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
          <div class="flex items-center justify-between">
            <span class="text-gray-400 text-xs">Your Profile as @</span>
            <span class="text-gray-400 text-xs border-b border-pink-600">{{ time }}</span>
            <span class="text-emerald-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </span>
          </div>
          <div class="mt-6 w-fit mx-auto">
            <img
              src="https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/99de8897-4cad-4f1d-9339-736f40306547"
              class="rounded-full w-28"
              alt="profile picture"
              srcset=""
            />
          </div>

          <div class="mt-8">
            <h2 class="text-white font-bold text-xs tracking-wide">
              {{ mainUser }}
            </h2>
          </div>
          <p class="text-emerald-400 font-semibold mt-2.5">Active</p>

          <div class="h-1 w-full bg-black mt-8 rounded-full">
            <div class="h-1 rounded-full w-4/5 bg-yellow-500"></div>
          </div>
          <div class="mt-3 text-white text-sm">
            <span class="text-gray-400 font-semibold">status:</span>
            <span>80%</span>
          </div>
        </section>
      </section>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import { format } from "date-fns";
export default {
  setup() {
    let mainUser = ref("");
    let err = ref("");
    let time = ref("");
    const client = useSupabaseAuthClient();
    let user = client.auth
      .getUser()
      .then((res) => {
        mainUser.value = res.data.user.email;
        time.value = res.data.user.created_at;
        let isoTime = time.value;
        let date = format(new Date(isoTime), "dd/MM/yyyy");
        time.value = date;
        console.log(time.value);
        return { mainUser, time };
      })
      .catch((error) => {
        err.value = "Unauthenticated";
      });

    return {
      mainUser,
      time,
      user,
      err,
    };
  },
};
</script>

<style></style>
