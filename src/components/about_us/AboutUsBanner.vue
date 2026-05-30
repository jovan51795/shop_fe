<script setup lang="ts">
import desktop_banner from '@/assets/about_us/about_us_desktop.png'
import tab_banner from '@/assets/about_us/about_us_tab.png'
import mobile_banner from '@/assets/about_us/about_us_mobile.png'
</script>

<template>
  <div class="md:mt-13 relative">
    <div class="absolute top-1/3 md:mx-10">
      <div class="text-white text-center lg:text-start">
        <div class="font-extrabold text-4xl md:text-6xl mb-4 md:mb-8">
          <h1>ABOUT</h1>
          <h1 class="text-[#EF4444]">MOTOSHOP</h1>
        </div>
        <p class="md:w-xl">
          Fueling your passion for two wheels. We provide premium products, expert advice, and
          unbeatable service for every riders.
        </p>
      </div>
    </div>
    <img :src="desktop_banner" alt="" class="hidden lg:block w-full h-auto" />
    <img :src="tab_banner" alt="" class="hidden md:block lg:hidden w-full h-auto" />
    <img :src="mobile_banner" alt="" class="md:hidden w-full h-auto" />
  </div>
</template>
