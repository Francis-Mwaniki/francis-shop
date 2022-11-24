import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'defu';
import '@vue/shared';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';

const _sfc_main = {
  name: "HelloWorld",
  data: function() {
    return {
      loaded: false,
      paidFor: false,
      selectedProduct: "",
      selectedPrice: "",
      cart: [],
      orders: [],
      products: [
        {
          id: 1,
          name: "Basic hit",
          href: "#",
          imageSrc: "https://imgs.search.brave.com/VPIllyPCWRuW40REg-8NzQTm9cYGhFFKdWfgrYyTgaQ/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/djJjYUc2cFdsMVBi/SGtON25HOGRRSGFI/YSZwaWQ9QXBp",
          imageAlt: "Front of men's Basic Tee in black.",
          price: 35,
          color: "Black"
        },
        {
          id: 2,
          name: "Basic duf",
          href: "#",
          imageSrc: "https://imgs.search.brave.com/PsQOo510tb8rys4xV98xt1jdtIB8VJMoacvvuwocKUs/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/Y2JrZ1o3c05DX2VD/MTM5V2FQdkpnSGFI/YSZwaWQ9QXBp",
          imageAlt: "Front of men's Basic Tee in black.",
          price: 35,
          color: "Black"
        },
        {
          id: 3,
          name: "Basic cut",
          href: "#",
          imageSrc: "https://imgs.search.brave.com/VOip8s7kyzSngGS2uwbvOllydNPWPilQCIMOwMCN4gw/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC56/OGxFQWFKbXpndHp0/MzF4eF93ZUFBSGFI/YSZwaWQ9QXBp",
          imageAlt: "Front of men's Basic Tee in black.",
          price: 5,
          color: "Black"
        },
        {
          id: 4,
          name: " Tee",
          href: "#",
          imageSrc: "https://imgs.search.brave.com/hovkMRGGsohAvM4UNiwY_fMhsofz2465kV0fAiYXUZ8/rs:fit:432:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5p/bE5tRGVMUjdLRC1C/aHVwV2h2alNnSGFJ/SCZwaWQ9QXBp",
          imageAlt: "Front of men's Basic Tee in black.",
          price: 45,
          color: "Black"
        },
        {
          id: 5,
          name: "Basic hit",
          href: "#",
          imageSrc: "https://imgs.search.brave.com/VPIllyPCWRuW40REg-8NzQTm9cYGhFFKdWfgrYyTgaQ/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/djJjYUc2cFdsMVBi/SGtON25HOGRRSGFI/YSZwaWQ9QXBp",
          imageAlt: "Front of men's Basic Tee in black.",
          price: 35,
          color: "Black"
        },
        {
          id: 6,
          name: "Basic duf",
          href: "#",
          imageSrc: "https://imgs.search.brave.com/PsQOo510tb8rys4xV98xt1jdtIB8VJMoacvvuwocKUs/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/Y2JrZ1o3c05DX2VD/MTM5V2FQdkpnSGFI/YSZwaWQ9QXBp",
          imageAlt: "Front of men's Basic Tee in black.",
          price: 35,
          color: "Black"
        },
        {
          id: 7,
          name: "Basic cut",
          href: "#",
          imageSrc: "https://imgs.search.brave.com/VOip8s7kyzSngGS2uwbvOllydNPWPilQCIMOwMCN4gw/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC56/OGxFQWFKbXpndHp0/MzF4eF93ZUFBSGFI/YSZwaWQ9QXBp",
          imageAlt: "Front of men's Basic Tee in black.",
          price: 5,
          color: "Black"
        },
        {
          id: 8,
          name: " Tee",
          href: "#",
          imageSrc: "https://imgs.search.brave.com/hovkMRGGsohAvM4UNiwY_fMhsofz2465kV0fAiYXUZ8/rs:fit:432:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5p/bE5tRGVMUjdLRC1C/aHVwV2h2alNnSGFJ/SCZwaWQ9QXBp",
          imageAlt: "Front of men's Basic Tee in black.",
          price: 45,
          color: "Black"
        }
      ]
    };
  },
  methods: {
    addToCart: function(id) {
      var newId = this.products.filter((i) => {
        return i.id === id;
      });
      this.selectedProduct = this.selectedProduct + newId[0].name;
      this.selectedPrice = this.selectedPrice + newId[0].price;
      this.cart.push(newId[0]);
      console.log(this.selectedProduct);
      console.log(this.selectedPrice);
    },
    paymentMethod: function() {
      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=AWjHak7Q7WHs4nR2XKwEUlybL_7Gte0ARuCwPNJ86iIVCqocEdBsNp1lHkgyPSKVq0yznDT3ji_ZJ6vP`;
      script.addEventListener("load", this.setLoaded);
      document.body.appendChild(script);
    },
    setLoaded: function() {
      this.loaded = true;
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.selectedProduct,
                amount: {
                  currency_code: "USD",
                  value: this.getTotal
                }
              }
            ]
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
        }
      }).render(this.$refs.paypal);
    },
    clear: function() {
      this.orders = "";
    }
  },
  computed: {
    getCount() {
      return this.cart.length;
    },
    getTotal() {
      return this.cart.reduce((a, b) => a + b.price, 0);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="absolute top-5 right-40 md:right-8 md:top-5 flex-row justify-center items-center flex"><span class="text-indigo-900 mx-1 text-lg md:text-white">Cart</span><span class="p-3 text-white h-7 w-7 rounded-full bg-teal-800 justify-center items-center mx-auto flex">${ssrInterpolate($options.getCount)}</span></div><div class="flex justify-start pt-3 items-center mx-auto bg-slate-800 flex-col gap-y-3 text-white min-h-screen"><div class="bg-white"><div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"><h2 class="font-bold tracking-tight text-gray-900 text-2xl"> Buy Nice <span class="text-indigo-600 text-2xl">Products today</span></h2><div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"><!--[-->`);
  ssrRenderList(_ctx.products, (product) => {
    _push(`<div><div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80"><img${ssrRenderAttr("src", product.imageSrc)}${ssrRenderAttr("alt", product.imageAlt)} class="h-full w-full object-cover object-center lg:h-full lg:w-full"></div><div class="mt-4 flex justify-between"><div><h3 class="text-sm text-gray-700"><a><span aria-hidden="true" class=""></span> ${ssrInterpolate(product.name)}</a></h3></div><p class="text-sm font-medium text-gray-900">${ssrInterpolate(product.price)}</p></div><button class="bg-slate-900 rounded my-1 flex justify-center items-center cursor-pointer px-9 py-2 ring-2 ring-indigo-600 text-white"> Add to cart </button></div>`);
  });
  _push(`<!--]--></div></div></div>`);
  if (!_ctx.paidFor) {
    _push(`<div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-2"><div class="flex justify-center items-center mx-auto text-white" style="${ssrRenderStyle(_ctx.cart ? null : { display: "none" })}"> Your Cart (${ssrInterpolate(_ctx.cart.length)}) </div><div class="flex justify-center items-center mx-auto text-white" style="${ssrRenderStyle(_ctx.cart == 0 ? null : { display: "none" })}"> Your Cart is empty add something........ </div><div class="flex justify-center items-center mx-auto text-white flex-row gap-x-2" style="${ssrRenderStyle(_ctx.cart ? null : { display: "none" })}"><h3>Total</h3><span>${ssrInterpolate($options.getTotal)}</span></div><div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"><!--[-->`);
    ssrRenderList(_ctx.cart, (item) => {
      _push(`<div><div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80"><img${ssrRenderAttr("src", item.imageSrc)}${ssrRenderAttr("alt", item.imageAlt)} class="h-32 w-32 object-cover object-center lg:h-60 lg:w-60 rounded"></div><div class="mt-4 flex justify-between"><div><h3 class="text-sm text-gray-200"><a><span aria-hidden="true" class=""></span> ${ssrInterpolate(item.name)}</a></h3></div><p class="text-sm font-medium text-gray-200">${ssrInterpolate(item.price)}</p></div></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.paidFor) {
    _push(`<div><h1 class="flex justify-center items-center mx-auto my-1 text-2xl md:text-3xl"> Novice, you bought some beautiful stuffs! </h1><table class="w-full"><thead><tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"><th class="px-4 py-3">Client</th><th class="px-4 py-3">Amount</th><th class="px-4 py-3">Status</th><th class="px-4 py-3">Date</th></tr></thead><!--[-->`);
    ssrRenderList(_ctx.orders, (order) => {
      _push(`<tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"><tr class="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400"><td class="px-4 py-3"><div class="flex items-center text-sm"><div class="relative hidden w-8 h-8 mr-3 rounded-full md:block"><img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy"><div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div></div><div><p class="font-semibold">${ssrInterpolate(order.payer.name.given_name + order.payer.name.given_name)}</p><p class="text-xs text-gray-600 dark:text-gray-400">10x Developer</p></div></div></td><td class="px-4 py-3 text-sm">${ssrInterpolate(order.purchase_units[0].amount.value)}</td><td class="px-4 py-3 text-xs"><span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">${ssrInterpolate(order.status)}</span></td><td class="px-4 py-3 text-sm">${ssrInterpolate(order.create_time)}</td></tr></tbody>`);
    });
    _push(`<!--]--></table><button class="bg-slate-900 flex justify-center items-center my-1 rounded px-9 py-2 ring-2 ring-indigo-600 text-white"> Clear all </button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<button class="bg-slate-900 rounded px-9 py-2 ring-2 ring-indigo-600 text-white"> Pay Here </button><div></div></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.2e1f7aef.mjs.map
