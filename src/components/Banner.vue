<script setup lang="ts">
import mobile from '@/assets/banner/400x500.png'
import desktop from '@/assets/banner/banner.png'
import { ShoppingCartIcon, WrenchIcon } from '@heroicons/vue/20/solid'
</script>

<template>
  <div class="container mx-auto w-full mt-10 md:mt-10 relative">
    <div class="absolute md:top-20 -top-3">
      <div class="m-10">
        <div class="uppercase font-bold md:text-4xl text-2xl leading-[1.2]">
          <h1 class="text-white italic">PARTS. GEARS.</h1>
          <h1 class="text-white italic">SERVICE.</h1>
          <h3 class="text-[#EF4444] md:mb-3">RIDE BETTER</h3>
        </div>
        <div class="text-white md:text-xl text-md flex flex-col">
          <span class="md:mb-3">Your one stop-shop for motorcycle parts,</span>
          <span class="mb-5"> accessories, and expert services.</span>
        </div>
        <div
          class="md:text-lg text-md font-bolder text-white flex md:flex-row flex-col item-center"
        >
          <button
            class="rounded-md flex justify-between font-extrabold items-center md:w-45 w-full mb-2 md:mb-0 uppercase bg-[#EF4444] hover:bg-[#DC2626] px-5 py-2 max-h-12 mr-5"
          >
            <span>shop now</span>
            <ShoppingCartIcon class="text-white max-h-[20px]" />
          </button>
          <button
            class="rounded-md flex justify-between font-extrabold items-center md:w-55 w-full uppercase px-5 py-2 max-h-12 bg-[#6B7280] md:bg-transparent border-2 border-[#6B7280] hover:bg-[#6B7280] hover:text-white"
          >
            <span>book service</span>
            <WrenchIcon class="text-white max-h-[20px]" />
          </button>
        </div>
      </div>
    </div>
    <!-- MOBILE -->
    <img :src="mobile" class="w-full h-auto block lg:hidden" alt="mobile banner" />

    <!-- DESKTOP -->
    <img :src="desktop" class="w-full h-auto hidden lg:block 2xl:h-[650px]" alt="desktop banner" />
  </div>
</template>
