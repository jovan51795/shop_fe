<script setup lang="ts">
import { RouterLink } from 'vue-router'

const { data } = defineProps(['data'])

console.log('this is the images', data)
</script>

<template>
  <div class="container mx-auto border-b-3 border-[#1F2937]">
    <div class="flex justify-between mx-5 mt-5 mb-2 text-white">
      <h2 class="uppercase font-extrabold">{{ data.title }}</h2>
      <div>
        <RouterLink>View All</RouterLink>
      </div>
    </div>
    <div class="flex flex-col flex-row flex-wrap justify-center align-center sm:justify-center">
      <div
        class="bg-[#1F2937] p-6 shadow-xs rounded-lg mx-1 mb-1 flex justify-between flex flex-col"
        v-for="(image, index) in data.images"
        :key="index"
      >
        <a href="#">
          <img
            :src="image.img"
            :alt="image.alt"
            class="object-contain max-h-[300px] w-[300px] sm:w-[200px] md:w-[250px] lg:w-[250px] sm:max-h-[200px] md:max-h-[300px]"
          />
        </a>
        <div>
          <h2 class="text-center text-white uppercase font-bold">{{ image.alt }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>
