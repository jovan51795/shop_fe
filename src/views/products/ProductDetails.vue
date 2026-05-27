<script setup lang="ts">
import helmet from '@/assets/helmet.png'
import { ShoppingCartIcon, HeartIcon } from '@heroicons/vue/20/solid'
</script>

<template>
  <div class="container mx-auto pt-20">
    <div>
      <div class="bg-[#121212] grid grid-cols-2 justify-items-between align-items-center p-4">
        <div class="flex flex-row items-center">
          <div
            class="flex flex-col overflow-y-auto scrollbar-none scroll-smooth h-[520px] p-2 rounded-lg gap-2"
          >
            <div
              v-for="(c, index) in 10"
              :key="index"
              class="p-2 flex-shrink-0 h-[calc(20%-0.5rem)] p-2 bg-[#1F2937] rounded-lg shadow-xs flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
            >
              <img :src="helmet" alt="" class="w-25 p-1 object-contain" />
            </div>
          </div>
          <div class="p-5 w-full h-[520px] flex justify-center items-center">
            <img :src="helmet" alt="" class="max-w-120" />
          </div>
        </div>
        <div class="ml-4">
          <div class="flex flex-col justify-between gap-5 text-white">
            <div class="text-white">
              <small class="uppercase">best seller</small>
              <h1 class="text-4xl font-bold uppercase">AGV PISTA GR RR</h1>
              <span class="capitalize">Full face helmet</span>
            </div>
            <div>
              <div class="flex flex-row gap-4 text-white">
                <div>
                  <span>*</span>
                  <span>*</span>
                  <span>*</span>
                  <span>*</span>
                  <span>*</span>
                </div>
                <span><small>47 (128 reviews)</small></span>
                <span>AGV PISTA GR RR</span>
              </div>
            </div>
            <div>
              <div class="flex flex-row items-center gap-4">
                <h2 class="text-[#E11D48] text-xl">PHP 1,200.00</h2>
                <s class="text-gray-500">PHP 1,000</s>
                <small class="text-[10px] px-1 border-1 border-[#E11D48]">- 13%</small>
              </div>
              <p class="max-w-md">
                The AGP Pista GR RR is the ultimate racing helmet, born from MotoGP experience.
                Designed for maximum protection, aerodyunamics and performance.
              </p>
            </div>
            <div class="border-1 border-[#1F2937]"></div>
            <div>
              <div class="mb-2">
                <span class="uppercase">color: </span>
                <span class="text-gray-500">Carbon/Yellow</span>
              </div>
              <div class="flex flex-row gap-4 items-center">
                <div class="w-[30px] h-[28px] bg-[#FFFFFF] rounded-full"></div>
                <div class="w-[30px] h-[28px] bg-[#FFFFFF] rounded-full"></div>
                <div class="w-[30px] h-[28px] bg-[#FFFFFF] rounded-full"></div>
                <div class="w-[30px] h-[28px] bg-[#FFFFFF] rounded-full"></div>
                <div class="w-[30px] h-[28px] bg-[#FFFFFF] rounded-full"></div>
              </div>
            </div>
            <div>
              <span>SIZE :</span>
              <div class="flex flex-row gap-4 items-center mt-2">
                <div
                  class="text-[15px] bg-[#111827] border-1 border-[#E11D48] px-2 py-1 rounded-sm w-10 flex text-center"
                >
                  XS
                </div>
                <div
                  class="text-[15px] bg-[#111827] border-1 border-[#E11D48] px-2 py-1 rounded-sm w-10 text-center"
                >
                  S
                </div>
                <div
                  class="text-[15px] bg-[#111827] border-1 border-[#E11D48] px-2 py-1 rounded-sm w-10 text-center"
                >
                  MD
                </div>
                <div
                  class="text-[15px] bg-[#111827] border-1 border-[#E11D48] px-2 py-1 rounded-sm w-10 text-center"
                >
                  L
                </div>
                <div
                  class="text-[15px] bg-[#111827] border-1 border-[#E11D48] px-2 py-1 rounded-sm w-10 text-center"
                >
                  XL
                </div>
                <div
                  class="text-[15px] bg-[#111827] border-1 border-[#E11D48] px-2 py-1 rounded-sm w-10 text-center"
                >
                  2XL
                </div>
              </div>
            </div>
            <div>
              <span>QUANTITY:</span>
              <div class="flex flex-row items-center gap-4 w-full mt-2">
                <div
                  class="grid grid-cols-3 border-2 border-[#6B7280] w-3xs text-center rounded-md"
                >
                  <span class="cursor-pointer hover:bg-[#6B7280] p-2">-</span>
                  <span class="p-2">1</span>
                  <span class="cursor-pointer hover:bg-[#6B7280] p-2">+</span>
                </div>
                <div class="grid grid-cols-2 w-full gap-4">
                  <button
                    class="flex flex-row justify-center items-center max-w-sm btn-primary p-2 rounded-lg gap-2"
                  >
                    <ShoppingCartIcon class="max-w-[20px]" />
                    <span class="uppercase">Add to cart</span>
                  </button>
                  <button
                    class="gap-2 flex flex-row justify-center items-center max-w-sm p-2 rounded-lg bg-[#6B7280] md:bg-transparent border-2 border-[#6B7280] hover:bg-[#6B7280] hover:text-white"
                  >
                    <HeartIcon class="max-w-[20px]" />
                    <span class="uppercase">WiSH LIST</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Hides the default browser scrollbar for a cleaner look while keeping it scrollable */
/* .scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
} */
</style>
