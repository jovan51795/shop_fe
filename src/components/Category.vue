<script setup lang="ts">
import { RouterLink } from 'vue-router'

const { data } = defineProps(['data'])
</script>

<template>
  <div class="container mx-auto border-b-3 pb-5 pt-1 mt-5 border-[#1F2937]">
    <div class="flex justify-between mx-8 mt-5 mb-2 text-white">
      <h2 class="uppercase font-extrabold">{{ data.title }}</h2>
      <div class="text-[#EF4444]">
        <RouterLink to="/home">View All</RouterLink>
      </div>
    </div>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 justify-items-center justify-center px-8"
    >
      <div
        class="w-full max-w-44 bg-gradient-to-b from-[#1A1A1B] via-[#222224] to-[#272424] p-6 rounded-lg shadow-xs m-1 flex justify-between flex-col"
        v-for="(image, index) in data.images"
        :key="index"
      >
        <a href="#" class="m-auto">
          <img class="mb-6 max-h-40" :src="image.img" :alt="image.alt" />
        </a>
        <div class="flex items-center justify-center">
          <span class="font-extrabold text-heading uppercase text-white">{{ image.alt }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
