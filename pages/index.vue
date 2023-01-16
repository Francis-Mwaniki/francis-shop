<template>
  <main class="">
    <div
      class="absolute top-5 gap-x-2 right-3 md:right-8 md:top-5 flex-row justify-center items-center flex"
    >
      <label for="my-modal-3" class="btn btn-accent btn-outline">
        <span class="text-indigo-900 mx-1 cursor-pointer text-lg md:text-black">
          <Icon name="ic:outline-shopping-cart" class="text-black"
        /></span>
        <span
          class="p-3 text-white h-7 w-7 rounded justify-center items-center mx-auto flex"
          >{{ getCount }}</span
        >
      </label>
    </div>
    <input type="checkbox" id="my-modal" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">{{ selectedName }}</h3>
        <p class="py-4">
          {{ selectedImgAlt }}
        </p>
        <div class="modal-action">
          <label
            for="my-modal"
            class="btn btn-sm btn-circle absolute rounded right-2 top-2 pb-1"
            >✕</label
          >
        </div>
      </div>
    </div>

    <input type="checkbox" id="my-modal-4" class="modal-toggle" />
    <label for="my-modal-4" class="modal cursor-pointer">
      <label class="modal-box relative" for="">
        <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
        <p class="py-4"></p>
      </label>
    </label>

    <div
      class="flex justify-start sm:pb-3 items-center mx-auto bg-slate-900 flex-col gap-y-2 text-white"
    >
      <div class="bg-slate-900">
        <div class="mx-auto max-w-2xl pt-7 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="font-bold tracking-tight text-gray-100 text-2xl md:text-4xl py-2">
            Buy Nice
            <span class="text-indigo-300 text-2xl md:text-4xl">Products today</span>
          </h2>

          <h3
            class="flex justify-around flex-row mx-auto items-center text-black py-3 bg-orange-400 rounded max-w-md"
            v-show="close"
          >
            <span> {{ success }}</span>
            <button class="bg-white rounded p-2 py-1" @click="disable">✕</button>
          </h3>
          <div
            class="mt-6 grid grid-cols-2 gap-y-2 gap-x-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-2"
          >
            <div
              v-for="product in products"
              :key="product.id"
              class="ring-1 ring-orange-300 p-1 rounded"
            >
              <div
                class="min-h-80 p-1 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80"
              >
                <nuxt-img
                  :src="product.imageSrc"
                  :alt="product.imageAlt"
                  class="h-64 w-64 object-cover object-center lg:h-64 lg:w-64"
                />
              </div>
              <div class="mt-1 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-100">
                    <a>
                      <span aria-hidden="true" class="" />
                      {{ product.name }}
                    </a>
                  </h3>
                </div>
                <p class="text-sm font-medium text-gray-300">USD.{{ product.price }}</p>
              </div>
              <div
                class="flex justify-center md:justify-around items-center mx-auto gap-x-1 flex-row my-2"
              >
                <label
                  for="my-modal"
                  class="px-4 rounded py-2 bg-orange-400 text-black cursor-pointer"
                  @click="details(product.id)"
                >
                  <Icon name="ic:outline-details" class="text-black" /><span
                    class="text-black"
                    >info</span
                  >
                </label>
                <a
                  for="my-modal-4"
                  class="px-4 rounded py-2 bg-orange-400 text-black cursor-pointer"
                  @click="addToCart(product.id)"
                >
                  <Icon name="ic:outline-add-shopping-cart" class="text-black" />
                  <span class="text-black">Add</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Starts here -->

      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2"
            >✕</label
          >
          <div
            v-if="!paidFor"
            class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-2"
          >
            <h3
              class="flex justify-around m-1 flex-row sm:mx-auto mx-2 items-center text-white py-1 bg-red-600 rounded max-w-md"
              v-show="err"
            >
              <span class="px-2 py-1"> {{ err }}</span>
            </h3>
            <div
              class="flex justify-center items-center flex-row mx-auto text-white gap-x-2"
              v-show="cart"
            >
              <span class="text-sm md:text-lg">
                <span v-show="cart.length !== 0"> Your Cart has ({{ cart.length }})</span>
                <span class="pr-7 pl-1" v-show="cart.length !== 0"> item/s</span></span
              >
              <Icon
                name="material-symbols:shopping-cart-sharp"
                class="h-14 w-14 text-orange-600 p-1"
              />
            </div>
            <div
              class="flex flex-col justify-center items-center mx-auto text-white max-w-md"
              v-show="cart == 0"
            >
              Your Cart is empty add
              <span class="flex justify-center items-center mx-auto text-white"
                >something........</span
              >
            </div>
            <div
              class="flex justify-center items-center mx-auto text-white flex-row gap-x-2"
              v-show="cart"
            >
              <h3>Total</h3>
              <span>{{ getTotal }}</span>
            </div>

            <div
              class="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
            >
              <div
                v-for="item in cart"
                :key="item.id"
                class="ring-1 p-1 md:p-0 md:gap-y-3 md:py-2 rounded ring-orange-300 flex justify-center items-center flex-col gap-y-2"
              >
                <div
                  class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-20"
                >
                  <nuxt-img
                    :src="item.imageSrc"
                    :alt="item.imageAlt"
                    class="h-20 w-20 object-cover object-center rounded"
                  />
                </div>
                <div class="flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-200">
                      <a>
                        <span aria-hidden="true" class="" />
                        {{ item.name.slice(0, 5) }}..
                      </a>
                    </h3>
                  </div>
                  <p class="text-sm font-medium text-gray-200">USD.{{ item.price }}</p>
                </div>
                <div class="flex justify-center items-center mx-auto">
                  <button
                    @click="remove(item.id)"
                    class="px-4 md:px-3 py-1 rounded bg-orange-400 text-black"
                  >
                    remove
                  </button>
                </div>
              </div>
            </div>

            <div class="">
              <div
                class="flex justify-center items-center mx-auto flex-col gap-y-3 mt-3"
                v-if="mainUser"
              >
                <button
                  @click="paymentMethod"
                  class="mb-6 btn btn-accent"
                  v-show="cart.length !== 0"
                >
                  Pay Here
                </button>

                <div ref="paypal"></div>
              </div>
              <Nuxt-Link
                v-show="!mainUser"
                to="/login"
                class="flex justify-center items-center mx-auto gap-y-3 mt-3"
                v-else
              >
                <button class="mb-6 btn btn-accent">Login to proceed</button>
              </Nuxt-Link>
            </div>
          </div>
        </div>
      </div>
      <!-- Ends Here -->

      <div v-if="paidFor">
        <h1 class="flex justify-center items-center mx-auto my-1 text-2xl md:text-3xl">
          Novice, you bought some beautiful stuffs!
        </h1>

        <table class="w-full">
          <thead>
            <tr
              class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
            >
              <th class="px-4 py-3">Client</th>
              <th class="px-4 py-3">Amount</th>
              <th class="px-4 py-3">Status</th>
              <th class="px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody
            class="bg-pink-600 divide-y dark:divide-gray-700 dark:bg-gray-800"
            v-for="order in orders"
            :key="order"
          >
            <tr
              class="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400"
            >
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                      alt=""
                      loading="lazy"
                    />
                    <div
                      class="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div>
                    <p class="font-semibold">
                      {{ order.payer.name.given_name + order.payer.name.given_name }}
                    </p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">10x Developer</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm">
                {{ order.purchase_units[0].amount.value }}
              </td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded dark:bg-green-700 dark:text-green-100"
                >
                  {{ order.status }}
                </span>
              </td>
              <td class="px-4 py-3 text-sm">{{ order.create_time }}</td>
            </tr>
          </tbody>
        </table>
        <button
          @click="clear"
          class="bg-slate-900 flex justify-center items-center my-1 rounded px-9 py-2 ring-2 ring-indigo-600 text-white"
        >
          Clear all
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HelloWorld",
  components: {},

  data: function () {
    return {
      loaded: false,
      paidFor: false,
      selectedProduct: "",
      success: "Product was added to cart",
      selectedPrice: "",
      selectedImgAlt: "",
      close: false,
      selectedName: "",
      cart: [],
      orders: [],
      products: [
        {
          id: 1,
          name: "Basic hit",
          href: "#",
          imageSrc:
            "https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/f2fa53f1-6710-4c99-8250-27c2d4046769",
          imageAlt: "Front of men's Basic Tee in black.",
          price: 35,
          color: "Black",
        },
        {
          id: 2,
          name: "Basic duf",
          href: "#",
          imageSrc:
            "https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/4e3fecf8-e880-46fe-83b8-7c9f5c43e78e",
          imageAlt: "Front of men's Basic Tee in black.",
          price: 35,
          color: "Black",
        },
        {
          id: 3,
          name: "Basic cut",
          href: "#",
          imageSrc:
            "https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/500d08ca-1543-46f6-9b41-a88ecf3ff56a",
          imageAlt: "Front of men's Basic Tee in black.",
          price: 5,
          color: "Black",
        },
        {
          id: 4,
          name: " Tee",
          href: "#",
          imageSrc:
            "https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/c93dd9a6-30ec-4a1f-a8e4-bea068bd3f4d",
          imageAlt: "Front of men's Basic Tee in black.",
          price: 45,
          color: "Black",
        },
        {
          id: 5,
          name: "Basic hit",
          href: "#",
          imageSrc:
            "https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/a05269cb-23d2-4286-aff3-c4583f3ea834",
          imageAlt: "Front of men's Basic Tee in black.",
          price: 35,
          color: "Black",
        },
        {
          id: 6,
          name: "Basic duf",
          href: "#",
          imageSrc:
            "https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/7a40d598-fb81-40d5-8f03-f98741384219",
          imageAlt: "Front of men's Basic Tee in black.",
          price: 35,
          color: "Black",
        },
        {
          id: 7,
          name: "Basic cut",
          href: "#",
          imageSrc:
            "https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/576d60ad-2465-49ad-b31f-bc00b41a93af",
          imageAlt: "Front of men's Basic Tee in black.",
          price: 5,
          color: "Black",
        },
        {
          id: 8,
          name: " Tee",
          href: "#",
          imageSrc:
            "https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/4714e409-0647-436b-862e-8e4780ea4772",
          imageAlt: "Front of men's Basic Tee in black.",
          price: 45,
          color: "Black",
        },
      ],
    };
  },
  methods: {
    addToCart: function (id) {
      var newId = this.products.filter((i) => {
        /*  this.selectedProduct = this.selectedProduct + newId.name;
          this.selectedPrice = this.selectedPrice + newId.price;
          console.log(this.selectedPrice);
          console.log(this.selectedProduct); */
        return i.id === id;
      });
      this.selectedProduct = this.selectedProduct + newId[0].name;
      this.selectedPrice = this.selectedPrice + newId[0].price;
      this.cart.push(newId[0]);
      this.close = true;
      console.log(this.selectedProduct);
      console.log(this.selectedPrice);
    },
    remove: function (id) {
      let index = this.cart.findIndex((item) => item.id === id);
      this.cart.splice(index, 1);
    },
    disable: function () {
      this.close = !this.close;
    },
    details: function (id) {
      var newId = this.products.filter((i) => {
        /*  this.selectedProduct = this.selectedProduct + newId.name;
          this.selectedPrice = this.selectedPrice + newId.price;
          console.log(this.selectedPrice);
          console.log(this.selectedProduct); */
        return i.id === id;
      });
      this.selectedName = this.selectedName + newId[0].name;
      this.selectedImgAlt = this.selectedImgAlt + newId[0].imageAlt;
    },
    paymentMethod: function () {
      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=AUUC25h3H97O3ZtajYj03O5bCI-6jMarsEn7WbSECupHM3rVNnNqg1f5f7xfett2mBV_achYoYcubreU`;
      script.addEventListener("load", this.setLoaded);
      document.body.appendChild(script);
    },
    setLoaded: function () {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.selectedProduct,
                  amount: {
                    currency_code: "USD",
                    value: this.getTotal,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.paidFor = true;
            this.orders.push(order);
            console.log(this.orders);
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(this.$refs.paypal);
    },
    clear: function () {
      this.orders = "";
    },
  },
  computed: {
    getCount() {
      return this.cart.length;
    },
    getTotal() {
      return this.cart.reduce((a, b) => a + b.price, 0);
    },
  },
  setup() {
    let mainUser = ref("");
    let err = ref("");
    const client = useSupabaseAuthClient();
    let user = client.auth
      .getUser()
      .then((res) => {
        mainUser.value = res.data.user.email;
        return mainUser;
      })
      .catch((error) => {
        err.value = "Unauthenticated";
      });
    console.log(mainUser.value);

    return {
      mainUser,
      user,
      err,
    };
  },
};
</script>
