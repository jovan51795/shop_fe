<script setup lang="ts">
import helmet from '@/assets/helmet.png'
import brakes from '@/assets/brakes.png'

import {
  ShoppingCartIcon,
  HeartIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/vue/20/solid'
import { computed, ref } from 'vue'

const images = [helmet, brakes, helmet]

const carousel = ref(null)
const image = ref(helmet)
const canScrollUp = ref(false)
const canScrollDown = ref(false)
const ellipsis = ref(null)
const ellipsisIndex = ref(0)
const scroll = (direction) => {
  console.log(direction)
  const el = carousel.value
  if (!el) return

  const amount = 300

  el.scrollBy({
    top: direction === 'up' ? -amount : amount,
    behavior: 'smooth',
  })
}

const updateScrollState = () => {
  const el = carousel.value
  console.log
  if (!el) return

  canScrollUp.value = el.scrollTop > 0

  canScrollDown.value = el.scrollTop + el.clientHeight < el.scrollHeight
}

const showHoveredImage = (event, index) => {
  handleEllipsis(index + 1)
  const img = event.currentTarget.querySelector('img')

  image.value = img.src
}
const numberOfEllipsis = computed(() => {
  // return images.length > 5 ? 4 : 3

  switch (true) {
    case images.length === 1:
      return 1

    case images.length === 2:
      return 2

    case images.length <= 5:
      return 3

    case images.length > 5:
      return 4

    default:
      return 0
  }
})

const handleEllipsis = (index) => {
  const el = ellipsis.value
  if (!el) return
  const numberOfElements = images.length
  const percentage = (index / numberOfElements) * 100
  const result = (percentage / 100) * numberOfEllipsis.value
  ellipsisIndex.value = Math.round(result) - 1
}
</script>

<template>
  <div class="container mx-auto pt-20">
    <div>
      <div
        class="bg-[#121212] grid gap-4 lg:grid-cols-2 grid-cols-1 justify-items-between align-items-center p-4"
      >
        <div class="relative flex flex-row items-center">
          <div
            ref="carousel"
            @scroll="updateScrollState"
            class="flex flex-col items-center overflow-y-auto scrollbar-none scroll-smooth lg:h-[520px] h-[400px] p-2 rounded-lg gap-2"
          >
            <button
              v-if="canScrollUp"
              @click="scroll('up')"
              class="absolute -translate-y-1/2 bg-black/60 text-white px-2"
            >
              <ChevronUpIcon class="w-[40px]" />
            </button>
            <button
              v-if="canScrollDown"
              @click="scroll('down')"
              class="absolute -bottom-8 -translate-y-1/2 bg-black/60 text-white px-2"
            >
              <ChevronDownIcon class="w-[40px]" />
            </button>
            <div
              @click="showHoveredImage($event, index)"
              @mouseover="showHoveredImage($event, index)"
              v-for="(c, index) in images"
              :key="index"
              class="p-2 flex-shrink-0 h-[calc(20%-0.3rem)] p-2 bg-[#1F2937] rounded-lg shadow-xs flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
            >
              <img :src="c" alt="" class="w-25 p-1 object-contain" />
            </div>
          </div>
          <div
            class="relative p-5 w-full lg:h-[520px] h-[400px] flex flex-col justify-center items-center"
          >
            <img :src="image" alt="" class="max-h-90 lg:max-h-fit" />
            <div class="absolute bottom-0 flex gap-2" ref="ellipsis">
              <div
                :class="[
                  'w-[10px] h-[9px] rounded-full',
                  ellipsisIndex === index ? 'bg-white' : 'bg-gray-500',
                ]"
                v-for="(el, index) in numberOfEllipsis"
                :key="index"
              ></div>
            </div>
          </div>
        </div>
        <div class="ml-4">
          <div class="flex flex-col justify-between gap-5 text-white">
            <div class="text-white">
              <small class="uppercase">best seller</small>
              <h1 class="lg:text-4xl text-2xl font-bold uppercase">AGV PISTA GR RR</h1>
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
              <div class="flex md:flex-row flex-col items-center gap-4 w-full mt-2">
                <div
                  class="grid grid-cols-3 border-2 border-[#6B7280] text-center rounded-md w-full"
                >
                  <span class="cursor-pointer hover:bg-[#6B7280] p-2">-</span>
                  <span class="p-2">1</span>
                  <span class="cursor-pointer hover:bg-[#6B7280] p-2">+</span>
                </div>
                <button
                  class="flex flex-row justify-center items-center btn-primary p-2 rounded-lg gap-2"
                >
                  <ShoppingCartIcon class="max-w-[20px]" />
                  <span class="uppercase">Add to cart</span>
                </button>

                <button
                  class="gap-2 w-full flex flex-row justify-center items-center p-2 rounded-lg bg-[#6B7280] md:bg-transparent border-2 border-[#6B7280] hover:bg-[#6B7280] hover:text-white"
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
