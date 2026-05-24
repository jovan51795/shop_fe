<script setup lang="ts">
import { ref, defineProps } from 'vue'

const carousel = ref(null)
const { data } = defineProps(['data'])

const scroll = (direction) => {
  const el = carousel.value
  if (!el) return

  const amount = 300

  el.scrollBy({
    left: direction === 'left' ? -amount : amount,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div class="container mx-auto border-b-3 pb-5 pt-1 mt-5 border-[#1F2937] flex justify-center">
    <div class="w-[96%]">
      <div class="flex justify-between mt-5 mb-2 text-white">
        <h2 class="uppercase font-extrabold">Featured Products</h2>
        <div>
          <RouterLink to="#">View All</RouterLink>
        </div>
      </div>
      <div class="relative w-full rounded-lg">
        <!-- Left Button -->
        <button
          @click="scroll('left')"
          class="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full"
        >
          ‹
        </button>

        <!-- Right Button -->
        <button
          @click="scroll('right')"
          class="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full"
        >
          ›
        </button>

        <div ref="carousel" class="flex gap-4 overflow-x-auto scroll-smooth py-4 scrollbar-hide">
          <div
            class="w-60 flex-shrink-0 bg-[#1F2937] py-6 rounded-lg shadow-xs flex flex-col justify-between"
            v-for="(image, index) in data.images"
            :key="index"
          >
            <a href="#" class="m-auto">
              <img class="max-h-40 mb-6" :src="image.img" :alt="image.alt" />
            </a>
            <div class="flex items-center justify-center">
              <span class="font-extrabold text-heading uppercase text-white">{{ image.alt }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
