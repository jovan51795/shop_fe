<script setup lang="ts">
import desktopBanner from '@/assets/services/desktop.jpg'
import tabBanner from '@/assets/services/tab.png'
import mobileBanner from '@/assets/services/mobile.png'
</script>

<template>
  <div
    class="container m-auto w-full mt-10 md:mt-10 mt-15 relative border-2 border-gray-900 overflow-hidden"
  >
    <div class="absolute uppercase flex flex-col justify-center gap-2 md:gap-4 p-10 h-full">
      <h3 class="text-white">what we do</h3>
      <h1 class="font-extrabold text-2xl md:text-7xl text-[#EF4444] hover:text-[#DC2626]">
        <span class="py-2 border-b-2 border-[#EF4444]">our services</span>
      </h1>
      <p class="md:max-w-sm text-white mt-2">
        from routine maintenance to performance upgrades we keep your ride in peak condition
      </p>
    </div>
    <img :src="mobileBanner" alt="" class="md:hidden" />
    <img :src="tabBanner" alt="" class="hidden md:block lg:hidden" />
    <img :src="desktopBanner" alt="" class="hidden lg:block w-full" />
  </div>
</template>
