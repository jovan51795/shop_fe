<script setup lang="ts">
import {
  CalendarDateRangeIcon,
  ClockIcon,
  WrenchScrewdriverIcon,
  CheckBadgeIcon,
} from '@heroicons/vue/20/solid'
</script>
<template>
  <div
    class="container mx-auto grid grid-cols-2 md:grid-cols-3 justify-item-center align-item-center bg-[linear-gradient(105deg,_#121212_50%,_#1a1a1a_45%)] md:bg-[linear-gradient(105deg,_#121212_65%,_#1a1a1a_45%)]"
  >
    <!-- image -->
    <div class="hidden md:block" style="background-color: blue">
      <img src="../assets/footer/top-footer.png" alt="top-footer" class="md:w-full h-auto" />
    </div>
    <div class="flex flex-col justify-center item-center p-10 text-white">
      <h1 class="uppercase text-md font-extrabold">book your service</h1>
      <span class="capitalize pb-5 pt-3 text-sm">choose a date and time that works for you</span>
      <button
        class="uppercase bg-[#EF4444] hover:bg-[#DC2626] p-3 w-35 rounded-md flex justify-between item-center font-extrabold"
      >
        <span>book now</span>
        <CalendarDateRangeIcon class="text-white max-h-[20px]" />
      </button>
    </div>
    <div class="flex flex-col justify-center item-center p-10 text-white capitalize text-sm">
      <div class="flex justify-start item-center">
        <ClockIcon class="max-h-[25px] text-[#EF4444] mr-5" />
        <span>fast and reliable service</span>
      </div>
      <div class="flex justify-start item-center py-5">
        <WrenchScrewdriverIcon class="max-h-[25px] text-[#EF4444] mr-5" />
        <span>quality parts and tools</span>
      </div>
      <div class="flex justify-start item-center">
        <CheckBadgeIcon class="max-h-[25px] text-[#EF4444] mr-5" />
        <span>satisfaction guaranteed</span>
      </div>
    </div>
  </div>
</template>
