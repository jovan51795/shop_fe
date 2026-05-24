<script setup lang="ts">
import {
  CalendarDateRangeIcon,
  ClockIcon,
  WrenchScrewdriverIcon,
  CheckBadgeIcon,
} from '@heroicons/vue/20/solid'
</script>
<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-2 md:grid-cols-3 justify-item-center align-item-center">
      <!-- image -->
      <div class="hidden md:block" style="background-color: blue">
        <img src="../assets/footer/top-footer.png" alt="top-footer" class="md:w-full" />
      </div>
      <div class="flex flex-col justify-center align-center p-10 text-white">
        <h1 class="uppercase text-3xl font-extrabold">book your service</h1>
        <span class="capitalize pb-5 pt-3">choose a date and time that works for you</span>
        <button
          class="uppercase bg-[#EF4444] py-3 px-5 w-40 rounded-md flex justify-between align-center font-extrabold"
        >
          <span>book now</span>
          <CalendarDateRangeIcon class="text-white max-h-[20px]" />
        </button>
      </div>
      <div class="flex flex-col justify-center align-center p-10 text-white capitalize text-xl">
        <div class="flex justify-start align-center">
          <ClockIcon class="max-h-[25px] text-[#EF4444] mr-5" />
          <span>fast and reliable service</span>
        </div>
        <div class="flex justify-start align-center py-5">
          <WrenchScrewdriverIcon class="max-h-[25px] text-[#EF4444] mr-5" />
          <span>quality parts and tools</span>
        </div>
        <div class="flex justify-start align-center">
          <CheckBadgeIcon class="max-h-[25px] text-[#EF4444] mr-5" />
          <span>satisfaction guaranteed</span>
        </div>
      </div>
    </div>
  </div>
</template>
