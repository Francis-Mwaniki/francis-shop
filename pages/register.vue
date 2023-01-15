<template>
  <!-- component -->
  <div class="py-6">
    <h3
      class="flex justify-around mb-2 flex-row sm:mx-auto mx-2 items-center text-black py-3 bg-orange-400 rounded max-w-md"
      v-show="close"
    >
      <span> {{ success }}</span>
      <button class="bg-white rounded-full p-2 py-1" @click="disable">✕</button>
    </h3>
    <h3
      class="flex justify-around mb-2 flex-row sm:mx-auto mx-2 items-center text-black py-3 bg-red-600 rounded max-w-md"
      v-show="closeErr"
    >
      <span class="px-2 py-1"> {{ err }}</span>
      <button class="bg-white rounded-full p-2 py-1 m-1" @click="disableErr">✕</button>
    </h3>
    <div
      class="flex bg-orange-200 rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl"
    >
      <div
        class="hidden lg:block lg:w-1/2 bg-cover"
        style="
          background-image: url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80');
        "
      ></div>
      <form @submit.prevent="handleSubmit" class="w-full p-8 lg:w-1/2">
        <div class="mt-4 flex items-center justify-between">
          <span class="border-b w-1/5 lg:w-1/4"></span>
          <a href="#" class="text-xs text-center text-gray-500 uppercase"
            >or signup with email</a
          >
          <span class="border-b w-1/5 lg:w-1/4"></span>
        </div>
        <div class="mt-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
          <input
            class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            type="email"
            v-model="email"
          />
        </div>
        <div class="mt-4">
          <div class="flex justify-between">
            <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <a href="#" class="text-xs text-gray-500">Forget Password?</a>
          </div>
          <input
            class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            type="password"
            v-model="password"
          />
        </div>
        <div class="mt-8">
          <button
            class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
          >
            signUp
          </button>
        </div>
        <div class="mt-4 flex items-center justify-between">
          <span class="border-b w-1/5 md:w-1/4"></span>
          <nuxt-link to="/login" class="text-xs text-gray-500 uppercase"
            >or sign in</nuxt-link
          >
          <span class="border-b w-1/5 md:w-1/4"></span>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const user = useSupabaseUser();
const { auth } = useSupabaseClient();
const router = useRouter();
const email = ref("");
const password = ref("");
let close = ref(false);
let closeErr = ref(false);
let success = ref("");
let err = ref("");

const handleSubmit = async () => {
  const user = useSupabaseAuthClient();
  const { data, error } = await auth.signUp({
    email: email.value,
    password: password.value,
  });
  if (data.user) {
    console.log(data.user);
    close.value = true;
    success.value = "Please Check Your Email to Verify";
    setTimeout(() => {
      router.push("/login");
    }, 4000);
  } else {
    closeErr.value = true;
    err.value = error.message;
    console.log(error.message);
  }
};
const disable = () => {
  close.value = !close.value;
};
const disableErr = () => {
  closeErr.value = !closeErr.value;
};
</script>

<style></style>
